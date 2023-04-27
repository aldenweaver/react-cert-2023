import React, { useState, useEffect } from 'react';

import CityInput from "./CityInput";
import WeatherBox from "./WeatherBox";
import useAxios from '../hooks/useAxios';

import "./MainWeatherWindow.css";

function MainWeatherWindow(props) {
    const [cityInput, setCityInput] = useState("");
    const [setUrl, data, loading, setLoading, error] = useAxios();
    //const [title, setTitle] = useState();

    const [today, setToday] = useState({
        title: <h1 className="title">Weather Forecast</h1>,
        styles: {
            visibility: "hidden",
            opacity: "0"
        },
        temp: 0,
        desc: "",
        img: "01d" // svg file name defaul value
    });

    const [thisWeek, setThisWeek] = useState([]);

    function getDay(date){
        let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return weekday[0];
    }

    function handleCitySubmit(e) {
        // Prevent page reload
        e.preventDefault();

        // Currently a static URL
        setUrl(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&APPID=6557810176c36fac5f0db536711a6c52`);
        setLoading(true);
    }

    // Will run only when loading is set by useAxios
    useEffect(() => {
        // This if statement makes sure actions only take place after the search returns with data
        if(data) {
            // Displays info for today
            // Allows all conditionals to be based on state variables

            console.log(data);

            //useAxios sets the data, if the data exists, set todays info to just what we need & it will start displaying based on that
            setToday({
                ...today,
                title: <h1 className="title">{data.city.name}</h1>,
                styles: {
                    visibility: "visible",
                    opacity: "1"
                },
                temp: data.list[0].main.temp,
                desc: data.list[0].weather[0].description,
                img: data.list[0].weather[0].icon
            });

            // Set thisWeek
            let weekArray = [];
            // Start at i=1 since first day of week is being displayed elsewhere already
            // Can this be done with map instead of for? or is map just for a foreach not a more complex for loop?
            for(let i=1; i<5; i++) {
                weekArray.push({
                    dayData: {
                        weekDay: getDay(data.list[i].dt_txt),
                        temp: data.list[i].main.temp,
                        desc: data.list[i].weather[0].description,
                        img: data.list[i].weather[0].icon
                    }
                });
            }

            setThisWeek(weekArray);
        }
    }, [loading]);

    // If there is no city input, display the general app title
    //const title = props.city ? null : <h1 className="title">Weather Forecast</h1>

    // Declare default value, use let to make it dynamic/changeable 
    //let title = <h1 className="title">Weather Forecast</h1>

    // Source and style of an img tag can both depend on props
    return ( 
        <div className="main">
            <div className="inner-main">
                {/* Import a dynamic image based on the data of what weather comes back when the code calls the Weather API */}
                <img 
                    // Require is located here because the path needs to be dynamic
                    src={require(`../images/${today.img}.svg`)}
                    alt="sun"
                    style={today.styles}
                />

                {/*Everything in this tag is only visible after the search, so can reference today data because it will exist */}
                <div 
                    className="today"
                    style={today.styles}
                >
                    <span>Today</span>
                    {today.title}
                    <p>Temperature: {Math.round(today.temp - 273.15)} °C</p>
                    <p>{today.desc.toLowerCase()}</p>
                </div>
            </div>
            <CityInput input={cityInput} setInput={setCityInput} submit={handleCitySubmit}/>
            {/*{data ? console.log(data) : "Waiting for data..."}*/}
            {/*<WeatherBox day={thisWeek[0]}/>*/}
            {data ? 
                thisWeek.map((dayData, index) => <WeatherBox key={index} weekDay={dayData.weekDay} temp={dayData.temp} desc={dayData.desc} img={dayData.img}/>)
                : "Weather Box Loading..."
            }
            
        </div>
     );
}

export default MainWeatherWindow;