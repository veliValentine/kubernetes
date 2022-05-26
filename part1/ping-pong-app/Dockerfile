FROM node:16.15.0-stretch-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --production

USER node

CMD ["npm", "start"]