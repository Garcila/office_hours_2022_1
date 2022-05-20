import React from "react";
import { Link } from "react-router-dom";

const Bio = () => {
	return (
		<>
			<h1>My Bio 🦠</h1>
			<div>
				<Link to='/home'>🏡</Link>
				<Link to='/products'>📦</Link>
			</div>
		</>
	);
};

export default Bio;
