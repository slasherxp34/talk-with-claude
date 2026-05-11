# Master Prompt — Copy/paste this into Telegram

Fill in the company details at the bottom. Send the whole thing to @Claude834bot.

---

```
Build a website for the company described at the bottom of this message. Read the spec at WEBSITE-PROMPT-TEMPLATE.md (in the current working directory) in full and follow every rule, code pattern, and convention in it. The template currently defines Modes A and B but more modes are being added — check it fresh each time and use whichever modes exist now.

FOLDER: Create a new folder named after the company (kebab-case version of the company name — e.g. "Joe's Plumbing" becomes joes-plumbing) inside the current working directory. Build the entire project inside that folder so I can open it directly in VS Code on my computer.

INSPIRATION (encouraged): Before building, you may use WebSearch to find:
- Three.js examples / CodePen demos / Three.js journey scenes for original 3D ideas relevant to this business
- Award-winning website references from Awwwards, Site Inspire, Godly, Httpster for layout / animation / typography inspo
- Open 3D model libraries (Sketchfab, Poly Pizza, Quaternius) for free CC0 assets you could embed or recreate procedurally
- Free video clips from Pexels / Mixkit / Coverr that match the business mood
- Color palette inspiration from Coolors, Color Hunt, real-world brand photography
Take what's interesting, adapt it — never copy-paste. The site must still be visually unique. List your inspiration sources in PROJECT.md.

ORIGINALITY: Every website you build must be visually unique — never reuse a palette, layout, hero treatment, typography pairing, or chapter structure from a previous Nexus build. Before designing, list the sibling folders in the current directory and look at their PROJECT.md files so you know what's been done, then deliberately go in a different direction.

REVIEWS: Use WebSearch to find the business on Google and pull their top 3-5 most recent reviews (prefer 5-star). Capture rating, full quote, reviewer first name, and location. If genuine reviews can't be found, omit the reviews section — never invent them.

DECISIONS: Pick the mode, palette, fonts, 3D object, and all design decisions yourself based on the template's rules and the company type. Declare your choices at the very top of your output before writing any code: MODE CHOSEN, PALETTE, REASONING, INSPIRATION SOURCES.

BUILD: Create index.html plus the sub-pages required by the template's PART 11. Vanilla HTML/CSS/JS only, ES5 inside an IIFE, all CSS inline, every rule from PART 10 enforced.

DOCUMENT: Create a PROJECT.md inside the folder documenting: business name, mode, palette (hex codes), font choices, 3D object choice (if Mode A), layout decisions, what makes this site different from the other Nexus builds, inspiration sources, and the localhost URL.

LOCALHOST PREVIEW: When all files are written, start a background local server with `python3 -m http.server 8765 --directory "<full project folder path>"` so I can immediately preview the site in my browser.

NOTIFY ME WHEN DONE: Once the local server is running, send me a clear FINAL message that says:
"✅ DONE. <Company name> website is ready.
Folder: <full project folder path>
Preview: http://localhost:8765
Mode: <A/B/etc>
Palette: <hex codes>
1-line summary: <what makes this build unique>"

Do not ask me questions. Do not stop until the site is fully built, the local server is running, and you've sent the final ✅ DONE message.

Here are the details of the company:

```

---

## How to use

1. Open Telegram → @Claude834bot
2. Copy the entire code block above (everything between the triple backticks)
3. Paste, fill in the company details at the bottom (paste straight from Google), send
4. Wait — you'll get a 45s progress update with elapsed time, tool count, and what Claude is currently doing
5. When the build is done you'll get a ✅ DONE message with the folder path and preview URL
6. Open `http://localhost:8765` in your Mac's browser
7. Open the folder in VS Code from `~/Desktop/Coding Projects/Nexus/<company-slug>/`

## Tips

- The more detail in the company info, the better the copy
- Leave reviews blank — Claude pulls them from Google automatically
- If you want a specific bot to handle the request, briefly pause the other (Railway: pause service; local: `launchctl unload ~/Library/LaunchAgents/com.claude.bot.plist`)
