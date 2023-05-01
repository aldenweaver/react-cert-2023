import React, { useState, useEffect } from 'react';

import useFetch from "../hooks/useFetch";

import '../App.css';
import ShowPokemonDetails from './ShowPokemonDetails';

function Pokemon() {
    const [input, setInput] = useState("");

    const [data, isLoading, setUrl] = useFetch();

    function handleSubmit(e){
        // Prevent page refresh
        e.preventDefault();
    
        setUrl(`https://pokeapi.co/api/v2/pokemon/${input}`);
    }

    // If app is loading, there is no data, so show input field
    // Should isLoading & data is null be two different components/app states?
    // if(isLoading) {
    //     return(
    //         <>
    //             <form onSubmit={(e) => handleSubmit(e)}>
    //             {/* Use state variable as input. onChange requires a calback function with an event */}
    //             <input value={input} onChange={(e) => setInput(e.target.value)}/>
    //             <button>Load PokeStats</button>
    //             </form>
    //         </>
    //     );
    // }

    // If data has been fetched from API, display it
    return ( 
        <div className="App">
            {/* Form to handle user input if no data */}
            <form onSubmit={(e) => handleSubmit(e)}>
            {/* Use state variable as input. onChange requires a calback function with an event */}
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <button>Load PokeStats</button>
            </form>

            <h1>My Shiny Pokemon</h1>

            <h2>Pokemon stats for: {data && data.name}</h2>

            {/* Map each move in data.moves to a list element */}
            <ul>
                {isLoading && <p>Loading API data...</p>}

                {!isLoading && data && <ShowPokemonDetails data={data}/>}

                {/* {!isLoading && data && data.moves.map((oneMove, index) => {
                    return(
                        <li key={index}>
                            {oneMove.move.name}
                        </li>
                    )
                })} */}
            </ul>
        </div> 
    );
}

export default Pokemon;