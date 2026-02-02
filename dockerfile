# Use lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy source code
COPY . .

# Expose backend port (change if needed)
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
