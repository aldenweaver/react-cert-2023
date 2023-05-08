import { useParams } from 'react-router-dom';

function Game() {
    const { id } = useParams();
    return ( 
        <>
            <h1>This is info for the game {id}</h1>
        </>
     );
}

export default Game;