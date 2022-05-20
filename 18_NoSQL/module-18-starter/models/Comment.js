// bring Types to get the ObjectId method used in the replyId
// TODO: WHY DO WE NEED THE OBJECTID AND NOT JUST THE _id?????
const { Schema, model, Types } = require("mongoose");

const dateFormat = require("../utils/dateFormat");

const ReplySchema = new Schema(
	{
		// set custom id to avoid confusion with parent comment _id
		replyId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},
		replyBody: {
			type: String,
		},
		writtenBy: {
			type: String,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: createdAtVal => dateFormat(createdAtVal),
		},
	},
	{
		toJSON: {
			// allowing our model to use getters
			getters: true,
		},
	}
);

const CommentSchema = new Schema(
	{
		writtenBy: {
			type: String,
		},
		commentBody: {
			type: String,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: createdAtVal => dateFormat(createdAtVal),
		},
		// associating the Comment and Reply Schema.  Super clean
		// use ReplySchema to validate data for a reply
		replies: [ReplySchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

// get total count of comments and replies on retrieval
// computed property usually evaluated when the document is accessed
// Virtuals are part of Mongoose, in this case we make a getter function
CommentSchema.virtual("replyCount").get(function () {
	return this.replies.length;
});

// create the Comment model using the CommentSchema
const Comment = model("Comment", CommentSchema);

// export the Comment model
module.exports = Comment;
