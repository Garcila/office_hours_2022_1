const { Pizza } = require("../models");

const pizzaController = {
	// get all pizzas
	getAllPizza(req, res) {
		Pizza.find({})
			// populate will add the comment info to the response
			.populate({
				path: "comments",
				// - meaning, minus.  We don't want the __v field
				// v__ fields are
				// >The __v field is called the version key. It describes the internal revision of a document. This __v field is used to track the revisions of a document. By default, its value is zero.
				select: "-__v",
			})
			.select("-__v")
			// mongoose sorting method.  -1 Descending
			.sort({ _id: -1 })
			.then(dbPizzaData => res.json(dbPizzaData))
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			});
	},

	// get one pizza by id
	getPizzaById({ params }, res) {
		Pizza.findOne({ _id: params.id })
			.populate({
				path: "comments",
				select: "-__v",
			})
			.select("-__v")
			.then(dbPizzaData => {
				// If no pizza is found, send 404
				if (!dbPizzaData) {
					res.status(404).json({ message: "No pizza found with this id!" });
					return;
				}
				res.json(dbPizzaData);
			})
			.catch(err => {
				console.log(err);
				res.status(400).json(err);
			});
	},
	// createPizza
	createPizza({ body }, res) {
		Pizza.create(body)
			.then(dbPizzaData => res.json(dbPizzaData))
			.catch(err => res.status(400).json(err));
	},
	// update pizza by id
	updatePizza({ params, body }, res) {
		// {new: true} set mongoose to return the updated document, not the original
		Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
			.then(dbPizzaData => {
				if (!dbPizzaData) {
					res.status(404).json({ message: "No pizza found with this id!" });
					return;
				}
				res.json(dbPizzaData);
			})
			.catch(err => res.status(400).json(err));
	},
	// delete pizza
	deletePizza({ params }, res) {
		Pizza.findOneAndDelete({ _id: params.id })
			.then(dbPizzaData => {
				if (!dbPizzaData) {
					res.status(404).json({ message: "No pizza found with this id!" });
					return;
				}
				res.json(dbPizzaData);
			})
			.catch(err => res.status(400).json(err));
	},
};

module.exports = pizzaController;
