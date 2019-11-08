import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



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

  return (
    <Card key={product.id} style={{marginBottom:'3%'}}>
      <Card.Img variant="top" src="https://quittingbydesign.com/wp-content/uploads/2018/09/image-coming-soon-placeholder.jpg"/>
      <Card.Body>
      <Link to={`/products/${product.id}`}>
        <Card.Title style={{ gridArea: "title", textAlign: "center" }}>
          {product.name}
        </Card.Title>
      </Link>
      <Card.Text>
      <p className="price" style={priceStyle}>
        ${product.price}
      </p>
        <Button variant="success" style={buttonStyle}>Add to Cart</Button>
      </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleProduct;
