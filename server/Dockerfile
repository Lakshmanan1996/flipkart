# Build stage
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./

COPY . .
RUN npm install --legacy-peer-deps --omit=dev

# Runtime stage
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app ./

EXPOSE 8000

CMD ["node", "index.js"]
