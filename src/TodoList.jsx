import * as React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
      id: 1,
      title: 'Complete assignment for React class'
    },
    {
      id: 2,
      title: 'Submit project proposal'
    },
    {
      id: 3,
      title: 'Buy groceries'
    }
    
]

function TodoList () {
    return (
        <ul>
          {todoList.map(function(item) {
            // For each item, return a <li> with the unique key and title
            return (
              <TodoListItem key={item.id} todo={item} /> );
          })}
        </ul>
    );
}

export default TodoList;