
import * as React from 'react';

function AddTodoForm({ onAddTodo }) {  // Aceptamos onAddTodo como prop

    // Función para manejar el envío del formulario
    const handleAddTodo = (event) => {
        event.preventDefault();  // Prevenir el comportamiento predeterminado del formulario
        console.log({ event })
        // Obtener el valor del input
        const todoTitle = event.target.todoTitle.value;

        // Llamar a onAddTodo y pasar el valor de todoTitle
        onAddTodo(todoTitle);

        // Limpiar el campo de texto después de agregar el todo
        event.target.todoTitle.value = '';
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label>
            <input
                type="text"
                id="todoTitle"
                name="title"
            />
            <button type="submit">Add</button>
        </form>

    );
}

export default AddTodoForm;
