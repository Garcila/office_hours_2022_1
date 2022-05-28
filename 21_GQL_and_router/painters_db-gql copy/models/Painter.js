const { Schema, model } = require("mongoose");

const PainterSchema = new Schema({
	artist: {
		type: String,
		unique: true,
	},
	country: {
		type: String,
		required: true,
		trim: true,
	},
	paintings: [
		{
			type: Schema.Types.ObjectId,
			ref: "Painting",
		},
	],
});

const Painter = model("Painter", PainterSchema);

module.exports = Painter;
