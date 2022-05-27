import { useState } from 'react';

export const TODO_MAX_LENGTH = 140

export const isValidTodo = ({
  text = ''
}) => {
  if (text === '') return false
  if (text.length > TODO_MAX_LENGTH) return false
  return true
}

const useTodo = (initialTodos = []) => {
  const [todos, setTodos] = useState(initialTodos.filter(isValidTodo))

  const addTodo = (todo) => {
    if (!isValidTodo(todo)) {
      return null
    }
    setTodos(todos.concat(todo))
  }

  return [todos, addTodo]
}

export default useTodo
