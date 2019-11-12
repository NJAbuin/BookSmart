import React from "react";
import Button from 'react-bootstrap/Button'




function Cart({ cartReducer }) {

    console.log(cartReducer)
    return (
        <div>
            <div className="cart" >
                <img src="https://image.flaticon.com/icons/png/512/107/107831.png" style={{ width: "40px", display: "inline-block" }} alt="" /> &nbsp;&nbsp;&nbsp;
            <h1 style={{ display: "inline-block", margin: "0 0 0 0" }} >Mi Carrito</h1>
            </div>
            <div className="cart-container" >
                <div className="cart-container-products" >
                    <div className="cart-container-products-titles" >
                        <h3>Producto</h3>
                        <h3>Cantidad</h3>
                        <h3>Total</h3>
                    </div>
                    {cartReducer.map(product => {
                        return (
                            <div className="cart-container-products-list" >
                                <img src={product.imgURL} style={{ width: "75px" }} alt="" />
                                <p>{product.name}</p>
                                <div>
                                    <Button variant="outline-info">-</Button>
                                    <input style={{ width: "30px", textAlign: "center" }} type="text" defaultValue="1" name="" id="" />
                                    <Button variant="outline-info">+</Button>
                                </div>
                                <div className="product-price" >${product.price}</div>
                                <Button variant="danger" >Delete</Button>
                            </div>
                        )
                    })}

                </div>
                <div className="cart-container-total" >
                    <div className="cart-container-descount" >
                        <p>CUPON DE DESCUENTO</p>
                        <div className="descount-input" >
                            <input type="text" style={{ width: "120px" }} />
                            <Button variant="primary" >Agregar</Button>
                        </div>
                    </div>
                    <div className="cart-container-subtotal-count" >
                        <p>SUBTOTAL</p>
                        <p>$1.234,99</p>
                    </div>
                    <div className="cart-container-envio" >
                        <p>ENVIO</p>
                        <Button variant="primary" >Calcular</Button>
                    </div>
                    <div className="cart-container-total-count" >
                        <p style={{ fontWeight: "bold" }} >TOTAL:</p>
                        <p>$1.234,99</p>
                    </div>
                    <Button variant="success" className="button-finish-style" >Finalizar Compra</Button>

                </div>
            </div>
        </div>
    );
}

export default Cart;


