/*Wykorzystując kod z folderu zad01 wczytaj plik movies.json 
i wyświetl na ekranie liste wszystkich filmów.
Wykorzystaj do tego metode map()*/

import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";
import movies from "./assets/movies";

const App = () => (
  <div>
    <Title title="My Blog Page 2018" />
    {movies.map(movie => (
      <Post
        title={movie.title}
        image={movie.poster}
        text={movie.description}
        key={movie.id}
      />
    ))}
  </div>
);

export default App;
