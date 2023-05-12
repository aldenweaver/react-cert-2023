/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';

function AddTask(props) {

    {/* We would like to create a class property we will call uniqueId to identify each individual task. You might ask why not just use the length of array and add 1 to it each time we create a new task. This poses some issues in that our array length will always be changed as we add and also remove tasks. To solve this, we will have a dedicated number called uniqueId that will always continue forward by 1 each time a new task is created regardless if the array changes. This is why we are passing in the length of the initial state tasks, so that the uniqueId continues from there. This is a common strategy used for id numbers in databases as well. */}
    {/* Note that inside of useState() we are adding 1 to the initial value. This is to avoid a bug that has to do with setState() being asynchronous and the creation of a new task object being synchronous. */}
    const [uniqueId, setUniqueId] = useState(props.lastId + 1);

    function handleSubmit(e){
        // Prevent refreshing the page
        e.preventDefault();

        let newId = uniqueId + 1;

        // Set a unique ID for the next incoming task
        setUniqueId(newId);

        let newTask = {
            id: uniqueId,
            description: e.target.description.value,
            importance: e.target.importance.value
        }

        props.addTask(newTask);

        // Clear the form input
        e.target.description.value = "";
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" placeholder="description" required />
            <select name="importance">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     );
}

export default AddTask;