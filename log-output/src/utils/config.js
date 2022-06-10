import 'dotenv/config'

const {
  PORT = 3000,
  INTERVAL_TIME = 5000,
  LOG_PATH = null,
  PING_PONG_PATH = null,
  PING_PONG_URL = null,
  MESSAGE = 'Hi!'
} = process.env

export default {
  PORT,
  INTERVAL_TIME,
  LOG_PATH,
  PING_PONG_PATH,
  PING_PONG_URL,
  MESSAGE
}
