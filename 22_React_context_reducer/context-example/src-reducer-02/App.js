import { useReducer, useState } from "react";
import "./App.css";

function reducer(state, action) {
	switch (action.type) {
		case "increment":
			return {
				count: state.count + state.countBy,
				countBy: state.countBy,
			};
		case "decrement":
			return {
				count: state.count - state.countBy,
				countBy: state.countBy,
			};
		case "reset":
			return {
				count: 0,
				countBy: state.countBy,
			};
		case "updateCountBy":
			return {
				count: state.count,
				countBy: action.countBy,
			};
		default:
			throw new Error();
	}
}

function CountBy({ onChange }) {
	const [value, setValue] = useState(1);
	return (
		<div>
			<input
				onChange={e => {
					const value = parseInt(e.target.value);
					onChange(value);
					setValue(value);
				}}
				value={value}
			/>
			<div>Count by: {value}</div>
		</div>
	);
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, { count: 0, countBy: 1 });
	return (
		<div className='App'>
			<h1>Super Duper Fancy Counter</h1>
			<CountBy
				onChange={value =>
					dispatch({
						type: "updateCountBy",
						countBy: value,
					})
				}
			/>
			<button
				onClick={() => dispatch({ type: "decrement", countBy: state.countBy })}
			>
				-
			</button>
			<h1>{state.count}</h1>
			<button
				onClick={() => dispatch({ type: "increment", countBy: state.countBy })}
			>
				{" "}
				+{" "}
			</button>
			<div>
				<button
					onClick={() => dispatch({ type: "reset", countBy: state.countBy })}
				>
					Reset
				</button>
			</div>
		</div>
	);
}
