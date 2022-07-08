import 'dotenv/config'

const {
  NATS_URL = 'localhost:4222',
  RECEIVER_HOST = 'https://322a99cf-c5e1-4c18-b5dc-34ae0c12a54e.mock.pstmn.io'
} = process.env

export default {
  NATS_URL,
  RECEIVER_HOST
}
