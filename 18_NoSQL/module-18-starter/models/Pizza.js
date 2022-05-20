const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const PizzaSchema = new Schema(
	{
		pizzaName: {
			type: String,
		},
		createdBy: {
			type: String,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: createdAtVal => dateFormat(createdAtVal),
		},
		size: {
			type: String,
			default: "Large",
		},
		toppings: [],
		comments: [
			{
				// creates the connection
				// to the object with the
				// ObjectId -> Comment
				type: Schema.Types.ObjectId,
				// What doc to look for
				ref: "Comment",
			},
		],
	},
	{
		toJSON: {
			// Enable the Schema to use virtuals (functions)
			virtuals: true,
			// Same as above, we are allowing our model to use getters
			getters: true,
		},
		// in this case we are not using the id, therefore
		// we set it to false (don't return it)
		id: false,
	}
);

// get total count of comments and replies on retrieval
// computed property usually evaluated when the document is accessed
// Virtuals are part of Mongoose, in this case we make a getter function
PizzaSchema.virtual("commentCount").get(function () {
	// Includes the comment and replies count
	return this.comments.reduce(
		(total, comment) => total + comment.replies.length + 1,
		0
	);
});

// create the Pizza model using the PizzaSchema
const Pizza = model("Pizza", PizzaSchema);

// export the Pizza model
module.exports = Pizza;
