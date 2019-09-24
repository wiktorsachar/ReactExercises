//currency-exchange;

import React from "react";
import SelectPanel from "./components/SelectPanel";
import InputPanel from "./components/InputPanel";
import ExchangePanel from "./components/ExchangePanel";

class App extends React.Component {
  state = {
    currency: "pln",
    value: ""
  };
  handleSelect = e => {
    this.setState({ currency: e.target.value });
  };
  handleInput = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <h3>Pick currency (product)</h3>
        <SelectPanel handler={this.handleSelect} value={this.state.currency} />
        <InputPanel
          handler={this.handleInput}
          currency={this.state.currency}
          value={this.state.value}
        />
        <ExchangePanel
          currency={this.state.currency}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
