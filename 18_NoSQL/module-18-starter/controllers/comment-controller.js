const { Comment, Pizza } = require("../models");

const commentController = {
	// add comment to pizza
	addComment({ params, body }, res) {
		console.log(body);
		Comment.create(body)
			.then(({ _id }) => {
				return Pizza.findOneAndUpdate(
					{ _id: params.pizzaId },
					// $push works just like in JS.  part of Mongoose
					{ $push: { comments: _id } },
					// returns the updated document once the process is done
					{ new: true }
				);
			})
			.then(dbPizzaData => {
				if (!dbPizzaData) {
					res.status(404).json({ message: "No pizza found with this id!" });
					return;
				}
				res.json(dbPizzaData);
			})
			.catch(err => res.json(err));
	},

	// remove comment
	removeComment({ params }, res) {
		// first deleted the comment and then $pull (deletes it) from the Pizza
		Comment.findOneAndDelete({ _id: params.commentId })
			.then(deletedComment => {
				if (!deletedComment) {
					return res.status(404).json({ message: "No comment with this id!" });
				}
				return Pizza.findOneAndUpdate(
					{ _id: params.pizzaId },
					// commentId, must match the route /:commentId
					// removes from an existing array all instances of a value or values that match a specified condition.
					{ $pull: { comments: params.commentId } },
					{ new: true }
				);
			})
			.then(dbPizzaData => {
				if (!dbPizzaData) {
					res.status(404).json({ message: "No pizza found with this id!" });
					return;
				}
				res.json(dbPizzaData);
			})
			.catch(err => res.json(err));
	},
	addReply({ params, body }, res) {
		Comment.findOneAndUpdate(
			{ _id: params.commentId },
			{ $push: { replies: body } },
			{ new: true }
		)
			.then(dbPizzaData => {
				if (!dbPizzaData) {
					res.status(404).json({ message: "No pizza found with this id!" });
					return;
				}
				res.json(dbPizzaData);
			})
			.catch(err => res.json(err));
	},
	// remove reply
	removeReply({ params }, res) {
		Comment.findOneAndUpdate(
			{ _id: params.commentId },
			// removes from an existing array all instances of a value or values that match a specified condition.
			{ $pull: { replies: { replyId: params.replyId } } },
			{ new: true }
		)
			.then(dbPizzaData => res.json(dbPizzaData))
			.catch(err => res.json(err));
	},
};

module.exports = commentController;
