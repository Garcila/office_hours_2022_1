const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
	{
		host: "localhost",
		// Your MySQL username,
		user: "root",
		// Your MySQL password
		password: "",
		database: "movies_db",
	},
	console.log("🗄 The database is connected")
);

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
	const sql = `SELECT movies.id, movies.title, movies.genere, ratings.rating 
		FROM movies 
		LEFT JOIN ratings 
		ON movies.rating_id = ratings.id`;

	db.query(sql, (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message });
			return;
		}
		res.json({
			message: "success",
			data: rows,
		});
	});
});

// GET a single movie
app.get("/api/movies/:id", (req, res) => {
	const sql = `SELECT movies.*, ratings.rating 
             AS El_Rating 
             FROM movies 
             LEFT JOIN ratings 
             ON movies.rating_id = ratings.id 
             WHERE movies.id = ?`; // PREPARED STATEMENT

	const params = [req.params.id];

	db.query(sql, params, (err, row) => {
		if (err) {
			res.status(400).json({ error: err.message });
			return;
		}
		res.json({
			message: "success",
			data: row,
		});
	});
});

// Delete a movie
app.delete("/api/movies/:id", (req, res) => {
	const sql = `DELETE FROM movies WHERE id = ?`;
	const params = [req.params.id];

	db.query(sql, params, (err, result) => {
		if (err) {
			res.statusMessage(400).json({ error: res.message });
		} else if (!result.affectedRows) {
			res.json({
				message: "Movie not found",
			});
		} else {
			res.json({
				message: `Deleted movie`,
				changes: result.affectedRows,
				id: req.params.id,
			});
		}
	});
});

// Create a movie
app.post("/api/movie", ({ body }, res) => {
	const sql = `INSERT INTO movies (title, genere, director, release_year, rating_id)
  VALUES (?,?,?,?,?)`;
	const params = [
		body.title,
		body.genere,
		body.director,
		body.release_year,
		body.rating_id,
	];

	db.query(sql, params, (err, result) => {
		if (err) {
			res.status(400).json({ error: err.message });
			return;
		}
		res.json({
			message: "success",
			data: body,
		});
	});
});

// Update a movies's rating
app.put("/api/movies/:id", (req, res) => {
	const sql = `UPDATE movies SET rating_id = ? 
                 WHERE id = ?`;
	const params = [req.body.rating_id, req.params.id];
	db.query(sql, params, (err, result) => {
		if (err) {
			res.status(400).json({ error: err.message });
			// check if a record was found
		} else if (!result.affectedRows) {
			res.json({
				message: "Movie not found",
			});
		} else {
			res.json({
				message: "success, updated the movie rating",
				data: req.body,
				changes: result.affectedRows,
			});
		}
	});
});

// GET all ratings
app.get("/api/ratings", (req, res) => {
	const sql = `SELECT * FROM ratings`;
	db.query(sql, (err, rows) => {
		if (err) {
			res.status(500).json({ error: err.message });
			return;
		}
		res.json({
			message: "success",
			data: rows,
		});
	});
});

// GET a single rating
app.get("/api/ratings/:id", (req, res) => {
	const sql = `SELECT * FROM ratings WHERE id = ?`;
	const params = [req.params.id];
	db.query(sql, params, (err, row) => {
		if (err) {
			res.status(400).json({ error: err.message });
			return;
		}
		res.json({
			message: "success",
			data: row,
		});
	});
});

// DELETE a rating
app.delete("/api/ratings/:id", (req, res) => {
	const sql = `DELETE FROM ratings WHERE id = ?`;
	const params = [req.params.id];
	db.query(sql, params, (err, result) => {
		if (err) {
			res.status(400).json({ error: res.message });
			// checks if anything was deleted
		} else if (!result.affectedRows) {
			res.json({
				message: "Rating not found",
			});
		} else {
			res.json({
				message: "deleted",
				changes: result.affectedRows,
				id: req.params.id,
			});
		}
	});
});

// Default response for any other request (Not Found)
app.use((req, res) => {
	res.status(404).end();
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
