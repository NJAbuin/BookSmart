const api = require("express").Router();
const User = require("../db/models/User");

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

module.exports = api;
