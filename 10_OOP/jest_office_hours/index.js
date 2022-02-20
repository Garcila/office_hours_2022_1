const axios = require("axios");

const myFunctions = {
	addition: (num1, num2) => num1 + num2,
	subtraction: (num1, num2) => num1 - num2,
	fetchPokemon: () =>
		axios
			.get("https://pokeapi.co/api/v2/pokemon/ditto")
			.then(pokemon => pokemon.data)
			.catch(err => "We have an error"),
};

// function addition(num1, num2) {
// 	return num1 + num2;
// }

module.exports = myFunctions;
