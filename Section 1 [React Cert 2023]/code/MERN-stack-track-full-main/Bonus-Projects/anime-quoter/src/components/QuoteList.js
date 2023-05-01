import React, { useState } from 'react';

import useFetch from '../hooks/useFetch';

function QuoteList() {
    // const apiUrl = "https://animechan.vercel.app/api/quotes";

    const [input, setInput] = useState("");

    // Store the datafetched from the given API url
    const [data, isLoading, setUrl] = useFetch();

    function handleSubmit(e){
        e.preventDefault();

        // Get random anime quote by anime title using input from user
        setUrl(`https://animechan.vercel.app/api/random/anime?title=${input}`);
    }
 
    // If isLoading is true, return this
    // final return will not be reached by code, so only this Loading part will be displayed
    // Could replace div with custom Loading.js component
    if(isLoading) {
        return (
            <>
                <h1>Anime Random Quote Generator</h1>
                <h3>Search by anime title: </h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button>Search!</button>
                </form>
            </>
        );
    }

    return (
        <>
            <p>"{data.quote}"</p>
            <p>-<b>{data.character}</b> in the anime <i>{data.anime}</i></p>
        </>

    );
}

export default QuoteList;