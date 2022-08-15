import React from "react";
import { useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { breadRef } from "../../src";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AddBread = (props) => {
  const [type, setType] = useState("");
  const [difficulty, setDifficulty] = useState("easy");

  const handleAdd = (evt) => {
    // need to use arrow functions!
    evt.preventDefault();
    addDoc(breadRef, {
      type: type,
      difficulty: difficulty,
      createdAt: serverTimestamp(),
    }).then(() => {
      document.querySelector(".add").reset();
      setType("");
      setDifficulty("easy");
    });
  };

  return (
    <Form className="add" onSubmit={handleAdd}>
      <Col md>
        <h2>Add that Bread</h2>
        <Row>
          <Col xs>
            <Form.Label htmlFor="breadType" label="Bread Type" className="mb-3">
              Bread Type:
              <Form.Control
                type="text"
                id="breadType"
                aria-describedby="input bread type"
                onChange={(evt) => setType(evt.target.value)}
                placeholder="Ciabatta"
                required
              />
            </Form.Label>
          </Col>
          <Col xs>
            <Form.Label htmlFor="difficulty" className="mb-3">
              Difficulty: <br />
              <Form.Select
                id="difficulty"
                aria-label="Default select example"
                value={difficulty}
                onChange={(evt) => setDifficulty(evt.target.value)}
                required
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Form.Select>
            </Form.Label>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Get that bread
        </Button>
      </Col>
    </Form>
  );
};

export default AddBread;
