const db = require("../index");
const S = require("sequelize");
const Op = S.Op;

class Cart extends S.Model {}
Cart.init(
  {
    total: {
      type: S.VIRTUAL,
      get() {
        //CARTPRODUCT.FINDALL
      }
    }
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart;
