const TODOS = []

const getTodos = () => TODOS

const addTodo = (todo) => {
  if (!isValidTodo(todo)) throw new Error('Invalid todo')
  TODOS.push(todo)
  return todo
}

const isValidTodo = ({ text = '' }) => {
  if (!text) return false
  if (text.length > 140) return false
  return true
}

export default {
  getTodos,
  addTodo,
}