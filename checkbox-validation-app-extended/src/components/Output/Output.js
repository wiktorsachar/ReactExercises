import React from "react";
import Message from "./components/Message";

const Output = props =>
  props.visibility ? (
    props.verification ? (
      <Message text={props.messagePositive} />
    ) : (
      <Message text={props.messageNegative} />
    )
  ) : null;

export default Output;
