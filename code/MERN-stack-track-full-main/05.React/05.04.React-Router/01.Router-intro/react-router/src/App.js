import {Route, Routes, Link} from 'react-router-dom';

import Home from './components/page-components/Home';
import GameList from './components/page-components/GameList';
import Game from './components/display-components/Game';
import NewGame from './components/input-components/NewGame';
import NotFound from './components/page-components/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Game List</Link>
          </li>
          <li>
            <Link to="/games/new">New Game</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameList />}>
              <Route path=":id" element={<Game />} />
              <Route path="new" element={<NewGame />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
