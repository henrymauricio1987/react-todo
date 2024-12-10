
import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Search from './search';

function App() {
  // Crear estado para almacenar el nuevo todo
  const [newTodo, setNewTodo] = React.useState('');  // Estado para el nuevo todo

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <AddTodoForm onAddTodo={setNewTodo} /> {/* Pasamos la función setNewTodo */}
      <Search />
      
      {/* Mostrar el valor de newTodo debajo del formulario */}
      <p>{newTodo}</p>

      <h4><i>Henry Osorio</i></h4>
    </div>
  );
}

export default App;
