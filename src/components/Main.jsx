import React, { Component } from "react";
import List from "../components/List";
import axios from "axios";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [] //array of user objects
    };
  }

  componentDidMount() {
    //TEMPLATE ON HOW TO MAKE API REQUESTS TO BACKEND
    axios.get("/api/users").then(response => {
      this.setState({ list: response.data });
    });
  }

  render() {
    return (
      <div>
        LISTA DE USUARIOS
        <List list={this.state.list} />
      </div>
    );
  }
}
