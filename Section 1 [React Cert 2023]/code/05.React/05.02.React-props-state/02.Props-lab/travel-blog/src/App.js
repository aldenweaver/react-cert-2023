import Article from './Article';
import './App.css';

function App () {
  let articles = [
    {id: 1, title: "Taiwan's Hidden Treasures", body: "You could spend months exploring Taiwan's Buddhist temples, villages, cities, and mountains and still barely scratch the surface of all the island has to offer.", img: "/taiwan.jpg"},
    {id: 2, title: "High Culture In Sao Paulo", body: "The largest city in South America, Sao Paulo's cuisine and art is as multinational as its diverse population of ten million people.", img: "/sao-paulo.jpg"},
    {id: 3, title: "Bonaire Is Scuba Heaven", body: "Bonaire is one of the top diving destinations in the world. Known as the shore dive capital of the world, it has great accessibility to its reefs.", img: "/bonaire.jpg"}
  ];

    return (

      <div className="App container-fluid">
        <h1>My Travel Blog</h1>

        <div className="row">
          { articles.map((data) => <Article key={data.id} content={data} />) }
        </div>

      </div>

    );
}
 
export default App;

