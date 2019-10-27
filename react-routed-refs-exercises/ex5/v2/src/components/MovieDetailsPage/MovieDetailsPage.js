import React from "react";
import MoviesService from "../../services/movies.service";

const MovieDetailsPage = props => {
  const { title, description } = MoviesService.getMovieById(
    props.match.params.id
  );
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default MovieDetailsPage;
