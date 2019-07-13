//Add-sign mini application;

import React from "react";

class App extends React.Component {
  state = {
    storage: ""
  };
  handleClick = () => {
    let result = this.state.storage + "*";
    this.setState({ storage: result });
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>Add a star</button>
        <p>{this.state.storage}</p>
      </>
    );
  }
}

export default App;
