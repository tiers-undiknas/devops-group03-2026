# syntax=docker/dockerfile:1.7
# ---------- Stage 1: Builder ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy manifest dan install dependencies
COPY package*.json ./
RUN npm install

# Copy source code dan build Vite
COPY . .
RUN npm run build

# ---------- Stage 2: Runtime (Nginx) ----------
FROM nginx:1.27-alpine

# Hapus config default Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copy hasil build dari stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy config Nginx kita
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]