import React from "react";

const Header = props => (
  <>
    <h2>Order quantity: {props.quantity}</h2>
    <h2>To pay: {props.amount} simoleons</h2>
  </>
);

export default Header;
