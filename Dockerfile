# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the app
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["node", "src/server.ts"]
