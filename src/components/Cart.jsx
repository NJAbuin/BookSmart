import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addToCart, delFromCart } from "../store/actions/cart";

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(true); //boolean state
  return () => setValue(!value); // toggle the state to force render
}

function Cart(props) {
  const forceUpdate = useForceUpdate();

  const totalValue = function (cart) {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    return totalPrice.toFixed(2);
  };

  const cartToMap =
    props.user !== "" ? props.cart : JSON.parse(localStorage.cart);

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
              <div className="cart-container-products-list" key={product.id}>
                <img src={product.imgURL} style={{ width: "75px" }} alt="" />
                <p style={{ width: "80px" }}>{product.name}</p>
                <div>
                  <Button variant="outline-info">-</Button>
                  <p>{productQtty}</p>
                  <Button
                    onClick={e => {
                      props.addToCart(product);

                      forceUpdate();
                    }}
                    variant="outline-info"
                  >
                    +
                  </Button>
                </div>
                <div className="product-price">${totalPrice.toFixed(2)}</div>
                <Button
                  onClick={() => props.deleteProduct(product)}
                  variant="danger"
                >
                  Delete
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-container-total">
          <div className="cart-container-descount">
            <p>CUPON DE DESCUENTO</p>
            <div className="descount-input">
              <input type="text" style={{ width: "120px" }} />
              <Button variant="primary">Agregar</Button>
            </div>
          </div>
          <div className="cart-container-subtotal-count">
            <p>SUBTOTAL</p>
            <p>$ {totalValue(props.cart)}</p>
          </div>
          <div className="cart-container-envio">
            <p>ENVIO</p>
            <Button variant="primary">Calcular</Button>
          </div>
          <div className="cart-container-total-count">
            <p style={{ fontWeight: "bold" }}>TOTAL:</p>
            <p>$ {totalValue(props.cart)}</p>
          </div>
          <Button variant="success" className="button-finish-style">
            Finalizar Compra
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ user, cart }) => ({
  user,
  cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: book => dispatch(addToCart(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
