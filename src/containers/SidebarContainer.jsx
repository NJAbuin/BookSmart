import React, { Component } from "react";
import { connect } from "react-redux";
import Dropdown from "../components/Dropdown";
import Axios from "axios";
import { searchProducts, getFilterAction } from "../store/actions/products";

class SidebarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      books: []
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    Axios.get("/api/category").then(data => this.setState(data));
  }

  clickHandler(e) {
    this.props.getFilterAction(e);
  }

  render() {
    return (
      <div>
        <Dropdown
          clickHandler={this.clickHandler}
          categoryList={this.state.data}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
  getFilterAction: data => dispatch(getFilterAction(data))
});

export default connect(
  null,
  mapDispatchToProps
)(SidebarContainer);
