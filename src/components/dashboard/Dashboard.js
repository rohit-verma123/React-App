import React, { Component } from 'react'
//import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { projects } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {/* {<ProjectList projects={projects} />} */}
            <div className="project-list section">
              { projects && projects.map(project => {
                return (
                  <div key={project.id} className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                      <span className="card-title ">{project.title}</span>
                      <p>Posted by The Net Ninja</p>
                      <p className="grey-text">3rd September, 2am</p>
                    </div>
                  </div>
                )
              })}  
            </div>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
   console.log(state);
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)
