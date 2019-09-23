//restaurant-menu;

import React from "react";
import menu from "./assets/menu";
import Header from "./components/Header";
import ListItems from "./components/ListItems";

class App extends React.Component {
  state = {
    amount: 0,
    quantity: 0,
    active: []
  };
  handleClick = dish => {
    this.setState(state => ({
      amount: !state.active.includes(dish.id)
        ? state.amount + dish.price
        : state.amount - dish.price,
      quantity: !state.active.includes(dish.id)
        ? state.quantity + 1
        : state.quantity - 1,
      active: !state.active.includes(dish.id)
        ? state.active.concat([dish.id])
        : state.active.filter(e => e !== dish.id)
    }));
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Header amount={this.state.amount} quantity={this.state.quantity} />
        <ListItems
          menu={menu}
          active={this.state.active}
          handler={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
