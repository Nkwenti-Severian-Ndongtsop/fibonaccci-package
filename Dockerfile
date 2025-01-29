# Use an official Node runtime as a parent image
FROM node:23.6.1-alpine3.20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /app
COPY /fib.js .

# Run app.js when the container launches
CMD ["node", "fib.js"]
