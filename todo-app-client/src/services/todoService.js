import axios from 'axios'
import config from '../utils/config'
import { healthCheck } from './helpers'

const todoInstance = axios.create({
  baseURL: config.TODO_API_URL
})

healthCheck(todoInstance, 'TODO api')

export const DAILY_PICTURE_URL = config.TODO_API_URL + '/picture'