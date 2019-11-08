import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";

export default ({ handleInput, handleSubmit }) => {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top" >
        <Navbar.Brand href="/">BookSmart</Navbar.Brand>
        <Nav className="mr-auto">
          <ul className="nav ">
            <li className="nav-item">
              <RegisterContainer />
            </li>
            <li className="nav-item">
              <LoginContainer />
            </li>
          </ul>
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
