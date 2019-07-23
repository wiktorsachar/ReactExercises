import React from "react";
import "./ResultPanel.css";

const ResultPanel = props => {
  let currentClass = "normal";
  let warning = "";
  if (props.value > 1000) {
    currentClass = "high-value";
    warning = " ACHTUNG! YOUR NUMBER IS TOO HIGH!";
  }
  return (
    <>
      <h2 className="normal">Number of clicks:</h2>
      <h1 className="normal">{props.clicks}</h1>
      <h2 className="normal">Result:</h2>
      <h1 className={currentClass}>{props.value + warning}</h1>
    </>
  );
};

export default ResultPanel;
