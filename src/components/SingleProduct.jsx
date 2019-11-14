import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/cart";
import axios from "axios";

const priceStyle = {
  color: "grey",
  fontSize: "22px",
  gridArea: "price",
  textAlign: "center",
  alignSelf: "center",
  justifySelf: "center"
};

const buttonStyle = {
  border: "none",
  outline: "0",
  padding: "12px",
  cursor: "pointer",
  width: "100%",
  fontSize: "18px",
  gridArea: "add",
  alignSelf: "center",
  justifySelf: "center"
};
function useForceUpdate() {
  const [value, setValue] = useState(true); //boolean state
  return () => setValue(!value); // toggle the state to force render
}

function SingleProduct(props) {
  const product = props.info;

  const forceUpdate = useForceUpdate();
  const cartPersist = function() {
    !props.user.id && localStorage.setItem("cart", JSON.stringify(props.cart));
  };

  const addHandler = product => {
    if (!props.user) {
      props.addToCart(product);
      cartPersist();
    } else {
      props.addToCart(product);
      console.log("Entre al handler", product);
      axios
        .post("/api/addToCart", {
          userId: props.user.id,
          bookId: product.id,
          quantity: product.quantity
        })
        .then(resp => console.log("El servidor me respondio esto ", resp));
    }
  };

  return (
    <Card key={product.id} style={{ marginBottom: "3%" }}>
      <Link to={`/products/${product.id}`}>
        <Card.Img variant="top" src={product.imgURL} />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.id}`}>
          <Card.Title style={{ gridArea: "title", textAlign: "center" }}>
            {product.name.length > 29
              ? `${product.name.substring(0, 28)}...`
              : product.name}
          </Card.Title>
        </Link>

        <p className="price" style={priceStyle}>
          ${product.price}
        </p>
        <p style={{ placeSelf: "center" }}>Rating: 3/5</p>
        <Button
          variant="success"
          onClick={() => {
            addHandler(product);
            cartPersist();
            forceUpdate();
          }}
          style={buttonStyle}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

const mapStateToProps = ({ user, cart }) => ({
  user,
  cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
