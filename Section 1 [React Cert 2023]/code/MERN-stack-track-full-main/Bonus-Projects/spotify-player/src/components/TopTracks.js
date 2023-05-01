/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';

import useGetTopTracks from '../hooks/useGetTopTracks';

function TopTracks() {
    // Contains the data that will come back from the API call via the cutom fetch hook
    const [data, isLoading, setTopXInput] = useGetTopTracks();

    // Local user input to bind to HTML field
    const [input, setInput] = useState("");

    {/* Modified from Spotify Developer site */}
    {/* async function getTopTracks(){
        // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
        return (await fetchWebApi(
            apiEndpoint, method, body
        )).items;
    } */}
    {/* End Modified from Spotify Dev code */}


    {/* function getTopTracks() {
        // Call the custom hook useGetTopTracks to get the data
        setData(useGetTopTracks);
    } */}


    // Handle user input
    function handleSubmit(e) {
        // Prevent page refresh
        e.preventDefault();
        
        //
        setTopXInput(parseInt(input));
    }

    {/* From Spotify Developer site */}
    // const topTracks = await getTopTracks();
    // console.log(
    //     topTracks?.map(
    //         ({name, artists}) =>
    //         `${name} by ${artists.map(artist => artist.name).join(', ')}`
    //     )
    // );
    {/* End Spotify Dev code */}

    return ( 
        <>
            {/* Use Input Functionality TODO: make component */}
            {/* Form to handle user input if no data */}
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* Use state variable as input. onChange requires a calback function with an event */}
                <span>
                    <p>See Your Top </p>
                    {/* TODO: verify input requirements using RegEx */}
                    <input value={input} onChange={(e) => setInput(e.target.value)}/>
                    <p> Tracks:</p>
                </span>

                <button>Load Top Tracks</button>
            </form>

            {data ? 
                console.log(data) 
                : "Loading data from Spotify API..."}
             
            {/* Modified from Spotify Developer site */}
            {/* {data ? 
                data.map(({name, artists}) => `${name} by ${artists.map(artist => artist.name).join(', ')}`) 
                : "Loading data from Spotify API..."} */}
            {/* End Modified from Spotify Dev code */}    
        </>
     );
}

export default TopTracks;