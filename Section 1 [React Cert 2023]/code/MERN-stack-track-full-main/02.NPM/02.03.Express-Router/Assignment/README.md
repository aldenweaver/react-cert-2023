# Lesson 02.03: Express-Router Assignment
***

## Goals

- Create a server using the Express module
- Create an API with full CRUD functionality on 2 sets of data

***

![Stock Image of Push Up](https://i.imgur.com/my52chH.jpg)

It's time to get in shape! Back-end functionality is fairly standard, and it takes some repetitions before getting a handle of it. The examples here uses datasets for Music and Actors, but feel free to use a set of data that you will enjoy working with!

## Instructions:
- Begin inside of an empty folder
- Create an **index.js** file
- Create a **./routes** folder
- Create a **./routes/musicRouter** file
- Create a **./routes/actorRouter** file
- Use command `npm init -y` to initialize a Node project
- Use command `npm install express morgan uuid` so our necessary modules are ready to use

- - In **index.js**
1. Import express & Morgan, set up app variable
2. Set up middleware
3. Import Router files (`"./routes/musicRouter`)
4. Set up the URL routes to connect to each router
5. Set up the port and begin listening

- - In **./routes/musicRouter.js**
6. Import express & uuid, set up router
7. Create an array of your favorite Musical Artists using uuidv4() for unique ID's

The data we will create is based on what music artists you listen to. Here is an example:

```js
let musicArray = [
  {
    id: uuidv4(),
    name: "KAYTRANADA",
    age: 30,
  },
  {
    id: uuidv4(),
    name: "Kenny Beats",
    age: 31,
  },
  {
    id: uuidv4(),
    name: "Tyler the Creator",
    age: 31,
  },
  {
    id: uuidv4(),
    name: "Denzel Curry",
    age: 27,
  },
];
```

Make sure that the ages and names vary enough to test for sorting methods.

8. Handle GET requests to /v1/query and Export the router at the bottom of the page
- TEST IT WITH POSTMAN
9. Handle POST requests to /v1/create-artist
- TEST IT WITH POSTMAN
10. Handle PUT requests to /v1/update-by-id/:id
- TEST IT WITH POSTMAN
11. Handle DELETE requests to /v1/delete-artist-by-id/:id
- TEST IT WITH POSTMAN

## BONUS 1

12. Create sort method for the musical artists
13. Apply the sort method in your GET method

- - In **./routes/actorRouter.js**
6. Import express & uuid, set up router
7. Create an array of your favorite Actors using uuidv4() for unique ID's

The data we will create is based on what music artists you listen to. Here is an example:

```js
let actorsArray = [
  {
    id: uuidv4(),
    name: "Jonah Hill",
    age: 38,
  },
  {
    id: uuidv4(),
    name: "Leonardo DiCaprio",
    age: 48,
  },
  {
    id: uuidv4(),
    name: "Finn Wolfhard",
    age: 19,
  },
  {
    id: uuidv4(),
    name: "Samuel L Jackson",
    age: 73,
  },
];
```

Make sure that the ages and names vary enough to test for sorting methods.

8. Handle GET requests to /v1/query and Export the router at the bottom of the page
- TEST IT WITH POSTMAN
9. Handle POST requests to /v1/create-artist
- TEST IT WITH POSTMAN
10. Handle PUT requests to /v1/update-by-id/:id
- TEST IT WITH POSTMAN
11. Handle DELETE requests to /v1/delete-artist-by-id/:id
- TEST IT WITH POSTMAN

## BONUS 2

12. Create sort method for the actors
13. Apply the sort method in your GET method