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
    },
    status: {
      type: S.ENUM,
      values: ['opened', 'closed'],
      defaultValue: 'opened'
    }
  },
  { sequelize: db, modelName: "cart" }
);

Cart.chekout = (userId) =>{
  return this.update({status:'closed'},{where:{userId: userId, status: 'opened'}})
}
  
module.exports = Cart;
