const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/booksmart", {
  logging: false,
  force: true
});

module.exports = db;
