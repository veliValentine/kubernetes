# Log output
<a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>

## About

Applications that logs outputs.

## Run application
1. Pull image from [docker hub](https://hub.docker.com/repository/docker/velivalentine/log-output/tags?page=1&ordering=last_updated)
   1. `docker pull velivalentine/log-output:1.01-prod`
2. Run pulled image
   1. `docker run -it velivalentine/log-output:1.01-prod`

## Get started

Node version `v16.15.0`

1. Clone repository
   - `git clone git@github.com:veliValentine/kubernetes.git`
2. Move to project directory
   - `cd kubernetes/part1/log-output`
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
| endpoint  | method | response                      |
| --------- | ------ | ----------------------------- |
| `/health` | `GET`  | `OK`                          |
| `/status` | `GET`  | `SERVER-TIME: SERVER-ID`      |
| `/read`   | `GET`  | JSON containing hash and logs |

## Env variables

| key             | default value | info                                |
| --------------- | ------------- | ----------------------------------- |
| `PORT`          | `3000`        | `Application port`                  |
| `INTERVAL_TIME` | `5000`        | `Interval time that log is created` |
| `LOG_PATH`      | null          | `Path where logs are read`          |