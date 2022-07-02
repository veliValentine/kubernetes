# Log output
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>

## About
Simple todo application.

## Run application
1. Pull image from [docker hub](https://hub.docker.com/repository/docker/velivalentine/todo-app/tags?page=1&ordering=last_updated)
   1. `docker pull velivalentine/todo-app:v0.1`
2. Run pulled image
   1. `docker run -it velivalentine/todo-app:v0.1`

## Get started

Node version `v16.15.0`

1. Clone repository
   - `git clone git@github.com:veliValentine/kubernetes.git`
2. Move to project directory
   - `cd kubernetes/part1/todo-app`
3. Install dependencies
   - `npm i`
4. Start application
   - `npm start`

## Development mode
Start application in development mode. Run `npm run dev`.

## Start dev postgtres database
Run `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=password postgres:14.3`

## Lint
This project follows [standardjs](https://standardjs.com/) style guide.

### Check errors
To check style errors run `npm run lint`

### Autofix style errors
To autofix style errors run `npm run lint-fix`

## API
| endpoint   | method | response              |
| ---------- | ------ | --------------------- |
| `/health`  | `GET`  | `OK`                  |
| `/picture` | `GET`  | Returns daily picture |
| `/todos`   | `GET`  | Returns all todos     |
| `/todos`   | `POST` | Creates new todo      |

## ENV variables
| variable            | default value                                 | description             |
| ------------------- | --------------------------------------------- | ----------------------- |
| `PORT`              | `3000`                                        | application port        |
| `IMAGE_FOLDER_PATH` | null                                          | where images are stored |
| `DB_POSTGRES_URL`   | `postgres://postgres:password@localhost:5432` | Url for postgres db     |
| `NATS_URL`          | `localhost:4222`                              | Nats subscribe server   |