import React, { Component } from "react";
import PostCard from "./PostCard";
import "isomorphic-fetch";
import "es6-promise";
import { Container, Row, Button } from "reactstrap";

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
      <Container>
        <Row>
          {this.state.films.map(film => {
            return <PostCard key={film.id} film={film} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default App;
