FROM node:16.15.0-stretch-slim

WORKDIR /usr/src/app

COPY . .

RUN npm ci --production

CMD ["npm", "start"]