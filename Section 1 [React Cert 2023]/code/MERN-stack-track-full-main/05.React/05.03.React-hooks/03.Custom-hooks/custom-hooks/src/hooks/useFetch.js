import React, { useState, useEffect } from 'react';

function useFetch() {
    // Contain the data that will come back from an API call (in this case, JSON placeholder)
    // useState requires a parameter of an initial state value
    const[data, setData] = useState(null);

    // Use false as an initial isLoading state
    const [isLoading, setIsLoading] = useState(false);

    const [url, setUrl] = useState("");

    // Fetch data from the given url
    // then 
    // then
    // Only run useEffect whenever url is set
    // This will only work when there is a url now (because of [url])
    // Loading while fetching API data
    useEffect(() => {
      setIsLoading(true);

      // This url is a reference to the state variable url
      fetch(url)
          .then((response) => response.json())
          .then((data) => {
              setData(data);

              // Turn off loading flag once data comes back
              setIsLoading(false);
      });

    }, [url]);   

    // Return data state variable
    return [data, isLoading, setUrl];
}

export default useFetch;