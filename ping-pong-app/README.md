# Log output
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>

## About

Applications that keeps count.

## Run application
1. Pull image from [docker hub](https://hub.docker.com/repository/docker/velivalentine/log-output/tags?page=1&ordering=last_updated)
   1. `docker pull velivalentine/ping-pong-app`
2. Run pulled image
   1. `docker run -it velivalentine/ping-pong-app`

## Get started

Node version `v16.15.0`

1. Clone repository
   - `git clone git@github.com:veliValentine/kubernetes.git`
2. Move to project directory
   - `cd kubernetes/part1/ping-pong-app`
3. Install dependencies
   - `npm i`
4. Start application
   - `npm start`

## Development mode
Start application in development mode. Run `npm run dev`.

## Lint
This project follows [standardjs](https://standardjs.com/) style guide.

### Check errors
To check style errors run `npm run lint`

### Autofix style errors
To autofix style errors run `npm run lint-fix`

## API
| endpoint  | method | response       |
| --------- | ------ | -------------- |
| `/health` | `GET`  | `OK`           |
| `/`       | `GET`  | `pong counter` |

## ENV
| key               | default value                                 | info                                |
| ----------------- | --------------------------------------------- | ----------------------------------- |
| `PORT`            | `3000`                                        | `Application port`                  |
| `PING_PONG_PATH`  | `./ping-pong.log`                             | `Path where ping pongs are written` |
| `DB_POSTGRES_URL` | `postgres://postgres:password@localhost:5432` | `Path where postgres db is running` |

## Postgres - 14.3
```
docker pull postgres@sha256:84c6ea4333ae18f25ea0fb18bb142156f2a2e545e0a779d93bbf08079e56bdaf
```
```
docker run -it -p 5432:5432 -e POSTGRES_PASSWORD=password postgres:14.3
```