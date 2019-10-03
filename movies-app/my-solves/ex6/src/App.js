/*
Wykorzystując event *onCLick* spraw aby po kliknięciu w ocene użytkownik 
zobaczył jakis komunikat.
*/

import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";
import movies from "./assets/movies";

const App = () => {
  const handleClick = rating => {
    alert(`Ocena to ${rating}!`);
  };
  return (
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
              handler={() => handleClick(movie.rating)}
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
              handler={() => handleClick(movie.rating)}
            />
          )
      )}
    </div>
  );
};

export default App;
