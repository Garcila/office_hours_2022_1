import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Products = () => {
	const { productId } = useParams();

	return (
		<>
			<h1>All My Products 📦</h1>
			<h2>Product {productId}</h2>
			<div>
				<Link to='/home'>🏡</Link>
				<Link to='/bio'>🦠</Link>
			</div>
		</>
	);
};

export default Products;
