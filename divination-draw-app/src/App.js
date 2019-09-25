//divination-draw;
//one component / showing an omen (1 of 3) / adding new omen to previous ones.

import React from "react";

class App extends React.Component {
  state = {
    omens: ["pierwsza wróżba", "druga wróżba", "trzecia wróżba"],
    text: "",
    show: null
  };
  handleShowOmenButton = () => {
    const randomizer = Math.floor(Math.random() * this.state.omens.length);
    this.setState({ show: this.state.omens[randomizer] });
  };
  handleTextInput = e => {
    this.setState({ text: e.target.value });
  };
  handleAddOmenButton = () => {
    if (this.state.text) {
      const newOmens = this.state.omens.concat(this.state.text);
      this.setState({ omens: newOmens, text: "" });
      alert(`Wróżba dodana. Aktualne wróżby: ${newOmens}`);
    } else {
      alert("wpisz coś!");
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.handleShowOmenButton}>Zobacz wróżbę</button>
        <br />
        <input
          type="text"
          onChange={this.handleTextInput}
          value={this.state.text}
        />
        <button onClick={this.handleAddOmenButton}>Dodaj wróżbę</button>
        <h1>{this.state.show}</h1>
      </div>
    );
  }
}

export default App;
