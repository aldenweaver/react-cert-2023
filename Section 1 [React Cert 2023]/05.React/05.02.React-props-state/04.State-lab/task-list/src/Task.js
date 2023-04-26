function Task(props) {
    function handleClick(e) {
        // Use parseInt to convert the id from a string to a number so we can match it with the id number on the tasks in the tasks array
        let taskId = parseInt(e.target.id);
        props.removeTask(taskId);
    }

    return ( 
        // Dynamic class names - making the className equivalent to the importance will change the appearance based on the level of importance of the task
        <li className={ props.task.importance }>
            { props.task.description }
            <button id={props.id} className="btn btn-danger" onClick={handleClick}>X</button>
        </li>
     );
}

export default Task;