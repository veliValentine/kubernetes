import axios from 'axios'
import config from '../utils/config'
import { healthCheck } from './helpers'

const todoInstance = axios.create({
  baseURL: config.TODO_API_URL
})

healthCheck(todoInstance, 'TODO api')

const getTodos = async () => {
  const { data } = await todoInstance.get("/todos")
  return data
}

const addTodo = async (todo) => {
  const { data } = await todoInstance.post('/todos', todo)
  return data
}

export const DAILY_PICTURE_URL = config.TODO_API_URL + '/picture'

const todoService = {
  getTodos,
  addTodo
}

export default todoService
