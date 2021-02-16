import React from 'react';

const ProjectTask = (props) => {
    return(
        <div>
            <ul>
                <li>{props.project.projectTask}</li>
            </ul>
        </div>
    )
}

export default ProjectTask;