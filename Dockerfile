FROM node:20-slim

# Tools Claude Code needs for bash commands
RUN apt-get update && apt-get install -y \
    git curl bash zip python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

# Install Claude Code CLI globally
RUN npm install -g @anthropic-ai/claude-code

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Persistent workspace for projects
RUN mkdir -p /workspace

CMD ["node", "bot.js"]
