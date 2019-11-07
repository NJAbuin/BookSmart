import React, { Component } from "react";
//import List from "../components/List";
import { Route, Redirect, Switch } from 'react-router-dom';
//import Register from '../components/Register'
import NavbarContainer from '../containers/NavbarContainer'

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavbarContainer history={this.props.history} />
        <Switch>

        </Switch>
      </div>
    );
  }
}
