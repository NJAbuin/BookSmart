import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addToCart, checkOut, delFromCart } from "../store/actions/cart";
import Modal from "react-bootstrap/Modal";
import { ButtonToolbar } from "react-bootstrap";
import LoginContainer from "../containers/LoginContainer";
import Axios from "axios";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Booksmart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Tu compra se ha realizado exitosamente!</h4>
        <p>
          Recibirás notificaciones con respecto al estado de tu compra! Gracias
          por confiar en Booksmart!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
} // PARA MODAL CHECKOUT

function App({ checkOutAction }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button
        variant="success"
        className="button-finish-style"
        onClick={() => {
          setModalShow(true);
          checkOutAction();
        }}
      >
        Finalizar compra!
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
} // PARA MODAL CHECKOUT

function Cart(props) {
  const cartPersist = function () {
    if (props.cart.length == 0) {
      return localStorage.setItem("cart", "[]");
    }
    !props.user.id && localStorage.setItem("cart", JSON.stringify(props.cart));
  };

  const totalValue = function (cart) {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    return totalPrice.toFixed(2)

  };

  const [modalShow, setModalShow] = React.useState(false);
  let cartToMap = Array.isArray(props.cart) != true ? [props.cart] : props.cart;
  return (
    <div>
      <div className="cart">
        <img
          src="https://image.flaticon.com/icons/png/512/107/107831.png"
          style={{ width: "40px", display: "inline-block" }}
          alt=""
        />{" "}
        &nbsp;&nbsp;&nbsp;
        <h1 style={{ display: "inline-block", margin: "0 0 0 0" }}>
          Mi Carrito
        </h1>
      </div>
      <div className="cart-container">
        <div className="cart-container-products">
          <div className="cart-container-products-titles">
            <h3>Producto</h3>
            <h3>Cantidad</h3>
            <h3>Total</h3>
          </div>

          {cartToMap.map(product => {
            const totalPrice = product.price * product.quantity;
            let productQtty = product.quantity;
            return (
              product.quantity > 0 && (
                <div className="cart-container-products-list" key={product.id}>
                  <img src={product.imgURL} style={{ width: "75px" }} alt="" />
                  <p style={{ width: "80px" }}>{product.name}</p>
                  <div className="cart-container-total-count">
                    <Button
                      variant="outline-info"
                      onClick={() => {
                        console.log(props)
                        props.delFromCart(product);
                        props.updateFromDB(product)
                        cartPersist();
                      }}
                    >
                      -
                    </Button>
                    <p
                      style={{
                        width: "30px",
                        marginLeft: "1em",
                        marginRight: "auto"
                      }}
                    >
                      {productQtty}
                    </p>
                    <Button
                      onClick={() => {
                        props.addToCart(product);
                        props.updateFromDB(product)
                        cartPersist();
                      }}
                      variant="outline-info"
                    >
                      +
                    </Button>
                  </div>
                  <div className="product-price">${totalPrice.toFixed(2)}</div>
                  <Button
                    onClick={() => {
                      props.deleteProduct(product);
                      cartPersist();
                    }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              )
            );
          })}
        </div>
        <div className="cart-container-total">
          <div className="cart-container-descount">
            <p>CUPON DE DESCUENTO</p>
            <div className="descount-input">
              <input onChange={props.handleInput} type="text" style={{ width: "120px" }} />
              <Button onClick={() => {
                alert("CUPON INVALIDO!")
              }} variant="primary">Agregar</Button>
            </div>
          </div>
          <div className="cart-container-total-count">
            <p style={{ fontWeight: "bold" }}>TOTAL:</p>
            <p>$ {totalValue(props.cart)}</p>
          </div>
          {props.user && (
            <ButtonToolbar>
              <Button
                variant="success"
                className="button-finish-style"
                onClick={() => {
                  let userId = props.user.id;
                  console.log(props.cart)
                  props.addTransactionToStore(props.cart)
                  setModalShow(true);
                  props.checkOut({ cart: props.cart, user: userId });
                  sendEmail(props.user.email, props.cart);
                }}
              >
                Finalizar Compra!
              </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ButtonToolbar>
          )}
          {!props.user && (
            <div>
              <div className="text-login-cart">
                <p style={{ marginBottom: "0" }}>
                  Por favor, inicie sesion para completar la compra
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const sendEmail = (email, cart) => {
  Axios.post("/api/email", { email, cart })
    .then(() => console.log(`Email sent to: ${email}`))
    .catch(console.error());
};

const mapStateToProps = ({ user, cart }) => ({
  user,
  cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: book => dispatch(addToCart(book)),
  checkOut: cart => dispatch(checkOut(cart)),
  delFromCart: book => dispatch(delFromCart(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
