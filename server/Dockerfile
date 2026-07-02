# Build stage
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

# Runtime stage
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app ./

EXPOSE 8000

CMD ["node", "index.js"]
