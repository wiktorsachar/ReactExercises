import React from "react";

const Amount = props => {
  let currentColor = props.value === 0 ? "lightgray" : "black";
  return (
    <div
      style={{
        color: currentColor,
        height: 40,
        width: 40,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>{props.value}</h1>
    </div>
  );
};

export default Amount;
