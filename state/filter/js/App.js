'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 'All' };
  }
  
  projectsViewHandler() {
    if (this.state.selected === 'All') {
      return this.props.projects;
    }
    return this.props.projects.filter(el => el.category === this.state.selected);
  }
  
  render() { 
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state}
          onSelectFilter={filter => this.setState({ selected: filter })} />
        <Portfolio projects={this.projectsViewHandler()} />
      </div>
    );
  }
}
