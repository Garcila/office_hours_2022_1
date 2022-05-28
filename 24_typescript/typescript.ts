/* Types in JavaScript
Primitives
    boolean
    number
    string
Arrays
Any
*/

let isKind: boolean = true;
let subjectAge: number = 100;
let aliens: string = "Believe! 🛸";
let fiction: string[] = ["🦄", "👻", "🧛‍♀️", "🧟‍♀️", "🧜‍♀️", "🧞", "🐲"];
let integer: number[] = [5, 3, 42, 66];
let pandora: any[] = [1, "🚁", false];

// All the previous type anotations are not needed as TypeScript will infer the type by the variable declaration

// _____________________________________________________________________________________________________________

// FUNCTIONS      **********************************************************************************************

function multiMathical(
	numOne: number,
	numTwo: number,
	operand: string
): number {
	switch (operand) {
		case "add":
			return numOne + numTwo;
		case "subtract":
			return numOne - numTwo;
		case "multipy":
			return numOne * numTwo;
		case "divide":
			return numOne / numTwo;
		default:
			throw new Error(`Do not understand ${operand} operation`);
	}
}

// console.log(multiMathical(3, 4, "log"));

// TypeScript also uses contextual typing.  It determines the type based on the context of the operation
const smileys = ["🙂", "🙃", "😊"];

// smileys.map(smiley => console.log(smiley.ToUpperCase())); // in this anonymous function it detects the error in the method

// _____________________________________________________________________________________________________________
// OBJECTS      ************************************************************************************************
const human: {
	face: string;
	organs: string[];
	work: string;
	country: string;
	alive: boolean;
	age: number;
	hungry?: string; // ? makes hungry optional
} = {
	face: "👩‍🦰",
	organs: ["🫀", "🫁", "🧠"],
	work: "🏦",
	country: "🇷🇴",
	alive: true,
	age: 100,
};
// console.log("is it hungry?", human.hungry);

// Union types
const countries: (string | number)[] = ["🇴🇲", "🇹🇷", "🇫🇯", 95, 57];

// Considerations
// parseInt(countries[1]) // Does not work because it is a string not a number
// countries[3].toUpperCase() // Does not work because it is a a number do not have toUpperCase()

// _____________________________________________________________________________________________________________
// Type Aliases  ***********************************************************************************************
type Humans = {
	face: string;
	organs: string[];
	work: string;
	country: string;
	alive: boolean;
	age: number;
	hungry?: boolean;
};

const Albert: Humans = {
	face: "👨‍🦰",
	organs: ["👂", "👃", "👁", "👄"],
	work: "🏥",
	country: "🇧🇪",
	alive: true,
	age: 143,
	hungry: false,
};

// _____________________________________________________________________________________________________________
// Interface  ***********************************************************************************************
// Difference between Types and Interfaces "type cannot be re-opened to add new properties vs an interface which is always extendable."
interface Humanoid {
	face: string;
	organs: string[];
	work: string;
	country: string;
	alive: boolean;
	age: number;
	hungry?: boolean;
}

const Albertina: Humanoid = {
	face: "👱‍♀️",
	organs: ["🫁", "👃", "👁", "🧠"],
	work: "🏭",
	country: "🇮🇸",
	alive: true,
	age: 193,
	hungry: false,
};
