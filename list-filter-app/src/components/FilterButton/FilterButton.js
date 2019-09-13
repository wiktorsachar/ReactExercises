import React from "react";

const FilterButton = props => (
  <button onClick={() => props.handler(props.gender)}>{props.name}</button>
);

export default FilterButton;
