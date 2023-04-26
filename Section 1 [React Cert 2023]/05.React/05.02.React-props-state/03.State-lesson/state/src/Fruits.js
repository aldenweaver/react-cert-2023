import React, { useState } from 'react';

function Fruits() {
    const [fruit, setFruit] = useState(["Apples"]);

    const randomFruit = [
        "Bananas",
        "Mangos",
        "Cherries"
    ];

    function addFruit() {
        let randomIndex = Math.floor(Math.random() * 3);
        let updatedState = [...fruit, randomFruit[randomIndex]];

        setFruit(updatedState);
    }

    return ( 
        <>
            <h1>{fruit.join(", ")}</h1>
            <button onClick={addFruit}>Add Fruit</button>
        </>
     );
}

export default Fruits;