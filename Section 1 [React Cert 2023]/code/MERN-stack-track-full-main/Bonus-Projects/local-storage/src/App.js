import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  function plusOne() {
    setCounter(counter + 1);
    localStorage.setItem("count", JSON.stringify(counter));
  }

  function minusOne() {
    setCounter(counter - 1);
  }

  function getLocalCount() {
    localStorage.getItem("count");
  }

  function clearLocalCount() {
    localStorage.removeItem("count");
  }

  function clearLocalStorageAll() {
    localStorage.clear();
  }

  return (
    <div className="App">
      <h1>State vs. Local Storage</h1>
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>

      <h2>State Counter</h2>
      <b>Counter: {counter}</b>

      <br/>

      <h2>Local Storage Count</h2>
      <span><p><b>Count: </b>{localStorage.getItem("count")}</p></span>
      <span><p><button onClick={clearLocalCount()}>Clear Local Count</button></p></span>
      <span><p><button onClick={clearLocalStorageAll()}>Clear All Local Storage</button></p></span>
    </div>
  );
}

export default App;
