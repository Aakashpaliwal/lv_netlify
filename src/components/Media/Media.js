import React, { Component, Fragment } from "react";
import "./media.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Media extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				loop: true,
				margin: 10,
				nav: false,
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 2,
					},
					1000: {
						items: 3,
					},
				},
			},
		};
	}

	// componentWillMount() {
	// 	$(document).ready(function () {
	// 		$("#seperate_media_section").owlCarousel({
	// 			itemsDesktop: [1499, 3],
	// 			itemsDesktopSmall: [1199, 3],
	// 			itemsTablet: [899, 2],
	// 			itemsMobile: [599, 1],
	// 			navigation: true,
	// 			navigationText: [],
	// 			autoWidth: true,
	// 			// items: 3,
	// 		});
	// 	});
	// }

	render() {
		return (
			<Fragment>
				<div className="media_hero">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="hero_text">
									<h1 className="media_banner_heading">
										MEDIA
									</h1>
									<p>
										Our Avataar reflected in how we are seen
										and what we want to say.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className="col-sm-12 text-center arrow bounce"
						style={{ position: "absolute", bottom: "20px" }}
					>
						<a href="#ethos">
							<img
								src="https://s3.ap-south-1.amazonaws.com/avataar.vc/arrow.svg"
								style={{ width: "46px", height: "21px" }}
								alt="arrow"
							/>
						</a>
					</div>
				</div>

				<div
					id="ethos"
					className="ethos"
					data-aos="fade-up"
					data-aos-duration="100"
				>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="ethos-framework-para">
									<p>NEWS</p>
								</div>
							</div>
						</div>
					</div>

					<section className="media_section_content">
						{/*<div className="container">
							<div className="row blog">
								<div className="col-md-12">
									<div
										id="blogCarousel"
										className="carousel slide"
										data-ride="carousel"
									>
										<ol className="carousel-indicators">
											<li
												data-target="#blogCarousel"
												data-slide-to="0"
												className="active"
											></li>
											<li
												data-target="#blogCarousel"
												data-slide-to="1"
											></li>
										</ol>

										<div className="carousel-inner">
											<div className="carousel-item active">
												<div className="row">
													<div className="col-md-4">
														<div className="card mb-3 seperate_card_ap_border">
															<div className="seperate-img-card">
																<img
																	src={require("../assets/Avataar-Press-release.jpg")}
																	className="card-img-top img-fluid"
																	alt="..."
																/>
															</div>
															<div className="card-body seperate_card_body_ap">
																<p className="card-title">
																	21 Sep 2019,
																	Bangalore
																</p>
																<p className="card-text">
																	Avataar -
																	backed by
																	HarbourVest
																	Partners to
																	launch new
																	VC paradigm
																	to help fund
																	& globally
																	scale
																	B2B/SaaS
																	companies
																</p>
																<a href="#">
																	More
																	<span>
																		&nbsp;&#62;
																	</span>
																</a>
															</div>
														</div>
													</div>
													<div className="col-md-4">
														<div className="card mb-3 seperate_card_ap_border">
															<div className="seperate-img-card">
																<img
																	src={require("../assets/avataar-economictimes.jpg")}
																	className="card-img-top img-fluid"
																	alt="..."
																/>
															</div>
															<div className="card-body seperate_card_body_ap">
																<p className="card-title">
																	21 Sep 2019,
																	Bangalore
																</p>
																<p className="card-text">
																	Avataar
																	Venture
																	Partners to
																	invest $300
																	million in
																	B2B and SaaS
																	companies
																</p>
																<a href="#">
																	More
																	<span>
																		&nbsp;&#62;
																	</span>
																</a>
															</div>
														</div>
													</div>
													<div className="col-md-4">
														<div className="card mb-3 seperate_card_ap_border">
															<div className="seperate-img-card">
																<img
																	src={require("../assets/Avataar-INC-42.jpg")}
																	className="card-img-top img-fluid"
																	alt="..."
																/>
															</div>
															<div className="card-body seperate_card_body_ap">
																<p className="card-title">
																	21 Sep 2019,
																	Bangalore
																</p>
																<p className="card-text">
																	Former
																	Freshworks,
																	Norwest
																	Partners
																	Executives
																	Launch $300
																	Mn
																	Investment
																	Fund
																</p>
																<a href="#">
																	More
																	<span>
																		&nbsp;&#62;
																	</span>
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div className="carousel-item">
												<div className="row">
													<div className="col-md-4">
														<div className="card mb-3 seperate_card_ap_border">
															<div className="seperate-img-card">
																<img
																	src={require("../assets/Avataar-Press-release.jpg")}
																	className="card-img-top img-fluid"
																	alt="..."
																/>
															</div>
															<div className="card-body seperate_card_body_ap">
																<p className="card-title">
																	21 Sep 2019,
																	Bangalore
																</p>
																<p className="card-text">
																	Avataar -
																	backed by
																	HarbourVest
																	Partners to
																	launch new
																	VC paradigm
																	to help fund
																	& globally
																	scale
																	B2B/SaaS
																	companies
																</p>
																<a href="#">
																	More
																	<span>
																		&nbsp;&#62;
																	</span>
																</a>
															</div>
														</div>
													</div>
													<div className="col-md-4">
														<div className="card mb-3 seperate_card_ap_border">
															<div className="seperate-img-card">
																<img
																	src={require("../assets/avataar-economictimes.jpg")}
																	className="card-img-top img-fluid"
																	alt="..."
																/>
															</div>
															<div className="card-body seperate_card_body_ap">
																<p className="card-title">
																	21 Sep 2019,
																	Bangalore
																</p>
																<p className="card-text">
																	Avataar
																	Venture
																	Partners to
																	invest $300
																	million in
																	B2B and SaaS
																	companies
																</p>
																<a href="#">
																	More
																	<span>
																		&nbsp;&#62;
																	</span>
																</a>
															</div>
														</div>
													</div>
													<div className="col-md-4">
														<div className="card mb-3 seperate_card_ap_border">
															<div className="seperate-img-card">
																<img
																	src={require("../assets/Avataar-INC-42.jpg")}
																	className="card-img-top img-fluid"
																	alt="..."
																/>
															</div>
															<div className="card-body seperate_card_body_ap">
																<p className="card-title">
																	21 Sep 2019,
																	Bangalore
																</p>
																<p className="card-text">
																	Former
																	Freshworks,
																	Norwest
																	Partners
																	Executives
																	Launch $300
																	Mn
																	Investment
																	Fund
																</p>
																<a href="#">
																	More
																	<span>
																		&nbsp;&#62;
																	</span>
																</a>
															</div>
														</div>
													</div>
												</div>{" "}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>*/}

						{/* NEW IMAGE CONTAINER */}

						{/*<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<div className="card mb-3 seperate_card_ap_border">
										<div className="seperate-img-card">
											<img
												src={require("../assets/Avataar-Press-release.jpg")}
												className="card-img-top img-fluid"
												alt="..."
											/>
										</div>
										<div className="card-body seperate_card_body_ap">
											<p className="card-title">
												21 Sep 2019, Bangalore
											</p>
											<p className="card-text">
												Avataar - backed by HarbourVest
												Partners to launch new VC
												paradigm to help fund & globally
												scale B2B/SaaS companies
											</p>
											<a href="#">
												More<span>&nbsp;&#62;</span>
											</a>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<div className="card mb-3 seperate_card_ap_border">
										<div className="seperate-img-card">
											<img
												src={require("../assets/avataar-economictimes.jpg")}
												className="card-img-top img-fluid"
												alt="..."
											/>
										</div>
										<div className="card-body seperate_card_body_ap">
											<p className="card-title">
												21 Sep 2019, Bangalore
											</p>
											<p className="card-text">
												Avataar Venture Partners to
												invest $300 million in B2B and
												SaaS companies
											</p>
											<a href="#">
												More<span>&nbsp;&#62;</span>
											</a>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<div className="card mb-3 seperate_card_ap_border">
										<div className="seperate-img-card">
											<img
												src={require("../assets/Avataar-INC-42.jpg")}
												className="card-img-top img-fluid"
												alt="..."
											/>
										</div>
										<div className="card-body seperate_card_body_ap">
											<p className="card-title">
												21 Sep 2019, Bangalore
											</p>
											<p className="card-text">
												Former Freshworks, Norwest
												Partners Executives Launch $300
												Mn Investment Fund
											</p>
											<a href="#">
												More<span>&nbsp;&#62;</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>*/}
						<div className="container">
							<div className="row">
								<div className="col-12">
									<OwlCarousel
										className="owl-theme"
										{...this.state.options}
									>
										<div class="item">
											<div className="col-12">
												<div className="card mb-3 seperate_card_ap_border">
													<div className="seperate-img-card">
														<img
															src={require("../assets/Avataar-Press-release.jpg")}
															className="card-img-top img-fluid"
															alt="..."
														/>
													</div>
													<div className="card-body seperate_card_body_ap">
														<p className="card-title">
															21 Sep 2019,
															Bangalore
														</p>
														<p className="card-text">
															Avataar - backed by
															HarbourVest Partners
															to launch new VC
															paradigm to help
															fund & globally
															scale B2B/SaaS
															companies
														</p>
														<p
															style={{
																color:
																	"#3b73b5",
																fontWeight:
																	"600",
																cursor:
																	"pointer",
															}}
														>
															More
															<span>
																&nbsp;&#62;
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div class="item">
											<div className="col-12">
												<div className="card mb-3 seperate_card_ap_border">
													<div className="seperate-img-card">
														<img
															src={require("../assets/avataar-economictimes.jpg")}
															className="card-img-top img-fluid"
															alt="..."
														/>
													</div>
													<div className="card-body seperate_card_body_ap">
														<p className="card-title">
															21 Sep 2019,
															Bangalore
														</p>
														<p className="card-text">
															Avataar Venture
															Partners to invest
															$300 million in B2B
															and SaaS companies
														</p>
														<p
															style={{
																color:
																	"#3b73b5",
																fontWeight:
																	"600",
																cursor:
																	"pointer",
															}}
														>
															More
															<span>
																&nbsp;&#62;
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div class="item">
											<div className="col-12">
												<div className="card mb-3 seperate_card_ap_border">
													<div className="seperate-img-card">
														<img
															src={require("../assets/Avataar-INC-42.jpg")}
															className="card-img-top img-fluid"
															alt="..."
														/>
													</div>
													<div className="card-body seperate_card_body_ap">
														<p className="card-title">
															21 Sep 2019,
															Bangalore
														</p>
														<p className="card-text">
															Former Freshworks,
															Norwest Partners
															Executives Launch
															$300 Mn Investment
															Fund
														</p>
														<p
															style={{
																color:
																	"#3b73b5",
																fontWeight:
																	"600",
																cursor:
																	"pointer",
															}}
														>
															More
															<span>
																&nbsp;&#62;
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div class="item">
											<div className="col-12">
												<div className="card mb-3 seperate_card_ap_border">
													<div className="seperate-img-card">
														<img
															src={require("../assets/Avataar-Press-release.jpg")}
															className="card-img-top img-fluid"
															alt="..."
														/>
													</div>
													<div className="card-body seperate_card_body_ap">
														<p className="card-title">
															21 Sep 2019,
															Bangalore
														</p>
														<p className="card-text">
															Avataar - backed by
															HarbourVest Partners
															to launch new VC
															paradigm to help
															fund & globally
															scale B2B/SaaS
															companies
														</p>
														<p
															style={{
																color:
																	"#3b73b5",
																fontWeight:
																	"600",
																cursor:
																	"pointer",
															}}
														>
															More
															<span>
																&nbsp;&#62;
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div class="item">
											<div className="col-12">
												<div className="card mb-3 seperate_card_ap_border">
													<div className="seperate-img-card">
														<img
															src={require("../assets/avataar-economictimes.jpg")}
															className="card-img-top img-fluid"
															alt="..."
														/>
													</div>
													<div className="card-body seperate_card_body_ap">
														<p className="card-title">
															21 Sep 2019,
															Bangalore
														</p>
														<p className="card-text">
															Avataar Venture
															Partners to invest
															$300 million in B2B
															and SaaS companies
														</p>
														<p
															style={{
																color:
																	"#3b73b5",
																fontWeight:
																	"600",
																cursor:
																	"pointer",
															}}
														>
															More
															<span>
																&nbsp;&#62;
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div class="item">
											<div className="col-12">
												<div className="card mb-3 seperate_card_ap_border">
													<div className="seperate-img-card">
														<img
															src={require("../assets/Avataar-INC-42.jpg")}
															className="card-img-top img-fluid"
															alt="..."
														/>
													</div>
													<div className="card-body seperate_card_body_ap">
														<p className="card-title">
															21 Sep 2019,
															Bangalore
														</p>
														<p className="card-text">
															Former Freshworks,
															Norwest Partners
															Executives Launch
															$300 Mn Investment
															Fund
														</p>
														<p
															style={{
																color:
																	"#3b73b5",
																fontWeight:
																	"600",
																cursor:
																	"pointer",
															}}
														>
															More
															<span>
																&nbsp;&#62;
															</span>
														</p>
													</div>
												</div>
											</div>
										</div>
									</OwlCarousel>

									{/*<div
										id="media_section"
										className="owl-carousel mt-5"
									>
									
										<div className="col-12">
											<div className="card mb-3 seperate_card_ap_border">
												<div className="seperate-img-card">
													<img
														src={require("../assets/Avataar-Press-release.jpg")}
														className="card-img-top img-fluid"
														alt="..."
													/>
												</div>
												<div className="card-body seperate_card_body_ap">
													<p className="card-title">
														21 Sep 2019, Bangalore
													</p>
													<p className="card-text">
														Avataar - backed by
														HarbourVest Partners to
														launch new VC paradigm
														to help fund & globally
														scale B2B/SaaS companies
													</p>
													<a href="#">
														More
														<span>&nbsp;&#62;</span>
													</a>
												</div>
											</div>
										</div>

																				<div className="col-12">
											<div className="card mb-3 seperate_card_ap_border">
												<div className="seperate-img-card">
													<img
														src={require("../assets/avataar-economictimes.jpg")}
														className="card-img-top img-fluid"
														alt="..."
													/>
												</div>
												<div className="card-body seperate_card_body_ap">
													<p className="card-title">
														21 Sep 2019, Bangalore
													</p>
													<p className="card-text">
														Avataar Venture Partners
														to invest $300 million
														in B2B and SaaS
														companies
													</p>
													<a href="#">
														More
														<span>&nbsp;&#62;</span>
													</a>
												</div>
											</div>
										</div>

										
										<div className="col-12">
											<div className="card mb-3 seperate_card_ap_border">
												<div className="seperate-img-card">
													<img
														src={require("../assets/Avataar-INC-42.jpg")}
														className="card-img-top img-fluid"
														alt="..."
													/>
												</div>
												<div className="card-body seperate_card_body_ap">
													<p className="card-title">
														21 Sep 2019, Bangalore
													</p>
													<p className="card-text">
														Former Freshworks,
														Norwest Partners
														Executives Launch $300
														Mn Investment Fund
													</p>
													<a href="#">
														More
														<span>&nbsp;&#62;</span>
													</a>
												</div>
											</div>
										</div>
									</div>*/}
								</div>
							</div>
						</div>
					</section>
				</div>
			</Fragment>
		);
	}
}

export default Media;
