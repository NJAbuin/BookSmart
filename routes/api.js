const api = require("express").Router();
const User = require("../db/models/User");

//DELETE THIS ROUTES BEFORE DEPLOYING/////////////////
//EDIT THE SEED TO SUIT YOUR MODEL REQUIREMENTS
api.get("/seed", (req, res) => {
  User.bulkCreate([
    {
      firstName: "Pepe",
      age: 23
    },
    {
      firstName: "Caro",
      age: 23
    },
    {
      firstName: "Fede",
      age: 36
    }
  ])
    .then(data => res.json(data))
    .catch(err => console.log(`Failed to seed db :: ERROR: ${err}`));
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
