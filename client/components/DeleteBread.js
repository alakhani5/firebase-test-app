import React from "react";
import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db, breadTable } from "../../src";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const DeleteBread = (props) => {
  const [id, setId] = useState("");

  const handleDelete = (evt) => {
    // need to use arrow functions!
    evt.preventDefault();
    const deletedBread = doc(db, breadTable, id);
    deleteDoc(deletedBread).then(() => {
      document.querySelector(".delete").reset();
      setId("");
    });
  };

  return (
    <Form className="delete" onSubmit={handleDelete}>
      <Col md>
        <h2>Deleting Bread</h2>
        <Form.Group>
          <Form.Label htmlFor="id">
            Bread ID:
            <Form.Control
              type="text"
              id="id"
              onChange={(evt) => setId(evt.target.value)}
              aria-describedby="Delete bread with this ID"
              placeholder="insertlongstringhere"
              required
            ></Form.Control>
          </Form.Label>
        </Form.Group>
        <br />
        <Form.Group>
          <Button variant="outline-danger" type="submit">
            Delete this bread
          </Button>
        </Form.Group>
      </Col>
    </Form>
  );
};

export default DeleteBread;
