// import all models
const Rating = require("./Rating");
const Movie = require("./Movie");

// create associations
Rating.hasMany(Movie, {
	foreignKey: "rating_id",
});

Movie.belongsTo(Rating, {
	foreignKey: "rating_id",
});

module.exports = { Rating, Movie };
