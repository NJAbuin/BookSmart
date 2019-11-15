import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      setShow: false,
      nombre: "",
      descripcion: "",
      imgurl: "",
      price: 0
    };

    this.postProduct = this.postProduct.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  postProduct() {
    console.log(this.state);
    Axios.post("/api/products", {
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      imgurl: this.state.imgurl,
      price: this.state.price
    }).then(res => {
      console.log("Product created");
    });

    this.handleClose();
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Add Product
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>
                Nombre:{" "}
                <input
                  onChange={e => this.setState({ nombre: e.target.value })}
                  type="text"
                />
              </label>
              <label>
                Descripcion:{" "}
                <input
                  onChange={e => this.setState({ descripcion: e.target.value })}
                  type="text"
                />
              </label>
              <label>
                URLImg:{" "}
                <input
                  onChange={e => this.setState({ imgurl: e.target.value })}
                  type="text"
                />
              </label>
              <label>
                Precio:{" "}
                <input
                  onChange={e => this.setState({ price: e.target.value })}
                  type="text"
                />
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.postProduct}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
