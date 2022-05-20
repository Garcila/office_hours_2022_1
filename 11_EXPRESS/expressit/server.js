const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const { fruits } = require("./data/fruits.json");

const PORT = 3000 || process.env.PORT;

// MIDDLEWARE
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));

// app.use(logger);

function logger(req, res, next) {
	console.log("hello!!!!!!!");
	next();
}

function checkIfNameIsString(req, res, next) {
	if (typeof req.body.name !== "string") {
		res.status(418);
		res.send(
			`${req.body.name} Must be a string, but recieved a ${typeof req.body
				.name}`
		);
	} else {
		next();
	}
}

// HTML ROUTES
app.get("/", (req, res) => {
	// res.send("Hello World 🌍");
	res.render("index.html");
});

app.get("/other", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/other.html"));
});

// API ROUTES
// GET
app.get("/api/fruits", (req, res) => {
	res.json(fruits);
});

app.get("/api/fruits/:fruitname", (req, res) => {
	const requiredFruit = req.params.fruitname;
	const foundFruitObject = filterFruits(requiredFruit, fruits);
	res.json(foundFruitObject);
});

// POST
app.post("/api/fruits", checkIfNameIsString, (req, res) => {
	const fruit = req.body;
	res.json(createNewFruit(fruit, fruits));
});

// LIBRARY OF HELPER FUNCTIONS
function filterFruits(chosenFruit, allFruits) {
	const chosenObject = allFruits.filter(fruit => fruit.name === chosenFruit);
	return chosenObject.length > 0
		? chosenObject
		: `Could not find ${chosenFruit}`;
}

function createNewFruit(fruit, fruits) {
	fruits.push(fruit);
	// fs?
	fs.writeFileSync(
		// what is that? path, __dirname
		path.join(__dirname, "./data/fruits.json"),
		JSON.stringify({ fruits: fruits }, null, 2)
	);
	return fruits;
}

app.listen(PORT, () => console.log(`the server is listening on port 3000`));
