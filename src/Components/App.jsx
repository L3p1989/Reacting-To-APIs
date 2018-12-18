import React, { Component } from "react";
import PostCard from "./PostCard";
import "isomorphic-fetch";
import "es6-promise";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => this.setState({ films }));
  }

  render() {
    return (
      <>
        {this.state.films.map(film => {
          return <PostCard key={film.id} film={film} />;
        })}
      </>
    );
  }
}

export default App;
