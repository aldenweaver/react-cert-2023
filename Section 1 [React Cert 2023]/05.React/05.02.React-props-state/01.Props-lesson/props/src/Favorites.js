function Favorites(props) {
    return ( 
        <p>Your favorite things are: { props.faves.join(', ') }</p>
     );
}

export default Favorites;