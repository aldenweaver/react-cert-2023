/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';

function useAsyncAuthFetch() {
  // Contain the data that will come back from the API call via the cutom fetch hook
    const [data, setData] = useState(null);

    // Flag to determine app state based on API call status
    const [isLoading, setIsLoading] = useState(false);

    // Used to locally manipulate the props passed down
    const [apiProps, setApiProps] = useState(null);

    // Fetch data from the given url
    useEffect(() => {
      setIsLoading(true);

      {/* Modified from Spotify Developer site */}
      async function fetchWebApi() {
        const res = await fetch(`${apiProps.url}/${apiProps.endpoint}`, {
            headers: {
            Authorization: `Bearer ${apiProps.token}`,
            },
            method: apiProps.method,
            body:JSON.stringify(apiProps.body)
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
    }, [apiProps]);   

    // Return data state variable
    return [data, isLoading, setApiProps];
}

export default useAsyncAuthFetch;