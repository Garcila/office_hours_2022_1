# JS

## Data Structures - Stack - Queue - Heap

[Visualizer](https://www.cs.usfca.edu/~galles/JavascriptVisual/)

Data structures provide different ways (techniques) to store, organize and access data efficiently.

## Data Structures in JavaScript

- Array
- Stack
- Queues
- Hash Tables
- Trees
- Graphs
- Linked Lists

## Stack (LIFO)

![Stack](https://cdn.sanity.io/images/gc3hakk3/production/4a0b8f23ad43a3d91153579c39c14181b474c48b-1580x889.png)

Stack follows the principle of LIFO (Last In First Out). If you stack books, the top book will be taken before the bottom one.

Stacks need to be implemented as they are not pre-built in the language.

```javascript
class Stack {
	constructor() {
		this.items = [];
	}
	push(element) {
		// add element
		return this.items.push(element);
	}
	pop() {
		// remove element
		if (this.items.length > 0) {
			return this.items.pop();
		}
	}
	peek() {
		// show the last element
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		// do we have elements
		return this.items.length == 0;
	}
	size() {
		// how many items in the stack
		return this.items.length;
	}
	clear() {
		// I'm done with this... clear the stack
		this.items = [];
	}
}

let myStack = new Stack();
console.log(`Push 42 `, myStack.push(42));
console.log(`Push 56 `, myStack.push(56));
console.log(`Push 3 `, myStack.push(3));
console.log(`Remove 3 `, myStack.pop(0));
// check all the methods
```

Stack has these common methods (sometimes more or less):
push: input a new element
pop : remove the top element, return the removed element
peek : return the top element
isEmpty: checks if there are elements in the stack
size : return the number of element(s) in Stack
clear: empties the stack

## Queue (FIFO)

![Queue](https://cdn.educba.com/academy/wp-content/uploads/2020/01/Queue-in-JavaScript.jpg.webp)

They are just like Stacks, but the insertion and removal point is not the same.

- Advantages

  Dynamic size
  Orders data in the order it was received
  Low runtime

- Disadvantages

  Can only retrieve the oldest element

- Applications

  Effective as a buffer when receiving frequent data
  Convenient way to store order-sensitive data such as stored voicemails
  Ensures the oldest data is processed first

```javascript
class Queue {
	constructor() {
		this.items = [];
	}
	addToQueue(element) {
		// add element
		return this.items.push(element);
	}
	removeFromQue() {
		// remove element
		if (this.items.length > 0) {
			return this.items.shift();
		}
	}
	peek() {
		// show the last element
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		// do we have elements
		return this.items.length == 0;
	}
	size() {
		// how many items in the stack
		return this.items.length;
	}
	clear() {
		// I'm done with this... clear the stack
		this.items = [];
	}
}

let myQueue = new Queue();
```

## Heap -- (kind of binary tree) stored in an array (arr[0]=null)

![Heap](https://miro.medium.com/max/1400/1*ZyMG4K50VjgBVkY_Bfcxaw.png)

> A heap is a tree-based data structure which is an almost complete tree that satisfies the heap property.

> A complete tree is a tree in which every level, except possibly the last, is completely filled and all nodes are as far left as possible.[Source](https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65)

- [Visualization](https://www.cs.usfca.edu/~galles/JavascriptVisual/Heap.html)

- [Digital Ocean Implementation](https://www.digitalocean.com/community/tutorials/js-binary-heaps)

Like with binary search trees, binary heaps are only allowed to have two or fewer children to a parent. They are also special since they are always balanced because every new node will be added to a level from left to right until full.

---

---

---

## Explain functional programming

> Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data — [Wikipedia](https://en.wikipedia.org/wiki/Functional_programming)

### Concepts of functional programming

1.**Pure functions**. Same input always return the same output. Do not mutate. No side effects

```js
// pure.  Same input, will always produce same output
const storyEmoji = (emoOne, emoTwo) => `${emoOne} ${emoTwo}`;

storyEmoji("🎤", "🐸");

// not pure
let result = "";
const notPureStoryEmoji = (emoOne, emoTwo) => {
	result += `${emoOne} ${emoTwo}`;
	return result;
};

notPureStoryEmoji("🎤", "🐸");
```

2.**Immutability**

We don't mutate our data, we make copies of it

3.**Function Composition**. Combine functions to produce new functions

Using the **compose** function. compose function takes any number of functions and invokes them all one after the other

**High order functions**. functions as variables - functions that take other functions as values. Map, reduce, filter, forEach are all high order functions.

```js
// 🧠 example
// 1st simple
const functionA = data => data * 2;
const functionB = data => data * 5;
const functionC = data => data / 10;

// to call them
const result = functionA(functionB(functionC(5)));

// result = ??

// using compose (not native in JS)
// one way of doing it...const compose = (A, B, C) => data => A(B(C(data)));
// Brainier
const compose =
	(...args) =>
	data =>
		args.reduce((item, total) => {
			return total(item);
		}, data);

const composedResult = compose(functionA, functionB, functionC);
console.log(composedResult(5));
```

4.**Currying**. Transform function calling from function(x, y, z) to function(x)(y)(z)

Why?

> - Currying is a checking method to make sure that you get everything you need before you proceed
> - It helps you to avoid passing the same variable again and again
> - It divides your function into multiple smaller functions that can handle one responsibility. This makes your function pure and less prone to errors and side effects
> - It is used in functional programming to create a higher-order function. [Source](https://blog.logrocket.com/understanding-javascript-currying/)

```js
// Traditional non flavourful
const emojiStory = (start, middle, end) => {
	return `${start} then, ${middle} and at the end ${end}`;
};
console.log(emojiStory("⏳", "🐣", "🛸")); //'⏳ then, 🐣 and at the end 🛸'/

// Curried flavourful
const tastyEmojiStory = start => {
	return middle => {
		return end => {
			return `${start} then, ${middle} and at the end ${end}`;
		};
	};
};
console.log(tastyEmojiStory("⏳")("🐣")("🛸")); // '⏳ then, 🐣 and at the end 🛸'
```

## Closures

Closures allow functions to access variables defined outside of them. The variables values are stored in the Heap Memory

```js
function country() {
	let landmark = "⛩";

	function welcome() {
		return `Welcome to ${landmark}`;
	}
	return welcome();
}
country();
```

## Construct objects with factory functions

A factory function is simply a function that returns a new object.

> A factory function is any function which is not a class or constructor that returns a (presumably new) object. In JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function. [Source](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)

Why?

- Produce instances without the 'new' and 'this' keyword

- Not good for when you create many objects. MANY!

```js
const robot = () => {
	const message = 'Destroy all humans!';
	return {
      speak: () => console.log(message);
	}
}

const zgx100 = robot();
zgx100.speak(); // 'Destroy all humans'
```

---

---

---

## Benchmarking

Tools and techniques to asses the speed of an operation

- [Benchmarking tool](https://jsben.ch/)
- [Benchmarking tool](https://jsbench.me/)

```js
// Classic string reverse
// method 1
"👾🐝🗼🌝".split("").reverse();

// method 2
[..."👾🐝🗼🌝"].reverse();

// method 3
Array.from("👾🐝🗼🌝").reverse();
```

## Big O notation

![bigO](https://media-exp1.licdn.com/dms/image/C5612AQHxLM5ZfOQCMg/article-inline_image-shrink_1500_2232/0/1578938045559?e=2147483647&v=beta&t=k0fesKH0l-n7CNLA62f9wAOvre2tZyHtzf8ktWF63qc)

[You don't need me, this is perfect and short - Fireship.io](https://www.youtube.com/watch?v=g2o22C3CRfU)

In plain words, Big O notation describes the complexity of your code using algebraic terms. It checks for time and space complexity, meaning how long does it take to complete and how much memory it uses.

### 🔑 Key points

- Usually it represents the worst case scenario
- It is independent of the machine running the algorithm (does not care about hardware)
- Takes into account the number of operations or steps needed to complete the algorithm or problem
- It is not about precision. It is a big picture idea
- Drop the constants O(2n) is O(n), O(23 + n) is O(n)
- Drop the less impactful terms O(n + n^2) is O(n^2)

## Most Common representations

### Constant time (O(1))

No matter the size of the input, it will always take the same ammount of time to solve.

#### 🚪 Examples

- Bookmarks to help you get back to the desired page
- Math operations
- Getting an element in an array by it's index
- Accessing a value using the key in an object
- Adding (push) and removing (pop) items of a stack or queue

### Linear time O(n)

In Linear time, the time required to run the algorithm increases as the input increases

#### 🚪 Examples

- Drinking a glass or water
- Reading a book
- Traversing an array (for loop, forEach, map, filter)

### Quadratic Time O(n^2)

- O(n^2) Quadratic time

The time will increase exponentially as the input grows. 🚨

#### 🚪 Examples

- Nested loops are the classic example of O(n^2)
- Checking for duplicates in an array
- Bubble Sort
- Insertion Sort
- Selection Sort

### Logarithmic Time O(log n)

Time grows in proportion to the logarithm of the input size, meaning that the run time barely increases as you exponentially increase the input.

#### 🚪 Example

- Binary Search, such as finding word in dictionary by halving search

---

---

---

## Sorting Algorithms

[VisuAlgo](https://visualgo.net/en)

## Bubble sort

🅾️ O(n^2)
Go over the list and compare each pair. Swap the numbers if they are out of order.

## Merge sort (Divide and conquer)

🅾️ O(n log n)

## Insertion sort

🅾️ O(n^2)
Start from the left and start checking to the right. If greater than, go back on the chain to insert in the right place

## Quick sort

🅾️ O(n^2 )
Randomly pick a pivot and set element greater than the pivot to the right of it and smaller to the left. repeat Quick Sort in the new smaller groups until sorted

## Search ordered lists

## Linear Search

🅾️ O(n)
Go over every item on the list, until you find what you are looking for

## Binary Search

🅾️ O(log n)
Divide the list at the middle and check if that is what you are looking for. If not, take the half of the list where the item can be. It can be on the left side list if the desired number is smaller and on the right side of the list if the number is greater... repeat the process until the item is found (Recursion is often used)

---

---

---

## Did not see, but related to Stack - Event Loop

[What is the Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=837s)
[Other Event Loop explanation](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
