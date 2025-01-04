import './App.css';
import React from 'react';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: "All",
      projects: [{
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
        category: "Flayers"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
        category: "Websites"
      }, {
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
        category: "Flayers"
      }]
    };

  }

  handleFilterSelect = (filter) => {
    this.setState({ selected: filter });
  };

  render() {
    const filteredProjects = this.state.projects.filter(project => {
      if (this.state.selected === 'All') {
        return true;
      }
      return project.category === this.state.selected;
    });
    return (
      <div className='App'>
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          onSelectFilter={this.handleFilterSelect}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }
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

export default App;
