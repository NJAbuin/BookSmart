const db = require("../index");
const S = require("sequelize");

class Book extends S.Model {}
Book.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: S.FLOAT,
      allowNull: false
    },
    description: {
      type: S.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    imgURL: {
      type: S.STRING,
      defaultValue: "https://www.ecured.cu/images/8/81/Libro_abierto.jpg"
    },
    year: {
      type: S.INTEGER,
      allowNull: false
    },
    author: {
      type: S.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "book" }
);

Book.prototype.snippet = () =>
  this.getDataValue("description").substring(0, 20);

Book.findByAuthor = author => {
  return Book.findAll({
    where: {
      author
    }
  }).then(books => books);
};

// FALTA METODO DE CLASE PARA LAS REVIEWS

module.exports = Book;
