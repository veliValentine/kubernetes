import { useEffect, useState } from 'react';
import todoService from '../services/todoService';

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
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const initTodos = async () => {
      setIsLoading(true)
      try {
        const fetchedTodos = await todoService.getTodos()
        setTodos([...initialTodos, ...fetchedTodos])
      } catch (error) {
        console.error('failed to fetch todos')
      }
      setIsLoading(false)
    }
    initTodos()
  }, [initialTodos])

  const addTodo = (todo) => {
    if (!isValidTodo(todo)) {
      return null
    }
    todoService
      .addTodo(todo)
      .then((addedTodo) => setTodos(todos.concat(addedTodo)))
      .catch(console.error)
  }

  return [todos, addTodo, isLoading]
}

export default useTodo
