import React from "react";
import { Route } from "react-router-dom";
import MoviesService from "../../services/movies.service";

const MovieDetailsPage = () =>
  MoviesService.getMovies().map(e => (
    <Route key={e.id} exact path={`/movie/${e.id}`}>
      <h2>Title: {e.title}</h2>
      <p>{e.description}</p>
    </Route>
  ));

export default MovieDetailsPage;
