const express = require("express");
const app = express();
// const mysql = require("mysql2");
const sequelize = require("./config/connection");
const { Movie, Rating } = require("./models");

const PORT = process.env.PORT || 3001;

// Connect to database
// const db = mysql.createConnection(
// 	{
// 		host: "localhost",
// 		// Your MySQL username,
// 		user: "root",
// 		// Your MySQL password
// 		password: "",
// 		database: "movies_db",
// 	},
// 	console.log("🗄 The database is connected")
// );

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
	res.json({
		message: "Hello DataBase 🗃",
	});
});

// Get all movies
app.get("/api/movies", (req, res) => {
	Movie.findAll({
		include: [
			{
				model: Rating,
				attributes: ["rating"],
			},
		],
	})
		.then(dbMovieData => res.json(dbMovieData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
	// const sql = `SELECT * FROM movies`;
	// db.query(sql, (err, rows) => {
	// 	if (err) {
	// 		res.status(500).json({ error: err.message });
	// 		return;
	// 	}
	// 	res.json({
	// 		message: "success",
	// 		data: rows,
	// 	});
	// });
});

// GET a single movie
app.get("/api/movies/:id", (req, res) => {
	Movie.findOne({
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Rating,
				attributes: ["rating"],
			},
		],
	})
		.then(data => res.json(data))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

// Delete a movie
app.delete("/api/movies/:id", (req, res) => {
	Movie.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then(dbMovieData => {
			if (!dbMovieData) {
				res.status(404).json({ message: "No movie found with this id" });
				return;
			}
			res.json(dbMovieData);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
	// const sql = `DELETE FROM movies WHERE id = ?`;
	// const params = [req.params.id];

	// db.query(sql, params, (err, result) => {
	// 	if (err) {
	// 		res.statusMessage(400).json({ error: res.message });
	// 	} else if (!result.affectedRows) {
	// 		res.json({
	// 			message: "Movie not found",
	// 		});
	// 	} else {
	// 		res.json({
	// 			message: `Deleted movie`,
	// 			changes: result.affectedRows,
	// 			id: req.params.id,
	// 		});
	// 	}
	// });
});

// Create a movie
app.post("/api/movie", ({ body }, res) => {
	const { title, genere, director, release_year, rating_id } = body;
	User.create({
		title,
		genere,
		director,
		release_year,
		rating_id,
	})
		.then(dbMovieData => res.json(dbMovieData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
	// 	const sql = `INSERT INTO movies (title, genere, director, release_year, rating_id)
	//   VALUES (?,?,?,?,?)`;
	// 	const params = [
	// 		body.title,
	// 		body.genere,
	// 		body.director,
	// 		body.release_year,
	// 		body.rating_id,
	// 	];
	// 	db.query(sql, params, (err, result) => {
	// 		if (err) {
	// 			res.status(400).json({ error: err.message });
	// 			return;
	// 		}
	// 		res.json({
	// 			message: "success",
	// 			data: body,
	// 		});
	// 	});
});

// Update a movies's rating
app.put("/api/movies/:id", (req, res) => {
	Movie.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then(dbMovieData => {
			if (!dbMovieData[0]) {
				res.status(404).json({ message: "No movie found with this id" });
				return;
			}
			res.json(dbMovieData);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
	// const sql = `UPDATE movies SET rating_id = ?
	//              WHERE id = ?`;
	// const params = [req.body.rating_id, req.params.id];
	// db.query(sql, params, (err, result) => {
	// 	if (err) {
	// 		res.status(400).json({ error: err.message });
	// 		// check if a record was found
	// 	} else if (!result.affectedRows) {
	// 		res.json({
	// 			message: "Movie not found",
	// 		});
	// 	} else {
	// 		res.json({
	// 			message: "success, updated the movie rating",
	// 			data: req.body,
	// 			changes: result.affectedRows,
	// 		});
	// 	}
	// });
});

// GET all ratings
app.get("/api/ratings", (req, res) => {
	Rating.findAll({
		include: [
			{
				model: Movie,
				attributes: ["title", "director"],
			},
		],
	})
		.then(dbRatingData => res.json(dbRatingData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
	// const sql = `SELECT * FROM ratings`;
	// db.query(sql, (err, rows) => {
	// 	if (err) {
	// 		res.status(500).json({ error: err.message });
	// 		return;
	// 	}
	// 	res.json({
	// 		message: "success",
	// 		data: rows,
	// 	});
	// });
});

// GET a single rating
app.get("/api/ratings/:id", (req, res) => {
	Rating.findOne({
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Movie,
				attributes: ["title"],
			},
		],
	})
		.then(dbRatingData => res.json(dbRatingData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
	// const sql = `SELECT * FROM ratings WHERE id = ?`;
	// const params = [req.params.id];
	// db.query(sql, params, (err, row) => {
	// 	if (err) {
	// 		res.status(400).json({ error: err.message });
	// 		return;
	// 	}
	// 	res.json({
	// 		message: "success",
	// 		data: row,
	// 	});
	// });
});

// DELETE a rating
app.delete("/api/ratings/:id", (req, res) => {
	Rating.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then(dbRatingData => {
			if (!dbRatingData) {
				res.status(404).json({ message: "No rating found with this id" });
				return;
			}
			res.json(dbRatingData);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
	// const sql = `DELETE FROM ratings WHERE id = ?`;
	// const params = [req.params.id];
	// db.query(sql, params, (err, result) => {
	// 	if (err) {
	// 		res.status(400).json({ error: res.message });
	// 		// checks if anything was deleted
	// 	} else if (!result.affectedRows) {
	// 		res.json({
	// 			message: "Rating not found",
	// 		});
	// 	} else {
	// 		res.json({
	// 			message: "deleted",
	// 			changes: result.affectedRows,
	// 			id: req.params.id,
	// 		});
	// 	}
	// });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
	res.status(404).end();
});

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	});
});
