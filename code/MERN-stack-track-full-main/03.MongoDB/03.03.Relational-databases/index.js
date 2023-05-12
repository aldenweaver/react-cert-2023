/*
    0. Starter code - Modules
*/
const express = require("express");
const app = express();
const logger = require("morgan");

/*
    0. Starter code - Database connection
*/
const connectToMongoDB = require("./database/mongodb");

/*
    0. Starter code - Middleware
*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));


/*
    4. Import the album router
*/


/*
    8. Import the user router
*/


/*
    0. Starter code - Server start
*/
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is on port ${PORT}...`)
   
    connectToMongoDB();
});