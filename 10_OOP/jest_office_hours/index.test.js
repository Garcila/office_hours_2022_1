const { addition, subtraction, fetchPokemon } = require("./index");

test("When given two numbers, 1 and 2, to addition the result should be 3", () => {
	expect(addition(1, 2)).toBe(3);
});

test("When given two numbers, 1 and 2, to subtraction the result should be -1", () => {
	expect(subtraction(1, 2)).toBe(-1);
});

test("the name of the pokemon should be ditto", () => {
	expect.assertions(1);
	return fetchPokemon().then(pokemon => {
		expect(pokemon.name).toExpect("ditto");
	});
});
