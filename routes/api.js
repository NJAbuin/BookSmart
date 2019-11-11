const api = require("express").Router();
const User = require("../db/models/User");
const Op = require("sequelize").Op;

const faker = require("faker");
const Books = require("../db/models/Book");
const Category = require("../db/models/Category");

const categories = [
  "Terror",
  "Aventura",
  "Policial",
  "Periodistico",
  "Romantica"
];

const getRandomCat = arr => {
  let randomCategory = categories[Math.round(Math.random() * 5)];

  return [randomCategory, randomCategory];
};

api.get("/seed", (req, res) => {
  Books.bulkCreate([
    {
      name: "Fernández & Fernández",
      price: 399.99,
      description:
        "Es un impactante thriller político y privado sobre una pareja, la de Cristina y Alberto, que se necesita y se rechaza, se quiere y se odia.¿Cómo piensan compartir el poder? O mejor dicho, ¿piensan compartirlo? ¿Quién se impondrá en la inevitable guerra que viene? ¿Cómo fue que se conocieron a espaldas del marido de ella, el último en integrarse al triángulo? ¿Por qué en el pasado él tuvo que enfrentarse a Kirchner para que ella no renunciara al gobierno? ¿A qué se refería el nuevo Presidente cuando, enemistado con su ahora vice, aseguraba que Cristina tenía una enorme distorsión de la realidad, vivía en su mundo dual y debía recuperar la cordura? Alberto avisa: Ella sabe que no me puede manejar. Un día ya le renuncié y estuvimos diez años peleando. Cristina no se conforma con dejar de mandar.Franco Lindner, editor de la revista Noticias, descorre el velo de una relación en la que nada es lo que parece.",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/JKMS-PdecpKBMlFoom9stu5KiQ4=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1112016_294e81a3a4fe80d2d944056f45c6824945a34a06.jpg",
      year: 2019,
      author: "Franco Lindner",
      category: getRandomCat(categories)
    },
    {
      name: "Sexo ATR",
      price: 419.99,
      description:
        "“Sexo ATR trata de naturalizar y hablar de sexo con un lenguaje cómodo y accesible. Cuasi ATP. Se trata de liberarnos, desbloquearnos, y si es con ritmo y sustancia, mejor. Bueno, sin sustancia porque en la cama no ayuda ni un poco.Mi idea con este libro es acompañarte en eso, dándote info clara, precisa y concisa. Habilitarte y empoderarte (porque el conocimiento es poder) para vivir tu sexualidad ATR”. La Lic. Cecilia Ce nos ofrece en este libro-guía información sexual valiosísima de una manera gráfica, divertida, empática y respetuosa, con la intención de que cada uno haga su propio recorrido de autodescubrimiento y reafirmación, para disfrutar de la sexualidad en libertad. Este es el libro sobre sexo que todos siempre ansiamos tener. Esta es la educación sexual que queremos.",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/hpSAn5EPsAus1A_KlKw4v9DOyzs=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1098153_e118dd016a949356434bb9685c663a8131585900.jpg",
      year: 2019,
      author: "Lic. Cecilia Ce",
      category: getRandomCat(categories)
    },
    {
      name: "Andamios",
      price: 319.99,
      description:
        "¿Qué queda del propio país, en la memoria y en la idea presente, cuando se regresa tras un largo exilio? ¿Cómo reconstruir los afectos, cómo reintegrarse en una sociedad que puede habernos olvidado y que nosotros apenas conocemos ya? Tras doce años de obligada ausencia, Javier Montes vuelve a radicarse en Montevideo, llevando a cuestas todo un fardo de nostalgias, prejuicios, ilusiones y soledades. Su peripecia, a partir de ese momento, será una sucesión de encuentros y desencuentros. Andamios es un libro de sabiduría ejemplar en el cual la mirada se acerca con tanto amor y humor a los seres humanos que el texto acaba por convertirse en el más vivo reflejo de cualquiera de nosotros.",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/hMxN8O3YzT33y0sQzWdjk52Kjgk=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1112519_344472d771c2b7dbed7f9c864a82f943dd5ebbe2.jpg",
      year: 2019,
      author: "Mario Benedetti",
      category: getRandomCat(categories)
    },
    {
      name: "Budismo práctico",
      price: 244.99,
      description:
        "Nos hicieron creer que el universo está dividido en pares con extremos por los que hay que tomar o no partido. Esta visión ha generado un modo que nos lleva a sufrir. Salir de esa trampa es, inmediatamente y por el propio y recto esfuerzo, un camino sencillo y práctico. Erróneamente, nos hicieron creer que el universo está dividido en dos, en pares con extremos por los que hay que tomar partido (apegarse) o no tomar partido (rechazar). Esta visión ha generado un modo que nos lleva a sufrir. Y ese modo es la dualidad, otra de las creaciones de nuestra mente condicionada, un enorme y muy omnipresente tóxico mental que influye en nuestra vida y en la relación con los otros y con nosotros mismos. Salir de esa trampa es, inmediatamente y por el propio y recto esfuerzo, un camino sencillo y práctico. En su nuevo libro, Jorge Rovner, médico y psicoterapeuta, nos acerca herramientas basadas en los principios budistas para que podamos deshacernos de esa falsa creencia sobre la dualidad. Se trata de una contribución optimista y entusiasta para la vida de las personas. Intentar lo que aquí se propone para ayudar a calmar el dolor, pesar y malestar de nosotros y de quienes nos rodean. Aquí, ahora y así.",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/OemNWc-uRkOIH3QRQrB_Ig6kbO4=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast987088_548556cd79534a82b5869efd86c077db7059e41b.jpg",
      year: 2019,
      author: "Jorge Rovner",
      category: getRandomCat(categories)
    },
    {
      name: "Todo está j*dido",
      price: 145.0,
      description:
        "Por el autor del best seller mundial El sutil arte de que (casi todo) te importe una mi*rda, esta guía provee consejos inesperados para lidiar y no vivir de la esperanza.Vivimos en un momento muy interesante. En el aspecto material, este es el mejor momento que hemos vivido como sociedad, somos más libres que nunca, más sanos y más ricos que cualquier otra época en la historia de la humanidad. Sin embargo, de alguna manera, todo parece estar irreparablemente destruido: el calentamiento global, los gobiernos se equivocan constantemente, las economías colapsan y todo mundo se siente perpetuamente ofendido en Twitter. En este momento de la historia, en el que tenemos acceso a la tecnología, a la educación y a las comunicaciones, a la que nuestros antepasados ni siquiera podían soñar, muchos de nosotros nos sentimos desesperanzados.¿Qué está sucediendo? Si alguien puede ponerle un nombre a nuestro malestar y ayudar a solucionarlo, ese es Mark Manson.Manson publicó El sutil arte de que (casi todo) te importe una mi*rda, un libro en el que explicaba las razones que nos provocan ansiedad constante en esta vida moderna. Nos mostró que la tecnología nos había ayudado a preocuparnos por las cosas equivocadas, que nuestra cultura nos había convencido de que el mundo nos debía algo cuando no era así, y lo peor de todo, la obsesión moderna y enloquecedora de encontrar siempre la felicidad. Cosas que realmente solo sirven para hacernos más infelices. En cambio, el sutil arte de ese título resultó ser un desafío audaz: el de elegir tu lucha; para reducir y enfocar el dolor que deseas soportar. El resultado fue un libro que se convirtió en un fenómeno internacional, con más de seis millones de ejemplares vendidos en todo el mundo y número 1 de las listas de los más vendidos en más de trece países.Ahora, en Todo está j*dido, Manson se adentra en los fallos que tenemos como seres humanos hasta las interminables calamidades que están sucediendo alrededor del mundo entero. Partiendo desde una investigación psicológica sobre estos temas, así como de la sabiduría eterna de filósofos como Platón, Nietzsche y Tom Waits, Manosn analiza la religión y la política y las diferentes formas en las que se han manifestado. Observa nuestras relaciones con el dinero, el entretenimiento e Internet, y como nos obsesionamos hasta consumirnos psicológicamente vivos. Desafía abiertamente nuestras definiciones de fe, felicidad y libertad e incluso de la esperanza.Con su mezcla habitual de erudición y de un humor inesperado, Manson nos coge del cuello y nos desafía a ser más honestos con nosotros mismos para conectarnos con el mundo de maneras que probablemente no hayamos considerado antes.Es otro juego intuitivo que busca entender el dolor en nuestros corazones y el estrés de nuestra alma. Uno de los grandes escritores modernos ha producido otro libro que servirá de pauta para los años venideros.Sobre El sutil arte de que (casi todo) te importe una mi*rda:La capacidad de Mark para profundizar y ofrecer una visión contra-intuitiva sobre los retos de la vida hacen que sea uno de mis escritores preferidos. Matt KepnesLo contrario al resto de los libros. No lo intentes. Ríndete. Equivócate. Baja tus expectativas. Deja de creer en ti mismo. Todos los puntos son profundamente verdaderos. Útiles y más poderosos que la positividad normal. Sucinto pero sorprendentemente profundo",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/Tz1Jk5i5v4i7Fhu9Pin3KWnEsWE=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1096625_244c130d5d0ed49e6c27e2334dae9ee50c656bfa.jpg",
      year: 2019,
      author: "Mark Manson",
      category: getRandomCat(categories)
    },
    {
      name: "¡Peligro! Matemática explícita",
      price: 279.99,
      description:
        "Un verdadero festival de problemas, paradojas, dilemas e historias extraordinarias, conducido por el mejor divulgador de matemática del mundo. Cuenta Adrián que tiene la costumbre de guardar, en el bolsillo izquierdo de la camisa, papelitos con anotaciones sobre cosas que le suceden, que observa o le comentan, y que después esos apuntes se convierten en los problemas de sus libros. Es que la matemática está mucho más presente en la vida cotidiana de lo que parece, y si aprendemos a ver con un poco de curiosidad, se encuentra en todos lados. Desafíos en torno a una hamburguesa; cámaras que registran todos los movimientos de la pelota en un partido; cómo es el sorteo de las causas en los juzgados judiciales; decisiones de la inteligencia artificial; problemas sobre la verdad, la verosimilitud y la falsedad; Lennon o McCartney; Voltaire y el FMI; cómo repartir los bienes de una herencia; historias sobre bitcoins y blockchain; tatuajes increíbles; un museo muy inquietante, cómo cambiar reglas injustas y muchos más.",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/9yoouG6CvPEbBADng5qV4LLQuL8=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1051265_799ebfbde3d46f101cd3065cc7c2c89962da224d.jpg",
      year: 2019,
      author: "Adrián Paenza",
      category: getRandomCat(categories)
    },
    {
      name: "Ay, pasión",
      price: 349.99,
      description:
        "Historias de amor, deseo y seducción escritas por las autoras argentinas más reconocidas del género: Cristina Bajo, Florencia Bonelli, Gloria V. Casañas, Gabriela Exilart, Gabriela Margall, Anabella Franco, Graciela Ramos, Mirta Pérez Rey, Andrea Milano, Fernanda Pérez, Mariana Guarinoni, Camucha...",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/IPYDLGABM0qDnaG9n9uuSjHAagQ=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1106400_794a327e5a7d1456f3676e2df229dfeaf00eac86.jpg",
      year: 2019,
      author: faker.name.findName(),
      category: getRandomCat(categories)
    },
    {
      name: "Predicciones 2020",
      price: 279.99,
      description:
        "Comenzamos a transitar un cambio de década: 2020, el año de Capricornio. Este libro te brinda el horóscopo mes por mes para todos los signos, tus días favorables, las fechas especiales y consejos para la fortuna especial. Los astros nos brindan la oportunidad de activar las transformaciones que venimos postergando, de cara a un verdadero cambio de Era. Será un tiempo de energía positiva para lograr metas que antes nos parecían imposibles. Capricornio es el Todopoderoso del zodíaco y nos ayudará a encontrar el sentido de nuestra misión y nuestro legado en esta nueva etapa. Además del horóscopo mes a mes para todos los signos, Jimena te advierte sobre tus días favorables y las fechas especiales, y te enseña a celebrar tu no-cumpleaños, porque en astrología los opuestos se unen por el bien común.",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/xpDux5oXJUjkQyQSEPp7Fw7l8u0=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1106399_807050d6a202a13685f03f1ecc9d4aa8ef17f177.jpg",
      year: 2019,
      author: faker.name.findName(),
      category: getRandomCat(categories)
    },
    {
      name: "Breves amores eternos",
      price: 419.99,
      description:
        "Tras el éxito internacional de La uruguaya, Pedro Mairal vuelve con un volumen de cuentos que es una auténtica caja de sorpresas.En la primera parte, que lleva el título del libro, redescubrimos el universo del autor: el amor con sus distintos rostros, las múltiples formas de circulación del deseo, el sexo como escape de las trampas de la vida burguesa, el papel muy poco airoso de los hombres en las relaciones sentimentales.“Hoy temprano”, la segunda serie de cuentos, se despliega en una diversidad de temas y es una demostración magistral de talento y versatilidad. Los personajes se mueven en un borde peligroso. En medio de situaciones cotidianas se abre una fisura inesperada que desbarata su normalidad y por donde se cuela el absurdo, lo fantástico y la pesadilla.Incisivo, tierno, divertido, perturbador, Breves amores eternos es un muestrario de las posibilidades de la literatura como espejo de los anhelos y los temores humanos. Una vez más, Mairal deja en claro por qué es uno de los escritores contemporáneos más leídos y admirados de la lengua española.",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/zxlz8ORnPU2945XbLz4G620uFRY=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1112520_b6c5affb018f6f0017ebd0fe2be33a72471a2430.jpg",
      year: 2019,
      author: faker.name.findName(),
      category: getRandomCat(categories)
    },
    {
      name: "Somos Belen",
      price: 359.99,
      description:
        "En la Argentina —un país que proporcionó algunas de las prácticas de la vida real que incluí en El cuento de la criada, en especial, el robo de bebés perpetrado durante la dictadura militar—, la grave situación de Belén logró salir a la luz, lo que obligó a la Justicia a revisar el caso y, finalmente, llevó a su absolución. Pero esto sucedió después de años de sufrimiento por parte de Belén, y únicamente fue el resultado de una masiva protesta contra la negación de un debido proceso a la joven, organizada por un grupo de activistas determinado a revertir este ejemplo de una Justicia injusta. (De esta suerte, por lo menos, la Argentina no es Gilead. Gilead jamás toleraría una protesta así).¿Cuántas otras Belén hay en el mundo? ¿Cuántas mujeres han muerto porque tuvieron miedo de ir a un hospital por un aborto, espontáneo o provocado, aterradas por la posibilidad de que las acusaran de asesinato? ¿Cómo podríamos saberlo? Como ocurre muy a menudo cuando se trata de las mujeres, las injusticias están ocultas, enterradas entre silencios y eufemismos. Tenemos una deuda de gratitud con aquellos que dieron a conocer, al menos, esta injusticia en particular.Del prólogo de Margaret Atwood“Quiero que escribas ese libro. Y que tengas mi voz para contar la verdadera historia. Belén",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/oKMbzqcj37YWCUcTXzYcZ6qos4c=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1112018_643812ca9b4066fdeada2e933aadaf3f51a5d778.jpg",
      year: 2019,
      author: faker.name.findName(),
      category: getRandomCat(categories)
    },
    {
      name: "¿Sueñan los androides con ovejas electricas?",
      price: 379.99,
      description:
        "En el año 2021 la guerra mundial ha exterminado a millones de personas. Los supervivientes codician cualquier criatura viva, y aquellos que no pueden permitirse pagar por ellas se ven obligados a adquirir réplicas increíblemente realistas. Las empresas fabrican incluso seres humanos. Rick Deckard es un cazarrecompensas cuyo trabajo es encontrar androides rebeldes y retirarlos, pero la tarea no será tan sencilla cuando tenga que enfrentarse a los nuevos modelos Nexus-6, prácticamente indistinguibles de los seres humanos.  ",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/l-AOzXp7aUQZoJJUt4OhpjYigSY=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1099660_f2d429afe20508aeb03d369f04eac376ed729e2c.jpg",
      year: 2019,
      author: faker.name.findName(),
      category: getRandomCat(categories)
    },
    {
      name: "El árbol de las brujas",
      price: 379.99,
      description:
        "Como cada año en la noche de Halloween, un grupo de niños se disfrazan y salen a la calle para pedir premio o prenda. Cuando van a buscar al último chico de la pandilla, Pipkin, lo encuentra alicaído, y éste les pide que le esperen en la casa Fantasmal de la Cañada. Allí les aguarda un peculiar personaje que les descubrirá los orígenes de la fiesta de Halloween. Bradbury es un autor referencial en el mundo de la ciencia ficción con obras clásicas como Crónicas Marcianas o Fahrenheit 451.",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/dMMINnayWb5hbQYho0-iWRK-8qI=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1099661_80fc59cd4168300bf1089bc564be7fb3ffc37d65.jpg",
      year: 2019,
      author: faker.name.findName(),
      category: getRandomCat(categories)
    },
    {
      name: "Seguiré sin ti",
      price: 379.99,
      description:
        "Cuando hacen rellenar el absurdo test de orientación profesional en el instituto, todo el mundo elige profesiones elegantes, bien remuneradas y con reconocimiento social. Yo dejé la casilla en blanco, puestodavía no había decidido qué carrera universitaria quería cursar. Al final acabé con una licenciatura en bioquímica alimentaria y un novio dispuesto a casarse conmigo en cuanto lográramos un buen puesto de trabajo. Solo conseguí una de las dos cosas. Sigo soltera. Y no he sentido en ningún momento la tentación de establecer una relación convencional porque no he tenido ni tiempo ni ganas. ",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/jPHgOWGxVfR3dlvC5cT3pCY5QH0=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1099657_0cf5bc785c7d39a521746f66afb7481d07c7944a.jpg",
      year: 2019,
      author: faker.name.findName(),
      category: getRandomCat(categories)
    },
    {
      name: "Spinetta",
      price: 479.99,
      description:
        "Desde que el primero de los Spinetta puso un pie en Buenos Aires la historia de la música argentina se transformó para siempre. Porque la vida de un artista de la dimensión de Luis Alberto excede su obra: es necesario contar al hombre para recuperar su escala humana. Un hombre, es sabido, se explica por él mismo pero también por quienes lo anteceden y le siguen, por quienes lo rodean y rodearon, por el tiempo que le tocó en suerte vivir, el heredado y la manera en la que se conjuga en futuro",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/OhOLajBS9xYAP-lfjRS7EmRG9Q4=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1112010_b89faf3ac6b29532f62b745a2c373b3c768e7c7a.jpg",
      year: 2019,
      author: faker.name.findName(),
      category: getRandomCat(categories)
    },
    {
      name: "La cautiva",
      price: 174.99,
      description:
        "Una mujer dotada de poderes extraordinarios vivirá entre dos mundos en guerra y tendrá que decidir. Novela histórica, aventura y realismo mágico. Siglo XIX. La protagonista, una mujer blanca, es hecha cautiva por nativos. Rescatada por un chamán de la etnia mapuche, la instruirá como curandera por mandato de los dioses. Dotada de poderes extraordinarios, desde que es una niña, Amadora, ahora Antumalen Sayen, recorrerá con su maestro, Minchekewün, los territorios ancestrales de Patagonia, en medio de la guerra entre blancos e indígenas por la posesión de la tierra. La supervivencia de los aborígenes y sus saberes milenarios estarán en peligro. Antumalen comprobará que en ambos bandos se cometen atrocidades. Tendrá que enfrentarse a las contradicciones que le provoca vivir entre dos mundos en guerra e irreconciliables, y tomar una decisión.",
      stock: faker.random.number(),
      imgURL:
        "https://images.bajalibros.com/_Jg1m72urg0455ZE70EONuz9sFI=/fit-in/292x446/filters:fill(f8f8f8):quality(90):format(webp)/d2d6tho5fth6q4.cloudfront.net/extast1116907_122d8bb7e4df3e78657cf7a510d6cd7e116e30a5.jpg",
      year: 2019,
      author: faker.name.findName(),
      category: getRandomCat(categories)
    }
  ]).then(() => {
    Category.bulkCreate([
      { name: "Terror" },
      { name: "Aventura" },
      { name: "Policial" },
      { name: "Periodistico" },
      { name: "Romantica" }
    ]);
  });
});

api.get("/destroydb", (req, res) => {
  User.destroy({ where: {} })
    .then(data => Books.destroy({}))
    .then(data => Category.destroy({}))
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
