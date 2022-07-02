# Broadcaster
## About

Broadcast messages received from nats to external service.

## Run application
1. Pull image from [docker hub](https://hub.docker.com/repository/docker/velivalentine/broadcaster/tags?page=1&ordering=last_updated)
   1. `docker pull velivalentine/broadcaster`
2. Run pulled image
   1. `docker run -it velivalentine/broadcaster`

## Get started

Node version `v16.15.1`

1. Clone repository
   - `git clone git@github.com:veliValentine/kubernetes.git`
2. Move to project directory
   - `cd kubernetes/broadcaster`
3. Install dependencies
   - `npm i`
4. Start application
   - `npm start`

## Development mode
Start application in development mode. Run `npm run dev`.

## API
| endpoint | method | response |
| -------- | ------ | -------- |
|          |        |          |

## ENV
| key             | default value                                                | info                                     |
| --------------- | ------------------------------------------------------------ | ---------------------------------------- |
| `NATS_URL`      | `localhost:4222`                                             | Nats subscribe server                    |
| `RECEIVER_HOST` | `https://322a99cf-c5e1-4c18-b5dc-34ae0c12a54e.mock.pstmn.io` | Server host where brodcast send messages |
