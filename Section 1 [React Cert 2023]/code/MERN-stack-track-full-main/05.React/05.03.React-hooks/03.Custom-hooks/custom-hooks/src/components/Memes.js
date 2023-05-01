import useFetch from "../hooks/useFetch";

function Memes() {
const [data] = useFetch("https://api.imgflip.com/get_memes");

    return ( 
        <ul>
            <h1>Memes</h1>
            {/* This is an API-specific way of going into the data structure this particular API returns (otherwise would just be data.map() */}
            {data && data.data.memes.map((meme) => {
                return (
                    <li key={meme.id}>
                        {meme.name}
                        <img src={meme.url} alt={meme.name}/>
                    </li>
                );
            })}
        </ul>
     );
}

export default Memes;