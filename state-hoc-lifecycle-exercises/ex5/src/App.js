/*
W komponencie rodzica dodaj 2 przyciski ktore ukryja i pokaza twoj Component 
z zadania 4: wroc do zadania 2 i zobacz co sie zmienilo.
Pamiętaj o zbindowaniu funkcji obslugujacej klikniecie.
*/

import React, { Component } from "react";
import Counter from "./components/Counter/Counter";

class App extends Component {
  constructor(props) {
    super();
    this.state = { active: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(active) {
    this.setState({ active: active && true });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(true)}>Show</button>
        <button onClick={() => this.handleClick(false)}>Hide</button>
        {this.state.active && <Counter />}
      </div>
    );
  }
}

export default App;
