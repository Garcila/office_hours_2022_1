const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

const { fruits } = require("./models-data/fruits_are_back.json");

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
	res.render("home", { title: "🏡 Home" });
});

app.get("/fruits", (req, res) => {
	res.render("fruits", { fruits, title: "🥭 Fruits" });
});

app.listen(PORT, () => console.log(`listening - ⚓️ ${PORT})`));
