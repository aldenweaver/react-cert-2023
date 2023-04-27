# 03.03.Relational Databases
***

## What this lesson covers:

- Getting Started
- Albums router
- Controller vs Router
- Users router
- Relational data

***

## Getting Started

To begin, there should be a package.json provided. This means we can install all the dependencies with one command:

0. Install dependencies
<!-- 0. Install dependencies -->
```
npm install
```

Next, go into the `.env` file and use your MongoDB connection string:

```
MONGODB_URI="mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.<CLUSTER-CODE>.mongodb.net/album-app"
```

Now it's time to test that the server is running:

- Use `node index.js` in the terminal.
- `"server is on port 8080..."` and `"MONGODB CONNECTED"` should show up in the terminal if dependencies were installed
- Use `ctrl + c` to shut down the server

## Albums Router

In these lesson files, there is a FINAL and START version of the `./routes/albums` folder and `./routes/users` folder. We will be writing in the regularly named folders, but you can use the contents of the other folders as a reference.

We will be creating 2 routes for 2 different collections within the same database, and relating the data to each other by leaving a reference.

Let's begin by going to `./routes/albums/albumsModel.js` and setting up to create some albums

1. Set up a album model
<!-- 1. Set up a album model -->
```js
// 1a. Import mongoose
const mongoose = require("mongoose");

// 1b. Create a album schema
const albumSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            lowercase: true,
            required: true,
            default: ""
        },
        artistName: {
            type: String,
            lowercase: true,
            required: true,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

// 1c. Create the album model
const Album = mongoose.model("Album", albumSchema);

// 1d. Export the album model
module.exports = Album;
```

All we need right now is the `title` and `artustName`. `title` stays unique, but `artustName` isn't because 1 artist can make many albums. We will return to this file later to relate it to the users.

For now, let's continue to the `./routes/albums/albumsController.js` file

## Controller vs Router

So far, the lessons have shown a larger and larger router file. The purpose of the router is to route clients to the correct webpage or data, depending on the URL used. Now, we introduce controller files that contain all of the necessary functionality behind the routing.

In the `./routes/albums/albumsController.js` file, let's set up the ability to post a book to our database, and get to testing as soon as possible.

2. Begin setting up database functionality
<!-- 2. Begin setting up database functionality -->
```js
// 2a. Import the Album model
const Album = require("./albumsModel");

// 2b. Write functionality to create an album
async function createAlbum(req, res) {
    Album.create(req.body)
    .then((data) => {
        res.json({
            message: "success",
            payload: data
        });
    })
    .catch((error) => {
        console.log(`Create album error: ${error}`);
        res.json({
            message: "failure",
            payload: "Possible duplicate album",
        });
    })
}

// 2c. Export controller functions
module.exports = {
    createAlbum
}
```

Next, we plug the functionality into the router. This will keep our code cleaner and easier to read.

3. Create a router file
<!-- 3. Create a router file -->
```js
// 3a. Import express, router, and controller functionality
const express = require("express");
const router = express.Router();
const {
    createAlbum
} = require("./albumsController");

// 3b. Route the ability to create a book at localhost:8080/api/albums/create-album
router.post("/create-album", createAlbum);

// 3c. Export the router
module.exports = router;
```

Finally, we plug the router into `index.js` so that we can test this

4. Import the album router
<!-- 4. Import the album router -->
```js
const albumRouter = require("./routes/albums/albumsRouter");

app.use("/api/albums", albumRouter);
```

Now we can test this

- Use `node index.js` in the terminal.
- `"server is on port 8080..."` and `"MONGODB CONNECTED"` should show up in the terminal.
- Use Postman to make a POST request at `localhost:8080/api/albums/create-album`. Use the Body tab (raw - text -> JSON) and create an album with a `title` and `artistName`
- Use Compass to see the entry
- Use `ctrl + c` to shut down the server

## Users router

To set up the Users router, we will go through the same protocol that we did for the albums.

Model > Controller > Router > index

In `./routes/users/usersModel.js`, write the following:

5. Set up a user model
<!-- 5. Set up a user model -->
```js
// 5a. Import mongoose
const mongoose = require("mongoose");

// 5b. Create a user schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            lowercase: true,
            required: true,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

// 5c. Create the user model
const User = mongoose.model("User", userSchema);

// 5d. Export the User model
module.exports = User;
```

Next, we set up the users controller on `./routes/users/usersController`:

6. Set up users controller
<!-- 6. Set up users controller -->
```js
// 6a. Import the User model
const User = require("./usersModel");

// 6b. Write functionality to create a user
async function createUser(req, res) {
    User.create(req.body)
    .then((data) => {
        res.json({
            message: "success",
            payload: data
        });
    })
    .catch((error) => {
        console.log(`Create user error: ${error}`);
        res.json({
            message: "failure",
            payload: "Possible duplicate user",
        });
    })
}

// 6c. Export controller functions
module.exports = {
    createUser
}
```

Next we set up the users router on `./routes/users/usersRouter`:

7. Set up the users router
<!-- 7. Set up the users router -->
```js
// 7a. Import express, router, and controller functionality
const express = require("express");
const router = express.Router();
const {
    createUser
} = require("./usersController");

// 7b. Route the ability to create a book at localhost:8080/api/users/create-user
router.post("/create-user", createUser);

// 7c. Export the router
module.exports = router;
```

Finally, we plug it into the `index.js` file to test it:

8. Import the user router
<!-- 8. Import the user router -->
```js
const userRouter = require("./routes/users/usersRouter");
app.use("/api/users", userRouter);
```

And now we test it:

- Use `node index.js` in the terminal.
- `"server is on port 8080..."` and `"MONGODB CONNECTED"` should show up in the terminal.
- Use Postman to make a POST request at `localhost:8080/api/users/create-user`. Use the Body tab (raw - text -> JSON) and create a user with a `username`
- Use Compass to see the entry
- Use `ctrl + c` to shut down the server

## Relational data

Now that we have 2 collections, it's time to make the data related to each other.

1 User can have many favorite albums. 1 Album can have many user favorites. This is called a **Many-to-Many relationship**

The way this is set up on the server is by updating each model, and place references on each other.

In `./routes/albums/albumsModel.js`, add the following code:

9. Make the albums related to the users
<!-- 9. Make the albums related to the users -->
```js
// 9a. Define a Schema variable
const Schema = mongoose.Schema

// 1b. Create an album schema
const albumSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            lowercase: true,
            required: true,
            default: ""
        },
        artistName: {
            type: String,
            lowercase: true,
            required: true,
            default: ""
        },
        // 9b. Include userFavorite 
        userFavorite: [{
            type: Schema.Types.ObjectId,
            ref: "user"
        }]
    },
    {
        timestamps: true
    }
);
```

Note that the userFavorite property is an Array type, and uses `[]` hard brackets before `{}` curly brackets.

- `Schema.Types.ObjectId` refers to the MongoDB ObjectId data type
- `ref: "user"` will refer to the user collection

We should test this immediately:

- Use `node index.js` in the terminal.
- `"server is on port 8080..."` and `"MONGODB CONNECTED"` should show up in the terminal.
- Use Postman to make a POST request at `localhost:8080/api/albums/create-album`. Use the Body tab (raw - text -> JSON) and create an album with a `title`, `artistName`, and a `userFavorite` in an array. Make sure to grab the ID from the `user` collection
- Use Compass to see the entry
- Use `ctrl + c` to shut down the server

Next, we go back into the `./routes/users/usersModel.js` and do the same thing:

10. Make the users related to the albums
<!-- 10. Make the users related to the albums -->
```js
// 10a. Define a Schema variable
const Schema = mongoose.Schema

// 5b. Create a user schema
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            lowercase: true,
            required: true,
            default: ""
        },
        // 10b. Include favoriteAlbums
        favoriteAlbums: [{
            type: Schema.Types.ObjectId,
            ref: "album"
        }]
    },
    {
        timestamps: true
    }
);
```

We should test this immediately:

- Use `node index.js` in the terminal.
- `"server is on port 8080..."` and `"MONGODB CONNECTED"` should show up in the terminal.
- Use Postman to make a POST request at `localhost:8080/api/users/create-user`. Use the Body tab (raw - text -> JSON) and create an album with a `username` and a `userFavorite` in an array. Make sure to grab the ID from the `user` collection
- Use Compass to see the entry
- Use `ctrl + c` to shut down the server

NEXT STEPS:
- `./routes/users/usersController.js` - `function addUserFavoriteAlbum()`
- `./routes/users/usersController.js` - `function getUserAndAlbumsInfo()`
- `./routes/users/usersController.js` - `function deleteUserFavoriteAlbum()`