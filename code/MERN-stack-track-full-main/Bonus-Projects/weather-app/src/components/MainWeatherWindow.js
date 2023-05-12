import React, { useState, useEffect } from 'react';

import CityInput from "./CityInput";
import Today from './Today';
import WeatherBox from "./WeatherBox";
import useAxios from '../hooks/useAxios';

// import "./MainWeatherWindow.css";

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

    console.log("Right after 'const [thisWeek, setThisWeek] = useState([]);' in MainWeatherWindow: " + JSON.stringify(thisWeek));

    // Helper function to format day of the week
    // Leverage JS Date.getDay()
    // Since getDay only works on Date type objects,
    // make the date input into a Date object,
    // then call getDay() on it.
    // Sunday - Saturday : 0 - 6
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
    function getDay(date){
        let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return weekday[new Date(date).getDay()];
    } 

    function handleCitySubmit(e) {
        // Prevent page reload
        e.preventDefault();

        // JS Injection using cityInput as input
        setUrl(`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&APPID=6557810176c36fac5f0db536711a6c52`);
        setLoading(true);
    }

    // Will run only when loading is set by useAxios
    // Set state in useEffect
    useEffect(() => {
        // This if statement makes sure actions only take place after the search returns with data
        if(data) {
            // Displays info for today
            // Allows all conditionals to be based on state variables

            console.log(`In useEffect() after checking if data exists: data: ${JSON.stringify(data)}, loading: ${loading}`);

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
            const numWeatherBoxes = 4;
            const apiDataInterval = 8;

            let weekArray = [];

            // Old: Start at i=1 since first day of week is being displayed elsewhere already
            //for(let i=1; i<5; i++){}

            // Can this be done with map instead of for? or is map just for a foreach not a more complex for loop?

            // Start at 8 because there are 8 data points per day & today is already being displayed.
            for(let i=8; i<=apiDataInterval*numWeatherBoxes; i += apiDataInterval) {
                weekArray.push({
                    // Old WeatherBox data mapping
                    // currentData: {
                    //     weekDay: getDay(data.list[i].dt_txt),
                    //     temp: data.list[i].main.temp,
                    //     desc: data.list[i].weather[0].description,
                    //     img: data.list[i].weather[0].icon
                    // }

                    // New WeatherBox data mapping
                    weekDay: getDay(data.list[i].dt_txt),
                    temp: data.list[i].main.temp,
                    desc: data.list[i].weather[0].description,
                    img: data.list[i].weather[0].icon
                });

            }
            console.log("Week Array: " + JSON.stringify(weekArray));
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

            <CityInput input={cityInput} setInput={setCityInput} submit={handleCitySubmit}/>

            <div className="inner-main">
                <Today today={today} setToday={setToday}/>

                {/*{data ? console.log(data) : "Waiting for data..."}
                {<WeatherBox day={thisWeek[0].weekDay}/>*/}
            </div>
                {console.log("MainWeatherWindow component data state before WeatherBox component creation via map: " + JSON.stringify(thisWeek))}
            <div className="inner-main">
                {/*  New WeatherBox data mapping */}
                { data ?
                    thisWeek.map((dayData, index) => 
                        <WeatherBox key={index} {...dayData} />)
                    : "Weather Box Loading..."
                }

                {/*  Old WeatherBox data mapping */}
                {/* {data ? 
                        thisWeek.map((dayData, index) => <WeatherBox key={index} weekDay={dayData.currentData.weekDay} temp={dayData.currentData.temp} desc={dayData.currentData.desc} img={dayData.currentData.img}/>)
                    : "Weather Box Loading..."}  */}
            </div>
        </div>
     );
}

export default MainWeatherWindow;