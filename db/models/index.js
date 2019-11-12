const Book = require("./Book");
const Cart = require("./Cart");
const Transaction = require("./Transaction");
const User = require("./User");
const Category = require("./Category");
const CartProduct = require("./CartProduct");

Book.belongsToMany(Cart, {
  as: "Book",
  through: "CartBook",
  foreignKey: "bookId"
});

Cart.belongsToMany(Book, {
  through: "CartBook"
});

User.hasMany(Cart); //Esto crea en la tabla Cart un campo que se llama UserID (https://sequelize.org/master/manual/associations.html#source--amp--target)

User.hasMany(Transaction); // => Transaction va a tener userid
Cart.hasMany(Transaction); // => Transaction va a tener cartId

module.exports = { Book, Cart, User, Transaction, Category, CartProduct };
