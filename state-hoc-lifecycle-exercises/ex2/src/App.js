/*
Przerób komponent z `Zadanie 2` w taki sposób aby po 20 kliknęciu 
przycisk został zablokowany. Możesz wykorzystać do tego atrybut `disabled`.
*/

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        <h1>Clicked: {this.state.counter} times.</h1>
        <button
          onClick={this.handleClick}
          disabled={this.state.counter >= 20 || false}
        >
          Click
        </button>
      </div>
    );
  }
}

export default App;
