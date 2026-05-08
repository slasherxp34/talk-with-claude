FROM node:20-slim

# Tools Claude Code needs for bash commands
RUN apt-get update && apt-get install -y \
    git curl bash zip python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Install Claude Code CLI globally
RUN npm install -g @anthropic-ai/claude-code

# Non-root user — required because --dangerously-skip-permissions refuses to run as root
RUN useradd -m -s /bin/bash -u 1001 claude

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Persistent workspace for projects, owned by the non-root user
RUN mkdir -p /workspace && chown -R claude:claude /workspace /app

USER claude
ENV HOME=/home/claude

CMD ["node", "bot.js"]
