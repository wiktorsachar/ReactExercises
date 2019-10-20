/*
W zad01 masz dostępne 3 komponenty `HomePage` `AboutPage` `ContactPage`. 
Aktualnie widoczne sa wszystkie na raz. Wykorzystujac Routing spraw aby byly 
dostepne tylko pod dedykowanymi adresami URL.
Sciezki pod ktorymi powinny byc dostepne to: `/`, `/about`, `/contact`
*/

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
