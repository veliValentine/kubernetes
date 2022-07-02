import nats from 'nats'
import config from '../utils/config.js'
import logger from '../utils/logger.js'

const {
  NATS_URL
} = config

const messageConnection = 'message'
const CREATED_TODO = 'created'
const UPDATED_TODO = 'updated'
const stringCodec = nats.StringCodec()

const natsConnections = await nats.connect({
  url: NATS_URL
})

logger.log(`Listening ${NATS_URL}. Connected ${messageConnection}`)

const publishCreatedTodo = (createdTodo) => {
  publishTodo({
    todo: createdTodo,
    type: CREATED_TODO
  })
}

const publishUpdatedTodo = (updatedTodo) => {
  publishTodo({
    todo: updatedTodo,
    type: UPDATED_TODO
  })
}

const publishTodo = ({ todo, type }) => {
  const message = {
    type,
    todo
  }
  const codedMessage = stringCodec.encode(JSON.stringify(message))
  natsConnections.publish(messageConnection, codedMessage)
}

export default {
  publishCreatedTodo,
  publishUpdatedTodo
}
