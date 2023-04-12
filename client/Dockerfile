FROM node:18-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run
CMD ["react-scripts", "start"]