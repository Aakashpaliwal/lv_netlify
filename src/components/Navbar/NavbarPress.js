import React, { Component, Fragment } from "react";
import "./navbar.css";
import $ from "jquery";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
	componentDidMount() {
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$(".navbar .navbar-brand img").attr(
						"src",
						"https://s3.ap-south-1.amazonaws.com/avataar.vc/avataar-logo-black-new.png"
					);
					$(".navbar").removeClass("navbar-dark");
					$(".navbar").addClass("navbar-light");
				}
				if ($(this).scrollTop() < 100) {
					$(".navbar .navbar-brand img").attr(
						"src",
						"https://s3.ap-south-1.amazonaws.com/avataar.vc/avataar_log_white_new.png"
					);
					$(".navbar").removeClass("navbar-light");
					$(".navbar").addClass("navbar-dark");
				}
			});
		});
		// $(window).scroll(function () {
		// 	var scroll = $(window).scrollTop();
		// 	var $nav = $(".navbar-fixed-top");
		// 	if (scroll >= $nav.height()) {
		// 		$(".nav-link")
		// 			.parent()
		// 			.parent()
		// 			.parent()
		// 			.parent()[0].children[0].children[0].src =
		// 			"https://s3.ap-south-1.amazonaws.com/avataar.vc/avataar-logo-black-new.png";
		// 		$(".navbar").removeClass("navbar-dark");
		// 		$(".navbar").addClass("navbar-light");
		// 	} else {
		// 		$(".nav-link")
		// 			.parent()
		// 			.parent()
		// 			.parent()
		// 			.parent()[0].children[0].children[0].src =
		// 			"https://s3.ap-south-1.amazonaws.com/avataar.vc/avataar_log_white_new.png";
		// 		$(".navbar").removeClass("navbar-light");
		// 		$(".navbar").addClass("navbar-dark");
		// 	}
		// });
	}

	routeHandler = () => {
		window.location.assign("/");
	};

	render() {
		return (
			<Fragment>
				<nav class="navbar navbar-expand-lg  static-top fixed-top d-inline-flex navbar-fixed-top navbar-dark">
					<div class="container">
						<div
							class="navbar-brand custom_avtaar_logo"
							onClick={this.routeHandler}
						>
							<img
								src="https://s3.ap-south-1.amazonaws.com/avataar.vc/avataar_log_white_new.png"
								alt="Logo"
								className="logo"
								// id="logo"
								style={{ width: "180px", height: "auto" }}
							/>
						</div>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarResponsive"
							aria-controls="navbarResponsive"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse custom-collapse-bg"
							id="navbarResponsive"
						>
							<ul className="navbar-nav ml-auto">
								<li
									className="nav-item nav-link"
									data-toggle="collapse"
									data-target=".navbar-collapse.show"
								>
									<NavLink
										to="/ethos"
										activeClassName="activeRoute"
									>
										ETHOS
										<span className="sr-only">
											(current)
										</span>
									</NavLink>
								</li>
								<li
									className="nav-item nav-link"
									data-toggle="collapse"
									data-target=".navbar-collapse.show"
								>
									<NavLink
										to="/portfolio"
										activeClassName="activeRoute"
									>
										PORTFOLIO
									</NavLink>
								</li>
								<li
									className="nav-item nav-link"
									data-toggle="collapse"
									data-target=".navbar-collapse.show"
								>
									<NavLink
										to="/team"
										activeClassName="activeRoute"
									>
										TEAM
									</NavLink>
								</li>

								<li
									className="nav-item nav-link"
									data-toggle="collapse"
									data-target=".navbar-collapse.show"
								>
									<NavLink
										to="/media"
										activeClassName="activeRoute"
									>
										MEDIA
									</NavLink>
									{/*<a
										className="nav-link"
										id="media_nav"
										href="#media"
									>
										MEDIA
									</a>*/}
								</li>
								<li
									className="nav-item nav-link custom_nav_link_cursor"
									data-toggle="collapse"
									data-target=".navbar-collapse.show"
								>
									<NavLink
										to="/contact"
										activeClassName="activeRoute"
									>
										CONTACT
									</NavLink>
									{/*<a
										className="nav-link"
										id="contact_nav"
										href="#contact"
									>
										CONTACT
									</a>*/}
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="navbar_space" />
				{/*<div id="page-wrapper">
					<div id="title">Sidebar Interaction</div>
				</div>
				<div id="btn">
					<div id="top"></div>
					<div id="middle"></div>
					<div id="bottom"></div>
				</div>
				<div id="box">
					<div id="items">
						<a href="#home">
							<div className="item">Home</div>
						</a>
						<a href="#ethos">
							<div className="item">Ethos</div>
						</a>
						<a href="#focus">
							<div className="item">Focus</div>
						</a>
						<a href="#people">
							<div className="item">Team</div>
						</a>
						<a href="#media_section">
							<div className="item">Media</div>
						</a>
						<a href="#portfolio">
							<div className="item">Portfolio</div>
						</a>
						<a href="#contact">
							<div className="item">Contact</div>
						</a>
					</div>
				</div>
				<div className="mobile_logo">
					<img
						src="https://s3.ap-south-1.amazonaws.com/avataar.vc/avataar_log_white_new.png"
						alt="mobile_logo"
					/>
				</div>
			
					<nav
						className="navbar navbar-expand-lg fixed-top d-inline-flex sample_className"
						style={{ padding: "0 2.5rem" }}
					>
						<a className="navbar-brand" href="#">
							<img
								src="https://s3.ap-south-1.amazonaws.com/avataar.vc/avataar_log_white_new.png"
								alt="Logo"
								id="logo"
								className="logo"
								style={{ width: "180px", height: "auto" }}
							/>
						</a>
						<button
							className="navbar-toggler  navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse justify-content-end"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link active_nav"
										id="home_nav"
										href="#home"
									></a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="ethos_nav"
										href="#ethos"
									>
										ETHOS
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="focus_nav"
										href="#focus"
									>
										FOCUS
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="people_nav"
										href="#people"
									>
										TEAM
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="portfolio_nav"
										href="#portfolio"
									>
										PORTFOLIO
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="media_nav"
										href="#media"
									>
										MEDIA
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="contact_nav"
										href="#contact"
									>
										CONTACT
									</a>
								</li>
							</ul>
						</div>
					</nav>*/}
			</Fragment>
		);
	}
}

export default Navbar;
