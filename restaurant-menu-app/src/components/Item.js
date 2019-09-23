import React from "react";

const Item = props => (
  <div style={{ backgroundColor: props.bgcolor, display: "flex" }}>
    <p
      style={
        props.active.includes(props.dish.id)
          ? { fontWeight: "bold", cursor: "pointer" }
          : { color: "gray", cursor: "pointer" }
      }
      onClick={() => props.handler(props.dish)}
    >
      {props.dish.name}
    </p>
  </div>
);

export default Item;
