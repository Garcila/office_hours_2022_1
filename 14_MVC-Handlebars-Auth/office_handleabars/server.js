const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const exphbs = require("express-handlebars");

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
	res.render("home", {
		title: `🏡 Home`,
		pageName: `Hello World`,
	});
});

app.get("/projects", (req, res) => {
	res.render("projects", {
		title: `🎨 My Projects`,
		projects: [1, 2, 3, 4, 5],
	});
});

app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
