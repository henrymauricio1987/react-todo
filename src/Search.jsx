import React, { useState } from "react";

function Search({ newTodo, setNewTodo }) {

    //question
    // const [query, setQuery] = useState("");

    // Handle change event and update the query state

    //question
    const handleChange = (event) => {
        console.log({ event })
        const newQuery = event.target.value;
        setNewTodo(newQuery);

        // You can implement search logic here
        console.log("Searching for: ", newQuery);
    };

    return (
        <div>
            <p>This is an example of an event</p>
            <label htmlFor="search">Search your deliver: </label>
            <input
                id="search"
                type="text"
                onChange={handleChange}
                value={newTodo}
            />
        </div>
    );
}

export default Search;  
