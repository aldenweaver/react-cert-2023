/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';

import useAsyncAuthFetch from '../hooks/useAsyncAuthFetch';

function TopTracks() {
    // Call the custom fetch hook useAsyncAuthFetch() to get the data & store the variables it returns in local (state?) variable data
    const [data, isLoading, setApiProps] = useAsyncAuthFetch();

    // Local user input to bind to HTML field
    // Will hold the number of top tracks they want to display
    const [topXInput, setTopXInput] = useState(5);

    // Static custom token for authenticating & connecting to Spotify API
    {/* Modified from Spotify Developer site */}
    // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
    // Note: as per Spotify Dev docs, tokens are valid for 1 hour only, need to refresh this static variable in-code at least every hour by re-generating a new token on the Spotify Dev site & copy/pasting it into this variable; TODO: fix by adding OAuth functionality
    const token = "BQB-S7Nu1U1GAf4XwDsYmVk7cCC2EQxRIBSV1TGbxX0QfxuXBKX82O3i7o2QCTvY8E_v66_cuARSTyEbfpRjtP-h2MrJuLUfWdLHZMJKjKeTWyjHzaT4foy7H33qRUO47vbPoosRF4zZfmINvn_IETc3Fo1kjJ1wsVIrEt4_S6zMqVoMY5M-vfp2MEki3vOyKAwM__hPG9-zrmd1BBDS-O-saCgUSNJs-5xUClzoD8Oev3YMHbFZ1knpO5mkBiNno0-Pa7DDXMJHKgiknKv_SE1Du52vUY1C2URQEcNPqoRcFv-U4gZ1RHhZlyokbIJnOX07ATXWFbNrxr5YxIqcWCRh8oAD6q8d3xaqOhIpwdmwqcJ1Nl0";
    {/* End Modified from Spotify Dev code */}

    // Handler function for setting topXInput state variable when the value of the HTML input field changes
    function handleTopXInputChange(e) {
        setTopXInput(e.target.value);
    }

    // Handle user input
    function handleSubmit(e) {
        // Prevent page refresh
        e.preventDefault();
        
        // Set the state variable based on the user input
        setTopXInput(parseInt(topXInput));

        // Set all the values to pass to the useAsyncAuthFetch(props) custom hook
        // endpoint: Endpoint to query on API
        // url: URL of API
        // token: Token for API authenitcation
        // method: API command (e.g., GET, POST, etc)
        // body: Data to send to API TODO currently no body because hard-coded for GET, which throws an error when passed an empty body (body: "")
        setApiProps({
            endpoint: `v1/me/top/tracks?time_range=short_term&limit=${topXInput}`,
            url: "https://api.spotify.com",
            token: token,
            method: "GET"
        });
    }

    return ( 
        <>
            {isLoading && <p>Loading API data...</p>}

            {/* User Input Functionality TODO: make component */}
            {/* Form to handle user input if no data */}
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* Use state variable as input. onChange requires a calback function with an event */}
                <span>
                    <p>See Your Top </p>
                    {/* TODO: verify input requirements using RegEx */}
                    <input 
                        value={topXInput} 
                        onChange={handleTopXInputChange}
                    />
                    <p> Tracks:</p>
                </span>

                <button>Load Top Tracks</button>
            </form>

            {/* Log data to console if it exists */}
            {data ? 
                console.log(data) 
                : "Loading data from Spotify API..."}

            {/* TODO: display data */}
            {/* Display Top Tracks TODO: make component, where the component is a generic display for a single Track, & the top tracks data is mapped to many Track components for display in the TopTracks component */}
    
        </>
     );
}

export default TopTracks;