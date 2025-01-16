import * as React from 'react';

function AddTodoForm({ onAddTodo }) {
    // Crear nueva variable de estado denominada todoTitlecon settersetTodoTitle
    const [todoTitle, setTodoTitle] = React.useState('');

    // Modificar el <input> elemento para que sea una entrada controlada
    const handleTitleChange = (event) => {
        setTodoTitle(event.target.value); // Actualiza el estado con el valor del input

        console.log(event.target.value)
    };

    // Función para manejar el envío del formulario
    const handleAddTodo = (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        // Llamar a onAddTodo y pasar un objeto con el título y un id único
        onAddTodo({
            title: todoTitle,
            id: Date.now() // Generar un id único usando Date.now()
        });

        // Limpiar el campo de entrada (restablecer todoTitle)
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label>
            <input
                type="text"
                id="todoTitle"
                name="title"
                value={todoTitle} //Agregar value propiedad igual a todoTitle la propiedad del componente
                onChange={handleTitleChange} // Agregue onChange propiedad igual a handleTitleChangela referencia de la función (declararemos esta función en el siguiente paso)

            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTodoForm;
