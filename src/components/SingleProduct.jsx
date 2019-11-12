import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addToCart } from "../store/actions/cart";

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

function SingleProduct(props) {
  const product = props.info;

  const addHandler = product => {
    props.addToCart(product);
    const carroSucio = props.cartReducer;

    let carroLimpio = []; //array<{book:{},quantity:integer}>
    carroSucio.map(e => {
      if (carroLimpio.findIndex(i => i.book === e) === -1) {
        carroLimpio.push({ quantity: 1, book: e });
      } else {
        carroLimpio[carroLimpio.findIndex(i => i.book === e)].quantity += 1;
      }
    });
    console.log(carroLimpio);

    if (!props.user.name) {
      localStorage.carroLimpio;
    }
  };

  return (
    <Card key={product.id} style={{ marginBottom: "3%" }}>
      <Card.Img variant="top" src={product.imgURL} />
      <Card.Body>
        <Link to={`/products/${product.id}`}>
          <Card.Title style={{ gridArea: "title", textAlign: "center" }}>
            {product.name}
          </Card.Title>
        </Link>

        <p className="price" style={priceStyle}>
          ${product.price}
        </p>
        <p style={{ placeSelf: "center" }}>
          Rating: {Math.round(Math.random() * 5)}/5
        </p>
        <Button
          variant="success"
          onClick={() => addHandler(product)}
          style={buttonStyle}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

const mapStateToProps = ({ user, cartReducer }) => ({
  user,
  cartReducer
});

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
