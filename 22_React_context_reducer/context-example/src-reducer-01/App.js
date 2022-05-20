import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return 0;
		default:
			throw new Error();
	}
}

export default function App() {
	const [count, dispatch] = useReducer(reducer, 0);
	return (
		<div className='App'>
			<h1>Super Duper Fancy Counter</h1>
			<button onClick={() => dispatch("decrement")}> - </button>
			<h1>{count}</h1>
			<button onClick={() => dispatch("increment")}> + </button>
			<div>
				<button onClick={() => dispatch("reset")}>Reset</button>
			</div>
		</div>
	);
}
