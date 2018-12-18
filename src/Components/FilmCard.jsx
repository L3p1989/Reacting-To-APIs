import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";

const FilmCard = props => {
  const { title, description } = props.film;
  return (
    <Col sm="6">
      <Card body>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </Card>
    </Col>
  );
}; //creates a card for all films objects and places individual film title and description into the card

export default FilmCard;
