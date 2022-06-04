FROM node:16.15.0-stretch-slim as client-build

WORKDIR /usr/src/app

COPY todo-app-client .

RUN npm ci --production

RUN npm run build


FROM node:16.15.0-stretch-slim

WORKDIR /usr/src/app

COPY --from=client-build /usr/src/app/build /usr/src/app/build

ENV IMAGE_FOLDER_PATH=/usr/src/app/images

COPY --chown=node:node . .

RUN npm ci --production

USER node

CMD ["npm", "start"]