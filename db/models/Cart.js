const db = require("../index");
const S = require("sequelize");
const Op = S.Op;

class Cart extends S.Model { }
Cart.init(
  {
    total: {
      type: S.VIRTUAL,
      get() {

      }
    },
    cartId: {
      type: S.INTEGER,
      allowNull: false
    },
    state: {
      type: S.ENUM,
      values: ["Opened", "In Process", "Cancelled", "Completed", "Droped"],
      defaultValue: "Opened"
    }
  },
  { sequelize: db, modelName: "cart" }
);

Cart.checkout = userId => {
  return this.update(
    { status: "closed" },
    { where: { userId: userId, status: "opened" } }
  );
};

module.exports = Cart;
