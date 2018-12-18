import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import { Container, Row, Button } from "reactstrap";
import logo from "./../Images/logo.png";
import FilmsLoad from "./FilmsLoad";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const requestFilmsLoad = this.state.requestFilmsLoad;
    return (
      <Container>
        <img src={logo} alt="" />
        <FilmsLoad />
      </Container>
    );
  }
}

export default App;
