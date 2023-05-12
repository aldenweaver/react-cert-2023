import React, { useState, useEffect } from 'react';

function useFetch() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [url, setUrl] = useState("");

    useEffect(() => {
        // Loading while etching API data
        setIsLoading(true);

        fetch(url, {mode: 'cors'})
            .then((response) => response.json())
            .then((data) => {
                setData(data);

                // Turn off loading flag once data comes back
                setIsLoading(false);
            });
    }, [url]);

    return [data, isLoading, setUrl];
}

export default useFetch;