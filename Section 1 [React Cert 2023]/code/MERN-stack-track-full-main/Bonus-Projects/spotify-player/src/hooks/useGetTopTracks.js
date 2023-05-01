/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';

import useAsyncAuthFetch from './useAsyncAuthFetch';

// useGetTopTracks is a custom hook that calls the custom hook useAsyncAuthFetch(props) with properties set specifically to get the top X tracks
function useGetTopTracks() {
    // Static custom token for authenticating & connecting to Spotify API
    {/* Modified from Spotify Developer site */}
    // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
    const [token, setToken] = useState('BQB-S7Nu1U1GAf4XwDsYmVk7cCC2EQxRIBSV1TGbxX0QfxuXBKX82O3i7o2QCTvY8E_v66_cuARSTyEbfpRjtP-h2MrJuLUfWdLHZMJKjKeTWyjHzaT4foy7H33qRUO47vbPoosRF4zZfmINvn_IETc3Fo1kjJ1wsVIrEt4_S6zMqVoMY5M-vfp2MEki3vOyKAwM__hPG9-zrmd1BBDS-O-saCgUSNJs-5xUClzoD8Oev3YMHbFZ1knpO5mkBiNno0-Pa7DDXMJHKgiknKv_SE1Du52vUY1C2URQEcNPqoRcFv-U4gZ1RHhZlyokbIJnOX07ATXWFbNrxr5YxIqcWCRh8oAD6q8d3xaqOhIpwdmwqcJ1Nl0');
    {/* End Modified from Spotify Dev code */}


    // Holds the user input for top x tracks
    // 0 < x <= 50, as per Spotify Dev docs Get User's Top Item's limit field requirements
    // Default value is 5, so will display user's top 5 tracks unless specified otherwise
    const [topXInput, setTopXInput] = useState(5);


    // Set all the values to pass to the useAsyncAuthFetch(props) custom hook
    let apiProps = {
        setApiEndpoint: `v1/me/top/tracks?time_range=short_term&limit=${topXInput}`,
        setApiUrl: `https://api.spotify.com/${apiEndpoint}`,
        setMethod: "GET",
        setBody: ""
    }

    // Call useFetch custom hook & store the variables it returns in local (state?) variable data
    const [data, isLoading, apiProps, setTopXInput] = useAsyncAuthFetch();

    return [data, isLoading, setTopXInput];
}

export default useGetTopTracks;