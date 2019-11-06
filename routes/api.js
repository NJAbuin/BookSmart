const api = require("express").Router();
const User = require("../db/models/User");

const faker = require("faker");
const Books = require("./models/products"); // RUTA FRUTA: VA A SER LA RUTA DEL MODEL BOOKS

const randomName = faker.commerce.productName(); // FAKER BULKCREATE
const randomPrice = faker.commerce.price(); // FAKER BULKCREATE
const randomDescription = faker.lorem.sentences(); // FAKER BULKCREATE
const randomStock = faker.random.number(); // FAKER BULKCREATE
const randomImgURL = faker.image.imageUrl(); // FAKER BULKCREATE
const randomAuthor = faker.name.findName(); // FAKER BULKCREATE
const randomISBN = fake.isbn10((separator = "-")); // FAKER BULKCREATE

//DELETE THIS ROUTES BEFORE DEPLOYING/////////////////
//EDIT THE SEED TO SUIT YOUR MODEL REQUIREMENTS

api.get("/seed", (req, res) => {
  Books.bulkCreate([
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    },
    {
      name: randomName,
      price: randomPrice,
      description: randomDescription,
      stock: randomStock,
      imgURL: randomImgURL,
      year: 3043,
      author: randomAuthor,
      ISBN: randomISBN
    }
  ]);
});

api.get("/destroydb", (req, res) => {
  User.destroy({ where: {} })
    .then(data => res.redirect("/"))
    .catch(err => err => console.log(`Failed to destroy db :: ERROR: ${err}`));
});

//////////////////////////////////////////////////////////

api.get("/users", (req, res) => {
  User.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log("Failed to retrieve users at /api/users"));
});

module.exports = api;
