/*
Do komponentu `MovieDetailsPage` dodaj przycisk, ktory cofnie uzytkownika 
do poprzedniego widoku.
*/

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import MoviesListPage from "./components/MovieListPage/MovieListPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import Menu from "./components/Menu/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/movies" component={MoviesListPage} />
            <Route path="/movie/:id" component={MovieDetailsPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
