//Click-counter application;

import React from "react";
import "./App.css";
import Clicker from "./components/Clicker/Clicker";
import ResultPanel from "./components/ResultPanel/ResultPanel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(type, value) {
    switch (type) {
      case "add":
        this.setState(prevState => ({
          value: prevState.value + value,
          clicks: prevState.clicks + 1
        }));
        break;
      case "sub":
        this.setState(prevState => ({
          value: prevState.value - value,
          clicks: prevState.clicks + 1
        }));
        break;
      case "mul":
        this.setState(prevState => ({
          value: prevState.value * value,
          clicks: prevState.clicks + 1
        }));
        break;
      case "div":
        this.setState(prevState => ({
          value: prevState.value / value,
          clicks: prevState.clicks + 1
        }));
        break;
      case "reset":
        this.setState(prevState => ({
          value: 0,
          clicks: prevState.clicks + 1
        }));
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <>
        <div className="top-buttons">
          <Clicker
            type="mul"
            value={5}
            callback={() => this.handleClick("mul", 5)}
          />
          <Clicker
            type="add"
            value={1}
            callback={() => this.handleClick("add", 1)}
          />
          <Clicker type="reset" callback={() => this.handleClick("reset")} />
          <Clicker
            type="sub"
            value={1}
            callback={() => this.handleClick("sub", 1)}
          />
          <Clicker
            type="div"
            value={5}
            callback={() => this.handleClick("div", 5)}
          />
        </div>
        <hr />
        <div className="content">
          <ResultPanel clicks={this.state.clicks} value={this.state.value} />
        </div>
      </>
    );
  }
}

export default App;
