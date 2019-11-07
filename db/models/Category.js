const db = require("../index")
const S = require("sequelize")
const Book = require("./Book")

class Category extends S.Model { }
Category.init(
    {
        name: {
            type: S.STRING,
            allowNull: false
        }
    },
    { sequelize: db, modelName: "book" }
)

//DA METODOS getBooks, setBooks, addBooks, addBook a CATEGORY 
//Y A BOOK getCategorys, setCategotys , addCategorys y addCategory

Category.belongsToMany(Book, { through: "BookCategory" })
Book.belongsToMany(Category, { through: "BookCategory" })

Category.findByCategory = function (category) {
    return Category.findOne(
        {
            where: {
                name: category
            }, include:
                [Book]
        }
    )
        .then(category => { console.log(category) })
}