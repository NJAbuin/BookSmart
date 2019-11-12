const db = require("../index");
const S = require("sequelize");
const Op = S.Op;
const User = require("./User");

class Transaction extends S.Model {}
Transaction.init(
  {
    total: {
      type: S.FLOAT,
      defaultValue: 0
    }
  },
  { sequelize: db, modelName: "transaction" }
);

Transaction.prototype.getAllByUser = () => {};

module.exports = Transaction;
