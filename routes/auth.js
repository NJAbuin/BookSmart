var express = require("express");
var router = express.Router();
var User = require("../db/models/User");
var passport = require("../server/passport");

router.get("/me", (req, res) => {
  res.send(req.user);
});

router.post("/register", (req, res) => {
  User.create(req.body).then(user => res.status(201).send(user));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("logged Out!");
});

router.get("/facebook", passport.authenticate("facebook"), (req, res) => {
  console.log("Estoy en la ruta de facebook auth.");
  res.send(req.user);
});

router.get("/facebook/callback", passport.authenticate("facebook"), function(
  req,
  res
) {
  console.log("Algo de facebook?");
  res.redirect("/");
});

module.exports = router;
