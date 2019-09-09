import React from "react";

const BuyButton = props => {
  let currentColor = props.maxAmount === 0 ? "lightgray" : "black";
  return (
    <div
      onClick={props.handler}
      style={{
        color: currentColor,
        border: "solid",
        height: 40,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        userSelect: "none"
      }}
    >
      <h1>Buy</h1>
    </div>
  );
};

export default BuyButton;
