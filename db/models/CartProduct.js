const db = require("../index");
const S = require("sequelize");
const Op = S.Op;

class CartProduct extends S.Model {}
CartProduct.init(
  {
    cartId: {
      type: S.INTEGER,
      allowNull: false
    },
    bookId: {
      type: S.INTEGER,
      allowNull: false
    },
    quantity: {
      type: S.INTEGER,
      allowNull: false
    },
    orderId: {
      type: S.INTEGER,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "cartProduct" }
);

CartProduct.newProduct = obj => {
  return CartProduct.create(obj);
};

module.exports = CartProduct;
