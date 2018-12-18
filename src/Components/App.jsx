import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class App extends Component {
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(obj => console.log(obj));
  }

  render() {
    return <h1>placeholder</h1>;
  }
}

export default App;
