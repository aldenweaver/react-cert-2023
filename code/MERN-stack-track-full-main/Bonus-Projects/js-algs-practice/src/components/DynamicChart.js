/* eslint-disable no-lone-blocks */
/* 
ASSIGNMENT
Rules
    VanillaJS challenge - no libs allowed
    You can but do not have to make all of the HTML dynamically in JS
        You may, if you prefer, make the tags in the HTML directly charting data
1. CHARTING DATA: Using the data array of objects, make a column chart with:
    - x-axis has names under each column
    - y-axis has dollar values from 0-100000
    - The vertical bars (columns) along the x-axis show how much pay each employee gets
    Hint: divs or custom component would work nicely as the column rectangles; createElement & appendChild() are for making MTL elems dynamically with JS
2. ANIMATION: Make the bars animate - they should grow in height on page load, so that it takes x seconds to reach full height. 
    Hint: use HTML's setInterval()

3. INTERACTIVITY - ADD EMPLOYEE: Kicking it up another notch, give the user the ability to add 
        //    a new employee. The added user automatically appears in the
        //    chart, which re-animates
        //    HINT: Use form elements, if not an actual form: <input> <button>

        //    
4. INTERACTIVITY - FILTER DATA: 
Kicking it up yet another notch, give the user a menu to choose from, so that they can view the employees by salary (pay), by years or by BOTH; if user chooses BOTH, plot BOTH bars side-by-side. 
Every time the user chooses from the menu, the bars must re-animate
HINT: <select> <options> Salary, Years, Pay & Yrs
*/

import React, { useState } from 'react';

function DynamicChart() {
    // Static test data
    const data = [
        {name: "Amy", pay:45600, yrs: 5},
        {name: "Bob", pay:67600, yrs: 8},
        {name: "Cal", pay:43600, yrs: 3},
        {name: "Dan", pay:45600, yrs: 5},
        {name: "Eda", pay:78600, yrs: 7},
        {name: "Fay", pay:65600, yrs: 4}
    ]

    // Holds the values of the y-axis data labels
    // Static but could be made dynamically
    const yAxisLabelsText = [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000];

    // References the chart div on the DOM
    // useState()?
    // TODO: Currently running into appendChild error
    const [chart, setChart] = useState(null);


    function createXAxisLabels(xAxisLabelsText) {
        // Create the x axis labels div & add the className for CSS
        const xAxisLabels = document.createElement("div");
        xAxisLabels.classList.add("labels");

        for(let i = 0; i < xAxisLabelsText.length; i++) {
            let label = document.createElement("span");
            label.className = "label";
            label.textContent = xAxisLabels[i];
            xAxisLabels.appendChild(label);
        }

        // Add the x axis labels div to the chart
        setChart(chart.appendChild(xAxisLabels));
    }

    function createYAxisLabels() {
        // Create the y axis labels div & add the className for CSS
        const yAxisLabels = document.createElement("div");
        yAxisLabels.classList.add("labels");

        for(let i = 0; i < yAxisLabelsText.length; i++) {
            let label = document.createElement("span");
            label.className = "label";
            label.textContent = yAxisLabels[i];
            yAxisLabels.appendChild(label);
        }

        // Add the y axis labels div to the chart
        setChart(chart.appendChild(yAxisLabels));
    }

    // Will create the individual HTML bar element to display data for particular inputObj
    // Assumes an object structure of: {name, pay, yrs}
    // Hint: chart axes are a rectangle div with borders on just the left & bottom side
    function createDataBar(inputObj) {
        // // Creates an empty bar for the current data to go into
        // let bar = document.createElement("div");
        // bar.classList.add("bar");

        // // Add the current bar to the bars div
        // // Do this before setInterval so can see the animation
        // bars.appendChild(bar);

        // // Will store setInterval() so we can clear it later
        // let barInterval;

        // // Hold variables needed to manipulate bar height
        // let heightFactor = 5;
        // let finalHeight = Math.round(inputObj.pay / 170);

        // // Other strategy:
        // // Counter will get up to 40 by the end of 1 sec
        // //counter++;
        // // currentHeight will be 400 at the end of 1 sec
        // //currentHeight = counter * 10;

        // // Sets the bar height & animates it growing at a specified interval
        // // 25ms will run 40 times a second
        // barInterval = setInterval(() => {
        //     // Increase the heightFactor
        //     // Increases exponentially, so will increase speed as well
        //     heightFactor *= 1.1;

        //     if(heightFactor <= finalHeight) {
        //         // Grow from 0 to the final height
        //         bar.style.height = heightFactor + "px";
        //     }
        //     // Else bar is done gowing, so clean up setInterval function
        //     else {
        //         // Need to turn off counter otherwise setInterval will keep incrementing it
        //         // Cleans up setInterval() function
        //         clearInterval(barInterval);
        //     }    
        // }, 25);
    }

    // Builds the chart & fills it with data based on the inputArr
    function dataToChart(inputArr) {
        setChart(document.getElementById("chart"));

        // Holds the values of the x-axis data labels
        let xAxisLabels = [];

        // Create the bars div & add the className for CSS
        const bars = document.createElement("div");
        bars.classList.add("bars");

        // Fill the empty chart with data
        for(let i = 0; i < inputArr.length; i++) {
            // Creates an empty bar for the current data to go into
            let bar = document.createElement("div");
            bar.classList.add("bar");

            // Add the current bar to the bars div
            // Do this before setInterval so can see the animation
            bars.appendChild(bar);

            // Will store setInterval() so we can clear it later
            let barInterval;

            // Hold variables needed to manipulate bar height
            let heightFactor = 5;
            let finalHeight = Math.round(inputArr[i].pay / 170);

            // Other strategy:
            // Counter will get up to 40 by the end of 1 sec
            //counter++;
            // currentHeight will be 400 at the end of 1 sec
            //currentHeight = counter * 10;

            // Sets the bar height & animates it growing at a specified interval
            // 25ms will run 40 times a second
            barInterval = setInterval(() => {
                // Increase the heightFactor
                // Increases exponentially, so will increase speed as well
                heightFactor *= 1.1;

                if(heightFactor <= finalHeight) {
                    // Grow from 0 to the final height
                    bar.style.height = heightFactor + "px";
                }
                // Else bar is done gowing, so clean up setInterval function
                else {
                    // Need to turn off counter otherwise setInterval will keep incrementing it
                    // Cleans up setInterval() function
                    clearInterval(barInterval);
                }    
            }, 25);

            // Add the current name to the array of x-axis labels
            xAxisLabels.push(inputArr[i].name);
        }

        // Add the bars to the chart
        setChart(chart.appendChild(bars));

        // Add the Axis labels
        // Do this after iterating through data & filling xAxisLabels array
        createXAxisLabels(xAxisLabels);
        createYAxisLabels();
    }

    return ( 
        <>
            <h2>Dynamic Chart</h2>

            <p>Test Input: {JSON.stringify(data)}</p>

            <p>Output: </p>
            <div id="chart">{dataToChart(data)}</div>
        </>
     );
}

export default DynamicChart;