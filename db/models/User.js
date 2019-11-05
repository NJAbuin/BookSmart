const Sequelize = require("sequelize");
const db = require("../index");

const Model = Sequelize.Model;

class User extends Model {}
User.init(
  {
    firstName: {
      type: Sequelize.STRING,
      allowNUll: false
    },
    age: {
      type: Sequelize.INTEGER
    }
  },
  {
    sequelize: db,
    modelName: "user"
  }
);

module.exports = User;
