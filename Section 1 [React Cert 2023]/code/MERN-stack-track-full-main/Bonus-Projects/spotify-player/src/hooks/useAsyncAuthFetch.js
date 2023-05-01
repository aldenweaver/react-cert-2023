/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';

function useAsyncAuthFetch() {
    // Flag to determine app state based on API call status
    const [isLoading, setIsLoading] = useState(false);

    // Contain the data that will come back from the API call via the cutom fetch hook
    const [data, setData] = useState(null);

    // URL of API
    const [apiUrl, setApiUrl] = useState("");

    // API endpoint to query
    const [apiEndpoint, setApiEndpoint] = useState("");

    // Token for API authenitcation
    const[token, setToken] = useState("");

    // API command (e.g., GET, POST, etc)
    const[method, setMethod] = useState("");

    // Data to send to API
    const[body, setBody] = useState("");

    // Fetch data from the given url
    useEffect(() => {
      setIsLoading(true);

      {/* Modified from Spotify Developer site */}
      async function fetchWebApi() {
        const res = await fetch(`${apiUrl}/${apiEndpoint}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
            method,
            body:JSON.stringify(body)
        });

        return await res.json();
      }
      {/* End Modified from Spotify Dev code */}

      fetchWebApi()
          .then((response) => response.json())
          .then((data) => {
              setData(data);

              // Turn off loading flag once data comes back
              setIsLoading(false);
      });
    }, [isLoading, setIsLoading, apiUrl, apiEndpoint, token, method, body]);   

    // Return data state variable
    return [data, isLoading];
}

export default useAsyncAuthFetch;