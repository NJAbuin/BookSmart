import React from "react";
import {
  getProducts,
  searchProducts,
  filterByCategory
} from "../store/actions/products";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], //array of user objects
      filteredBooks: []
    };
  }

  componentDidMount() {
    //if in home get all products
    if (this.props.match.path === this.props.match.url) {
      this.props.getProducts();
    } else {
      this.props.filterByCategory(this.props.match.params.category);
    }
  }

  render() {
    console.log(this.props.match);

    let productList = this.props.products.product;
    if (productList.length <= 0) {
      return <p>No se encontraron resultados</p>;
    } else {
      for (let i = 0; i < productList.length; i++) {
        for (let j = i + 1; j < productList.length; j++) {
          if (productList[i].name == productList[j].name) {
            let indexProduct = productList.indexOf(productList[i]);
            productList.splice(indexProduct, 1);
          }
        }
      }
      return (
        <Row>
          {productList.slice(0, 9).map(e => (
            <Col sm="12" md="4" key={e.id}>
              <CardDeck>
                <SingleProduct key={e.id} info={e} />
              </CardDeck>
            </Col>
          ))}
        </Row>
      );
    }
  }
}

// const containerStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
//   gridGap: "2rem",
//   justifyItems: "auto",
//   alignItems: "auto"
// };

const mapStateToProps = state => {
  return { products: state };
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  filterByCategory: cat => dispatch(filterByCategory(cat))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
