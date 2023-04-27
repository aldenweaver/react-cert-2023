# Props

Props (short for properties) provides us a way to pass data into our components. Props are pased to components as a standard JavaScript object so your properties can be labeled with different object keys and they can store any data type that is valid in JavaScript. Let's look at some examples.

- Use command `npx create-react-app props`

## Props in class based components

Let's say we have a main parent component called App and we would like to nest a Greeting component inside of it and change the greeting for different users based on their name. The component can stay the same but the props we pass into it can change dynamically. Let's explore this using class based components.

```jsx
import React, { Component } from 'react';
import './App.css'

class Greeting extends Component {
  render() { 
    return (
      <h1>Hey { this.props.name }</h1>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Greeting name="Rick" />
      <Greeting name="Morty" />
      <Greeting name="Summer" />
    </div>
  );
}

export default App;
```

Looking over this code we notice that props are passed to our components as attributes inside our JSX elements. `<Welcome />` represents one instance of of Welcome component. We added the `name="Rick"` attribute inside it so the final result is `<Welcome name="Rick" />`. This modifies the props object so it has a key called `name`. Now behind the scenes the props object would look like this:

```javascript
{
  name: "Rick"
}
```
This is made usable to our component by referring to the `props` object and using standard JavaScript dot notation to refer to the key we choose `props.name`. So again, `<Greeting name="Rick" />` stores the value "Rick" inside of `props.name` and can now be referenced inside the Greeting component. Remember because we are inside a class we prefix our props with the "this" keyword on classes to refer to the props on the class instance. Thus we use `this.props.name`.

```jsx
class Greeting extends Component {
  render() {
    return <h1>Hello { this.props.name }</h1>;
  }
}
```

The end result here is that the browser will display all three greetings each with a different name passed in as a prop.

```html
<div>
  <h1>Hello Rick</h1>
  <h1>Hello Morty</h1>
  <h1>Hello Summer</h1>
</div>
```

## Props in functional components

Here is the same example passing props into functional components instead.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(props) {
  return <h1>Hello { props.name }</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="Rick" />
      <Greeting name="Morty" />
      <Greeting name="Summer" />
    </div>
  );
}

export default App;
```

this will display exactly the same as in our class example above.

## Passing multiple props to the same component

What if wanted to not only pass the name but also the age of each user and whether they are living or dead? We can simply add additional prop attributes as needed.

```jsx
<Greeting name="Rick" age={73} alive={true} />
```

Notice that when passing a string we used `""` quotes, where as we used `{}` curly braces when passing a number. We can pass either integers like `73` or floating point numbers such as `73.5`.

Now we can update the component to accept these new props.

```jsx
function Greeting(props) {
  return (
    <h1>Hey {props.name}, You are {props.age} years old. {props.alive ? 'oh WOOHOO guess you survived that one huh?' : 'UGH you just died, guess I gotta cook up another clone'}</h1>
  );
}
```

Let's see the full code with different values for each instance of Greeting.

```jsx
import React, { Component } from 'react';
import './App.css';

function Greeting(props) {
  return (
    <h1>Hey {props.name}, You are {props.age} years old. {props.alive ? 'oh WOOHOO guess you survived that one huh?' : 'UGH you just died, guess I gotta cook up another clone'}</h1>
  );
}

function App() {
  return (
    <div className="App">
      <Greeting name="Rick" age={73} alive={true} />
      <Greeting name="Morty" age={13} alive={false} />
      <Greeting name="Summer" age={17} alive={true} />
    </div>
  );
}

export default App;
```

The final result in the browser is:

```html
<div>
  <h1>Hello Rick, You are 73 years old. Congratulations on being alive!</h1>
  <h1>Hello Morty, You are 14 years old. Congratulations on being alive!</h1>
  <h1>Hello Summer, You are 17 years old. You appear to have died on this adventure, better make a clone!</h1>
</div>
```

## Passing objects as props

Aside from passing strings, integers, floating numbers, boolean values, we can also pass objects, arrays, and functions. First let's look at passing those same props above as a single object.

```jsx
<Greeting person={ {name: "Rick", age: 73, alive: true} } />
```

Remember that props are already an object and by passing in our object will be nested inside of the props object. Now to retrieve these individual props in a class component it would be done like this:

```jsx
function Greeting(props) {
  return (
    <h1>Hey {props.person.name}, You are {props.person.age} years old. {props.person.alive ? 'oh WOOHOO guess you survived that one huh?' : 'UGH you just died, guess I gotta cook up another clone'}</h1>
  );
}
```

## Passing arrays as props

Lets look at accessing props containing arrays 

```jsx
<Favorites faves={ ["McNuggies with Szechaun Sauce", "Kalaxian Crystals", "Portal Fluid"] } />
```

Then to display the array values in our component we can use the join method to merge them together separated by commas.

```jsx
function Favorites(props) {
  return (
    <p>Your favorite things are: { props.faves.join(', ') }</p>
  );
}
```

## Iterating data to create a list of components using map

As data gets more complicated you may want to store a series of similar data in an array and then use the map function to iterate over it and display a component for each item in the array.

First we will add a constructor method to our class and inside it we will fill it an array of characters where each character is an object that has details about them the same as before but this time I will also include an `id`. This will come in handy later on. then in the render method we will use map to iterate our array of characters and for each character `char` we will display a `<Character />` component.

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Character(props) {
  return (
    <li>{ props.character.name }</li>
  )
}

class App extends Component {
  constructor() {
    super();
    this.characters = [
      {
        id: 1,
        name: "Rick",
        age: 73,
        alive: true,
        favoriteThings: ["McNuggies with Szechaun Sauce", "Kalaxian Crystals", "Portal Fluid"]
      },
      {
        id: 2,
        name: "Morty",
        age: 13,
        alive: false,
        favoriteThings: ["Jessica", "Yummy' Yums", "Eyeholes"]
      },
      {
        id: 3,
        name: "Summer",
        age: 17,
        alive: false,
        favoriteThings: ["Snake Jazz", "Being Queen", "Parties"]
      }
    ]; // end of characters array
  } // end of constructor

  render() { 
    return (
      <ul>
        { this.characters.map( (char) => <Character key={char.id} character={char} />) }
      </ul>
    );
  }
}

export default App;
```

Notice that React requires as a best practice that each Character component must have a unique identifiable `key` attribute. This is where I pass the `char.id` value so each gets a unique number.

This code will output into the browser.

```html
<ul>
  <li>Rick</li>
  <li>Morty</li>
  <li>Summer</li>
</ul>
```

To keep the code simple we are only displaying their name, but since there is a wealth of other data inside the characters array you could display any of the other props as well. 

## Passing functions as props

Let's say we want to create a button inside our nested component that once clicked will call a function that is inside our parent component. We can pass the function down from our parent component into the child component as a prop. 

```jsx
import React, { Component } from 'react';

function Character(props) {
  return (
    <li>{ props.character.name } <button onClick={props.greetAlert} >Greet</button> </li>
  )
}

class App extends Component {
  constructor() {
    super();
    this.characters = [ ]; // character data inside the array was hidden to save screen space.
  }

  greet() {
    alert('WUBBALUBBADUBDUB!');
  }

  render() {
    return <ul>
              { this.characters.map( (char) => <Character key={char.id} character={char} greetAlert={this.greet} />) }
           </ul>;
  }
}
```

Inside the App component where we are rendering `<Character key={char.id} character={char} greetAlert={this.greet} />` we added the prop attribute `greetAlert=""` which is storing a reference to `this.greet` method inside our class `greet() {...}`. Then inside of our Character component we added `<button onClick={props.greetAlert}>Greet</button>` which created a button that says Greet on it and whose `onClick={}` handler that when clicked will call `props.greetAlert` which is a stored reference back to `this.greet` on our class. Take some time to look over the code and follow through what happens when a user clicks the button line by line.