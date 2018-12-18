import React, { Component } from "react";
import PostCard from "./PostCard";
import "isomorphic-fetch";
import "es6-promise";
import { Container, Row, Button } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      nowLoad: false
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => this.setState({ films }));
  } //grabs films and creates json object named films

  render() {
    return (
      <Container>
        <Row>
          {this.state.films.map(film => {
            return <PostCard key={film.id} film={film} />;
            //maps films json objects array into a JS film object for each films object for PostCard to use
          })}
        </Row>
      </Container>
    );
  }
}

export default App;
