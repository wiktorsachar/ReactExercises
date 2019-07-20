//Text-input showing mini application;

import React from "react";

const Content = props => {
  if (props.visibility) {
    return <p>I'm visible</p>;
  } else {
    return <p />;
  }
};

class App extends React.Component {
  state = {
    visibility: true,
    buttonName: "Hide"
  };
  handleButton = () => {
    if (this.state.visibility) {
      this.setState({ visibility: false, buttonName: "Show" });
    } else {
      this.setState({ visibility: true, buttonName: "Hide" });
    }
  };
  render() {
    return (
      <>
        <button onClick={this.handleButton}>{this.state.buttonName}</button>
        <Content visibility={this.state.visibility} />
      </>
    );
  }
}

export default App;
