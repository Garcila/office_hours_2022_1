const fruits = [
  {
    "nombre": "aguacate",
    "name": "avocado",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=379&q=80"
  },
  {
    "nombre": "algarroba",
    "name": "carob",
    "scientific": "na",
    "image": "https://www.ecestaticos.com/image/clipping/557/418/30a73aaab218d3da70925fbd045d17b2/la-algarroba-el-alimento-sin-grasa-que-compite-con-el-cacao.jpg"
  },
  {
    "nombre": "ajonjoli",
    "name": "sesame",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1616269533135-e051e983ceda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
  },
  {
    "nombre": "banano",
    "name": "banana",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
  },
  {
    "nombre": "borojo",
    "name": "borojo",
    "scientific": "alibertia patinoi",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Borojoa_patinoi.jpg/220px-Borojoa_patinoi.jpg"
  },
  {
    "nombre": "caña fistula",
    "name": "golden shower",
    "scientific": "cassia fistula",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Golden_shower_tree.jpg/220px-Golden_shower_tree.jpg"
  },
  {
    "nombre": "curuba",
    "name": "passion fruit",
    "scientific": "na",
    "image": "https://i.pinimg.com/564x/af/2b/d6/af2bd6ebf121bb020134709fac6e6e72.jpg"
  },
  {
    "nombre": "ciruela",
    "name": "plum",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
  },
  {
    "nombre": "coroso",
    "name": "na",
    "scientific": "na",
    "image": "https://asawaa.com/wp-content/uploads/2017/12/Corozo-Asawaa-scaled.jpg"
  },
  {
    "nombre": "cereza",
    "name": "cherry",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    "nombre": "chontaduro",
    "name": "na",
    "scientific": "na",
    "image": "https://estaticos.miarevista.es/uploads/images/article/58aa98af5cafe8057f391d4f/ppal-chontaduro_0.png"
  },
  {
    "nombre": "carambolo",
    "name": "na",
    "scientific": "na",
    "image": "https://www.lavanguardia.com/files/article_main_microformat/uploads/2018/10/16/5e997f6a26d31.jpeg"
  },
  {
    "nombre": "chirimoya",
    "name": "custard apple",
    "scientific": "na",
    "image": "https://www.cucinare.tv/wp-content/uploads/2019/06/Chirimoya.jpg"
  },
  {
    "nombre": "cacao",
    "name": "cocoa",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1573710661345-610f790e1218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "cafe",
    "name": "coffee",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1561176389-d3c338a11434?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=326&q=80"
  },
  {
    "nombre": "coco",
    "name": "coconut",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1560769680-ba2f3767c785?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    "nombre": "durazna",
    "name": "peach",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1595743825637-cdafc8ad4173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "feijoa",
    "name": "na",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1541857754-557a44522bec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
  },
  {
    "nombre": "fresa",
    "name": "strawberry",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1587815073078-f636169821e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
  },
  {
    "nombre": "frambuesa",
    "name": "raspberry",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    "nombre": "granadilla",
    "name": "passion fruit",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1616077498072-ccba9b178fa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "guanabana",
    "name": "soursop",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1582248787745-e2ee014c16d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80"
  },
  {
    "nombre": "guayaba",
    "name": "guava",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1564322955384-c41858b46881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "guama",
    "name": "na",
    "scientific": "na",
    "image": "https://i.pinimg.com/originals/cc/b5/22/ccb522b0954fe11ebd33450650426bd6.jpg"
  },
  {
    "nombre": "higo",
    "name": "fig",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1571337547740-a56ef4b5aa05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    "nombre": "limon",
    "name": "lemon",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80"
  },
  {
    "nombre": "mango",
    "name": "mango",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
  },
  {
    "nombre": "manzana",
    "name": "apple",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
  },
  {
    "nombre": "mandarina",
    "name": "tangerine",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1603455907355-097260ccc037?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "mora",
    "name": "blackberry",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1615218370629-da07db3571a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nombre": "maracuya",
    "name": "passion fruit",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1604495772376-9657f0035eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nombre": "melon",
    "name": "melon",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80"
  },
  {
    "nombre": "nispero",
    "name": "medlar",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1563147592-6767f86ba8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nombre": "naranja",
    "name": "orange",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "papaya",
    "name": "papaya",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1526318472351-c75fcf070305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "pera",
    "name": "pear",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1601876819102-99560f772713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "pitaya",
    "name": "",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1607532668400-f162fce11d06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
  },
  {
    "nombre": "piña",
    "name": "pineapple",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "sandia",
    "name": "watermelon",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1539248519424-b4b8f9a99a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "tomate",
    "name": "tomato",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1616943269705-f8d095067a4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
  },
  {
    "nombre": "uva",
    "name": "grape",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1525286102393-8bf945cd0649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
  },
  {
    "nombre": "uchuva",
    "name": "gooseberry",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1596411754250-72bce519ed8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
  },
  {
    "nombre": "marañon",
    "name": "cashew",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
  },
  {
    "nombre": "madroño",
    "name": "arbutus",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1576697293855-707ff489fc7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    "nombre": "toronja",
    "name": "pink grapefuit",
    "scientific": "na",
    "image": "https://images.unsplash.com/photo-1619111826451-d574aef1dd60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=353&q=80"
  }
]
module.exports = fruits;