import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
	const { productID } = useParams();
	return (
		<>
			<h1>Products 📦 </h1>
			<p>{productID}</p>
			<div>
				<Link to='/'>🏡</Link>
				<Link to='/bio'>🦠</Link>
			</div>
		</>
	);
};

export default Home;
