import React, { Fragment, Component } from "react";
import "./ethos.css";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

class Ethos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isExpansionShow: false,
			isExecutionShow: false,
			isEntreShow: false,
			isEmpathy: false,
		};
	}

	expansionDivToogle = () => {
		this.setState({
			isExpansionShow: true,
		});
	};

	executionDivToogle = () => {
		this.setState({
			isExecutionShow: true,
		});
	};

	entreDivToogle = () => {
		this.setState({
			isEntreShow: true,
		});
	};

	empathyDivToogle = () => {
		this.setState({
			isEmpathy: true,
		});
	};

	closeHandler = () => {
		this.setState({
			isExpansionShow: false,
			isExecutionShow: false,
			isEntreShow: false,
			isEmpathy: false,
		});
	};

	render() {
		return (
			<Fragment>
				{" "}
				<div className="background_image_ethos_main">
					<div
						className="row home_section"
						id="home"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<div
							className="col-sm-12 banner_text"
							data-aos="fade-up"
							data-aos-duration="1500"
						>
							<h1 className="ethos_banner_heading">ETHOS</h1>
							<div className="home-content d-inline-flex mt-5">
								<p className="sub_section ethos_sub_section">
									Our aspiration is to see India & South-East
									Asia as B2B product nations building for the
									world! The diversity of our region ensures
									that products built here already account for
									complex global use-cases. From our personal
									experience, we also know scaling globally
									requires different networks, sales &
									marketing models (often unique per geo) & at
									times even product changes. The great news
									is getting these formula tweaks right offers
									up very compelling & sustainable unit
									economics that underlie world-class B2B
									companies.
								</p>
							</div>
							{/*<button className="btn btn-primary theme_button">PRESS RELEASE</button>*/}
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
					<div className="ethos-subheading col-sm-12 mt-3 custom_ethos_component_subheading">
						<p>
							We believe that a successful enterprise is built in
							the operational trenches week-on-week,
							month-on-month, year-on-year; by the best &
							hungriest founders who are willing to dream big &
							put in the effort required to get there.In fact, we
							believe the youth & mobile-first context of our
							young entrepreneurs will help deliver these same
							enterprise product use-cases in simpler & more
							innovative ways.
						</p>

						<p>
							And the final ingredient for global scale-up success
							is the access to the right folks that are willing to
							share their key learnings.Avataar was founded to
							help with this last part and orchestrate a paradigm
							shift in the Entrepreneur-VC equation for the
							region. To achieve this, We have envisioned a robust
							4E framework for building strong teams & great
							global businesses.
						</p>
					</div>
					<div className="ethos-framework-para mt-5">
						<center>
							<p>OUR 4E FRAMEWORK TO BUILD GLOBAL BUSINESSES</p>
						</center>
					</div>

					{/*<div className="container">
						<div className="row">
							<div className="people_flex_container">
								<div className="row">
									<div className="expansion_rectangle_parent_container_first">
										<div
											className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
											style={{ padding: "0" }}
										>
											<div className="expansion_rectangle">
												<div className="ethos-bitmap">
													<img
														src={require("../assets/Expansion_Expertise.svg")}
														alt="growth"
													/>
												</div>
												<div className="ethos-title ethos_seperate_component_data">
													Expansion <br />
													Expertise
												</div>
												<div className="ethos-content">
													KNOW MORE
													<span
														style={{
															paddingLeft: "20px",
															fontWeight: "600",
														}}
													>
														&#62;
													</span>
												</div>
											</div>
										</div>

										<div
											className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
											style={{ padding: "0" }}
										>
											<div className="expansion_rectangle">
												<div className="ethos-bitmap">
													<img
														src={require("../assets/Executive_Networks.svg")}
														alt="growth"
													/>
												</div>
												<div className="ethos-title ethos_seperate_component_data">
													Executive <br />
													Networks
												</div>
												<div className="ethos-content">
													KNOW MORE
													<span
														style={{
															paddingLeft: "20px",
															fontWeight: "600",
														}}
													>
														&#62;
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="expansion_rectangle_parent_container_first">
										<div
											className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
											style={{ padding: "0" }}
										>
											<div className="expansion_rectangle">
												<div className="ethos-bitmap">
													<img
														src={require("../assets/Entre_DNA.svg")}
														alt="growth"
													/>
												</div>
												<div className="ethos-title ethos_seperate_component_data">
													Entrepreneurial <br />
													DNA
												</div>
												<div className="ethos-content">
													KNOW MORE
													<span
														style={{
															paddingLeft: "20px",
															fontWeight: "600",
														}}
													>
														&#62;
													</span>
												</div>
											</div>
										</div>

										<div
											className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
											style={{ padding: "0" }}
										>
											<div className="expansion_rectangle">
												<div className="ethos-bitmap">
													<img
														src={require("../assets/Empathy.svg")}
														alt="growth"
													/>
												</div>
												<div className="ethos-title ethos_seperate_component_data">
													Empathy
												</div>
												<div
													className="ethos-content"
													style={{
														paddingTop: "35px",
													}}
												>
													KNOW MORE
													<span
														style={{
															paddingLeft: "20px",
															fontWeight: "600",
														}}
													>
														&#62;
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>*/}

					<div className="row">
						<div className="container">
							<div className="people_flex_container mt-4">
								<div className="row">
									<div
										className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
										style={{ padding: "0" }}
									>
										<div
											className="expansion_rectangle"
											onClick={this.expansionDivToogle}
										>
											<div className="ethos-bitmap">
												<img
													src={require("../assets/Expansion_Expertise.svg")}
													alt="growth"
												/>
											</div>
											<div className="ethos-title ethos_seperate_component_data">
												Expansion <br />
												Expertise
											</div>
											<div className="ethos-content">
												KNOW MORE
												<span
													style={{
														paddingLeft: "20px",
														fontWeight: "600",
													}}
												>
													&#62;
												</span>
											</div>
										</div>
									</div>
									<div
										className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
										style={{ padding: "0" }}
									>
										<div
											className="expansion_rectangle"
											onClick={this.executionDivToogle}
										>
											<div className="ethos-bitmap">
												<img
													src={require("../assets/Executive_Networks.svg")}
													alt="growth"
												/>
											</div>
											<div className="ethos-title ethos_seperate_component_data">
												Executive <br />
												Networks
											</div>
											<div className="ethos-content">
												KNOW MORE
												<span
													style={{
														paddingLeft: "20px",
														fontWeight: "600",
													}}
												>
													&#62;
												</span>
											</div>
										</div>
									</div>
								</div>

								{/**************NEW DIV*************/}
								{/*{this.state.isExpansionShow ? (
									<Animated
										animationIn="fadeInLeft"
										animationOut="fadeOutLeft"
										animationInDuration={1000}
										animationOutDuration={1000}
										isVisible={this.state.isGrowthDivShow}
									>
										<div className="row">
											<div
												className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
												style={{ padding: "0" }}
											>
												<div
													className="new_expansion_rectangle"
													onClick={
														this.expansionDivToogle
													}
												>
													<div className="ethos-bitmap">
														<img
															src={require("../assets/Expansion_Expertise.svg")}
															alt="growth"
														/>
													</div>
													<div className="ethos-title ethos_seperate_component_data">
														Expansion <br />
														Expertise
													</div>
													<div className="ethos-content">
														KNOW MORE
														<span
															style={{
																paddingLeft:
																	"20px",
																fontWeight:
																	"600",
															}}
														>
															&#62;
														</span>
													</div>
												</div>
											</div>
										</div>
									</Animated>
								) : null}*/}

								{/*************END NEW DIV************/}

								<div className="row">
									<div
										className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
										style={{ padding: "0" }}
									>
										<div
											className="expansion_rectangle"
											onClick={this.entreDivToogle}
										>
											<div className="ethos-bitmap">
												<img
													src={require("../assets/Entre_DNA.svg")}
													alt="growth"
												/>
											</div>
											<div className="ethos-title ethos_seperate_component_data">
												Entrepreneurial <br />
												DNA
											</div>
											<div className="ethos-content">
												KNOW MORE
												<span
													style={{
														paddingLeft: "20px",
														fontWeight: "600",
													}}
												>
													&#62;
												</span>
											</div>
										</div>
									</div>
									<div
										className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
										style={{ padding: "0" }}
									>
										<div
											className="expansion_rectangle"
											onClick={this.empathyDivToogle}
										>
											<div className="ethos-bitmap">
												<img
													src={require("../assets/Empathy.svg")}
													alt="growth"
												/>
											</div>
											<div className="ethos-title ethos_seperate_component_data">
												Empathy
											</div>
											<div
												className="ethos-content"
												style={{
													paddingTop: "25px",
												}}
											>
												KNOW MORE
												<span
													style={{
														paddingLeft: "20px",
														fontWeight: "600",
													}}
												>
													&#62;
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							{this.state.isExpansionShow ? (
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutLeft"
									animationInDuration={1000}
									animationOutDuration={1000}
									isVisible={this.state.isExpansionShow}
								>
									<div className="container">
										<div className="people_flex_container mt-4 new_flex_container_display">
											<div className="row">
												<div
													className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
													style={{ padding: "0" }}
												>
													<div className="new_expansion_rectangle">
														<div className="row">
															<div className="col-12">
																<div className="ethos-title ethos_seperate_component_data">
																	Expansion
																	Expertise
																	<span
																		onClick={
																			this
																				.closeHandler
																		}
																	>
																		<i
																			className="lni lni-close"
																			style={{
																				float:
																					"right",
																			}}
																		/>
																	</span>
																</div>
																<p className="mt-5">
																	Successfully
																	scaled
																	multiple
																	tech
																	businesses
																	up to past
																	$100M+ in
																	ARR (eg.
																	LinkedIn,
																	Freshworks,
																	Motorola).
																</p>
																<p>
																	Successfully
																	scaled
																	multiple
																	tech
																	businesses
																	up to past
																	$100M+ in
																	ARR (eg.
																	LinkedIn,
																	Freshworks,
																	Motorola)
																	Active
																	know-how of
																	farming to
																	grow
																	existing
																	customer
																	revenue with
																	proof points
																	of very
																	healthy net
																	expansion
																	rates at
																	120-130%
																</p>
																<p>
																	Learnings
																	from prior
																	marketing &
																	product
																	experiments
																	(geo-specific)
																	that helped
																	us to foster
																	sustainable
																	growth
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/**************NEW DIV*************/}
											{/*{this.state.isExpansionShow ? (
									<Animated
										animationIn="fadeInLeft"
										animationOut="fadeOutLeft"
										animationInDuration={1000}
										animationOutDuration={1000}
										isVisible={this.state.isGrowthDivShow}
									>
										<div className="row">
											<div
												className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
												style={{ padding: "0" }}
											>
												<div
													className="new_expansion_rectangle"
													onClick={
														this.expansionDivToogle
													}
												>
													<div className="ethos-bitmap">
														<img
															src={require("../assets/Expansion_Expertise.svg")}
															alt="growth"
														/>
													</div>
													<div className="ethos-title ethos_seperate_component_data">
														Expansion <br />
														Expertise
													</div>
													<div className="ethos-content">
														KNOW MORE
														<span
															style={{
																paddingLeft:
																	"20px",
																fontWeight:
																	"600",
															}}
														>
															&#62;
														</span>
													</div>
												</div>
											</div>
										</div>
									</Animated>
								) : null}*/}

											{/*************END NEW DIV************/}
										</div>
									</div>
								</Animated>
							) : null}

							{this.state.isExecutionShow ? (
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutLeft"
									animationInDuration={1000}
									animationOutDuration={1000}
									isVisible={this.state.isExecutionShow}
								>
									<div className="container">
										<div className="people_flex_container mt-4 new_flex_container_display">
											<div className="row">
												<div
													className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
													style={{ padding: "0" }}
												>
													<div className="new_expansion_rectangle">
														<div className="row">
															<div className="col-12">
																<div className="ethos-title ethos_seperate_component_data">
																	Executive
																	Networks
																	<span
																		onClick={
																			this
																				.closeHandler
																		}
																	>
																		<i
																			className="lni lni-close"
																			style={{
																				float:
																					"right",
																			}}
																		/>
																	</span>
																</div>
																<p className="mt-5">
																	Strong
																	existing
																	C-level
																	relationships
																	across geos
																	& industries
																	have led to
																	successful
																	business
																	closed for
																	our
																	portfolio
																	companies.
																</p>
																<p>
																	Proven
																	ability to
																	reach
																	virtually
																	any leader
																	by tapping
																	into
																	networks
																	that are
																	very
																	effective
																	globally
																	(eg.
																	McKinsey,
																	IIT, MIT,
																	Kellogg, H2,
																	TIE).
																</p>
																<p>
																	Track record
																	of hiring
																	effective
																	global
																	leaders;
																	have an
																	understanding
																	of the
																	nuances
																	required for
																	success in
																	different
																	markets &
																	stages of
																	growth.
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/**************NEW DIV*************/}
											{/*{this.state.isExpansionShow ? (
									<Animated
										animationIn="fadeInLeft"
										animationOut="fadeOutLeft"
										animationInDuration={1000}
										animationOutDuration={1000}
										isVisible={this.state.isGrowthDivShow}
									>
										<div className="row">
											<div
												className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
												style={{ padding: "0" }}
											>
												<div
													className="new_expansion_rectangle"
													onClick={
														this.expansionDivToogle
													}
												>
													<div className="ethos-bitmap">
														<img
															src={require("../assets/Expansion_Expertise.svg")}
															alt="growth"
														/>
													</div>
													<div className="ethos-title ethos_seperate_component_data">
														Expansion <br />
														Expertise
													</div>
													<div className="ethos-content">
														KNOW MORE
														<span
															style={{
																paddingLeft:
																	"20px",
																fontWeight:
																	"600",
															}}
														>
															&#62;
														</span>
													</div>
												</div>
											</div>
										</div>
									</Animated>
								) : null}*/}

											{/*************END NEW DIV************/}
										</div>
									</div>
								</Animated>
							) : null}

							{this.state.isEntreShow ? (
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutLeft"
									animationInDuration={1000}
									animationOutDuration={1000}
									isVisible={this.state.isEntreShow}
								>
									<div className="container">
										<div className="people_flex_container mt-4 new_flex_container_display">
											<div className="row">
												<div
													className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
													style={{ padding: "0" }}
												>
													<div className="new_expansion_rectangle">
														<div className="row">
															<div className="col-12">
																<div className="ethos-title ethos_seperate_component_data">
																	Entrepreneurial
																	DNA
																	<span
																		onClick={
																			this
																				.closeHandler
																		}
																	>
																		<i
																			className="lni lni-close"
																			style={{
																				float:
																					"right",
																			}}
																		/>
																	</span>
																</div>
																<p className="mt-5">
																	Strong
																	action bias
																	with a
																	willingness
																	to roll-up
																	our sleeves
																	& work for
																	you.
																</p>
																<p>
																	Belief in
																	learning
																	through
																	quick
																	iterations &
																	controlled
																	experiments.
																</p>
																<p>
																	Very healthy
																	NAV growth
																	within just
																	the first
																	six months
																	of engaging
																	with our
																	portfolio
																	companies
																	indicates we
																	are adding
																	value.{" "}
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/**************NEW DIV*************/}
											{/*{this.state.isExpansionShow ? (
									<Animated
										animationIn="fadeInLeft"
										animationOut="fadeOutLeft"
										animationInDuration={1000}
										animationOutDuration={1000}
										isVisible={this.state.isGrowthDivShow}
									>
										<div className="row">
											<div
												className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
												style={{ padding: "0" }}
											>
												<div
													className="new_expansion_rectangle"
													onClick={
														this.expansionDivToogle
													}
												>
													<div className="ethos-bitmap">
														<img
															src={require("../assets/Expansion_Expertise.svg")}
															alt="growth"
														/>
													</div>
													<div className="ethos-title ethos_seperate_component_data">
														Expansion <br />
														Expertise
													</div>
													<div className="ethos-content">
														KNOW MORE
														<span
															style={{
																paddingLeft:
																	"20px",
																fontWeight:
																	"600",
															}}
														>
															&#62;
														</span>
													</div>
												</div>
											</div>
										</div>
									</Animated>
								) : null}*/}

											{/*************END NEW DIV************/}
										</div>
									</div>
								</Animated>
							) : null}

							{this.state.isEmpathy ? (
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutLeft"
									animationInDuration={1000}
									animationOutDuration={1000}
									isVisible={this.state.isEmpathy}
								>
									<div className="container">
										<div className="people_flex_container mt-4 new_flex_container_display">
											<div className="row">
												<div
													className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
													style={{ padding: "0" }}
												>
													<div className="new_expansion_rectangle">
														<div className="row">
															<div className="col-12">
																<div className="ethos-title ethos_seperate_component_data">
																	Empathy
																	<span
																		onClick={
																			this
																				.closeHandler
																		}
																	>
																		<i
																			className="lni lni-close"
																			style={{
																				float:
																					"right",
																			}}
																		/>
																	</span>
																</div>
																<p className="mt-5">
																	We have
																	(literally!)
																	walked in
																	your shoes
																	before, in
																	various
																	leadership
																	roles from
																	CEO to
																	functional
																	leaders and
																	in different
																	geos.
																</p>
																<p>
																	Active
																	followership
																	amongst our
																	previous
																	team-members
																	showcases
																	our priority
																	on treating
																	everyone
																	with respect
																	& adding
																	value to
																	their
																	careers.
																</p>
																<p>
																	Clear
																	delineation
																	between our
																	dual roles
																	as Board
																	member &
																	active
																	partner
																	operating in
																	the trenches
																	with you
																	calling the
																	shots.
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>

											{/**************NEW DIV*************/}
											{/*{this.state.isExpansionShow ? (
									<Animated
										animationIn="fadeInLeft"
										animationOut="fadeOutLeft"
										animationInDuration={1000}
										animationOutDuration={1000}
										isVisible={this.state.isGrowthDivShow}
									>
										<div className="row">
											<div
												className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
												style={{ padding: "0" }}
											>
												<div
													className="new_expansion_rectangle"
													onClick={
														this.expansionDivToogle
													}
												>
													<div className="ethos-bitmap">
														<img
															src={require("../assets/Expansion_Expertise.svg")}
															alt="growth"
														/>
													</div>
													<div className="ethos-title ethos_seperate_component_data">
														Expansion <br />
														Expertise
													</div>
													<div className="ethos-content">
														KNOW MORE
														<span
															style={{
																paddingLeft:
																	"20px",
																fontWeight:
																	"600",
															}}
														>
															&#62;
														</span>
													</div>
												</div>
											</div>
										</div>
									</Animated>
								) : null}*/}

											{/*************END NEW DIV************/}
										</div>
									</div>
								</Animated>
							) : null}
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="ethos_btn_center mt-5">
									<center>
										<Link to="/portfolio">
											<button
												type="button"
												className="btn btn-outline-primary ethos_investment_portfolio_end_btn_spec"
											>
												<div className="flex_btn">
													<div>
														OUR INVESTMENT FOCUS &
														PORTFOLIO{" "}
													</div>
													<div>
														<span>
															{" "}
															<i className="lni lni-chevron-right" />
														</span>
													</div>
												</div>
											</button>
										</Link>
									</center>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default Ethos;
