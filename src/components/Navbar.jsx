import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../store/actions/products";

function NavBar({ handleInput, handleSubmit, user, getProducts }) {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
          onClick={() => {
            getProducts();
          }}
        >
          BookSmart
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Nav className="mr-auto">
          <ul className="nav ">
            {!user.id &&
              <li className="nav-item">
                <RegisterContainer />
              </li>
            }
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
        </Form>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/cart">
          <img
            src="https://image.flaticon.com/icons/png/512/107/107831.png"
            style={{ width: "35px" }}
            alt=""
          />
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/cart"></Link>
      </Navbar>
    </>
  );
}

const mapStateToProps = state => { };

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(null, mapDispatchToProps)(NavBar);
