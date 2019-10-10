/*
Zaimplementuj HOC (Higher Order Component) którego celem będzie wstrzyknięcie do komponentu informacji 
o używanym w aplikacji języku. Informacje o języku wyciągnij z LanguageContextu
*/

import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";
import movies from "./movies2.json";
import enhanceApp from "./components/enhanceApp/enhanceApp";

const App = () => {
  return (
    <div>
        <Title title="Movies 2018" />
        {movies.map(movie => (
          <Post
            key={movie.id}
            title={movie.title}
            image={movie.poster}
            text={movie.description}
            rating={movie.rating}
          />
        ))}
    </div>
  );
};

export default enhanceApp(App);
