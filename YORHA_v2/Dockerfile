# ============================
# 1. Build Stage
# ============================
FROM node:20-slim AS builder
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy app source and build Vite bundle
COPY . .
RUN npm run build

# ============================
# 2. Production server
# ============================
FROM node:20-slim AS runner
WORKDIR /app

# Copy only what's needed for preview server
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 4173

ENV HOST=0.0.0.0
ENV PORT=4173

# Run Vite preview so static bundle is served in production-like mode
CMD ["sh", "-c", "npm run preview -- --host ${HOST:-0.0.0.0} --port ${PORT:-4173}"]
