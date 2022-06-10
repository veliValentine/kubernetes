import { Sequelize } from 'sequelize'
import config from '../utils/config.js'
import logger from '../utils/logger.js'

const {
  DB_URL
} = config

const open = () => {
  try {
    if (DB_URL === null) {
      logger.error('DB URL env variable not defined')
      return new Sequelize()
    }
    return new Sequelize(DB_URL)
  } catch (error) {
    logger.error('Unable to open db connection', error?.message ?? error)
  }
}

const sequelize = open()

export const close = async () => {
  try {
    sequelize.close()
  } catch (error) {
    logger.error('Unable to close connection', error?.message ?? error)
  }
}

export default sequelize
