import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";

const PostCard = props => {
  const { title, description } = props.film;
  return (
    <Col sm="6">
      <Card body>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </Card>
    </Col>
  );
};

export default PostCard;
