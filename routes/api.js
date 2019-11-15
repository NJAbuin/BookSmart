const api = require("express").Router();

const Op = require("sequelize").Op;
const {
  User,
  Book,
  Cart,
  Category,
  Transaction,
  CartProduct
} = require("../db/models/index");

const chalk = require("chalk");

var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "booksmart.is.cool@gmail.com",
    pass: "plataforma5"
  }
});

const simplifyCart = cart => {
  let newCart = [];
  cart.forEach(e => newCart.push(`${e.quantity} x: ${e.name}`));
  return newCart;
};

var mailOptions = (userEmail, userCart) => {
  return {
    from: "booksmart.is.cool@gmail.com",
    to: userEmail,
    subject: "Gracias por su compra!",
    text: `La orden le llegara en 420 dias. Su pedido: ${JSON.stringify(
      simplifyCart(userCart)
    )}`
  };
};

api.use("/seed", require("./seed"));

//////////////////////////////////////////////////////////

//retorna todos los productos de la base de datos en formato JSON
api.get("/products", (req, res) => {
  Book.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err =>
      console.log("Failed to retrieve all products at /api/products")
    );
});

////////////////////////////////////////////////////////////

api.get("/product/:id", (req, res) => {
  Book.findByPk(req.params.id).then(book => {
    res.json(book);
  });
});

// retorna un producto de la base de datos en formato JSON

api.get("/products/:productName", (req, res) => {
  const product = req.params.productName;

  Book.findAll({
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

api.post("/email", (req, res) => {
  transporter.sendMail(mailOptions(req.body.email, req.body.cart), function(
    error,
    info
  ) {
    if (error) {
      console.log(error);
    } else {
      console.log(
        chalk.bgGreen(`Email sent to ${req.body.email}: ` + info.response)
      );
    }
  });
});

api.get("/category", (req, res) => {
  Category.findAll({})
    .then(res => res.map(e => e.dataValues.name))
    .then(categories => res.json(categories))
    .catch(e => console.log(e));
});

api.get("/categs/:cat", (req, res) => {
  Book.findByCategory(req.params.cat).then(data => res.send(data));
});

api.post("/removeFromCart", (req, res) => {
  const add = req.body;
  Cart.findOne({ where: { cartId: add.userId, state: "Opened" } })
    .then(e => {
      return e;
    })
    .then(e => {
      CartProduct.destroy({
        where: {
          orderId: e.id,
          bookId: add.book
        }
        //cartId: e.cartId}
      });
    })
    .then(() =>
      Cart.findAll({
        where: { cartId: user.userId, state: "Opened" },
        include: [{ all: true }]
      })
    )
    .then(e => {
      if (e != undefined) res.send(e[0].dataValues.books);
      else {
        res.send(null);
      }
    })
    .catch(err => console.log(err));
});

api.post("/addToCart", (req, res) => {
  const add = req.body;
  let cartData = {}; // Aca va a cargarse el orderId y el cartId
  //Si no tiene ningun carrito abierto lo crea y guarda el cartId, BookId y OrderId
  Cart.findOrCreate({ where: { cartId: add.userId, state: "Opened" } })
    .then(e => {
      return (cartData = { cartId: e[0].cartId, orderId: e[0].id });
    })
    //Busca el libro para el numero de orden y el usuario (cartId)
    .then(cart => {
      return CartProduct.findOne({
        where: {
          //cartId: add.userId,
          bookId: add.bookId,
          orderId: cartData.orderId
        }
      });
    })
    .then(e => {
      if (e == null) {
        CartProduct.create({
          cartId: cartData.cartId,
          bookId: add.bookId,
          quantity: add.quantity,
          orderId: cartData.orderId
        });
        return null;
      } else {
        CartProduct.update(
          { quantity: add.quantity },
          {
            where: {
              cartId: cartData.cartId,
              // id: add.userId,
              orderId: cartData.orderId,
              bookId: add.bookId
            }
          }
        );
        return null;
      }
    })
    .then(() => {
      return Cart.findAll({
        where: { cartId: add.userId, state: "Opened" },
        include: [{ all: true }]
      });
    }) //, include:[{all:true}]
    .then(e => {
      res.send(e);
    })
    .catch(err => console.log(err));
});

api.get("/cart", (req, res) => {
  Cart.findAll({ include: [{ all: true }] }).then(e => res.json(e));
});

api.post("/addToCartinBulkReplace", (req, res) => {
  const add = req.body;
  // Chequeo que no haya ningun carro del usuario abierto y si lo tiene se lo cierro
  Cart.update(
    { state: "Droped" },
    { where: { cartId: add.userId, state: "Opened" } }
  )
    .then(() => Cart.create({ cartId: add.userId, state: "Opened" }))
    .then(e =>
      add.bookId.map(book => {
        CartProduct.create({
          orderId: e.id,
          bookId: book.id,
          quantity: book.quantity
          //cartId: e.cartId
        });
      })
    )
    .catch(err => console.log(err));
});

api.post("/addToCartinBulkMerge", (req, res) => {
  const add = req.body;
  let presentOrder = "";
  // Chequeo que no haya ningun carro del usuario abierto y si lo tiene se lo cierro
  Cart.findOne({ where: { cartId: add.userId, state: "Opened" } })
    .then(e => {
      presentOrder = e.dataValues.id;
      return e;
    })
    .then(e =>
      add.bookId.map(book =>
        CartProduct.findOne({
          where: {
            orderId: e.id,
            bookId: book.id
            //cartId: e.cartId
          }
        }).then(res => {
          console.log(book);
          return res == null
            ? CartProduct.create({
                orderId: e.id,
                bookId: book.id,
                quantity: book.quantity
                //cartId: e.cartId
              })
            : CartProduct.update(
                { quantity: res.quantity + book.quantity },
                { where: { orderId: e.id, bookId: book.id } }
              );
        })
      )
    )
    .then(() =>
      Cart.findAll({
        where: { cartId: add.userId, state: "Opened" },
        include: [{ all: true }]
      })
    )
    .then(e => res.send(e[0].dataValues.books))
    .catch(err => console.log(err));
});

api.post("/getNumberOfCarts", (req, res) => {
  user = req.body;
  Cart.findOne({
    where: { cartId: user.userId, state: "Opened" },
    include: [{ all: true }]
  })
    .then(e => {
      console.log(e);
      if (e != null) {
        console.log("holaaaaa", e.dataValues.books);
        res.send(e.dataValues.books);
      } else {
        res.send(null);
      }
    })
    .then(e => {
      if (e != undefined) res.send(e[0].dataValues.books);
    })
    .catch(console.error());
});

api.put("/checkout", (req, res) => {
  Cart.update(
    { state: "In Process" },
    { where: { cartId: req.body.cartId } }
  ).catch(e => console.log(e));
});

api.use("/auth", require("./auth"));
module.exports = api;
