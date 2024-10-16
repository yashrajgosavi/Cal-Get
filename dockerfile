# Start with a minimal base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install serve

# Copy the rest of the application code
COPY dist .


# Expose port 3000
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "dist", "--port", "3000"]
