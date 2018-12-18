import React from "react";
import { Card, CardTitle, CardText, Col, Button } from "reactstrap";

const PeopleCard = props => {
  const { name, age, gender, url } = props.people;
  return (
    <Col sm="6">
      <Card body>
        <CardTitle>{name}</CardTitle>
        <CardText>{age}</CardText>
        <CardText>{gender}</CardText>
        <Button color="link">
          <a href={url} rel="noopener noreferrer" target="_blank">
            URL
          </a>
        </Button>
      </Card>
    </Col>
  );
};

export default PeopleCard;
