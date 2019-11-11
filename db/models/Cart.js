const db = require("../index");
const S = require("sequelize");
const Op = S.Op;
const Book = require("./Book");

class Cart extends S.Model {}
Cart.init(
  {
    total: {
      type: S.FLOAT,
      defaultValue: 0
    },

    quantity: {
      type: S.INTEGER
    }
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart;
