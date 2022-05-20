const seedRatings = require("./rating-seeds");
const seedMovies = require("./movie-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
	await sequelize.sync({ force: true });
	console.log("--------------");
	await seedRatings();
	console.log("--------------");

	await seedMovies();
	console.log("--------------");

	process.exit(0);
};

seedAll();
