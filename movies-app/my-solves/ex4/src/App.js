/*
Wykorzystując kod z poprzedniego zadania wyświetl tylko te 
filmy, których ocena (rating) jest większa niż 6
*/

import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";
import movies from "./assets/movies";

const App = () => (
  <div>
    <Title title="My Blog Page 2018" />
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
  </div>
);

export default App;
