import React from "react";

const Header = props => (
  <header>
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between">
        <span className="navbar-brand d-flex align-items-center">
          <strong>{props.name}</strong>
        </span>
        <span className="navbar-toggler-icon"></span>
      </div>
    </div>
  </header>
);

export default Header;
