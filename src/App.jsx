import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Search from './Search';

function App() {
  // Crear estado para almacenar el nuevo todo
  //question 1
  const [newTodo, setNewTodo] = React.useState('');  // Estado para el nuevo todo
  const [newTodo1, setNewTodo1] = React.useState('');  // Estado para el nuevo todo

  return (
    <div>
      <h1>Edcode</h1>
      <h2>Education and Computational Thinking </h2>
      <TodoList />

      <AddTodoForm onAddTodo={f} /> {/* Pasamos la función setNewTodo */}
      <AddTodoForm onAddTodo={setNewTodo1} /> {/* Pasamos la función setNewTodo */}
      <Search {...{ newTodo, setNewTodo }} />

      {/* Mostrar el valor de newTodo debajo del formulario */}
      <p>newTodo: {newTodo}</p>
      <p>newTodo1: {newTodo1}</p>

      <h4><i>Edcode</i></h4>
      <h4><i>Henry Osorio</i></h4>
    </div>
  );
}

export default App;
