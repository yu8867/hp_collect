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
RUN npm run build

# ============================
# 2. Production server (nginx)
# ============================
FROM nginx:stable-alpine AS runner

# Replace default server block and drop our SPA config in place
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Serve built static files
COPY --from=builder /app/dist /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
