import React, { useState, useEffect } from 'react';

import useFetch from "../hooks/useFetch";

import '../App.css';

function Pokemon() {
    const [input, setInput] = useState("");

    const [data, isLoading, setUrl] = useFetch();

    function handleSubmit(e){
        // Prevent page refresh
        e.preventDefault();
    
        setUrl(`https://pokeapi.co/api/v2/pokemon/${input}`);
    }

    // If no data, show input field
    if(isLoading) {
        return(
            <>
                <form onSubmit={(e) => handleSubmit(e)}>
                {/* Use state variable as input. onChange requires a calback function with an event */}
                <input value={input} onChange={(e) => setInput(e.target.value)}/>
                <button>Load PokeStats</button>
                </form>
            </>
        );
    }

    // If data has been fetched from API, display it
    return ( 
        <div className="App">
            <h1>Pokemon stats for: {data.name}</h1>

            <ul>
                Moves:
                {data.moves.map((oneMove, index) => {
                    return(
                        <li key={index}>
                            {oneMove.move.name}
                        </li>
                    )
                })}
            </ul>
        </div> 
    );
}

export default Pokemon;