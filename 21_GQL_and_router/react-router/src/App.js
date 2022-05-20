import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Products from "./components/Products";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<h1>My site</h1>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='home' element={<Home />} />
				<Route path='bio' element={<Bio />} />
				<Route path='products' element={<Products />}>
					<Route path=':productID' element={<Products />} />
				</Route>
				<Route
					path='*'
					element={<h1>Sorry did not find the page you are looking for</h1>}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
