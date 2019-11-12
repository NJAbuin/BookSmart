import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import { Link } from "react-router-dom";

export default ({ handleInput, handleSubmit, cart }) => {
  const totalValue = function(cart) {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    return totalPrice.toFixed(2);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="top">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          BookSmart
        </Link>
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
        <Link to="/cart">
          {cart.length <= 0 && <p>$ 0,00</p>}
          {cart.length > 0 && <p>$ {totalValue(cart)}</p>}
        </Link>
      </Navbar>
    </>
  );
};
