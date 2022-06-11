import Todo from '../models/Todo.js'

const getTodos = async () => await Todo.findAll()

const addTodo = async (todo) => {
  if (!isValidTodo(todo)) throw new Error('Invalid todo')
  return await Todo.create(todo)
}

const isValidTodo = ({ text = '' }) => {
  if (!text) return false
  if (text.length > 140) return false
  return true
}

const deleteTodo = async (id) => {
  const todo = await Todo.findByPk(id)
  if (!todo) return
  return await todo.destroy()
}

export default {
  getTodos,
  addTodo,
  deleteTodo
}