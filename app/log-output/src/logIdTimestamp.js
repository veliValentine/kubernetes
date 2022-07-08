import { getCurrentTimestamp } from './services/dateService.js'
import { ID } from './services/idService.js'
import config from './utils/config.js'
import logger from './utils/logger.js'

const { INTERVAL_TIME } = config

let timeoutId

const logIdWithTimestamp = () => {
  const time = getCurrentTimestamp()
  logger.log(`${time}: ${ID}`)
  useTimeout()
}

const useTimeout = () => {
  clearTimeout(timeoutId)
  timeoutId = setTimeout(logIdWithTimestamp, INTERVAL_TIME)
}

export default logIdWithTimestamp
