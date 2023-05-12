import { useParams, useOutletContext } from 'react-router-dom';

function Game() {
    const { id } = useParams();

    const context = useOutletContext();

    return ( 
        <>
            <h1>This is info for the game {id}.</h1>
            <p><b>Context: </b>{context.hello}</p>
        </>
     );
}

export default Game;