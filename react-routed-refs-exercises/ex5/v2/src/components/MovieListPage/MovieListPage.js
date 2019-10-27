import React from "react";
import { Link } from "react-router-dom";
import MoviesService from "../../services/movies.service";

const MovieListPage = () => (
  <div>
    <ul>
      {MoviesService.getMovies().map(e => (
        <li key={e.id}>
          <Link to={`/movie/${e.id}`}>
            {e.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default MovieListPage;
