import React from 'react';

const Project = (props) => {

    return(
        <div className="project">
            <h3>{props.project.projetcTitle}</h3>
            <ul>
                <li>{props.project.projectTask}</li>
            </ul>
            <button>Add</button>
        </div>
    )

}

export default Project;