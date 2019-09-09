//shop-basket-amount;

import React from "react";
import QuantityButton from "./components/QuantityButton/QuantityButton";
import Amount from "./components/Amount/Amount";
import BuyButton from "./components/BuyButton/BuyButton";

class AmountPanel extends React.Component {
  state = {
    quantity: 0,
    maxAmount: this.props.maxAmount
  };
  handleQuantityButton = sign => {
    if (sign === "+" && this.state.maxAmount > this.state.quantity) {
      this.setState({ quantity: this.state.quantity + 1 });
    } else if (sign === "-" && this.state.quantity > 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
  handleBuyButton = amount => {
    this.setState({ quantity: 0, maxAmount: this.state.maxAmount - amount });
  };
  render() {
    return (
      <div>
        <QuantityButton
          name="-"
          handler={() => this.handleQuantityButton("-")}
          value={this.state.quantity}
        />
        <Amount value={this.state.quantity} maxAmount={this.state.maxAmount} />
        <QuantityButton
          name="+"
          handler={() => this.handleQuantityButton("+")}
          maxAmount={this.state.maxAmount}
          value={this.state.quantity}
        />
        <BuyButton
          handler={() => this.handleBuyButton(this.state.quantity)}
          maxAmount={this.state.maxAmount}
        />
      </div>
    );
  }
}

export default AmountPanel;
