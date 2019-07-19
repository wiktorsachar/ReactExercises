//Text-input showing mini application;

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  textTypingHandler(e) {
    let result = e.target.value;
    this.setState({ text: result });
  };
  reset() {
    this.setState({ text: "" });
  };
  render() {
    return (
      <>
        <input value={this.state.text} onChange={this.textTypingHandler.bind(this)} />
        <button onClick={this.reset.bind(this)}>Reset</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

export default App;
