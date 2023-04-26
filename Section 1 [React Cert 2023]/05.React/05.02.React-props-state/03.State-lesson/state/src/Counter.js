// FUNCTIONAL COMPONENT VERSION
// Shorter & more readable than the class component version

import React, { useState } from 'react';

function Counter() {
    // Structure: const [variable, setVariable] = useState("initial value");
    const [count, setCount] = useState(0);
    
    function countUp() {
        let newCount = count + 1;
        setCount(newCount);
    }

    function countDown() {
        let newCount = count - 1;
        setCount(newCount);
    }

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={countUp}>Count Up</button>
            <button onClick={countDown}>Count Down</button>
        </div>
     );
}

export default Counter;


// // CLASS COMPONENT VERSION

// import React, { Component } from 'react';

// class Counter extends Component {
//     state = { 
//         count: 0
//     } 

//     countUp() {
//         this.setState({ count: this.state.count + 1 });
//         console.log(this.state.count);
//     }

//     countDown() {
//         this.setState({ count: this.state.count - 1 });
//     }

//     render() { 
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>

//                 <button onClick={ () => this.countUp()}>Count Up</button>

//                 <button onClick={ () => this.countDown()} >Count Down</button>
//             </div>
//         );
//     }
// }
 
// export default Counter;