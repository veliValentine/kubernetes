import DailyImage from './components/DailyImage';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useTodo from './hooks/useTodo';
import './services/todoService'

const initialTodos = [
  {
    text: 'first'
  }
]

const App = () => {
  const [todos, addTodo] = useTodo(initialTodos)
  return (
    <div>
      <DailyImage />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
