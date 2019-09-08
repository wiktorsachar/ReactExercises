import React from "react";

const Button = props => {
  return <button onClick={props.handler} style={{display:"block"}}>{props.text}</button>;
};

export default Button;
