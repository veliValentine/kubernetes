import { useState } from 'react'
import { TODO_MAX_LENGTH } from '../hooks/useTodo'

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('')

  const updateTodoText = (event) => {
    const text = event.target.value ?? ''
    setTodoText(text)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    addTodo({
      text: todoText.trim()
    })
    setTodoText('')
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        id="todo-input"
        type="text"
        value={todoText}
        maxLength={TODO_MAX_LENGTH}
        onChange={updateTodoText}
      />
      <input type='submit' value="Create TODO" />
    </form>
  )
}

export default TodoForm
