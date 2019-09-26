import React from "react";

const Person = props => (
  <li>
    {props.name}
    <button onClick={props.handler}>Usuń</button>
  </li>
);

export default Person;
