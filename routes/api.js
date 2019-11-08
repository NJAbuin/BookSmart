const api = require("express").Router();
const User = require("../db/models/User");
const Op = require("sequelize").Op;

const faker = require("faker");
const Books = require("../db/models/Book");
const Category = require("../db/models/Category");

api.get("/seed", (req, res) => {
  Books.bulkCreate([
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Una Cuarta"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Ninguna"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Cuarta", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Ninguna"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Cuarta", "Una Quinta"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    },
    {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.sentences(),
      stock: faker.random.number(),
      imgURL: faker.image.imageUrl(),
      year: 3043,
      author: faker.name.findName(),
      category: ["Una Categoria", "Otra Categoria"]
    }
  ]);
});

api.get("/seedCat", (req, res) => {
  Category.bulkCreate([
    { name: "Una Categoria" },
    { name: "Otra Categoria" },
    { name: "Una Cuarta" },
    { name: "Una Quinta" },
    { name: "Ninguna" },
    {name: 'Policial'}
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

api.get("/category", (req, res) => {
  Category.findAll({})
    .then(res => res.map(e => e.dataValues.name))
    .then(categories => res.json(categories))
    .catch(e => console.log(e));
});

api.post("/category/books", (req, res) => {
  Books.findByCategory(req.body.name).then(e => res.send(e));
});

module.exports = api;
