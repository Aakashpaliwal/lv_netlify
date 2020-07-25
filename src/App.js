import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Ethos from "./components/Ethos/Ethos";
import Portfolio from "./components/Portfolio/Portfolio";
import Team from "./components/Team/Team";

function App() {
	return (
		<div>
			<Navbar />
			<Route path="/" exact component={Home} />
			<Route path="/ethos" exact component={Ethos} />
			<Route path="/portfolio" exact component={Portfolio} />
			<Route path="/team" exact component={Team} />
			<Footer />
		</div>
	);
}

export default App;
