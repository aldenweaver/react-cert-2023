/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';

function useAsyncAuthFetch() {
  // Contain the data that will come back from the API call via the cutom fetch hook
    const [data, setData] = useState(null);

    // Flag to determine app state based on API call status
    const [isLoading, setIsLoading] = useState(false);

    // Used to locally manipulate the props passed down
    const [apiProps, setApiProps] = useState({});

    // Fetch data from the given url
    useEffect(() => {
      setIsLoading(true);

      // Currently hard-coded for GET because GET does not have a body & will throw an error when passed an empty body
      // TODO: refactor so it will check if POST, GET, etc
      // This functionality must live within useEffect() because it relies on apiProps (TODO: can it be refactored?)
      {/* Modified from Spotify Developer site */}
      function fetchWebApi() {
        fetch(`${apiProps.url}/${apiProps.endpoint}`, {
            headers: {
            Authorization: `Bearer ${apiProps.token}`,
            },
            method: `${apiProps.method}`
        })
          .then((response) => {JSON.stringify(response)})
          .then((data) => {
            setData(data);

            // Turn off loading flag once data comes back
            setIsLoading(false);
          });

        return data;
      }
      {/* End Modified from Spotify Dev code */}

      // Do the work to call the API & set the data
      fetchWebApi();

    }, [data, setIsLoading, apiProps]);   

    // Return data state variable
    return [data, isLoading, setApiProps];
}

export default useAsyncAuthFetch;