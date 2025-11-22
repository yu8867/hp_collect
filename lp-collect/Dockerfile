# ============================
# 1. Build Stage
# ============================
FROM node:20-slim AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy all project files
COPY . .
RUN npm run build   # dist/ が生成される

# ============================
# 2. Production server
# ============================
FROM node:20-slim AS runner
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 4173

ENV HOST=0.0.0.0
ENV PORT=4173

# Allow docker-compose to override PORT so logs/servers match external mapping
CMD ["sh", "-c", "npm run preview -- --host ${HOST:-0.0.0.0} --port ${PORT:-4173}"]
