// const faker = require('faker');
const painterSeeds = require("./painterSeed.json");
const paintingSeeds = require("./paintingSeed.json");
const db = require("../config/connection");
const { Painter, Painting } = require("../models");

db.once("open", async () => {
	await Painter.deleteMany({});
	await Painting.deleteMany({});

	const painters = await Painter.insertMany(painterSeeds);
	const paintings = await Painting.insertMany(paintingSeeds);

	for (painting of paintings) {
		const selectedArtist = await Painter.findOne({
			artist: painting.paintingArtist,
		});
		selectedArtist.paintings.push(painting._id);
		await selectedArtist.save();
	}

	console.log("done");
	process.exit(0);
});
