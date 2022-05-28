FROM node:16.15.0-stretch-slim AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci --production

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

EXPOSE 80