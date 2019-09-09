import React from "react";

const QuantityButton = props => {
    let currentColor =
      (props.name === "-" && props.value === 0) ||
      (props.name === "+" && props.value === props.maxAmount)
        ? "lightgray"
        : "black";
    return (
      <div
        onClick={props.handler}
        style={{
          margin: 5,
          color: currentColor,
          border: "solid",
          height: 40,
          width: 40,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          userSelect: "none"
        }}
      >
        <h1>{props.name}</h1>
      </div>
    );
  };

  export default QuantityButton;