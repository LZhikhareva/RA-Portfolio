
import React from 'react';

export default class ProjectList extends React.Component {
  render() {
    return (
      <div className='projects'>
        {this.props.projects.map(project => (
          <div className='projectItem'>
            <img src={project.img} />
          </div>
        ))}
      </div>
    );
  }
}