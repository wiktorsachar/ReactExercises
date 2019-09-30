/*Przerób komponent z zadania 2 w taki sposób aby prezentował ocene w postaci 
odpowiedniej liczby gwiazdek.
Przykładowo: 6 gwiazdek dla filmu, który ma ocene 6.

Możesz wykorzystać zewnętrzną bibliotekę:

* [react-repeat-component](https://github.com/nuragic/react-repeat-component) -
Render any component/element N times*/

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
        rating={movie.rating}
        key={movie.id}
      />
    ))}
  </div>
);

export default App;
