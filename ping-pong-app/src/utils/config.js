import 'dotenv/config'

const {
  PORT = 3000,
  PING_PONG_PATH = './ping-pong.log',
  DB_POSTGRES_URL = 'postgres://postgres:password@localhost:5432'
} = process.env

export default {
  PORT,
  PING_PONG_PATH,
  DB_URL: DB_POSTGRES_URL
}
