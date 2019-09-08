import React from "react";
import Message from "./components/Message";

const Output = props => {
  return props.visibility ? (
    props.verification ? (
      <Message text={props.messagePositive} />
    ) : (
      <Message text={props.messageNegative} />
    )
  ) : (
    <></>
  );
};

export default Output;
