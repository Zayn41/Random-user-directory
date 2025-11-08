import { useState, useEffect } from "react";
import { fetchData } from "./api/randomUsers";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
	useEffect(() => {
		fetchData(5);
	}, []);

	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white w-full">
			<Home/>
			<Footer/>
		</div>
	);
}

export default App;

