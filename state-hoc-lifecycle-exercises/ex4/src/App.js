/*
Spraw aby komponent z zadania 3 reagował tylko w przypadku parzystej 
liczby kliknięć. Wykorzystaj `shouldComponentUpdate`
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
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter % 2 === 0 && true;
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
