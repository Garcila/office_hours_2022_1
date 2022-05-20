import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Bio from "./components/Bio";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='home' element={<Home />} />
				<Route path='bio' element={<Bio />} />
				<Route path='products' element={<Products />}>
					<Route path=':productId' element={<Products />} />
				</Route>
				<Route
					path='*'
					element={<h1>404 The page you requested was not found 🔎</h1>}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
