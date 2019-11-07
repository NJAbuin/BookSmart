var express = require("express");
var router = express.Router();
var User = require('../db/models/User')
var passport = require("../server/passport")
var Book = require('../db/models/Book')

router.post('/register', (req, res)=>{
    console.log('Hola')
    User.create(req.body)
    .then(user => res.status(201).send(user))
})

router.post('/login', passport.authenticate('local'), (req, res)=>{
    console.log('Hola')
    res.send(req.user)
})

router.get('/logout', (req, res)=>{
    req.logout()
    res.send('logged Out!')
})

router.get('/me', (req, res) =>{
    res.send(req.user)
})

router.get('/ejemplo', (req, res) =>{
    Book.findByCategory('Ninguna').then((e)=>res.send(e))
})



module.exports = router