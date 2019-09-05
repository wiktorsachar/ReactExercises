//Checkbox1;

import React from "react";
import Header from "./components/Header/Header";
import AgeVerification from "./components/AgeVerification/AgeVerification";
import MessageSwitch from "./components/MessageSwitch/MessageSwitch";

class App extends React.Component {
  state = {
    isChecked: false
  };
  handleCheckbox = () => {
    this.state.isChecked
      ? this.setState({ isChecked: false })
      : this.setState({ isChecked: true });
  };
  render() {
    return (
      <>
        <Header text="Kup bilet na horror roku!" />
        <AgeVerification click={this.handleCheckbox} />
        <MessageSwitch handler={this.state.isChecked} />
      </>
    );
  }
}

export default App;
