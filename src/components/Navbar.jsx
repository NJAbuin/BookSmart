import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default ({ handleInput, handleSubmit }) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">BookSmart</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">Register</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
        </Nav>
        <Form onSubmit={handleSubmit} inline>
          <FormControl
            onChange={handleInput}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button onClick={handleSubmit} variant="outline-light">
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  );
};
