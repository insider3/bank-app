# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Copy the public directory to the working directory
COPY ./public ./public

# Expose the port your Node.js application is listening on (if any)
EXPOSE 3000

# Start the Node.js application
CMD ["node", "app.js"]