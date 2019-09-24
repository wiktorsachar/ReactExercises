import React from "react";

const ExchangePanel = props => {
  const exchange = exchangeRate => {
    switch (props.currency) {
      case "pln":
        return exchangeRate.pln * props.value;
      case "petrol":
        return exchangeRate.petrol * props.value;
      case "oranges":
        return exchangeRate.oranges * props.value;
      default:
        break;
    }
  };
  const dollar = {
    pln: 3.99745762,
    petrol: 1.25579817904,
    oranges: 1.310833159
  };
  const euro = {
    pln: 4.39110449,
    petrol: 1.14322034728,
    oranges: 1.1933216374
  };
  return (
    <>
      <p>USD $ {exchange(dollar)}</p>
      <p>EUR &#x20ac; {exchange(euro)}</p>
    </>
  );
};

export default ExchangePanel;
