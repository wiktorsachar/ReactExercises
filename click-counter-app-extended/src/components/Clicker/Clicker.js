import React from "react";

const Clicker = props => {
    const buttonName = (() => {
      let result;
      switch (props.type) {
        case "add":
          result = `+${props.value}`;
          break;
        case "sub":
          result = `-${props.value}`;
          break;
        case "mul":
          result = `x${props.value}`;
          break;
        case "div":
          result = `/${props.value}`;
          break;
        case "reset":
          result = "RESET";
          break;
        default:
          break;
      }
      return result;
    })();
    return (
      <button onClick={() => props.callback(props.type, props.value)}>
        {buttonName}
      </button>
    );
  };
  
  export default Clicker;