import React from "react";

const PersonCard = props => (
  <div>
    <h2>{props.data.name}</h2>
    <p>gender: {props.data.gender === "m" ? "man" : "woman"}</p>
    <p>age: {props.data.age}</p>
  </div>
);

export default PersonCard;