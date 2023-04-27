# State Exercise

![Exercise Preview](./state-exercise-preview.png)

## Exercise overview

In this exercise we will be building a task list that will allow users to write a list of things they want to remember to do. they should be able to add new items and remove existing items from the list. They should be able to set an importance level: low, medium, or high and this should effect the background color of each task.

## Setup a new Create-React-App project

1. Open VS code and then open your terminal from the menus at the top of the screen under `View > Terminal` or use the shortcut key **Ctrl+`**. 

2. In Terminal type `npx create-react-app task-list`. Here we are naming our project task-list. Wait while a new project is setup... It will display "Happy hacking!" when it's done.

3. Then in Terminal type `cd task-list` to enter the project folder.

## Install Bootstrap

4. Next let's import Bootstrap a front-end framework that provides CSS code to make our project beautiful. In terminal type `npm i bootstrap@4.1.1`. This will install the package into our project.

## Start Node Test Server

5. In terminal type `npm start` to start a node test server this should open a new tab in your browser to **localhost:3000**.

## Import Bootstrap

6. Then in VS Code, open the **/src/index.js** file and import the bootstrap css like by typing the following line  `import 'bootstrap/dist/css/bootstrap.css';` placing it just after the import for ReactDOM and just before our import for **Index.css**.

## Creating the App Component

7. Open **/src/App.js**. This file is an example component that create-react-app starts with. You can delete everything in this file. Then at the top of the file you can import react by typing the shortcut `imrc` and press the **Tab** key. This will create the import code `import React, { Component } from 'react';`

8. Next type the command `cc` and press **Tab** to create the boiler plate code for a class component. When the code appears start typing the class name `App`. It should fill in the for both the class name as well as in the default export command.

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() { 
    return <div></div>;
  }
}
 
export default App;
```

9. Replace the empty `<div>` with the following elements:

```jsx
<div className="container">
  <div className="row">
    <div className="col-12">
      <h1>Task List</h1>
      {/* Add Task form will go here... */}
    </div>
  </div>
  <div className="row">
    <div className="col-12">
      <ol> {/* Task list goes here... */} </ol>
    </div>
  </div>
</div>
```

## Create AddTask component

10. From the File Explorer from the left side panel **right click** on the **/src/** folder and select **New File**. Name the file `AddTask.js`.

11. Open the **/src/AddTask.js** file and use the shortcut commands `imrc` and `cc` to create the basic class component scaffolding. Name the class `AddTask`.

12. Replace the empty `<div>` the following elements:

```jsx
  <form>
    <input type="text" name="description" placeholder="description" required />
    <select name="importance">
      <option value="low"> Low </option>
      <option value="medium"> Medium </option>
      <option value="high"> High </option>
    </select>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  ```

Here we created a form with a text input for the task description, a select menu with the different options for importance level, and lastly a submit button.

13. Save this file and head back to **/src/App.js** and after the React import, include an import to the `AddTask` component.

```javascript
import AddTask from './AddTask';
```

14. Then replace the comment `{/* Add Task form will go here... */}` with our `<AddTask />` component.

```jsx
class App extends Component {
  render() { 
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Task List</h1>
            <AddTask />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ol> {/* Task list goes here... */} </ol>
          </div>
        </div>
      </div>
    );
  }
}
```

15. Save all files and head to the browser. Your form should be displaying.

## Create Task component

Let's create a single task with some place holder content.

16. From the File Explorer from the left side panel **right click** on the **/src/** folder and select **New File**. Name the file `Task.js`.

17. Open the **/src/Task.js** file and use the shortcut commands `imrc` and `cc` to create the basic class component scaffolding. Name the class `Task`.

18. Replace the `<div>` the following elements:

```jsx
<li> 
  Walk the dog. 
  <button className="btn btn-danger">X</button>
</li>
```

Here we created a list item that contains example text of what a task description might look like. This is followed by a button labeled with an `X` that will allow us to remove tasks from our list.

19. Save this file and head back to **/src/App.js** and after the React import, include an import to the `Task` component.

```javascript
import Task from './Task';
```

20. Then replace the comment `{/* Task list goes here... */}` with our `<Task />` component.

```jsx
class App extends Component {
  render() { 
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Task List</h1>
            <AddTask />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ol>
              <Task />
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
```

21. Save all files and head to the browser. Your task should be displaying.

## Adding Application State

22. Inside the `App` class above `render()` we will create a `constructor()` method and inside it, we will call the `super()` method which calls the constructor method on the parent class we extended from React.Component. This allows us to access variables on the parent class.

```jsx
constructor() {
  super();
  
}
```

23. Inside the `constructor()` create a `state` object with a property called `tasks` that holds some dummy task data to start with.

```jsx
constructor() {
  super();
  this.state = {
    tasks: [
      { id: 1, description: "Walk the dog", importance: "medium" },
      { id: 2, description: "Paint the fence", importance: "low" },
      { id: 3, description: "Eat ice cream", importance: "high" }
    ]
  };
}
```

## Displaying multiple Tasks and Passing State through Props

24. Replace the single instance of the `<Task />` with the following code:

```jsx
{ this.state.tasks.map((task)=> <Task key={task.id} task={task} />) }
```

Here inside the `<ol>` ordered list element we are calling map on the tasks that are stored in our component state. We pass into the map method receives an arrow function and the argument we pass in is a label we are calling `task` that represents a single task within the array of tasks. We then use Props attribute we create called `task={}` to pass in our task state as a prop. We also added the `key={}` and passed it the id of our task as React requires a unique identifier for each component.

Here is the current code for App class:

```jsx
class App extends Component {

  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, description: "Walk the dog", importance: "medium" },
        { id: 2, description: "Paint the fence", importance: "low" },
        { id: 3, description: "Eat ice cream", importance: "high" }
      ]
    };
  }

  render() { 
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Task List</h1>
            <AddTask />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ol>
              { this.state.tasks.map((task)=> <Task key={task.id} task={task} />) }
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
```

## Receiving the State Passed As Prop from Child Component

25. Open **/src/Task.js**, and replace the dummy text "Walk the dog." with `{ this.props.task.description }`.

```jsx
class Task extends Component {
  render() { 
    return (
      <li>
        { this.props.task.description }
        <button className="btn btn-danger">X</button>
      </li>
    );
  }
}
```

26. Save all the files and head to the browser. You should see the three tasks displaying.

## Adding new data to our state

27. Open **/src/App.js**, and inside our `App` class above our `render()` method we will create a new class method to handle form submissions to create a new task and update our state.

```jsx
addTask(newTask) {
    let updatedTasks = [...this.state.tasks, newTask];
    this.setState({tasks: updatedTasks});
  }
```

this method receives an argument `newTask` that will be passed from our form. Because we do not wish to modify the tasks state directly we create another array called `updatedTasks` and use the spread operator `...tasks` to pass in any previous tasks, and then add our `newTask` onto the end of the array. Then we call `setState()` to update our state with the new array.

In order for the AddTask component to be able to access this method we will have to pass a reference to it using props.

28. Inside the `render()` method add a prop on the `<AddTask />` element to pass a reference to the `addTask` method. This way addTask can be called from inside the AddTask component.

```jsx
<AddTask addTask={ this.addTask } />
```

Now this method can now be called outside of the `App` component inside the `AddTask` component. In order to preserve the correct reference to the `this` keyword we will add binding inside the `App` constructor.

```jsx
constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, description: "Walk the dog", importance: "medium" },
        { id: 2, description: "Paint the fence", importance: "low" },
        { id: 3, description: "Eat ice cream", importance: "high" }
      ]
    };
    this.addTask = this.addTask.bind(this);
  }
```

29. Let's head back to **/src/AddTask.js**, we would like to create a class property we will call `uniqueId` to identify each individual task. You might ask why not just use the length of array and add 1 to it each time we create a new task. This poses some issues in that our array length will always be changed as we add and also remove tasks. To solve this we will have a dedicated number called `uniqueId` that will always continue forward by 1 each time a new task is created regardless if the array changes. This is a common strategy used for id numbers in databases as well.

Add the following code to the top of your AddTask class:

```jsx
  constructor() {
    super();
    this.uniqueId = 0;
  }
```

30. Next, add a new class method above our `render()` method and call it `handleSubmit()`. Include the following code:

```jsx
handleSubmit(e) {
    e.preventDefault(); // prevents page reload on form submit
    this.uniqueId += 1; // increment out unique id number
    let newTask = {
      id: this.uniqueId,
      description: e.target.description.value,
      importance: e.target.importance.value
    };
    this.props.addTask(newTask);
    e.target.description.value = ''; // clear form input
  }
```

31. Then on our `<form>` element add `onSubmit={}` pointing to our newly created `handleSubmit()` class method.

```jsx
<form onSubmit={ this.handleSubmit }>
```

32. Let's also bind the correct reference to `this` in the `constructor()`.

```jsx
constructor() {
    super();
    this.uniqueId = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
```

33. Save all files and check your work in the browser. At this point, you should be able to type new task descriptions and submitting the form will add your new task displayed on screen.

## Removing data in our state

We would like the "X" buttons next to each task to remove that task from our state and thus remove the task from our screen.

34. Head back to the file

35. Open **/src/App.js**, and inside our `App` class above our `render()` method we will create a new class method to handle clicks from our remove button.

```jsx
 removeTask(taskId) {
    let updatedTasks = [...this.state.tasks];
    let index = updatedTasks.findIndex(task => task.id === taskId);
    updatedTasks.splice(index, 1);
    this.setState({tasks: updatedTasks});
  }
```

this method receives an argument `taskId` that will be passed from our Task component. Because we do not wish to modify the tasks state directly we create another array called `updatedTasks` and use the spread operator `...tasks` to pass in any previous tasks, and then we will use the findIndex method to find the index number of the element in the array that has the matching unique id number. Then we will use the `splice()` method to remove one element from the array based on its index position. Lastly, we call `setState()` to update our state with the updated array.

In order for the Task component to be able to access this method we will have to pass a reference to it using props.

36. Inside the `render()` method add a prop on the `<Task />` element to pass a reference to the `removeTask` method. This way removeTask can be called from inside of the Task component. Since the `key={}` attribute is reserved by REact and not an accesible prop on out child component, we will also add a new attribute called `id={}` so we can pass the unique id as a prop into our Task component.

```jsx
<Task key={task.id} id={task.id} task={task} removeTask={this.removeTask} />
```

Now this method can now be called outside of the `App` component inside the `Task` component. In order to preserve the correct reference to the `this` keyword we will add binding inside the `App` constructor.

```jsx
constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, description: "Walk the dog", importance: "medium" },
        { id: 2, description: "Paint the fence", importance: "low" },
        { id: 3, description: "Eat ice cream", importance: "high" }
      ]
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
```

37. Let's head back to **/src/Task.js**, and on our `<button>` let's add an id attribute to store our unique id number. This will help us identify which task to remove.

```jsx
<button id={this.props.task.id} className="btn btn-danger">X</button>
```

38. Next, we want to add a new class method above our `render()` method and call it `handleClick()`. Include the following code:

```jsx
handleClick(e) {
  let taskId = parseInt(e.target.id);
  this.props.removeTask(taskId);
}
```

Note that we are using `parseInt()` to convert the id number which is a type of string into a number so it will be easier to match with the id number on a task in our tasks array.

39. Back on our `<button>` we want to add our `onClick={}` event listener.

```jsx
<button id={this.props.task.id} className="btn btn-danger" onClick={this.handleClick}>X</button>
```

40. Let's also bind the correct reference to `this` in a `constructor()`.

```jsx
constructor() {
  super();
  this.handleClick = this.handleClick.bind(this);
}
```

41. Save all your files and test in the browser. Now the remove buttons work to remove tasks.

## Adding style to each task based on importance

42. In **/src/App.js** add this CSS file import code after the other imports 

```javascript
import './App.css';
```

43. Open **/src/App.css** and replace all the CSS code in that file with the following:

```css
body {
  padding: 30px;
}

h1 {
  text-align: center;
}

form {
  margin: 20px 0;
  background: #efefef;
  padding: 20px;
  border-radius: 5px;
}

input, select, button {
  display: inline-block;
  margin: 0 5px;
  height: 32px;
  vertical-align: top;
  padding: 2px;
}

select, button.btn.btn-primary, button.btn.btn-danger {
  padding: 5px;
  line-height: 1em;
}

ol {
  padding: 20px 20px 20px 45px;
  background: #fff;
  border-radius: 5px;
  border: 4px solid #efefef;
}

ol li {
  background: #fff;
  margin: 20px 0;
  font-size: 1.75em;
  padding: 5px 10px 5px 20px;
  border-radius: 5px;
}

ol li button {
  float: right;
  margin-top: 5px;
}

.container {
  max-width: 600px;
}

ol li.low { 
  background: white;
}

ol li.medium { 
  background: lightpink;
}

ol li.high { 
  background: lightcoral;
}
```

44. In **/src/Task.js**, in the `<li>` add the `className()` attribute and pass it `this.props.task.importance`. 

```jsx
<li className={this.props.task.importance}>
```

45. In **/src/App.js**, now you can delete the dummy tasks we added to the state. And instead start with an empty array.

```jsx
constructor() {
    super();
    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
```

46. Save all your files and check your work in the browser.