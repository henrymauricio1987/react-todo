import React, { useState } from "react";

function Search() {
    const [query, setQuery] = useState("");

    // Handle change event and update the query state
    const handleChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);

        // You can implement search logic here
        console.log("Searching for: ", newQuery);
    };

    return (
        <div>
            <p>This is an example of an event</p>
            <label htmlFor="search">Search: </label>
            <input 
                id="search" 
                type="text" 
                onChange={handleChange} 
                value={query}
            />
        </div>
    );
}

export default Search;
