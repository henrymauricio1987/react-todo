import React from "react"

function TodoListItem(){
    return (
        <div>
            <p>This is an example of an event</p>
            <label htmlFor='search'>Search</label>
            <input id= 'search' type='text' onChange={handleMouseOver} />
        </div>
    )
}

export default TodoListItem;