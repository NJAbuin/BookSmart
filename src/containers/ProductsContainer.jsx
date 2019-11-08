import React from "react";
import { getProducts, searchProducts } from "../store/actions/products";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CardDeck from 'react-bootstrap/CardDeck'

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [] //array of user objects
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    let productList = this.props.products.product;
    if (productList.length <= 0) {
      return <p>No se encontraron resultados</p>;
    } else {
      return (
          <Row>
            {productList.slice(0, 9).map(e => (
              
              <Col sm='12' md='4'>
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

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gridGap: "2rem",
  justifyItems: "auto",
  alignItems: "auto"
};

const mapStateToProps = state => {
  return { products: state };
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
