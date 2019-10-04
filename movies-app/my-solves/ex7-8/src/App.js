/*
Utworz LanguageContext w którym przekażesz kod języka używanego w aplikacji 
```['pl', 'en']```;
Wykorzystaj dane z LanguageContext aby wyświetlić liste filmów w innym języku.
Skorzystaj z pliku movies2.json
*/

import React from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";
import LanguageContex from "./components/LanguageContex/LanguageContex";
import movies from "./assets/movies2";

class App extends React.Component {
  state = {
    language: "pl"
  };
  handleClick = rating => {
    alert(`Ocena to ${rating}!`);
  };
  handleLanguageButton = language => {
    if (this.state.language !== language) {
      this.setState({ language });
    }
  };
  render() {
    return (
      <div>
        <LanguageContex handler={this.handleLanguageButton} />
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
                handler={() => this.handleClick(movie.rating)}
                language={this.state.language}
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
                handler={() => this.handleClick(movie.rating)}
                language={this.state.language}
              />
            )
        )}
      </div>
    );
  }
}

export default App;
