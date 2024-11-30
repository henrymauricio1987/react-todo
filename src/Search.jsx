import React from "react"

function Search(){
    const handleMouseOver = (event) =>{
        console.log(event)
    }
    return (

        <div>
            <p>This is an example of an event</p>
            <label htmlFor='search'>Search</label>
            <input id= 'search' type='text' onChange={handleMouseOver} />
        </div>
    )
}

export default Search;