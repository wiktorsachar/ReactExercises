import React from "react";

const InputPanel = props => {
  const labelText = (() => {
    switch (props.currency) {
      case "pln":
        return "zlotys";
      case "petrol":
        return "litres";
      case "oranges":
        return "kilograms";
      default:
        break;
    }
  })();
  return (
    <div>
      <label>
        <input
          type="number"
          value={props.value}
          onChange={props.handler}
        ></input>
        {labelText}
      </label>
    </div>
  );
};

export default InputPanel;
