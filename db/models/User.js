const db = require("../index");
const S = require("sequelize");
const crypto = require("crypto");
const Transaction = require("./Transaction");
const Cart = require("./Cart");

class User extends S.Model {}
User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: S.STRING,
      allowNull: false
    },
    role: {
      type: S.STRING,
      defaultValue: null
    },
    salt: {
      type: S.TEXT
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    }
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate(user => {
  user.salt = user.randomSalt();
  user.password = user.hashPassword(user.password);
});

User.afterCreate(user => {
  Cart.create({});
});

User.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

User.prototype.randomSalt = function() {
  return crypto.randomBytes(20).toString("hex");
};

User.prototype.validatePassword = function(password) {
  let newPassword = this.hashPassword(password);
  return newPassword === this.password;
};

module.exports = User;
