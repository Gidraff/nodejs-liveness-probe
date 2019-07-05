FROM node:12.2.0-alpine

LABEL AUTHOR="kamandegid@gmail.com"

COPY package.json .

COPY . .

RUN npm install --prod

EXPOSE 8080

CMD ["node", "server.js"]
