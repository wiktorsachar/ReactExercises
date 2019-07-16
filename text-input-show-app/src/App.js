//Text-input showing mini application;

import React from "react";

// BINDING WAY #1 ------------------------------------------------------------------

// class App extends React.Component {
//   state = {
//     text: ""
//   };
//   textTypingHandler = () => {
//     let result = document.getElementById("textInput").value;
//     this.setState({ text: result });
//   };
//   reset = () => {
//     document.getElementById("textInput").value = "";
//     this.setState({ text: "" });
//   };
//   render() {
//     return (
//       <>
//         <input id="textInput" onChange={this.textTypingHandler} />
//         <button onClick={this.reset}>Reset</button>
//         <h1>{this.state.text}</h1>
//       </>
//     );
//   }
// }

// BINDING WAY #2 ------------------------------------------------------------------

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ""
//     }
//     this.textTypingHandler = this.textTypingHandler.bind(this);
//     this.reset = this.reset.bind(this);
//   }
//   textTypingHandler() {
//     let result = document.getElementById("textInput").value;
//     this.setState({ text: result });
//   };
//   reset() {
//     document.getElementById("textInput").value = "";
//     this.setState({ text: "" });
//   };
//   render() {
//     return (
//       <>
//         <input id="textInput" onChange={this.textTypingHandler} />
//         <button onClick={this.reset}>Reset</button>
//         <h1>{this.state.text}</h1>
//       </>
//     );
//   }
// }

// BINDING WAY #3  ------------------------------------------------------------------

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  textTypingHandler() {
    let result = document.getElementById("textInput").value;
    this.setState({ text: result });
  };
  reset() {
    document.getElementById("textInput").value = "";
    this.setState({ text: "" });
  };
  render() {
    return (
      <>
        <input id="textInput" onChange={this.textTypingHandler.bind(this)} />
        <button onClick={this.reset.bind(this)}>Reset</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

export default App;