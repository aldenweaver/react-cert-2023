import { Link, Outlet } from 'react-router-dom';

function GameList() {
    return ( 
        <>
            <h1>This is the game list page</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/games/1">Game 1</Link>
                    </li>
                    <li>
                        <Link to="/games/2">Game 2</Link>
                    </li>
                    <li>
                        <Link to="/games/chess">Chess</Link>
                    </li>
                    <li>
                        <Link to="/games/new">New Game</Link>
                    </li>
                </ul>
            </nav>

            {/* Passing shared data to shared layouts, can pass data from App level to GamesList, then context allows you to pass down from GamesList to Game or NewGame */}
            <Outlet context={{ hello: "world" }}/>

        </>
     );
}

export default GameList;