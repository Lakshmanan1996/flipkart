# Build stage
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN NODE_OPTIONS=--openssl-legacy-provider npm run build

# Runtime stage
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app ./

EXPOSE 8000

CMD ["node", "index.js"]
