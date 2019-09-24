import React from "react";

const SelectPanel = props => (
  <select onChange={props.handler} value={props.value}>
    <option value="pln">PLN</option>
    <option value="petrol">petrol</option>
    <option value="oranges">oranges</option>
  </select>
);

export default SelectPanel;
