import React from "react";

const LanguageButton = props => (
  <button onClick={props.handler}>{props.name}</button>
);

export default LanguageButton;
