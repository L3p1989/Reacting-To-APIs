import React, { Component } from "react";
import PostCard from "./PostCard";
import "isomorphic-fetch";
import "es6-promise";
import { Container, Row, Button } from "reactstrap";
import logo from "./../Images/logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      requestFilmsLoad: false
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(films => this.setState({ films }));
  } //grabs films and creates json object named films

  handleFilmsClick(e) {
    e.preventDefault();
    this.setState({ requestFilmsLoad: true });
  }

  render() {
    const requestFilmsLoad = this.state.requestFilmsLoad;
    return (
      <Container>
        {requestFilmsLoad ? (
          <Row>
            {this.state.films.map(film => {
              return <PostCard key={film.id} film={film} />;
              //maps films json objects array into a JS film object for each films object for PostCard to use
            })}
          </Row>
        ) : (
          <>
            <img src={logo} alt="" />
            <Button
              block
              className="w-25"
              onClick={e => this.handleFilmsClick(e)}
              type="submit"
            >
              Load Films
            </Button>
          </>
        )}
      </Container>
    );
  }
}

export default App;
