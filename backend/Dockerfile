FROM node:18-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5050
RUN npm run
CMD ["node", "server.js"]