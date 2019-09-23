import React from "react";
import Item from "./Item";

const ListItems = props => (
  <div>
    <h3>Your order:</h3>
    <ul>
      {props.menu.map((e, i) => (
        <li key={e.id}>
          <Item
            handler={props.handler}
            active={props.active}
            dish={e}
            bgcolor={i % 2 === 0 ? "#adacac" : "lightgray"}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default ListItems;
