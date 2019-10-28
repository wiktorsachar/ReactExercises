import movies from "../movies";

class MoviesService {
  static getMovies() {
    return movies;
  }

  static getMovieById(id) {
    return movies.find(movie => movie.id === id);
  }
}

export default MoviesService;
