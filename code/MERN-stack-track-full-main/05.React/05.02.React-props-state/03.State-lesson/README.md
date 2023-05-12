# State

Component "state" refers to data declared within a component that is subject to change. When a change occurs, the component is then refreshed and updated with the newly changed "state"

Certain functions that React gives us out of the box allow us to schedule and update to a component’s state object. When state changes, the component responds by re-rendering.

## What is the difference between state and props?

Props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component. If props are passed from a parent into a children components then the children can't change the value of the props directly. Where as components have full control to change the state.

## Using state in class based components

In this example we want to display a number that will increase or decrease whenever a button is clicked. First we will just fill in the content to display.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  render() { 
    return <div>
             <h1></h1>
             <button>Count Up</button>
             <button>Count Down</button>
           </div>
  }
}

export default Counter;
```

Now to add state to our component, inside our class we simply add the property `state` and set it equal to an object `state = {}`, inside the object we will create a key called `count` to store the number. We shall set it to zero initially.

```jsx
class Counter extends Component {

  state = { count: 0 };

  return <div>
             <h1></h1>
             <button>Increment</button>
             <button>Decrement</button>
           </div>;
  }
}
```

_Note: React reserves the word `state` for this special purpose and will watch state for changes whenever `setState()` is called. So it's important to spell it correctly and only pass it an object. Inside the state object you can store any data types you like._

## Displaying state

In order to display the count inside the `<h1>` we can refer to the state property directly on our class instance using `{this.state.count}` referring to the count object key inside our state object.

```jsx
class Counter extends Component {

  state = { count: 0 };

  return <div>
             <h1>{ this.state.count }</h1>
             <button>Increment</button>
             <button>Decrement</button>
           </div>;
  }
}
```

## Setting state

In class components we use the `setState()` method that is available to us from React.Component. The `setState()` method accepts an object which is the new state you wish to set.

```jsx
class Counter extends Component {

  state = { count: 0 };

  return <div>
             <h1>{ this.state.count }</h1>
             <button onClick={ () => this.setState({ count: this.state.count + 1 }) }>Increment</button>
             <button onClick={ () => this.setState({ count: this.state.count - 1 }) }>Decrement</button>
           </div>;
  }
}
```

In the code above, we added the `onClick={}` attribute inside our buttons that will run the arrow function that will call `this.setState()`. We will pass in an object with the updated state we want in this case we want to take the current state `this.state.count` and `+ 1` or `- 1` to create the new state.

React recognizes the change of state and will re-render the component showing the newest count in the `<h1>`.

What happens if we try to change state directly?

```
this.state = { count: this.state.count + 1 };
```

If we do not use the setState method, then react will not update your component when the state changes. So we ALWAYS use the `setState()` method to update our state.

## Using logic to adjust state

Let's pretend we would like the count to never go below zero. To do so we need some conditional logic and our code inside the button is already getting long. Instead let's move the code to a class method called countUp and countDown and call those methods from the button's onClick event instead.

```jsx
class Counter extends Component {

  state = { count: 0 };

  countUp() {
    this.setState({ count: this.state.count + 1 });
  }

  countDown() {
    this.setState({ count: this.state.count - 1 });
  }

  render() { 
    return <div>
             <h1>{ this.state.count }</h1>
             <button onClick={ () => this.countUp() }>countUp</button>
             <button onClick={ () => this.countDown() }>countDown</button>
           </div>
  }
}
```

Now for the conditional logic to make sure the number never goes below zero. Wrap the setState with an if conditional to make sure the current count is greater than zero.

```jsx
class Counter extends Component {

    state = { count: 0 }

    countUp(){
        this.setState({ count: this.state.count + 1 });
    }

    countDown(){
        if(this.state.count > 0){
            this.setState({ count: this.state.count - 1 });
        }
    }

  render() { 
    return <div>
             <h1> {this.state.count} </h1>
             <button onClick={() => this.countUp() }>Count Up</button>
             <button onClick={() => this.countDown() }>Count Down</button>
           </div>
  }
}
```

Notice that inside our `onClick` listener we are calling an arrow function that in turn calls our class methods. This is working just fine, but it's a bit redundant. The reason we have written it this way is that it is one strategy to help JavaScript understand what the "this" keyword refers to. If we wrap in an arrow function then the contents of the arrow function are determined whilst still inside the class and thus "this" refers to the class instance. In fact, anytime we use "this" inside our class, "this" refers to an instance of our class. But what happens when we call a function on a button we clicked from the browser DOM? Now "this" is undefined! That is why if we remove the surrounding arrow function and refer to our class method directly we get an error because "this" is undefined and therefore can't call the setState method on undefined.

```jsx
<button onClick={ this.increment }>Increment</button> // Errors
```

To remedy this instead of wrapping the onClick call in an arrow function, we can instead tell our class inside a constructor to bind "this" (our class instance) to the class method. Then "this" will always refer to our class instance when we are inside that method no mater where it is called from. While we are at it for better readability and understanding, I'm going to move state inside the constructor function as well since that is where Babel the transpiler is actually putting it. Here is the completed code.

```jsx
import React, { Component } from 'react';

class Counter extends Component {

  constructor() {
    super();
    this.state = { 
      count: 0 
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() { 
    return <div>
             <h1>{ this.state.count }</h1>
             <button onClick={ this.increment }>Increment</button>
             <button onClick={ this.decrement }>Decrement</button>
           </div>;
  }
}

export default Counter;
```

As you can see the `onClick` code is greatly simplified by binding the correct reference of "this" to the methods inside of our constructor. In the wild you may see other developers using both of these strategies either binding inside the constructor or nesting their button methods inside another arrow function as we did previously.

## setState is Asynchronous

When you call `setState()` it takes time to update the state. While its working the rest of your code is still running and moving forward as it works in the background. Let's look at our increment method and see what happens if we try to log our state value immediately after calling setState.

```jsx
countUp() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count); // 0
  }
```

Refresh the browser, and open the JavaScript console and run this code. Then click the **Count Up** button. We will see the value of count is still at zero. That is because when setState is called console.log is called immediately afterwards and the state was still being updated.

Fortunately the `setState()` method accepts a callback function that will be run as soon as the state has finished being updated as the second argument. Let's check counts value inside a function as the second argument instead.

```jsx
increment() {
    this.setState({ count: this.state.count + 1 }, () => console.log(this.state.count) ); // 1
  }
```

Refresh the browser, and open the JavaScript console and run this code. Then click the **Count Up** button. We will see the value of count is now 1.

## Using state in functional components

In functional components we instead use the React Hook `useState()` so you will want to add it to your import command.

```javascript
import React, { useState } from 'react';
```

Inside our function we pass the `useState()` method the starting value which in our case is the number zero `useState(0)`. This returns an array whose first element is the state `count`, and the 2nd element is the function that lets us change the state `setCount`. By using ES6 destructuring syntax we can write this in fewer lines by creating a constant that is an array whose two elements are references to the state and set state function that is returned by useState(). This may look a bit funny at first glance, but it is short syntax that lets us name our state and set state function. I chose `[count, setCount]`. It is a convention in React to always name the second element "set" followed by the Capitalized name you used for the state. So if we were storing a person in state the elements in the array would be labeled `[person, setPerson]`. Since we are storing a count.. You get the idea.

```jsx
import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    // const [variable, setVariable] = useState("initial value");

    function countUp(){
        let newCount = count + 1;
        setCount(newCount);
    }

    function countDown(){
        if(count > 0){
            let newCount = count - 1;
            setCount(newCount);
        }
    }

    return (  
        <div>
            <h1>{count}</h1>
            <button onClick={countUp}>Count Up</button>
            <button onClick={countDown}>Count Down</button>
        </div>
    );
}

export default Counter;
```

When calling `setCount()` it is a best practice to not mutate the state directly but instead create a new variable and mutate the value. In my case I called it `newCount` and then pass it into `setState`.

```javascript
let newCount = count + 1;
setCount(newCount);
```

Also notice we can refer to our state anywhere inside of our function by simply referring to it as `count`. Just like class components, this state is only available inside of this component unless we pass the state to other components through props or by using additional hooks such as `useContext()`, but more on that later on.

## Review ES6 Spread Operator to update State holding Arrays or Objects

Occasionally we will want update arrays that already contain elements or objects containing many properties and we may only want to update a single property and the spread operator makes this easy without having to type back in all the same information again.

Here is a quick review of the `...` spread operator. It can be used to take an existing array and add another element to it while still preserving the original array. For example,

```javascript
let fruit = ['Apples', 'Oranges'];
let updatedFruit = [...fruit, 'Bananas'];
```

In the code above the `...` spread operator takes all the existing elements inside the `fruit` array and puts them into our new `updatedFruit` array, and then we also add `Bananas` as well.

We could have used `fruit.push('Bananas');` and directly added a banana to the first array, but that would mutate the original array. This is a no-no for React state. We never want to mutate our state directly! It is a best practice to create a new variable to store the updated state and then pass that into the `setState()` method.

We can also use the `...` spread operator on Objects as well.

```javascript
let person = { id: 1, name: 'Bob', age: 72 };
let updatedPerson = {...person, age: 73 };
```
 This will only change age but also include all of the other properties of `person` as well. So the value of upDated person is now `{ id: 1, name: 'Bob', age: 73 }`.

 
