# ⚛ REACT

## A JavaScript **library** for building user interfaces

[⭐️⭐️⭐️⭐️⭐️ React Beta Docs](https://beta.reactjs.org/learn)

> Note: all the activities are in the included file React.zip along with this react.md

## Starting with an HTML file

### 🗂 0-createElement

Creating a basic React App with only an HTML page. Not suitable for production, but a good way to understand what happens behind the scenes.

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />

		<title>Hello React!</title>

		<!-- core React -->
		<script src="https://unpkg.com/react@^16/umd/react.production.min.js"></script>
		<!-- React to manipulate the DOM -->
		<script src="https://unpkg.com/react-dom@16.13.0/umd/react-dom.production.min.js"></script>
		<!-- Babel to use ES6 in all browsers -->
		<script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
	</head>

	<body>
		<div id="root"></div>

		<script type="text/babel">
			const container = document.getElementById("root");
			// React.createElement(html element, options (such as class...), children)
			const header = React.createElement("h1", {}, "Hello World!");
			ReactDOM.render(header, container);
		</script>
	</body>
</html>
```

## Create React App

Installing Create React App can be a slow process. In this section we are creating one application to use for all the different activities. We'll be swapping the src folder each time to represent the current activity.

[Create React App](https://reactjs.org/docs/create-a-new-react-app.html)

```bash
npx create-react-app my-app
cd my-app
npm start
```

What do we get with Create React app? Let's go over the files on the **react-app-untoched** (create-react-app without any modifications) folder
👀 react-app-untouched folder

### 🗂 01-starter

Using create-react-app, we'll introduce the concept of JSX and components to start building our application

JSX stands for 'JavaScript XML' and it allows creating HTML with JavaScript in React. JSX is interpreted and converted by Babel to regular JS.

JS and JSX comparison:

```js
const elementJS = React.createElement("h1", {}, "Hello World!");
const elementJSX = <h1>Hello World!</h1>;
```

**🔑 Key elements**

- Looks like HTML, but it is not
- As it is being returned in a function. Only one item can be returned
- Styles take className as name is a reserved word
- To interpolate data or perform JS expressions, wrap the code in {}. More in next section (second-props)

### 🗂 02-props

We pass properties from a parent component to a child component. **⭐️In React data flows from parent to child**

The data is received by the child component and it can be used or passed to a child of the component

It is very common to destructure your props to make using them a bit more intuitive in the component

```js
// Option 1. It is common to destructure right at the top level
export const Card =  {image, title, author, year } => {
	// Option 2.  Destructure here
	const { image, title, author, year } = props.info;

	// Option 3. Don't destructure.  the content of the div below will be
	// {props.info.title} {props.info.author} {props.info.year}
	return (
		<div>
			{title} {author} {year}
		</div>
	);
};
```

### 🗂 03-loops

React does not have a way of looping over iterables, like Handlebars does. React defaults to JavaScript. To loop over iterables 'map' is heavily used in the Library.

React will require us to assign a key to each item in a list. This is to help React efficiently an accurately keep track of all the items. This key must be a unique value. If not, React will prompt a message in the console.

Sidenote. React error messages are very helpful most of th time.

```js
const Cardlist = ({ employees }) => {
	return (
		<div className='container'>
			{/* We iterate over the array employees using map and at each iteration 
			return a new card component
			*/}
			{employees.map(employee => (
				<Card
					key={employee.id}
					id={employee.id}
					name={employee.name}
					badge={employee.badge}
					department={employee.department}
				/>
			))}
		</div>
	);
};
```

### 🗂 04-a-state-intro

React is data driven, and will update (render) your page as the data changes. It makes handling multiple changes on the page/site much easier, as you will not have to manually make each change, the library sees a change in data and updates the DOM.

In modern React we use the concept of Hooks to manage state. The most important of the Hooks is useState. useState returns an array containing the value of the state at position zero and a function to update the state at posirion one.

```js
import { useState } from "react";

const App = () => {
	// Use the useState hook 🪝 and destructure the two items in the useState array
	// the first one is the value of the state (0 in this case) and the second a setter
	// function to update that value in the application
	const [bites, setBites] = useState(0);

	return (
		<div>
			{/* onClick call setBites to update the counter */}
			<button type='button' onClick={() => setBites(bites + 1)}>
				Bites : {bites}
			</button>
		</div>
	);
};

export default App;
```

### 🗂 04-b-state-form

Example of how to manage changes in state within a form in React.

**🔑 Elements**

- We need to use **htmlForm** instead of form in the label tag for each input
- **Controlled Inputs**. Input, textArea and select HTML elements mantain their own state. They know what their value is. In React we delegate that function to React to have one source of truth.
- **onchange** and **onclick** are part of the Global Event Attributes we have on HTML, but since in React we are writting JavaScript, we type them using cammelCase. **onChange** and **onClick**.
- `name ? <div> Hello {name}</div>: "Please enter your name"}` is an example of **Conditional rendering**. Only one of the parts of the **ternary** operator will be rendered, depending on the current state of the **name** value.

```js
import { useState } from "react";

const App = () => {
	const [name, setName] = useState("");

	const handleChange = event => setName(event.target.value);

	return (
		<div>
			<form>
				{/* in JSC we can not use for for the label, instead use htmFor */}
				<label htmlFor='name'>Name</label>
				<input
					value={name}
					name='name'
					placeholder='name'
					onChange={handleChange}
					id='name'
				/>
			</form>
			{name ? <div>Hello {name}</div> : "Please enter your name"}
		</div>
	);
};

export default App;
```

### 🗂 04-c-state-counter

The classic example when explaining state is a counter. We have one here with multiple things going on, including CSS inline implementation.

**🔑 Elements**

- The parent component is App and it has two children **BiteCounter.js** and **Croc.js**. We are focusing on what is happening in **BiteCounter**.
- BiteCounter manages one piece of **state** for the application, the number of bites.
- There is on event handler called **handleClick** that takes care of increasing the number of bites every time the user clicks on the button. This action is triggered within the button by the **onClick** event, calling the **setBites** setter function made avaible by useState.
- **noBites** is using JavaScript's **short circuit** evaluation, providing conditional rendering. `js 🐴🌈 === true && 🦄`. In this example, if something is true, the expression will carry on and evaluate the right side of **&&**, resutling on 🦄. if the left side is false, the expression will be **false**
- We are including inline CSS. This option also comes from HTML, were we can do the following `html <h1 style="color:green;text-align:center;">Hello World!</h1>`. We have to remember that **_JSX is not HTML_**, therefore we need to modify our syntax to express the same in JavaScript, resulting in: `html <h1 style={{color: "green","textAlign":"center"}}>Hello World</h1>`

```js
import { useState } from "react";

const BiteCounter = ({ step }) => {
	/* create state for the ClapCounter Component
      Destructured elements of useState.  
      [getterSomething, setterSomething] = useState(something) 
    */
	const [bites, setBites] = useState(0);
	const img = "🐊";

	// Handler to increase the number of claps by 1
	const handleClick = () => {
		setBites(bites + step);
	};

	// Function that adda a div when there are no bites
	const noBites = bites === 0 && (
		<div style={{ fontSize: "1.5rem", padding: "2rem" }}>
			🐝 the first to 🐊
		</div>
	);

	return (
		<div>
			<button
				type='button'
				// styling within JS requires to use cammelCase
				style={{
					cursor: "pointer",
					fontSize: "4rem",
					borderRadius: "25px",
					padding: "1rem",
					backgroundColor: "orangered",
					color: "white",
				}}
				// define what function will be invoqued when the button is clicked
				onClick={handleClick}
			>
				{/* Display the requested variable, state and conditional content */}
				{img} {bites} {img}
				{noBites}
			</button>
		</div>
	);
};
export default BiteCounter;
```

### 🗂 05-a-effect-intro

The second most common 🪝Hook is **useEffect**. It runs when specified events or side effects in our application are detected, such a re-render of the page.

That is quite vague, I know. It has to do with the way that React was coded before having Hooks (functional approach) in its components. Before Hooks we had **Class** based components and they had a life cycle, including methods such as **componentDidMount**, **componentDidUpdate** and **componentWillUnmount**. We don't have those methods when we work with Hooks, and managing those differnt stages of the component is all now done with useEffect.

Fetch is a function that takes **two arguments**:

- A **function** that updates a piece of state
- An **array** with the pieces of state that we want to trigger useEffect to run. If the array is empty, the useEffect Hook will only run when the component is first mounted.

```js
import { useState, useEffect } from "react";

const App = () => {
	const [name, setName] = useState("Pepito");

	// useEffect takes two arguments
	// 1. A function
	useEffect(() => {
		document.title = `You selected ${name}`;
		// 2. an Array of changes to look for.  If empty it will only run when the
		// component is mounted, if none, it will run everytime the state changes
		// passing items means that it will run everytime that piece of state changes
	}, []);
	return (
		<div>
			<button
				onClick={() =>
					name === "Pepito 👨" ? setName("Pepita 👩") : setName("Pepito 👨")
				}
			>
				{name}
			</button>
		</div>
	);
};

export default App;
```

### 🗂 05-b-effect-fetch

Calling an API is a very common use of useEffect.

```js
import { useState, useEffect } from "react";
import Countrylist from "./CountryList";
import "./countries.css";

const App = () => {
	const [light, setLight] = useState("🔆");
	const [countries, setCountries] = useState([]);

	// useEffect takes two arguments
	// 1. A function
	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/all`)
			.then(data => data.json())
			.then(countryData => {
				console.log(countryData);
				setCountries(countryData);
			});
		// 2. an Array of changes to look for.  If empty it will only run when the
		// component is mounted, if none, it will run everytime the state changes
		// passing items means that it will run everytime that piece of state changes
	}, []);

	return (
		<div className='container'>
			<button
				onClick={() => (light === "🔆" ? setLight("🌙") : setLight("🔆"))}
			>
				{light}
			</button>
			<div className='list'>
				<Countrylist countries={countries} />
			</div>
		</div>
	);
};

export default App;
```
