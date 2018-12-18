import React, { Component } from "react";
import { Row, Button } from "reactstrap";

class PeopleLoad extends Component {
  constructor(props) {
    super(props);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleHideClick = this.handleHideClick.bind(this);
    this.state = {
      people: [],
      requestPeopleLoad: false
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => res.json())
      .then(peoples => this.setState({ peoples }));
  } //grabs People and creates json object named peoples

  handleShowClick() {
    this.setState({ requestPeopleLoad: true });
  }

  handleHideClick() {
    this.setState({ requestPeopleLoad: false });
  }

  render() {
    const requestPeopleLoad = this.state.requestPeopleLoad;
    return (
      <>
        {requestPeopleLoad ? (
          <>
            <Button
              block
              className="w-25"
              onClick={e => this.handleHideClick(e)}
              type="submit"
            >
              Unload Characters
            </Button>
            <Row>
              {this.state.peoples.map(people => {
                return <PeopleCard key={people.id} people={people} />;
                //maps peoples json objects array into a JS people object for each peoples object for PeopleCard to use
              })}
            </Row>
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

export default PeopleLoad;
