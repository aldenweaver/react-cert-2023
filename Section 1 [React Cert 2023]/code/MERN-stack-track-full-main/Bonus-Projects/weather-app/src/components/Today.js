function Today(props) {
    // Syntactic sugar to store props in local variables
    // Without this, would have to prefix them with props.today (<h1>{props.today.title}</h1>)
    const {title, styles, temp, desc, img} = props.today;

    return ( 
        <>
            {/* Import a dynamic image based on the data of what weather comes back when the code calls the Weather API */}
            <img 
                // Require is located here because the path needs to be dynamic
                src={require(`../images/${img}.svg`)}
                alt="sun"
                style={styles}
            />

            {/*Everything in this tag is only visible after the search, so can reference today data because it will exist */}
            <div 
                className="today"
                style={styles}
            >
                <span>Today</span>
                {title}
                <p>Temperature: {Math.round(temp - 273.15)} °C</p>
                <p>{desc.toLowerCase()}</p>
            </div>
        </> 
    );
}

export default Today;