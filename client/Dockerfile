FROM node:19-slim 
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run
EXPOSE 3000
CMD ["npm", "start"]