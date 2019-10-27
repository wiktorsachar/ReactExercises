/*
Spraw aby tytul filmu z poprzedniego zadania byl linkiem prowadzacym do 
widoku szczegolow wybranego filmu.
Na potrzeby tego zadania stworz komponent `MovieDetailsPage`, ktory 
bedzie dostepny pod adresem /movie/:id.
Do pobrania szczegolow filmu uzyj `MoviesService.getMovieById(id)`.

ID wybranego filmu powinno pochodzic z adresu url.
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
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/movies">
              <MoviesListPage />
            </Route>
            <Route path="/movie/:id" component={MovieDetailsPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
