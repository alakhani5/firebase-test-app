import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const BottomBar = (props) => {
  return (
    <>
      <Navbar bg="light" fixed="bottom">
        <Container>
          <Navbar.Brand>Learn More</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link
                href="https://github.com/alakhani5/firebase-test-app"
                target="_blank"
              >
                Repository
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BottomBar;
