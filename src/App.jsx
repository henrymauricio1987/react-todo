import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Search from './Search';

function App() {
  // Crear estado para almacenar el nuevo todo
  const [newTodo, setNewTodo] = React.useState('');  // Este es el estado para el nuevo todo

  // Declarar estado para la lista de todos
  // Crear una nueva variable de estado denominada todoListcon setTodoListel valor setter y predeterminado de una matriz vacía
  const [todoList, setTodoList] = React.useState([]);

  // Función para agregar una nueva tarea, Declarar una nueva función llamada addTodoque toma newTodocomo parámetro
  const addTodo = (newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]); // Agregar el nuevo todo a la lista
  };

  return (
    <div>
      <h1>Edcode</h1>
      <h2>Education and Computational Thinking </h2>

      {/* Pasar todoList el estado como una propiedad nombrada todoList al TodoListcomponente */}
      <TodoList todoList={todoList} /> {/* Pasar la lista de tareas como prop */}

      <AddTodoForm onAddTodo={addTodo} /> {/* Pasar la función addTodo como prop */}

      <h1>Search your course online</h1>
      <Search newTodo={newTodo} setNewTodo={setNewTodo} />

      <h4><i>Edcode</i></h4>
      <h4><i>Henry Osorio</i></h4>
    </div>
  );
}

export default App;
