import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<h1>My House 🏡</h1>
			<div>
				<Link to='/bio'>🦠</Link>
				<Link to='/products'>📦</Link>
			</div>
		</>
	);
};

export default Home;
