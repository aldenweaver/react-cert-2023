import './App.css';
import Greeting from './Greeting';

let data = [
  {
    id: 1,
    name: "Rick",
    age: 73,
    alive: true,
    favoriteThings: ["McNuggies with Szechaun Sauce", "Kalaxian Crystals", "Portal Fluid"]
  },
  {
    id: 2,
    name: "Morty",
    age: 13,
    alive: false,
    favoriteThings: ["Jessica", "Yummy' Yums", "Eyeholes"]
  },
  {
    id: 3,
    name: "Summer",
    age: 17,
    alive: false,
    favoriteThings: ["Snake Jazz", "Being Queen", "Parties"]
  }
]

function App() {

  function greet(){
    alert('WUBBALUBBADUBDUB!');
  }

  return (
    <div className="App">

      {/* <Greeting name="Rick" age={73} alive={true} />
      <Favorites faves={ ["McNuggies with Szechuan Sauce", "Kalaxian Crystals", "Portal Fluid"] }/>
      <Greeting name="Summer" age={17} alive={true} />
  <Greeting name="Morty" age={13} alive={false} /> */}

  <ul>
  { data.map( (char) => <Greeting key={char.id} greetAlert={greet} name={char.name} age={char.age} alive={char.alive} faves={char.favoriteThings} /> ) }
  </ul>

    </div>
  );
}

export default App;
