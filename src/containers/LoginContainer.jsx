import React from "react";
import axios from "axios";
import Login from "../components/Login";
import { connect } from "react-redux";
import { receiveUser, emptyUser } from "../store/actions/user";
import { emptyCart, addToCart, addFromDB } from "../store/actions/cart";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalChooseCart from "../components/ModalChooseCart";
import ModalAddProduct from "../components/ModalAddProduct";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: "",
      passwordInput: "",
      error: false,
      showCartModal: false,
      showAddProductModal: false
    };

    this.handleAddShow = this.handleAddShow.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCartSelection = this.handleCartSelection.bind(this);
  }

  handleShow() {
    this.setState({ showCartModal: true });
  }

  handleAddShow() {
    this.setState({ showAddProductModal: true });
  }

  handleCartSelection(string) {
    axios
      .post(`/api/addToCartinBulk${string}`, {
        userId: this.props.user.id,
        bookId: this.props.cart
      })
      .then(() =>
        axios.post("/api/getNumberofCarts", { userId: this.props.user.id })
      )
      .then(resp => resp.data)
      .then(bookArray => {
        console.log(bookArray);
        let toStoreArray = [];
        bookArray.map(singleBook => {
          let singleBookToStore = {};
          singleBookToStore = singleBook;
          singleBookToStore["quantity"] = singleBook.cartProduct.quantity;
          toStoreArray.push(singleBookToStore);
        });
        this.props.addFromDB(toStoreArray);
      })
      .then(() => {
        this.setState({ showCartModal: false });
      });
  }

  handleClose() {
    this.setState({ showCartModal: false, showAddProductModal: false });
  }

  handleEmailInput(evt) {
    this.setState({ emailInput: evt.target.value });
  }

  handlePasswordInput(evt) {
    this.setState({ passwordInput: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.emailInput && this.state.passwordInput) {
      axios
        .post("/api/auth/login", {
          email: this.state.emailInput,
          password: this.state.passwordInput
        })
        .then(res => {
          return res.data;
        })
        .then(user => {
          this.props.receiveUser(user);
          console.log(this.props.user.id);
          return axios.post("/api/getNumberofCarts", {
            userId: this.props.user.id
          });
        })
        .then(bookArray => {
          console.log(this.props.cart.length);
          if (bookArray.data.length > 0 && this.props.cart.length == 0) {
            let toStoreArray = [];
            bookArray.data.map(singleBook => {
              let singleBookToStore = {};
              singleBookToStore = singleBook;
              singleBookToStore["quantity"] = singleBook.cartProduct.quantity;
              toStoreArray.push(singleBookToStore);
            });
            this.props.addFromDB(toStoreArray);
          } else if (bookArray.data.length > 0 && this.props.cart.length > 0) {
            this.handleShow();
          }
        })
        .then(() => this.setState({ error: false }))
        .catch(() => {
          this.setState({ error: true });
        });
    }
  }

  handleLogout() {
    axios
      .get("/api/auth/logout")
      .then(() => this.props.emptyUser())
      .catch(console.error);
    this.props.emptyCart();
  }

  render() {
    const username = this.props.user.name || "";
    const userLogged = this.props.user == "";
    const name = username.split(" ")[0];
    const displayError = () => {
      alert("Credenciales Incorrectas");
      this.setState({ error: false });
    };
    return (
      <div>
        {userLogged == true ? (
          <Login
            handleSubmit={this.handleSubmit}
            handleEmailInput={this.handleEmailInput}
            handlePasswordInput={this.handlePasswordInput}
            handleLogout={this.handleLogout}
            handleError={this.state.error}
          />
        ) : (
          <ul
            className="nav"
            style={{
              color: "white",
              justifyItems: "center",
              alignItems: "center"
            }}
          >
            <li
              className="nav-item"
              style={{ marginTop: "7px", marginRight: "10px" }}
            >
              Hola {name} {this.props.user.isAdmin ? "(Logged as Admin)" : ""}{" "}
              &nbsp; |
            </li>
            {!this.props.user.isAdmin ? (
              <li
                className="nav-item"
                style={{ marginTop: "7px", marginRight: "10px" }}
              >
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/compras"
                >
                  Mis Compras &nbsp; | &nbsp;
                </Link>
              </li>
            ) : (
              <ModalAddProduct
                show={this.state.showAddProductModal}
                handleClose={this.handleClose}
                handleShow={this.handleAddShow}
              />
            )}
            <li
              className="nav-item"
              onClick={this.handleLogout}
              style={{ marginTop: "7px" }}
            >
              <Link style={{ color: "white" }} to="/">
                | &nbsp; Logout
              </Link>
            </li>
            &nbsp;&nbsp;&nbsp;
          </ul>
        )}

        <ModalChooseCart
          show={this.state.showCartModal}
          handleClose={this.handleClose}
          handleShow={this.handleShow}
          handleCartSelection={this.handleCartSelection}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  receiveUser,
  emptyUser,
  emptyCart,
  addToCart,
  addFromDB
};

const mapStateToProps = ({ user, cart }) => ({
  user,
  cart
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
