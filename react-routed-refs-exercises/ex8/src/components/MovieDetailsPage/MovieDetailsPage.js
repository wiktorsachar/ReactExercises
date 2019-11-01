import React from "react";
import MoviesService from "../../services/movies.service";
import { Redirect } from "react-router-dom";

const MovieDetailsPage = props => {
  try {
    const { title, description } = MoviesService.getMovieById(
      props.match.params.id
    );
    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={props.history.goBack}>Wróć</button>
      </div>
    );
  } catch {
    return <Redirect to="/movies" />;
  }
};

export default MovieDetailsPage;
