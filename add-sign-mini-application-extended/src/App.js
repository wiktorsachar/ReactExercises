//Add-sign mini application;
/* new tasks:
- add new component to show text,
- show a random number after clicking a button,
- show a name of a button from props (variable or state object)
*/

import React from "react";

const ShowText = props => {
  return <h1>{props.text}</h1>;
};

const Button = props => {
  return <button onClick={props.callback}>{props.buttonName}</button>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: "*",
      randomNumber: 0
    };
    this.addStar = this.addStar.bind(this);
    this.randomNumber = this.randomNumber.bind(this);
    this.addStarButtonName = "ADD STAR";
    this.randomButtonName = "RANDOM NUMBER";
  }
  addStar() {
    let result = this.state.storage + "*";
    this.setState({ storage: result });
  }
  randomNumber() {
    let result = Math.floor(Math.random() * 100);
    this.setState({ randomNumber: result });
  }
  render() {
    return (
      <>
        <Button callback={this.addStar} buttonName={this.addStarButtonName} />
        <ShowText text={this.state.storage} />
        <Button
          callback={this.randomNumber}
          buttonName={this.randomButtonName}
        />
        <ShowText text={this.state.randomNumber} />
      </>
    );
  }
}

export default App;
