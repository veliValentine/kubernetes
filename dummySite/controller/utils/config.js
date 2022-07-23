import 'dotenv/config'

export const PROD = 'prod'
export const DEV = 'dev'

const {
  PORT = 3000,
  NODE_ENV = PROD,
  BEARER_TOKEN
} = process.env

export default {
  PORT,
  NODE_ENV,
  BEARER_TOKEN
}
