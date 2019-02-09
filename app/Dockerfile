FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 3000/tcp

ENTRYPOINT [ "npm", "start" ]




