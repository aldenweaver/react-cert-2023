import './App.css';
import React, { useState } from 'react';
import data from './data/fireHouse.json'
import House from './House';
import Houselist from './Houselist';

function App() {
  const [fireData, setFireData] = useState(data)
  const [currentHouse, setCurrentHouse] = useState(null)

  return (
    <div className="App">
      <House current={currentHouse} />
      <Houselist data={fireData} setCurrentHouse={setCurrentHouse}/>
    </div>
  );
}

export default App;
