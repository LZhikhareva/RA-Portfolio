import React from 'react';

export default class Toolbar extends React.Component {
  render() {
    return (
      <div className="toolbarContainer">
        {this.props.filters.map(filter => (
          <div
            className={`filterName ${filter === this.props.selected ? 'active' : ''}`}
            onClick={() => this.props.onSelectFilter(filter)}
          >
            {filter}
          </div>
        ))}
      </div>
    );
  }
}