# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application for production
RUN npm run build

# Install a lightweight web server for serving the built files
RUN npm install -g serve

# Expose the port that Vite runs on
EXPOSE 5173

# Command to serve the production build
CMD ["serve", "-s", "dist", "-l", "5173"]
