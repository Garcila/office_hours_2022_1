const { Schema, model } = require("mongoose");

const PaintingSchema = new Schema({
	title: String,
	style: String,
	paintingArtist: String,
});

const Painting = model("Painting", PaintingSchema);

module.exports = Painting;
