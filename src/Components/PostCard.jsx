import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";

const PostCard = props => {
  return (
    <Col sm="6">
      <Card body>
        <CardTitle>{props.film.title}</CardTitle>
        <CardText>{props.film.description}</CardText>
      </Card>
    </Col>
  );
};

export default PostCard;
