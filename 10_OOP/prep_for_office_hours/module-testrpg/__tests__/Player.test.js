const Potion = require("../lib/Potion");
const Player = require("../lib/Player.js");

jest.mock("../lib/Potion");

test("creates a random player object", () => {
	const player = new Player("Pepito");

	expect(player.name).toBe("Pepito");
	expect(player.health).toEqual(expect.any(Number));
	expect(player.strength).toEqual(expect.any(Number));
	expect(player.agility).toEqual(expect.any(Number));
	expect(player.inventory).toEqual(
		expect.arrayContaining([expect.any(Object)])
	);
});

test("gets player's stats as an object", () => {
	const player = new Player("Dave");

	expect(player.getStats()).toHaveProperty("potions");
	expect(player.getStats()).toHaveProperty("health");
	expect(player.getStats()).toHaveProperty("strength");
	expect(player.getStats()).toHaveProperty("agility");
});

test("gets inventory from player or returns false", () => {
	const player = new Player("Dave");

	expect(player.getInventory()).toEqual(expect.any(Array));

	player.inventory = [];

	expect(player.getInventory()).toEqual(false);
});

test("gets player's health", () => {
	const player = new Player("Dave");

	expect(player.getHealth()).toEqual(
		expect.stringContaining(player.health.toString())
	);
});

test("informs if the player is alive", () => {
	const player = new Player("Dave");

	expect(player.isAlive()).toBeTruthy();

	player.health = 0;

	expect(player.isAlive()).toBeFalsy();
});

test("reduces the player's health", () => {
	const player = new Player("Dave");
	const initialHealth = player.health;

	player.reduceHealth(5);
	expect(player.health).toBe(initialHealth - 5);

	player.reduceHealth(99999);
	expect(player.health).toBe(0);
});

test("gets player's attack value", () => {
	const player = new Player("Dave");
	player.strength = 10;

	expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
	expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test("adds a potion to the inventory", () => {
	const player = new Player("Dave");
	const oldCount = player.inventory.length;

	player.addPotion(new Potion());

	expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test("uses a potion from inventory", () => {
	const player = new Player("Dave");
	player.inventory = [new Potion(), new Potion(), new Potion()];
	const oldCount = player.inventory.length;

	player.usePotion(1);

	expect(player.inventory.length).toBeLessThan(oldCount);
});
