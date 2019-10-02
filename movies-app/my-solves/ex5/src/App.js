/*
Wyświetl dwie listy filmów z których jedna będzie zawierała filmy z oceną > 6, 
a druga pozostałe.
*/

import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";
import movies from "./assets/movies";

const App = () => (
  <div>
    <Title title="My Blog Page 2018" />
    <h1>Ocena powyżej 6:</h1>
    {movies.map(
      movie =>
        movie.rating > 6 && (
          <Post
            title={movie.title}
            image={movie.poster}
            text={movie.description}
            rating={movie.rating}
            key={movie.id}
          />
        )
    )}
    <h1>Pozostałe:</h1>
    {movies.map(
      movie =>
        movie.rating < 7 && (
          <Post
            title={movie.title}
            image={movie.poster}
            text={movie.description}
            rating={movie.rating}
            key={movie.id}
          />
        )
    )}
  </div>
);

export default App;
