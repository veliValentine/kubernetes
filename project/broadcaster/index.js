import nats from 'nats'
import receiverService from './receiverService.js'
import config from './utils/config.js'
import logger from './utils/logger.js'

const {
  NATS_URL
} = config

const stringCodec = nats.StringCodec()

const natsConnections = await nats.connect({
  servers: NATS_URL
})

const messageConnection = 'message'
const CREATED_TODO = 'created'
const UPDATED_TODO = 'updated'

const options = {
  queue: 'broadcastMessageQueue'
}

const messageSubscription = natsConnections.subscribe(messageConnection, options);

const getDecodeMessage = ({ data }) => {
  const decodedMessage = stringCodec.decode(data)
  return JSON.parse(decodedMessage)
}

(async () => {
  for await (const cryptedMessage of messageSubscription) {
    const message = getDecodeMessage(cryptedMessage)
    const {
      type,
      todo
    } = message
    const todoId = todo.id
    if (type === CREATED_TODO) {
      return receiverService.sendReceiveMessage(`Created todo with id: ${todoId}`)
    }
    if (type === UPDATED_TODO) {
      return receiverService.sendReceiveMessage(`Updated todo with id: ${todoId}`)
    }
    logger.error(`Unsupported message type '${type}'`)
  }
})()


logger.log(`Listening ${NATS_URL}. Subscribe ${messageConnection}`)

