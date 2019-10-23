/*
Do poprzedniego zadania stworz i dodaj komponent Menu, ktory bedzie zawieral 
linki prowadzace do dostepnych podstron.
Podczas nawigacji strona nie powinna przeladowywac sie w calosci.
Link prowadzacy do aktywnej podstrony powinien byc czerwony. 
Wykorzystaj `activeStyle` lub `activeClassName`
*/

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import Menu from "./components/Menu/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
