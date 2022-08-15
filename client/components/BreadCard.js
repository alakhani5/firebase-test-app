import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const BreadCard = (props) => {
  const { allBreads } = props;

  return (
      <Container>
      {allBreads.map((bread) => (
          <Card id={bread.id} style={{  width: "12rem", height: "8rem" }} className="d-inline-flex flex-wrap align-items-start p-2">
            <Card.Body>
              <Card.Title>{bread.type}</Card.Title>
              <Card.Subtitle>Difficulty: {bread.difficulty}</Card.Subtitle>
            </Card.Body>
          </Card>
      ))}
      </Container>
  );
};

export default BreadCard;
