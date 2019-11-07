import React, { Component } from "react";
import { connect } from "react-redux";
import Dropdown from "../components/Dropdown";
import Axios from "axios";

class SidebarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }; //string array
  }

  componentDidMount() {
    Axios.get("/api/category").then(data => this.setState(data));
  }

  render() {
    return (
      <div>
        <Dropdown categoryList={this.state.data} />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(SidebarContainer);
