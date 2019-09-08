import React from "react";

const Checkbox = props => {
  return (
    <>
      <input type="checkbox" id={props.id} onChange={props.handler} />
      <label htmlFor={props.id}>{props.label}</label>
    </>
  );
};

export default Checkbox;
