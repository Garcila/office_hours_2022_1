const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const startApolloServer = async (typeDefs, resolvers) => {
	await server.start();
	server.applyMiddleware({ app });

	app.use(express.urlencoded({ extended: false }));
	app.use(express.json());

	db.once("open", () => {
		app.listen(PORT, () => {
			console.log(`API server running on port ${PORT}!`);
			console.log(
				`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
			);
		});
	});
};

startApolloServer(typeDefs, resolvers);

/*
// mongoose.set("debug", true);

// Add painters to get started
// mongoDB.Painter.create({ name: "Salvador Dali", country: "Spain" })
// 	.then(dbPainter => {
// 		console.log(dbPainter);
// 	})
// 	// from the error, usually what we'll want is the message containing a description of the error
// 	// something like, you enter the wrong type
// 	.catch(({ message }) => {
// 		console.log(message);
// 	});

// mongoDB.Painter.create({ name: "Vincen Van Gogh", country: "Netherlands" })
// 	.then(dbPainter => {
// 		console.log(dbPainter);
// 	})
// 	// from the error, usually what we'll want is the message containing a description of the error
// 	// something like, you enter the wrong type
// 	.catch(({ message }) => {
// 		console.log(message);
// 	});

// 👨‍🎨 ____________________________________________________
// Retrieve all painters
app.get("/painters", (req, res) => {
	mongoDB.Painter.find({})
		.then(dbPainter => {
			res.json(dbPainter);
		})
		.catch(err => {
			res.json(err);
		});
});

// Retreive one painter
app.get("/painters/:painterId", ({ params }, res) => {
	mongoDB.Painter.find({ _id: params.painterId })
		.then(dbPainter => {
			res.json(dbPainter);
		})
		.catch(err => {
			res.json(err);
		});
});

// Add a painter
app.post("/painters", ({ body }, res) => {
	mongoDB.Painter.create(body)
		.then(dbPainter => {
			res.json(dbPainter);
		})
		.catch(err => {
			res.json(err);
		});
});

// Modify a painter
app.put("/painters/:painterId", ({ params, body }, res) => {
	mongoDB.Painter.findOneAndUpdate({ _id: params.painterId }, body, {
		runValidators: true,
		new: true,
	})
		.then(dbPainter => {
			if (!dbPainterData) {
				res.status(404).json({ message: "No painter found with this id!" });
				return;
			}
			res.json(dbPainter);
		})
		.catch(err => {
			res.json(err);
		});
});

// Delete a painter
app.delete("/painters/:painterId", ({ params }, res) => {
	mongoDB.Painter.deleteOne({ _id: params.painterId })
		.then(dbPainter => {
			if (!dbPainterData) {
				res.status(404).json({ message: "No painter found with this id!" });
				return;
			}
			res.json(dbPainter);
		})
		.catch(err => {
			res.json(err);
		});
});

// 🖼 ____________________________________________________
// Retrieve all paintings
app.get("/paintings", (req, res) => {
	mongoDB.Painting.find({})
		.then(dbPainting => {
			res.json(dbPainting);
		})
		.catch(err => {
			res.json(err);
		});
});

// Retrieve one painting
app.get("/paintings:paintingId", ({ params }, res) => {
	mongoDB.Painting.find({ _id: params.paintingId })
		.then(dbPainting => {
			res.json(dbPainting);
		})
		.catch(err => {
			res.json(err);
		});
});
// Create a new painting and associate (push) with the painter
app.post("/paintings/:painterId", ({ params, body }, res) => {
	mongoDB.Painting.create(body)
		.then(({ _id }) => {
			return mongoDB.Painter.findOneAndUpdate(
				{ _id: params.painterId },
				{ $push: { paintings: _id } },
				// {new: true} set mongoose to return the updated document, not the original
				{ runValidators: true, new: true }
			);
		})
		.then(dbPainter => {
			if (!dbPainter) {
				return res
					.status(404)
					.json({ message: "Did not find the requested painter" });
			}
			res.json(dbPainter);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// Delete a painting
app.delete("/paintings/:paintingId", ({ params }, res) => {
	mongoDB.Painter.deleteOne({ _id: params.paintingId })
		.then(dbPainter => {
			if (!dbPainterData) {
				res.status(404).json({ message: "No painting found with this id!" });
				return;
			}
			res.json(dbPainting);
		})
		.catch(err => {
			res.json(err);
		});
});

// 👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👦
// populate add all the information from the child Model (associated model) to the response
app.get("/painters-populate", (req, res) => {
	mongoDB.Painter.find({})
		.populate({
			path: "paintings",
			select: "-__v",
		})
		.select("-__v")
		.then(dbPainting => {
			res.json(dbPainting);
		})
		.catch(err => {
			res.json(err);
		});
});

app.listen(PORT, () => {
	console.log(`Gallery ready on port ${PORT}! 🎨 🖼 👩‍🎨 👨‍🎨`);
});

*/
