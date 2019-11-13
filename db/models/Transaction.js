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
    },
    state: {
      type: S.ENUM,
      values: ['In Process', 'Cancelled', 'Completed'],
      defaultValue: 'In Process'
    }
  },
  { sequelize: db, modelName: "transaction" }
);


Transaction.getAllByUser = (userId) => {
  return this.findAll({where:{userId}})
};

Transaction.open = (obj) =>{
  return this.create({userId: obj.userId, total: obj.total, cartId: obj.id})
}

module.exports = Transaction;
