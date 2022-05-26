import fs from 'fs'
import config from '../utils/config.js'
import logger from '../utils/logger.js'

export const UTF_8 = 'utf-8'

const {
  LOG_PATH,
  PING_PONG_PATH
} = config

const readFile = (path, encoding = UTF_8) => {
  if (!path) throw new Error('path must be defined')
  try {
    const contentBuffer = fs.readFileSync(path)
    return contentBuffer.toString(encoding)
  } catch (error) {
    logger.error(`Failed to read file at ${path}`)
    throw error
  }
}

const readLog = () => {
  if (!LOG_PATH) throw new Error('ENV variable LOG_PATH must be defined')
  return readFile(LOG_PATH)
}

const readPingPong = () => {
  if (!PING_PONG_PATH) return
  return JSON.parse(readFile(PING_PONG_PATH))
}

export default {
  readFile,
  readLog,
  readPingPong
}
