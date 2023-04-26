import './App.css';

let name = "Alexandra"

const heading = <h1>{name}'s used cars</h1>
const logo = <img src="..." alt="..."/>
const slogan = <p>Nobody beats our prices!</p>

const introStyle = {
  fontSize: '2em', 
  color: 'limeGreen'
}

const header = <header style={ introStyle }>
                  {heading}
                  {logo}
                  {slogan}
                </header>

function App() {
  return (
    <div className="App">
      {header}

      {/* Comments can go here */}

    </div>
  );
}

export default App;
