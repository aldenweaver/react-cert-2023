# Assignment 02.02. Express-CRUD
***

## Goals

- Create a server using the Express module
- Create an API that serves data based on the URL request
- Allow users to `C`reate, `R`ead, `U`pdate, and `D`elete data that exists on the server

***

![Sandwich Builder](https://i.imgur.com/Q1q6Ngd.jpg)

You are on a team for a company called ! They plan on placing snack-machine style sandwich builders all around the city, and need an API for available ingredients to select from. Here is the original data set:

```js
{
  "bread": [
    "white",
    "wheat",
    "sourdough",
    "rye",
    "multigrain"
  ],
  "meat": [
    "turkey",
    "ham",
    "roast beef",
    "chicken",
    "bacon",
    "salami"
  ],
  "cheese": [
    "cheddar",
    "swiss",
    "provolone",
    "mozzarella",
    "pepper jack"
  ],
  "veggies": [
    "lettuce",
    "tomato",
    "onion",
    "cucumber",
    "bell pepper",
    "spinach",
    "avocado"
  ],
  "condiments": [
    "mayonnaise",
    "mustard",
    "ketchup",
    "relish",
    "hot sauce",
    "ranch dressing"
  ]
}
```

Your task is to create a server with routes to perform the following actions:

- `R`ead all available ingredients for all ingredient types
- `R`ead all available ingredients for ONE ingredient type (You can make multiple routes, or use dynamic parameters!)
- `C`reate new ingredient types
- `U`pdate ingredients in each ingredient type
- `D`elete ingredients (not ingredient types)
