/* eslint-disable no-lone-blocks */

// React imports
import React, { useState } from 'react';

// File imports
import AddTask from './AddTask';
import Task from './Task';

// CSS imports come last, after the other imports
import './App.css';

function App() {
  const initialTasks = [
    { id: 1, description: "Walk the dog", importance: "medium" },
    { id: 2, description: "Paint the fence", importance: "low" },
    { id: 3, description: "Eat ice cream", importance: "high" }
  ];

  const [tasks, setTasks] = useState(initialTasks);


  {/* This method receives an argument newTask that will be passed in from our form. Because we do not wish to modify the tasks state directly, we create another array called updatedTasks and use the spread operator ...tasks to pass in the current state, and then add our newTask onto the end of the array. Then we call setTasks() to update our state with the new array. */}
  function addTask(newTask) {
    let updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  // This function handles clicks from the remove button
  function removeTask(taskId) {
    // Gives us a copy of state that we can modify
    let updatedTasks = [...tasks];

    let index = updatedTasks.findIndex(task => task.id === taskId);

    // Remove task from our copy
    // Here, the splice function is removing one element from the array based on its index position
    updatedTasks.splice(index, 1);

    // Set state to new array without the removed task
    setTasks(updatedTasks);
  }

  return ( 
      <div className="container">
        <div className="row">
          <h1>Task List</h1>
            {/* Add Task Form */}
            <AddTask addTask={ addTask } lastId={ tasks.length }/>
        </div>
        <div className="row">
          <div className="col-12">
            <ol>
              {/* Task List */}
              {/* Old code: <Task/> */}

              {/* New code: For each task in tasks, make a Task component. The id of the task will be the key required by React for the mapping. The individual task will be specified by passing it to the Task component as an attribute called "task{}". Thus, this task attribute takes our task state as a prop. Attributes live on components & receive props passed to them. The prop they receive as inputs is the current state of the object corresponding to the attribute the component needs to display. */}
              { tasks.map( (task) => <Task key={task.id} id={task.id} task={task} removeTask={removeTask} /> ) }
            </ol>
          </div>
        </div>
      </div>
   );
}

export default App;