import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

const addTodoHandler = (todoText:string) => {
  const newTodo = new Todo(todoText);

  setTodos((previousTodos) => {
    return previousTodos.concat(newTodo);
  });
};

const deleteTodoHandler = (id:string) => {
  setTodos((previousTodos) => {
    return previousTodos.filter(todo => todo.id !== id);
  });
};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onDeleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;
