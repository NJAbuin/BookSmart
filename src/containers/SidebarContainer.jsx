import React, { Component } from "react";
import { connect } from "react-redux";
import Dropdown2 from "../components/Dropdown";
import {Switch, Route} from 'react-router-dom'
import Axios from "axios";
import { searchProducts, getFilterAction } from "../store/actions/products";
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
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
      <Col sm={12} md={3} style={{padding:'0'}}>
        <Navbar fixed='position' className='col-md-3 col-sm-12' style={{position: 'fixed', padding:'0'}}>
      <Dropdown.Menu show style={{position: 'initial'}} className="col-sm-12" sticky="top" >
        <Switch>

        <Route path='/products' />
        
        <Route  exact path='/' render={()=> 
        <Dropdown2
          clickHandler={this.clickHandler}
          categoryList={this.state.data}
        /> }/>
        </Switch>
      </Dropdown.Menu>
      </Navbar>
      </Col>
    
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
