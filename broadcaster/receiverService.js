import axios from 'axios'
import config from './utils/config.js'
import logger from './utils/logger.js'

const {
  RECEIVER_HOST
} = config

const instance = axios.create({
  baseURL: RECEIVER_HOST,
  proxy: false
})

const sendReceiveMessage = async (message) => {
  try {
    const body = {
      message
    }
    const response = await instance.post('/receive', body)
    return response.data
  } catch (error) {
    logger.error('Error sending receive message')
    logger.error(error?.response?.data ?? error?.response ?? error?.message ?? error)
  }
}

export default {
  sendReceiveMessage
}
