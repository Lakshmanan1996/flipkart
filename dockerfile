# Use official lightweight Node image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application source code
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
