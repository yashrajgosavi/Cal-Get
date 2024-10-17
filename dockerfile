# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the necessary files and directories into the container
COPY packageServe.json ./package.json
COPY dist ./dist

# Install dependencies
RUN yarn

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npx", "serve", "-s", "dist"]
