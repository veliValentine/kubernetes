const TodoList = ({ todos = [] }) => {
  const todoItems = todos.map(TodoItem)
  return (
    <ul>
      {todoItems}
    </ul>
  )
}

const TodoItem = ({ text }, index) => (
  <li key={`text-${index}`}>
    {text}
  </li>
)

export default TodoList
