import 'bootstrap/dist/css/bootstrap.css';
// import "./CityInput.css";

function CityInput(props) {
    return ( 
        <form onSubmit={props.submit}>
            <input className="input-box" type="text" value={props.input} onChange={(e) => props.setInput(e.target.value)} placeholder="Enter a City"/>
            <p>This is the state variable input: {props.input}</p>
        </form>
     );
}

export default CityInput;