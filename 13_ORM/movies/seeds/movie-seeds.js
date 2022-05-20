const { Movie } = require("../models");

const movieData = [
	{
		title: "Amélie",
		genere: "Romance",
		director: "Jean-Pierre Jeunet",
		release_year: 2001,
		rating_id: 1,
	},
	{
		title: "My Neighbor Totoro",
		genere: "Drama",
		director: "Hayao Miyazaki",
		release_year: 1988,
		rating_id: 3,
	},
	{
		title: "The Matrix",
		genere: "Action",
		director: "Wachowskis",
		release_year: 1999,
		rating_id: 2,
	},
	{
		title: "Akira",
		genere: "Action",
		director: "Katsuhiro Otomo",
		release_year: 1988,
		rating_id: 2,
	},
	{
		title: "Ex Machina",
		genere: "Drama",
		director: "Alex Garland",
		release_year: 2014,
		rating_id: 2,
	},
	{
		title: "Looper",
		genere: "Action",
		director: "Rian Johnson",
		release_year: 2012,
		rating_id: 1,
	},
	{
		title: "Moon",
		genere: "Drama",
		director: "Duncan Jones",
		release_year: 2009,
		rating_id: 1,
	},
	{
		title: "Blade Runner",
		genere: "Drama",
		director: "Ridley Scott",
		release_year: 1982,
		rating_id: 2,
	},
	{
		title: "Tenet",
		genere: "Thriller",
		director: "Christopher Nolan",
		release_year: 2020,
		rating_id: 3,
	},
	{
		title: "Crouching Tiger, Hidden Dragon",
		genere: "Action",
		director: "Ang Lee",
		release_year: 1999,
		rating_id: 2,
	},
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;
