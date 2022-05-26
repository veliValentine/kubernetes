import fs from 'fs'
import config from '../utils/config.js'
import logger from '../utils/logger.js'

export const UTF_8 = 'utf-8'

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
  const { LOG_PATH } = config
  if (!LOG_PATH) throw new Error('ENV variable LOG_PATH must be defined')
  return readFile(config.LOG_PATH)
}

export default {
  readFile,
  readLog
}
