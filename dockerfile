# 1. Use Playwright's official Docker image that includes Node.js and browsers (Chromium, Firefox, WebKit)
FROM mcr.microsoft.com/playwright:focal

# 2. Set the working directory inside the container
WORKDIR /usr/src/app

# 3. Copy the package.json and package-lock.json first (to leverage Docker cache for dependencies)
COPY package*.json ./

# 4. Install the dependencies, including Playwright (node_modules will be created in the container)
RUN npm install

# 5. Copy the rest of the project files into the container
COPY . .

# 6. (Optional) Ensure Playwright browsers are installed (not needed if base image includes them)
RUN npx playwright install

# 7. Define the default command to run the tests when the container starts
CMD ["npx", "playwright", "test"]
