import React, { useState } from 'react';

import Pokemon from './components/Pokemon';

import './App.css';

function App() {
  return (
      <div className="App">
        <Pokemon/>
      </div>
    );
}

export default App;

// Local reference to useFetch's state variable
// const[data] = useFetch("https://jsonplaceholder.typicode.com/todos");
// function App() {
//   // Local reference to useFetch's state variable
//   const[data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
//   return (
//     <div className="App">
//       {data && data.map((item) => {
//         return <p key={item.id}>{item.title}</p>
//       })}
//     </div>
//   );
// }
