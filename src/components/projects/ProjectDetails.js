import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
      return (  
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.connect }</p>
                    </div>
                    <div className="card-action gret lighte-4 white text">
                    <div>Made by {project.authorFirstName} {project.authorLastName}</div>
                    <div>June 14</div> 
                    </div>
                </div>
            </div>
      )
    } else {
      return (
        <div className='container center'>
            <p>Loading Page.....</p>
        </div>
      )  
    }
  
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)