require('dotenv').config();
const { spawn } = require('child_process');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
let ALLOWED_CHAT_ID = process.env.ALLOWED_CHAT_ID || '';
const NEXUS_DIR = process.env.NEXUS_DIR || '';
const DEFAULT_WORK_DIR = NEXUS_DIR || process.env.DEFAULT_WORK_DIR || process.env.HOME || '/workspace';
// On Railway: /usr/local/bin/claude (npm global). On Mac: ~/.local/bin/claude
const CLAUDE_BIN = process.env.CLAUDE_BIN || '/usr/local/bin/claude';
const SEED_DIR = path.join(__dirname, 'nexus-seed');
const AUTO_DELIVER = process.env.AUTO_DELIVER === 'true';
const ENV_PATH = path.join(__dirname, '.env');
const TG = `https://api.telegram.org/bot${TOKEN}`;

function seedNexus() {
  if (!NEXUS_DIR || !fs.existsSync(SEED_DIR)) return;
  try { fs.mkdirSync(NEXUS_DIR, { recursive: true }); } catch {}
  for (const f of fs.readdirSync(SEED_DIR)) {
    const dest = path.join(NEXUS_DIR, f);
    if (!fs.existsSync(dest)) {
      fs.copyFileSync(path.join(SEED_DIR, f), dest);
      console.log(`[seed] ${f} → ${dest}`);
    }
  }
}

function snapshotDir(dir) {
  const out = new Map();
  function walk(p) {
    let entries;
    try { entries = fs.readdirSync(p, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (e.name.startsWith('.') || e.name === 'node_modules') continue;
      const full = path.join(p, e.name);
      if (e.isDirectory()) walk(full);
      else { try { out.set(full, fs.statSync(full).mtimeMs); } catch {} }
    }
  }
  walk(dir);
  return out;
}

function findChangedRoot(workDir, before, after) {
  const changed = [];
  for (const [f, mt] of after) {
    if (!before.has(f) || before.get(f) !== mt) changed.push(f);
  }
  if (!changed.length) return null;
  // Find the shallowest unique top-level child of workDir that contains changes
  const tops = new Set();
  for (const f of changed) {
    const rel = path.relative(workDir, f);
    const top = rel.split(path.sep)[0];
    if (top && !top.startsWith('..')) tops.add(top);
  }
  if (tops.size === 1) return path.join(workDir, [...tops][0]);
  if (tops.size > 1) return workDir;
  return null;
}

function saveAllowedChatId(chatId) {
  ALLOWED_CHAT_ID = String(chatId);
  let env = fs.readFileSync(ENV_PATH, 'utf8');
  env = env.replace(/^ALLOWED_CHAT_ID=.*$/m, `ALLOWED_CHAT_ID=${chatId}`);
  fs.writeFileSync(ENV_PATH, env);
}

// Per-chat session state — persisted to disk so it survives restarts
const SESSIONS_FILE = path.join(__dirname, '.sessions.json');
const sessions = new Map();

function loadSessions() {
  try {
    const raw = fs.readFileSync(SESSIONS_FILE, 'utf8');
    const obj = JSON.parse(raw);
    for (const [k, v] of Object.entries(obj)) {
      sessions.set(k, { ...v, running: false, proc: null });
    }
    console.log(`[sessions] loaded ${sessions.size} from disk`);
  } catch {}
}

let saveTimer = null;
function saveSessions() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    const obj = {};
    for (const [k, v] of sessions) {
      obj[k] = { sessionId: v.sessionId, workDir: v.workDir, lastActivity: v.lastActivity };
    }
    try { fs.writeFileSync(SESSIONS_FILE, JSON.stringify(obj, null, 2)); } catch (e) { console.error('[sessions] save failed:', e.message); }
  }, 500);
}

function getSession(chatId) {
  const key = String(chatId);
  if (!sessions.has(key)) {
    sessions.set(key, {
      sessionId: null,
      workDir: DEFAULT_WORK_DIR,
      running: false,
      proc: null,
      lastActivity: Date.now(),
    });
  }
  return sessions.get(key);
}

function formatElapsed(ms) {
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}m ${r}s`;
}

// ── Telegram helpers ──────────────────────────────────────────────────────────

function chunkMessage(text, maxLen = 4000) {
  if (text.length <= maxLen) return [text];
  const chunks = [];
  let remaining = text;
  while (remaining.length > maxLen) {
    let cutAt = remaining.lastIndexOf('\n', maxLen);
    if (cutAt < maxLen * 0.5) cutAt = maxLen;
    chunks.push(remaining.slice(0, cutAt));
    remaining = remaining.slice(cutAt).trimStart();
  }
  if (remaining) chunks.push(remaining);
  return chunks;
}

async function tgFetch(method, body) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(`${TG}/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.ok) return data.result;
      // Rate limited — back off
      if (data.error_code === 429) {
        const wait = (data.parameters?.retry_after || 5) * 1000;
        await new Promise(r => setTimeout(r, wait));
        continue;
      }
      return null;
    } catch (e) {
      if (attempt === 2) console.error(`[tg] ${method} failed:`, e.message);
    }
  }
  return null;
}

async function sendMessage(chatId, text, replyToMsgId = null) {
  const chunks = chunkMessage(text);
  let lastResult = null;
  for (let i = 0; i < chunks.length; i++) {
    const body = {
      chat_id: chatId,
      text: chunks.length > 1 ? `[${i + 1}/${chunks.length}]\n${chunks[i]}` : chunks[i],
      parse_mode: 'Markdown',
    };
    if (replyToMsgId && i === 0) body.reply_to_message_id = replyToMsgId;
    // Try Markdown, fall back to plain text if it fails
    lastResult = await tgFetch('sendMessage', body);
    if (!lastResult) {
      delete body.parse_mode;
      lastResult = await tgFetch('sendMessage', body);
    }
  }
  return lastResult;
}

async function editMessage(chatId, msgId, text) {
  return tgFetch('editMessageText', { chat_id: chatId, message_id: msgId, text });
}

async function deleteMessage(chatId, msgId) {
  return tgFetch('deleteMessage', { chat_id: chatId, message_id: msgId });
}

// ── Claude runner ─────────────────────────────────────────────────────────────

function spawnClaude(prompt, workDir, sessionId) {
  const args = [
    '--dangerously-skip-permissions',
    '-p', prompt,
    '--output-format', 'stream-json',
    '--verbose',
  ];
  if (sessionId) args.push('--resume', sessionId);

  return spawn(CLAUDE_BIN, args, {
    cwd: workDir,
    env: { ...process.env, HOME: process.env.HOME || '/Users/philipsznewajs' },
  });
}

async function runTask(chatId, prompt, replyMsgId) {
  const session = getSession(chatId);
  session.running = true;
  session.lastActivity = Date.now();

  const statusMsg = await sendMessage(chatId, 'Working on it…', replyMsgId);
  const statusMsgId = statusMsg?.message_id;

  const before = AUTO_DELIVER ? snapshotDir(session.workDir) : null;

  let proc;
  try {
    proc = spawnClaude(prompt, session.workDir, session.sessionId);
  } catch (e) {
    session.running = false;
    await sendMessage(chatId, `Failed to start Claude: ${e.message}\nExpected binary at: ${CLAUDE_BIN}`);
    return;
  }

  session.proc = proc;

  const rl = readline.createInterface({ input: proc.stdout });
  let finalText = '';
  let newSessionId = null;
  const toolCounts = {};
  let lastTool = '';
  let toolCallCount = 0;
  let stderrBuf = '';
  const startTime = Date.now();

  proc.stderr.on('data', d => { stderrBuf += d.toString(); });

  rl.on('line', line => {
    let event;
    try { event = JSON.parse(line); } catch { return; }

    if (event.type === 'system' && event.session_id) {
      newSessionId = event.session_id;
    }

    if (event.type === 'assistant') {
      const blocks = event.message?.content || [];
      for (const block of blocks) {
        if (block.type === 'tool_use') {
          toolCounts[block.name] = (toolCounts[block.name] || 0) + 1;
          lastTool = block.name;
          toolCallCount++;
        }
      }
    }

    if (event.type === 'result') {
      finalText = event.result || '';
    }
  });

  // Periodic status updates every 45s with elapsed time, tool count, and last action
  const statusInterval = setInterval(() => {
    if (!statusMsgId) return;
    const elapsed = formatElapsed(Date.now() - startTime);
    const toolSummary = Object.entries(toolCounts)
      .map(([name, n]) => `${name}×${n}`)
      .join(', ') || 'thinking';
    const lines = [
      `⏱ Running for ${elapsed}`,
      `🔧 ${toolCallCount} tool calls — ${toolSummary}`,
      lastTool ? `▸ Latest: ${lastTool}` : '',
    ].filter(Boolean);
    editMessage(chatId, statusMsgId, lines.join('\n'));
  }, 45000);

  const exitCode = await new Promise(resolve => proc.on('close', resolve));
  clearInterval(statusInterval);

  session.running = false;
  session.proc = null;
  if (newSessionId) {
    session.sessionId = newSessionId;
    saveSessions();
  }

  if (statusMsgId) await deleteMessage(chatId, statusMsgId);

  if (finalText) {
    await sendMessage(chatId, finalText, replyMsgId);
  } else if (exitCode !== 0) {
    const errSnippet = stderrBuf.slice(-1000).trim();
    await sendMessage(chatId, `Claude exited with code ${exitCode}.\n\n${errSnippet || '(no error output)'}`, replyMsgId);
  } else {
    await sendMessage(chatId, '(Task completed — no text output)', replyMsgId);
  }

  if (AUTO_DELIVER && exitCode === 0 && before) {
    const after = snapshotDir(session.workDir);
    const target = findChangedRoot(session.workDir, before, after);
    if (target) {
      await sendMessage(chatId, `Auto-delivering changed files: \`${path.basename(target)}\``);
      await zipAndSend(chatId, target).catch(e => console.error('[auto-deliver]', e));
    }
  }
}

// ── Message handler ───────────────────────────────────────────────────────────

async function handleUpdate(update) {
  const msg = update.message || update.edited_message;
  if (!msg?.text) return;

  const chatId = msg.chat.id;
  const text = msg.text.trim();

  // Registration flow — if no owner set yet, anyone can claim it
  if (!ALLOWED_CHAT_ID) {
    if (text === '/register') {
      saveAllowedChatId(chatId);
      await sendMessage(chatId,
        `Registered! This bot is now locked to your account.\n` +
        `Your chat ID \`${chatId}\` has been saved to .env.\n\n` +
        `Send any message to start giving Claude Code tasks.`
      );
    } else {
      await sendMessage(chatId,
        `Bot not yet registered.\nSend /register to claim this bot and lock it to your account.`
      );
    }
    return;
  }

  if (String(chatId) !== String(ALLOWED_CHAT_ID)) {
    await sendMessage(chatId, 'Unauthorized. This bot is private.');
    return;
  }

  const session = getSession(chatId);

  // ── Commands ──
  if (text.startsWith('/dir ')) {
    const newDir = text.slice(5).trim();
    if (!fs.existsSync(newDir)) {
      await sendMessage(chatId, `Directory not found: \`${newDir}\``);
      return;
    }
    session.workDir = newDir;
    session.sessionId = null;
    saveSessions();
    await sendMessage(chatId, `Working directory set to:\n\`${newDir}\`\nConversation reset.`);
    return;
  }

  if (text === '/pwd') {
    await sendMessage(chatId, `Directory: \`${session.workDir}\`\nSession: ${session.sessionId || 'none'}`);
    return;
  }

  if (text === '/reset') {
    session.sessionId = null;
    saveSessions();
    await sendMessage(chatId, 'Conversation reset. Starting fresh.');
    return;
  }

  if (text === '/cancel') {
    if (session.proc) {
      session.proc.kill('SIGTERM');
      setTimeout(() => { if (session.proc) session.proc.kill('SIGKILL'); }, 3000);
      await sendMessage(chatId, 'Task cancelled.');
    } else {
      await sendMessage(chatId, 'No task is running.');
    }
    return;
  }

  if (text.startsWith('/zip')) {
    const target = text.slice(4).trim() || session.workDir;
    await zipAndSend(chatId, target);
    return;
  }

  if (text === '/help') {
    await sendMessage(chatId,
      '*Claude Code Bot*\n\n' +
      'Send any message to run it as a task in Claude Code.\n\n' +
      '*Commands:*\n' +
      '`/dir <path>` — set working directory\n' +
      '`/pwd` — show current directory\n' +
      '`/zip [path]` — download current folder as zip\n' +
      '`/reset` — start a new conversation\n' +
      '`/cancel` — stop current task\n' +
      '`/help` — show this message\n\n' +
      `*Current directory:*\n\`${session.workDir}\``
    );
    return;
  }

  if (text.startsWith('/')) return; // ignore unknown commands

  if (session.running) {
    await sendMessage(chatId, 'Already running a task. Send /cancel to stop it.');
    return;
  }

  // Fire task without awaiting so polling loop stays unblocked
  runTask(chatId, text, msg.message_id).catch(console.error);
}

// ── Zip & send ────────────────────────────────────────────────────────────────

async function zipAndSend(chatId, targetPath) {
  const os = require('os');
  const path = require('path');

  if (!fs.existsSync(targetPath)) {
    await sendMessage(chatId, `Path not found: \`${targetPath}\``);
    return;
  }

  const zipPath = path.join(os.tmpdir(), `project-${Date.now()}.zip`);
  const statusMsg = await sendMessage(chatId, `Zipping \`${targetPath}\`…`);

  await new Promise((resolve, reject) => {
    const proc = spawn('zip', ['-r', zipPath, '.'], { cwd: targetPath });
    proc.on('close', code => code === 0 ? resolve() : reject(new Error(`zip exited ${code}`)));
  }).catch(async err => {
    if (statusMsg) await deleteMessage(chatId, statusMsg.message_id);
    await sendMessage(chatId, `Failed to zip: ${err.message}`);
    return null;
  });

  if (!fs.existsSync(zipPath)) return;

  if (statusMsg) await deleteMessage(chatId, statusMsg.message_id);

  const fileData = fs.readFileSync(zipPath);
  const boundary = '----FormBoundary' + Date.now();
  const filename = path.basename(targetPath) + '.zip';

  // Build multipart form manually
  const pre = Buffer.from(
    `--${boundary}\r\nContent-Disposition: form-data; name="chat_id"\r\n\r\n${chatId}\r\n` +
    `--${boundary}\r\nContent-Disposition: form-data; name="document"; filename="${filename}"\r\nContent-Type: application/zip\r\n\r\n`
  );
  const post = Buffer.from(`\r\n--${boundary}--\r\n`);
  const body = Buffer.concat([pre, fileData, post]);

  await fetch(`${TG}/sendDocument`, {
    method: 'POST',
    headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}` },
    body,
  });

  fs.unlinkSync(zipPath);
}

// ── Polling loop ──────────────────────────────────────────────────────────────

async function poll() {
  let offset = 0;
  console.log('[bot] Polling started');

  while (true) {
    try {
      const res = await fetch(`${TG}/getUpdates?timeout=30&offset=${offset}&allowed_updates=["message","edited_message"]`);
      const data = await res.json();

      // 409 Conflict: another instance is polling the same token (e.g. local + Railway).
      // Wait quietly and try again — whoever's polling will eventually stop and we'll take over.
      if (!data.ok && data.error_code === 409) {
        await new Promise(r => setTimeout(r, 15000));
        continue;
      }

      if (data.ok && data.result.length > 0) {
        for (const update of data.result) {
          offset = update.update_id + 1;
          handleUpdate(update).catch(console.error);
        }
      }
    } catch (e) {
      console.error('[poll] error:', e.message);
      await new Promise(r => setTimeout(r, 5000));
    }
  }
}

// ── Startup ───────────────────────────────────────────────────────────────────

// Don't crash on unhandled rejections / errors — keep the bot alive
process.on('unhandledRejection', err => console.error('[unhandledRejection]', err));
process.on('uncaughtException', err => console.error('[uncaughtException]', err));

if (!TOKEN) {
  console.error('TELEGRAM_BOT_TOKEN is not set in .env');
  process.exit(1);
}

if (!fs.existsSync(CLAUDE_BIN)) {
  console.warn(`WARNING: Claude binary not found at ${CLAUDE_BIN}`);
  console.warn('Update CLAUDE_BIN in .env if your path is different.');
}

if (!ALLOWED_CHAT_ID) {
  console.warn('SETUP REQUIRED: Message the bot on Telegram and send /register to lock it to your account.');
}

seedNexus();
loadSessions();

console.log(`Claude bin:   ${CLAUDE_BIN}`);
console.log(`Default dir:  ${DEFAULT_WORK_DIR}`);
console.log(`Nexus dir:    ${NEXUS_DIR || '(not set)'}`);
console.log(`Auto-deliver: ${AUTO_DELIVER}`);
console.log(`Allowed chat: ${ALLOWED_CHAT_ID || '(anyone)'}`);

poll().catch(err => {
  console.error('[fatal]', err);
  process.exit(1);
});
