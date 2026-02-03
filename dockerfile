# Use lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy backend dependency files first
COPY server/package*.json ./

# Install production dependencies only
RUN npm install --production

# Copy backend source code
COPY server/ .

# Expose backend port (change if needed)
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
