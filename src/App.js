function App() {
  // Creamos el array con los 3 todos
  const todos = [
    { id: 1, title: "review resources" },
    { id: 2, title: "take notes" },
    { id: 3, title: "code out app" },
  ];

  // Retornamos el HTML usando JSX
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {/* Mapeamos los todos para generar una <li> por cada uno */}
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
