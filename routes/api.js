const api = require("express").Router();
const User = require("../db/models/User");
const Op = require("sequelize").Op;

const faker = require("faker");
const Books = require("../db/models/Book");

api.get("/seed", (req, res) => {
  Books.bulkCreate([
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName()
    }
  ]);
});

api.get("/destroydb", (req, res) => {
  User.destroy({ where: {} })
    .then(data => res.redirect("/"))
    .catch(err => err => console.log(`Failed to destroy db :: ERROR: ${err}`));
});

//////////////////////////////////////////////////////////

//retorna todos los productos de la base de datos en formato JSON
api.get("/products", (req, res) => {
  Books.findAll()
    .then(data => {
      console.log(Array.isArray(data));
      res.json(data);
    })
    .catch(err =>
      console.log("Failed to retrieve all products at /api/products")
    );
});

////////////////////////////////////////////////////////////

api.get("/product/:id", (req, res) => {
  Books.findByPk(req.params.id).then(book => {
    res.json(book);
  });
});

// retorna un producto de la base de datos en formato JSON

api.get("/products/:productName", (req, res) => {
  const product = req.params.productName;

  Books.findAll({
    where: {
      name: {
        [Op.iLike]: `%${product}%`
      }
    }
  })
    .then(books => {
      res.json(books);
    })
    .catch(err =>
      console.log(
        "Failed to retrieve all products at /api/products/:productName"
      )
    );
});

module.exports = api;
