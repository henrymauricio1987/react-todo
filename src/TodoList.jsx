import * as React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: '**Learn coding through robotics** – Engage with hands-on projects that make learning to code fun and practical.'
  },
  {
    id: 2,
    title: '**Reinforce programming concepts with video games** – Interactive gameplay helps solidify key coding skills while keeping students motivated.'
  },
  {
    id: 3,
    title: '**Explore algorithms with augmented and virtual reality** – Dive into complex concepts through immersive simulations that bring abstract ideas to life.'
  }, 
  {
    id: 4,
    title: '**Ignite your passion for creativity while mastering coding** – Combine creativity and technology to develop real-world skills that are both engaging and empowering.'
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