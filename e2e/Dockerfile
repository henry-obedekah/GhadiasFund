FROM mcr.microsoft.com/playwright:v1.50.1-jammy
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
CMD ["npx", "playwright", "test"]