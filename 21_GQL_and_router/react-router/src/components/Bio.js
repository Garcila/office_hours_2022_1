import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<h1>Bio 🦠</h1>
			<div>
				<Link to='/'>🏡</Link>
				<Link to='/products'>📦</Link>
			</div>
		</>
	);
};

export default Home;
