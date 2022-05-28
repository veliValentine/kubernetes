import axios from 'axios'
import config from '../utils/config.js'

const {
  PING_PONG_URL
} = config

const pingPongInstance = axios.create({
  baseURL: PING_PONG_URL
})

const getPingPong = async () => {
  try {
    const { data = '' } = await pingPongInstance.get("") ?? {}
    return data
  } catch (error) {
    console.error('getPingPong - error')
    throw error
  }
}

const pingPongService = {
  getPingPong
}

export default pingPongService
