/*
    Importing necessary modules
*/ 
const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const methodOverride = require('method-override');
// connection to our database
const connectToMongoDB = require("./database/mongodb");

/*
    Setting up middleware
*/
// view engine settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
// Logging every request in the terminal
app.use(logger("dev"));
// Read incoming requests properly
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// We can use HTML methods with back-end methods smoothly
app.use(methodOverride('_method'));


/*
    Connecting routers, using URL extensions
*/
// Back-end
const pokemonRouter = require("./routes/api/pokemonRouter");
app.use("/api", pokemonRouter);

// Front-end
const viewsRouter = require("./routes/viewRouters/viewRouter");
app.use("/", viewsRouter);


/*
    Turning the server on
*/
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is on ${PORT}`);

    connectToMongoDB()
});