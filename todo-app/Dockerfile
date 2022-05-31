FROM node:16.15.0-stretch-slim

WORKDIR /usr/src/app

ENV IMAGE_FOLDER_PATH=/usr/src/app/images

COPY --chown=node:node . .

RUN npm ci --production

USER node

CMD ["npm", "start"]