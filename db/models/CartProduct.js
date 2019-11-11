const db = require("../index");
const S = require("sequelize");
const Op = S.Op;

class CartProduct extends S.Model {}
CartProduct.init(
  {
    productId: {
      type: S.INTEGER,
      allowNull: false
    },
    cartId: {
      type: S.INTEGER,
      allowNull: false
    },
    quantity: {
      type: S.INTEGER,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "cartProduct" }
);
