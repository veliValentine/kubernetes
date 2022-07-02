import nats from 'nats'
import config from './utils/config.js'
import logger from './utils/logger.js'

const {
  NATS_URL
} = config

const natsConnections = nats.connect({
  url: NATS_URL
})
const newMessageConnection = 'new.message'

const onConnection = (connection) => {
  connection.subscribe(newMessageConnection, (msg) => {
    console.log({ msg })
  })
}

const afterConnection = () => {
  logger.log(`Listening ${NATS_URL}. Connected ${newMessageConnection}`)
}

natsConnections
  .then(onConnection)
  .catch(logger.error)
  .finally(afterConnection)
