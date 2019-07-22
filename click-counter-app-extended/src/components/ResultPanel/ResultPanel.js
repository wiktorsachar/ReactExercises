import React from "react";

const ResultPanel = props => {
  return (
    <>
      <h1>Number of clicks: {props.clicks}</h1>
      <h1>Result: {props.value}</h1>
    </>
  );
};

export default ResultPanel;