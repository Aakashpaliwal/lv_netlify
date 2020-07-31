import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Ethos from "./components/Ethos/Ethos";
import Portfolio from "./components/Portfolio/Portfolio";
import Team from "./components/Team/Team";
import Media from "./components/Media/Media";
import Contact from "./components/Contact/Contact";
import Press from "./components/PressRelease/Press";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			press_route_state: false,
		};
	}
	componentDidMount() {
		console.log(localStorage.getItem("press_route"));
		if (localStorage.getItem("press_route") == true) {
			this.setState({
				press_route_state: true,
			});
		}
	}

	render() {
		return (
			<div>
				{this.state.press_route_state ? (
					<div>
						<Navbar />
						<Route path="/" exact component={Home} />
						<Route path="/ethos" exact component={Ethos} />
						<Route path="/portfolio" exact component={Portfolio} />
						<Route path="/team" exact component={Team} />
						<Route path="/media" exact component={Media} />
						<Route path="/contact" exact component={Contact} />

						<Footer />
					</div>
				) : (
					<div>
						<Navbar />
						<Press />
					</div>
				)}
			</div>
		);
	}
}

export default App;
