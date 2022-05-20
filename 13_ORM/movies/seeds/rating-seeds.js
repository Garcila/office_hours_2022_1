const { Rating } = require("../models");

const ratingData = [
	{
		rating: "G",
	},
	{
		rating: "PG",
	},
	{
		rating: "PG-13",
	},
	{
		rating: "R",
	},
];

const seedRatings = () => Rating.bulkCreate(ratingData);

module.exports = seedRatings;
