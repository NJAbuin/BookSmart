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

User.hasMany(Cart, { as: "Carts" });

User.hasMany(Transaction, { as: "Transactions" });

module.exports = { Book, Cart, User, Transaction, Category, CartProduct };
