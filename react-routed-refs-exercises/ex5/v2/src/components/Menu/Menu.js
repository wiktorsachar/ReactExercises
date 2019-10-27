import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => (
  <div>
    <NavLink
      activeStyle={{
        color: "red"
      }}
      exact
      to="/"
    >
      Home
    </NavLink>
    {" "}
    <NavLink
      activeStyle={{
        color: "red"
      }}
      exact
      to="/about"
    >
      About
    </NavLink>
    {" "}
    <NavLink
      activeStyle={{
        color: "red",
      }}
      exact
      to="/contact"
    >
      Contact
    </NavLink>
    {" "}
    <NavLink
      activeStyle={{
        color: "red",
      }}
      exact
      to="/movies"
    >
      Movies
    </NavLink>
  </div>
);

export default Menu;
