import React, { useState } from 'react';

// import "./WeatherBox.css";

function WeatherBox(props) {

    return ( 
        <div className="weather-box">
            {/* <h1>{props.date ? getDay(props.date) : ""}</h1> */}
            <h1>{props.weekDay}</h1>
            <h3>{props.desc}</h3>
            <img
                src={props.img}
                alt="sun"
            />
            {/* Convert Kelvin to °C */}
            <span className="temp">{Math.round(props.temp - 273.15)} °C</span>
        </div>
     );
}

export default WeatherBox;