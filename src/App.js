// import * as React from 'react';

// const todoList = [
//   {
//     title: 'The React Task 1.1',
//     id: 1,
//   },
//   {
//     title: 'Submission Task 1.1',
//     id: 2,
//   },
// ];

// function TodoList (){
//   return (
//     <ul>
//       {todoList.map(function (item) {
//         return(
//         <li key={item.objectID}>
//           <span>
//             <a href={item.url}>{item.title}</a>
//           </span>
//           <span>{item.author}</span>
//           <span>{item.num_comments}</span>
//           <span>{item.points}</span>
//         </li>
//       );
//       })}
//       </ul>
//   )
// }

// function Search (){
//   return(
//     <div>
//       <label htmlFor = "search"> Search: </label>
//       <input id = "search" type = "text" />
//     </div>
//   )
// }

// function App() {
//   return (
//   <div>
//     <h1>Todo List</h1>
//     <Search />
//     <Search />

//       <hr />
//       <TodoList />
//       <TodoList />
      
//     </div >
//   );
// }

// export default App;

import * as React from 'react';

// Create an empty todoList array with at least 3 objects
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
];

// TodoList component that renders the list of todos
function TodoList() {
  return (
    <ul>
      {todoList.map(function(item) {
        // For each item, return a <li> with the unique key and title
        return (
          <li key={item.id}>
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}

// App component where the TodoList will be displayed
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <h4><i>Henry Osorio</i></h4>
    </div>
  );
}

export default App;
