const axios = require("axios");

const ourFunctions = {
	addition: (num1, num2) => {
		return num1 + num2;
	},
	fetchPokemon: () =>
		axios
			.get("https://pokeapi.co/api/v2/pokemon/ditto")
			.then(pokemon => pokemon.data)
			.catch(err => "We have an error"),
	fetchUser: () =>
		axios
			.get("https://jsonplaceholder.typicode.com/users/1")
			.then(res => res.data)
			.catch(err => "error"),
};

module.exports = ourFunctions;
