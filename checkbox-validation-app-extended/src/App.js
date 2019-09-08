//Checkbox1;

import React from "react";
import Header from "./components/Header/Header";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/Button";
import Output from "./components/Output/Output";

class App extends React.Component {
  state = {
    isVerified: false,
    isVisible: false
  };
  handleCheckbox = () => {
    this.setState({ isVisible: false, isVerified: !this.state.isVerified });
  };
  handleButton = () => {
    this.setState({ isVisible: true });
  };
  render() {
    return (
      <>
        <Header text="HEADER" />
        <Checkbox handler={this.handleCheckbox} label="checkbox label" id="chkbx" />
        <Button handler={this.handleButton} text="validation button" />
        <Output
          visibility={this.state.isVisible}
          verification={this.state.isVerified}
          messagePositive="positive"
          messageNegative="negative"
        />
      </>
    );
  }
}

export default App;
