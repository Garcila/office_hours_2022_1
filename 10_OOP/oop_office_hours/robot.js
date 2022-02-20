// Object Literal
// const robot = {
// 	face: "🤖",
// 	name: " ZHR100X",
// 	food: "ac",
// 	message: "Kill all the humans",
// 	robotSayHi: function () {
// 		return `It is the year 2055 and ${this.name} ${this.face} says ${this.message}`;
// 	},
// };

// console.log(robot.robotSayHi());

// ___________________________________________________________
// Constructor ES5
// function CRobot(face, name, food, message) {
// 	this.face = face;
// 	this.name = name;
// 	this.food = food;
// 	this.message = message;
// 	this.age = 1000;
// }

// CRobot.prototype.robotSayHi = function () {
// 	return `It is the year 2055 and ${this.name} ${this.face} says ${this.message}`;
// };

// const pepito = new CRobot("🦄", "pepe", "dc", "Eat at Joes");
// const tururu = new CRobot("😄", "turu", "dc", "Eat at Joes");

// console.log(pepito);
// console.log(tururu);

// ___________________________________________________________
// Constructor ES6
class MrRoboto {
	constructor(face, name, food, message) {
		this.face = face;
		this.name = name;
		this.food = food;
		this.message = message;
	}
	robotSayHi() {
		return `It is the year 2055 and ${this.name} ${this.face} says ${this.message}`;
	}
}

const pepito = new MrRoboto("🦄", "pepe", "dc", "Eat at Joes");

// ___________________________________________________________
// Inheritance or Subclasses ES6
class Vacuum extends MrRoboto {
	constructor() {
		super();
		this.brand = "rumbah";
		this.message = "a";
	}
}

const roomy = new Vacuum();
console.log(roomy.robotSayHi());
