Use Node for both build and serve
FROM node:18-alpine

Set working directory
WORKDIR /app

Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

Install dependencies
RUN npm install

Copy rest of the source code
COPY . .

Build the React app
RUN npm run build

Install serve to serve production build
RUN npm install -g serve

Expose port (React default)
EXPOSE 3000

Start the production build
CMD ["serve", "-s", "build", "-l", "3000"]