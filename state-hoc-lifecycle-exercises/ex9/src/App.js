/*
Dodaj prosty mechanizm filtrowania listy filmów po nazwie. 
Filtrowanie powinno byc natychmiastowe po wpisaniu kolejnej litery.
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
      language: "en",
      search: ""
    };
    this.handleLanguageClick = this.handleLanguageClick.bind(this);
    this.searchOnChange = this.searchOnChange.bind(this);
  }
  handleLanguageClick = language => {
    if (this.state.language !== language) {
      this.setState({ language });
    }
  };
  searchOnChange = e => {
    this.setState({ search: e.target.value.toLowerCase() });
  };
  render() {
    const filteredMovies = movies.filter(movie =>
      movie.title[this.state.language].toLowerCase().includes(this.state.search)
    );
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
        <input
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.searchOnChange}
        />
        <Title title="Movies 2018" />
        <LanguageProvider value={this.state.language}>
          {filteredMovies.map(movie => (
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
