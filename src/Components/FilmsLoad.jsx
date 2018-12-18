import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";
import FilmCard from "./FilmCard";

class FilmsLoad extends Component {
  constructor(props) {
    super(props);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleHideClick = this.handleHideClick.bind(this);
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

  handleShowClick() {
    this.setState({ requestFilmsLoad: true });
  }

  handleHideClick() {
    this.setState({ requestFilmsLoad: false });
  }

  render() {
    const requestFilmsLoad = this.state.requestFilmsLoad;
    return (
      <>
        {requestFilmsLoad ? (
          <>
            <Row>
              {this.state.films.map(film => {
                return <FilmCard key={film.id} film={film} />;
                //maps films json objects array into a JS film object for each films object for FilmCard to use
              })}
            </Row>
            <Button
              block
              className="w-25"
              onClick={e => this.handleHideClick(e)}
              type="submit"
            >
              Unload Films
            </Button>
          </>
        ) : (
          <>
            <Button
              block
              className="w-25"
              onClick={e => this.handleShowClick(e)}
              type="submit"
            >
              Load Films
            </Button>
          </>
        )}
      </>
    );
  }
}

export default FilmsLoad;
