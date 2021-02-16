import React from 'react';

const TodoListTask = (props) => {

    const ActionButton = () => 
        <div className="action_button">
            <button onClick={props.deleteTask} >Delete</button>
         </div>

    const PrioreCheck = () => 
        <div className="priore_check">
            <p onClick={props.impTask}>🚩</p>
        </div>  

const EditTask = () => 
    <div className="edit_task">
        <button onClick={props.editTasks}>Edit</button>
    </div>  

    return(
        <div className = "task">
            <ul>
                <li>
                    <h2>{props.task.title}</h2>
                    <p>{props.task.description}</p>  
                    <h3>{props.task.time}</h3>
                    <ActionButton></ActionButton>
                    <PrioreCheck></PrioreCheck>
                    <EditTask></EditTask>
                </li>
            </ul>  
        </div>
    )
}

export default TodoListTask;