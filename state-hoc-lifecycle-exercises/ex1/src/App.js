/*Stworz komponent, który będzie wyświetlal przycisk oraz informacje 
o tym ile razy został wciśnięty.
Pamiętaj o zbindowaniu funkcji obslugujacej klikniecie.*/

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
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
