//Click-counter application;

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      clicks: 0
    };
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickSubstract = this.handleClickSubstract.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }
  handleClickAdd() {
    this.setState(prevState => ({
      value: prevState.value + 1,
      clicks: prevState.clicks + 1
    }));
  }
  handleClickSubstract() {
    this.setState(prevState => ({
      value: prevState.value - 1,
      clicks: prevState.clicks + 1
    }));
  }
  handleClickReset() {
    this.setState(prevState => ({
      value: 0,
      clicks: prevState.clicks + 1
    }));
  }
  render() {
    return (
      <>
        <button onClick={this.handleClickAdd}>+1</button>
        <button onClick={this.handleClickSubstract}>-1</button>
        <button onClick={this.handleClickReset}>Reset</button>
        <h1>Number of clicks: {this.state.clicks}</h1>
        <h1>Result: {this.state.value}</h1>
      </>
    );
  }
}

export default App;
