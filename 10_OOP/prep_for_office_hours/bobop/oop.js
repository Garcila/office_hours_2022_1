// Literal
// const robot = {
// 	face: "๐ค",
// 	tag: "Zhr100X",
// 	food: "ac",
// 	message: "kill all humans",
// 	robotSayHi: function () {
// 		return `It is the year 2054 and ${this.tag} ${this.face} and his friends are ready to ${this.message}`;
// 	},
// };

// console.log(robot.robotSayHi());

//===========================================================

// Constructor ES5
// function CRobot(face, tag, food, message) {
// 	this.face = face;
// 	this.tag = tag;
// 	this.food = food;
// 	this.message = message;
// robotSayHi = function () {
// 	return `It is the year 2054 and ${this.tag} ${this.face} and his friends are ready to ${this.message}`;
// };
// }

// CRobot.prototype.robotSayHi = function () {
// 	return `It is the year 2054 and ${this.tag} ${this.face} and his friends are ready to ${this.message}`;
// };

// const pepitoXR = new CRobot("๐ฅณ", "ZHS100X", "๐", "Eat at Joes");
// console.log(pepitoXR.robotSayHi());

// ====================================================================

// Classes ES6

// class MrRoboto {
// 	constructor(face, tag, food, message) {
// 		this.face = face;
// 		this.tag = tag;
// 		this.food = food;
// 		this.message = message;
// 	}
// 	robotSayHi() {
// 		return `It is the year 2054 and ${this.tag} ${this.face} and his friends are ready to ${this.message}`;
// 	}
// }

// const tururu = new MrRoboto("๐ฆ", "001", "๐ฅญ", "Organic Man!");
// console.log(tururu);
// console.log(tururu.robotSayHi());

// =================================================

// SubClasses ES6... Inheritance
// class Vacuum extends MrRoboto {
// 	constructor(face, tag, food, message, brand) {
// 		super(face, tag, food, message);
// 		this.brand = brand;
// 	}
// }

// const roomby = new Vacuum("๐งน", "vroom", "๐", "Clean up", "BroomBaH");

// console.log(roomby);
// console.log(roomby.robotSayHi());
