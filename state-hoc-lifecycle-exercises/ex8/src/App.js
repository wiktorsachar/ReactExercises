/*
Przerób component Rating w taki sposób aby po zmianie oceny liczba gwiazdek 
została zapamiętana. Stan może być przechowywany w Componencie Post.
*/

import React, { Component } from "react";
import Post from "./components/Post/Post";
import Title from "./components/Title/Title";
import { LanguageProvider } from "./components/LanguageContext/LanguageContext";
import movies from "./movies2.json";
import LanguageButton from "./components/LanguageButton/LanguageButton";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      language: "en"
    };
    this.handleLanguageClick = this.handleLanguageClick.bind(this);
  }
  handleLanguageClick = language => {
    if (this.state.language !== language) {
      this.setState({ language });
    }
  };
  render() {
    return (
      <div>
        <LanguageButton
          handler={() => this.handleLanguageClick("en")}
          name="EN"
        />
        <LanguageButton
          handler={() => this.handleLanguageClick("pl")}
          name="PL"
        />
        <Title title="Movies 2018" />
        <LanguageProvider value={this.state.language}>
          {movies.map(movie => (
            <Post
              key={movie.id}
              title={movie.title}
              image={movie.poster}
              text={movie.description}
              rating={movie.rating}
            />
          ))}
        </LanguageProvider>
      </div>
    );
  }
}

export default App;
