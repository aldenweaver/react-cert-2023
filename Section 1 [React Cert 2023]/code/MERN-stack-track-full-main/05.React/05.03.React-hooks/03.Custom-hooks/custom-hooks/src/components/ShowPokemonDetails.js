function ShowPokemonDetails(props) {
    const {data} = props;
    const image = data.sprites.other.home.front_shiny;

    return ( 
        <div>
            <img alt="Pokemon" src={image}/>

            <h3>Moves:</h3>
            {data.moves.map((oneMove, index) => {
                return(
                    <li key={index}>
                        {oneMove.move.name}
                    </li>
                )
            })}
        </div>
     );
}

export default ShowPokemonDetails;