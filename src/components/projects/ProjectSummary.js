import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content black-text text-darken-3">
                <span className="card-title ">{project.title}</span>
                <p>Made by Alex Bautista</p>
                <p className="black-text">Jun 13</p>
            </div> 
        </div>
        
    )
}

export default ProjectSummary