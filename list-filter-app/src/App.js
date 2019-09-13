//list-filter;

import React from "react";
import people from "./assets/people";
import FilterModule from "./components/FilterModule/FilterModule";
import FilterButton from "./components/FilterButton/FilterButton";

class App extends React.Component {
  state = {
    display: null
  };
  handleButton = gender => {
    this.setState({
      display: gender ? people.filter(value => value.gender === gender) : people
    });
  };
  render() {
    return (
      <>
        <FilterButton name="Show men" gender="m" handler={this.handleButton} />
        <FilterButton name="Show women" gender="f" handler={this.handleButton} />
        <FilterButton name="Show all" handler={this.handleButton} />
        <FilterModule display={this.state.display} />
      </>
    );
  }
}

export default App;
