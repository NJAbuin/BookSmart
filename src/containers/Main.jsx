import React, { Component } from "react";
import axios from "axios";
import { Route, Redirect, Switch, BrowserRouter, withRouter } from 'react-router-dom';
import RegisterContainer from "./RegisterContainer";
import store from '../store'
import {fetchUser} from '../store/actions/user'

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){ 
    store.dispatch(fetchUser())

  }
  render() {
    return (
      <div>
        <RegisterContainer/>
      <Switch>
        <Route exact path='/register' component={RegisterContainer} />
      </Switch>
     
      </div>
    );
  }
}
