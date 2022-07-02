import 'dotenv/config'

const {
  NATS_URL = 'localhost:4222'
} = process.env

export default {
  NATS_URL
}
