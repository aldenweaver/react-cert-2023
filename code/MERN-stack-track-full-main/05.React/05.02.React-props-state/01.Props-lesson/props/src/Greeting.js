import Favorites from './Favorites';

function Greeting(props) {
    return(
        <>
            <h1>Hey { props.name }, you are {props.age} years old. 
            {props.alive ? 'Congrats on being alive!' : 'You appear to have died on this adventure, better make a clone!'}
            </h1>

            <Favorites faves = { props.faves } />

            <button onClick={props.greetAlert}>PRESS ME</button>
      </>
    )
  }

  export default Greeting;
  