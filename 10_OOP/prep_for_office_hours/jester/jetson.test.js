// Example addition function test
// const fetchMovie = require("./jetson");
const { addition, fetchPokemon, fetchUser } = require("./jetson");

test("When given the numbers 42 and 24, it returns 66", () => {
	expect(addition(42, 24)).toBe(66);
});

test("When given the numbers 42 and 24, it does not returns 1000", () => {
	expect(addition(42, 24)).not.toBe(1000);
});

test("Pokemon name should be ditto", () => {
	expect.assertions(1);
	return fetchPokemon().then(pokemon => {
		expect(pokemon.name).toEqual("ditto");
	});
});
test("User fetched name should be Leanne Graham", () => {
	expect.assertions(1);
	return fetchUser().then(data => {
		expect(data.name).toEqual("Leanne Graham");
	});
});

// toBe -> primitive
// toEqual -> Deep comparison
// toBeFalsy -> checks if falsy
// toBeLessThan
// toHaveLenght
// toContain -> arrays
