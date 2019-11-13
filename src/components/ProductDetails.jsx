import React, { Component } from "react";
import { connect } from "react-redux";
import { selectProduct } from "../store/actions/products";
import { addToCart } from "../store/actions/cart";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.productID = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.selectProduct(this.props.match.params.id);
  }

  render() {
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

    let product = this.props.product.product[0] || {
      name: "",
      imgURL: "",
      price: "",
      description: "",
      category: []
    };
    console.log(this.props.match.path=='/')
    return (
      <div>
        <div className="product-container" key={product.id}>
          <div className="img-container">
            <Carousel style={{ width: "300px" }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={product.imgURL}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.brandcrowd.com/gallery/brands/pictures/picture14259392814670.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          {}
          <div className="product-details">
            <h1 className="product-name">{product.name}</h1>
            <h3>Author: {product.author}</h3>
            <h5 className="category-product-details">
              {product.category[0] || ""}
              <br />
              {product.category[1] || ""}
            </h5>
            <h2>Sinopsis</h2>
            <p>{product.description.slice(0, 300) + "..."} </p>
            <h5>{product.year}</h5>
            <h3> $ {product.price} </h3>
            <Button
              onClick={() =>
                this.props.addToCart(this.props.product.product[0])
              }
              variant="success"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { product: state };
};

const mapDispatchToProps = dispatch => ({
  selectProduct: id => dispatch(selectProduct(id)),
  addToCart: input => dispatch(addToCart(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
