import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterByCategory } from "../store/actions/products";
import { CATEGORIES } from "../store/constants";

class Dropdown2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  filterHandler(e) {
    this.props.filterByCategory(e);
  }

  render() {
    return (
      <div>
        <h3 style={{ marginLeft: "0.5em" }}>CATEGORIAS</h3>
        {CATEGORIES.map(elt => {
          return (
            <h5 style={{ margin: "1.5em" }} key={elt}>
              <Link
                to={`/category/${elt}`}
                onClick={() => this.filterHandler(elt)}
              >
                {elt}
              </Link>
            </h5>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
  filterByCategory: data => dispatch(filterByCategory(data))
});

export default connect(null, mapDispatchToProps)(Dropdown2);
