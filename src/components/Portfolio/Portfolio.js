import React, { Fragment, Component } from "react";
import "./portfolio.css";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isZenotiShow: false,
			isCapillaryShow: false,
			isCarmnetShow: false,
			isApnomicShow: false,
			isElasticShow: false,
			isManhatanShow: false,
		};
	}

	zenotiToogle = () => {
		this.setState({
			isZenotiShow: true,
		});
	};

	capillaryToogle = () => {
		this.setState({
			isCapillaryShow: true,
		});
	};

	carmnetToogle = () => {
		this.setState({
			isCarmnetShow: true,
		});
	};

	apnomicToogle = () => {
		this.setState({
			isApnomicShow: true,
		});
	};

	elasticToogle = () => {
		this.setState({
			isElasticShow: true,
		});
	};

	manhattanToggle = () => {
		this.setState({
			isManhatanShow: true,
		});
	};

	closeHandler = () => {
		this.setState({
			isZenotiShow: false,
			isCapillaryShow: false,
			isCarmnetShow: false,
			isApnomicShow: false,
			isElasticShow: false,
			isManhatanShow: false,
		});
	};

	render() {
		return (
			<Fragment>
				<div className="background_image_portfolio">
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
							<h1 className="ethos_banner_heading">
								FOCUS & PORTFOLIO
							</h1>
							<div className="home-content mt-5">
								<p className="sub_section portfolio_sub_section">
									Here is our focus underlying all the
									brilliant tech-startup that we are serving
									today to build the next gen B2B Products.
									<br />
									<div className="portfolio_banner_content">
										<span className="dot"></span>
										$15 Million + in Annual Recurring
										Revenues
										<br />
										<span className="dot"></span>
										Strong Tech-Led B2B & SaaS Companies
										<br />
										<span className="dot"></span>
										Open to Active Partnering
										<br />
										<span className="dot"></span>
										Core Operations in India/ South East
										Asia
									</div>
								</p>
							</div>
							{/*<div className="focus-content mt-2 portfolio_banner_content">*/}
							{/*<center>
									<ul>
										<li>
											$15 Million + in Annual Recurring
											Revenues
										</li>
										<li>Strong Tech-Led B2B & SaaS</li>
										<li>Open to Active Partnering</li>
										<li>
											Core Operations in India/ South East
											Asia
										</li>
									</ul>
								</center>*/}
							{/*<span className="dot"></span>
								$15 Million + in Annual Recurring Revenues
								<br />
								<span className="dot"></span>
								Strong Tech-Led B2B & SaaS Companies
								<br />
								<span className="dot"></span>
								Open to Active Partnering
								<br />
								<span className="dot"></span>
								Core Operations in India/ South East Asia
							</div>*/}
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
					className="row"
					id="ethos"
					style={{ height: "20px" }}
				></div>
				<div
					className="ethos"
					data-aos="fade-up"
					data-aos-duration="100"
				>
					<div className="ethos-framework-para">
						<center>
							<p>OUR PORTFOLIO COMPANIES</p>
						</center>
					</div>
					<div className="portfolio-subheading col-sm-12 mt-3 text-center">
						<p>
							Meet the mountaineers that are scaling new peaks &
							building the next-generation of global businesses.
							Our collective success comes from backing these
							brilliant founders that have managed to build
							meaningful sized businesses despite all odds.{" "}
						</p>
					</div>

					<div className="">
						<div className="container">
							<div className="people_flex_container mt-4">
								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											// onClick={this.zenotiToogle}
											data-toggle="modal"
											data-target="#zenotiModal"
										>
											<img
												src={require("../assets/Zenoti.png")}
												alt="Zenoti"
												className="displayed img-fluid"
											/>
										</div>
										<div
											class="modal fade"
											id="zenotiModal"
											tabindex="-1"
											role="dialog"
											aria-labelledby="exampleModalLabel"
											aria-hidden="true"
										>
											<div
												class="modal-dialog modal-lg team_modal_bg"
												role="document"
											>
												<div class="modal-content portfolio_modal_content">
													<div className="row">
														<div className="container">
															<div class="modal-header portfolio_modal_header">
																<i
																	className="lni lni-close"
																	data-dismiss="modal"
																></i>
															</div>
														</div>
													</div>
													<div class="modal-body">
														<div className="new_portfolio_content">
															<div className="col-12">
																<img
																	src={require("../assets/Zenoti.png")}
																	alt="Zenoti"
																	className="displayed img-fluid"
																/>
															</div>
															<div clasasName="col-12">
																<p className="mt-5">
																	Having
																	experienced
																	first-hand
																	the
																	difficulty
																	in running a
																	chain of
																	spa, salon
																	and fitness
																	centers and
																	not finding
																	software
																	that was
																	affordable,
																	reliable,
																	easy to use,
																	and
																	supported
																	the whole
																	ecosystem
																	with a
																	multi-location
																	chain of a
																	thriving spa
																	and salon
																	business,
																	Zenoti was
																	founded in
																	2010. Today,
																	Zenoti is
																	used by over
																	5,000
																	businesses
																	in 32
																	countries.
																	<br />
																	<div className="website_url_container">
																		<p>
																			<strong>
																				Website
																				:{" "}
																			</strong>
																			<a
																				href="{https://www.zenoti.com/}"
																				target="_blank"
																			>
																				https://www.zenoti.com/
																			</a>
																		</p>
																	</div>
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											// onClick={this.capillaryToogle}
											data-toggle="modal"
											data-target="#capillaryModal"
										>
											<img
												src={require("../assets/Capillary.png")}
												alt="Capillary"
												className="img-fluid cap_img"
											/>
										</div>
										<div
											class="modal fade"
											id="capillaryModal"
											tabindex="-1"
											role="dialog"
											aria-labelledby="exampleModalLabel"
											aria-hidden="true"
										>
											<div
												class="modal-dialog modal-lg team_modal_bg"
												role="document"
											>
												<div class="modal-content portfolio_modal_content">
													<div className="row">
														<div className="container">
															<div class="modal-header portfolio_modal_header">
																<i
																	className="lni lni-close"
																	data-dismiss="modal"
																></i>
															</div>
														</div>
													</div>
													<div class="modal-body">
														<div className="new_portfolio_content">
															<div className="col-12">
																<img
																	src={require("../assets/Capillary.png")}
																	alt="Capillary"
																	className="img-fluid"
																/>
															</div>
															<div clasasName="col-12">
																<p className="mt-5">
																	CAPILLARY
																	Founded in
																	2008,
																	Capillary
																	has been at
																	the
																	forefront of
																	the constant
																	evolution in
																	consumer
																	experiences.
																	When
																	consumer
																	brands faced
																	the biggest
																	challenges
																	due to the
																	inability to
																	capture
																	customer
																	data,
																	identify
																	consumers
																	visiting
																	their stores
																	and to
																	communicate
																	effectively
																	with them,
																	the Idea of
																	Capillary
																	Tech was
																	conceptualised.
																	Capillary’s
																	products
																	help brands
																	get a 360°
																	single view
																	of customer
																	and
																	inventory
																	across all
																	channels, so
																	they could
																	stitch
																	together
																	previously
																	siloed
																	customer
																	journeys
																	with data,
																	and build a
																	unified,
																	cross
																	channel
																	strategies
																	that deliver
																	a
																	consistent,
																	omnichannel
																	experience.
																</p>
																<p>
																	In this era
																	of
																	Artificial
																	Intelligence,
																	they
																	continue to
																	innovate and
																	find ways to
																	help brands
																	stay
																	consumer
																	ready and
																	deliver
																	newer,
																	better
																	experiences
																	into the
																	future.
																	<br />
																	<div className="website_url_container">
																		<p>
																			<strong>
																				Website
																				:{" "}
																			</strong>
																			<a
																				href="{https://www.capillarytech.com/}"
																				target="_blank"
																			>
																				https://www.capillarytech.com/
																			</a>
																		</p>
																	</div>
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											// onClick={this.carmnetToogle}
											data-toggle="modal"
											data-target="#crmModal"
										>
											<img
												src={require("../assets/CRM_Next.png")}
												alt="CRM"
												className="crm_img_class_margin img-fluid"
											/>
										</div>
										<div
											class="modal fade"
											id="crmModal"
											tabindex="-1"
											role="dialog"
											aria-labelledby="exampleModalLabel"
											aria-hidden="true"
										>
											<div
												class="modal-dialog modal-lg team_modal_bg"
												role="document"
											>
												<div class="modal-content portfolio_modal_content">
													<div className="row">
														<div className="container">
															<div class="modal-header portfolio_modal_header">
																<i
																	className="lni lni-close"
																	data-dismiss="modal"
																></i>
															</div>
														</div>
													</div>
													<div class="modal-body">
														<div className="new_portfolio_content">
															<div className="col-12">
																<img
																	src={require("../assets/CRM_Next.png")}
																	alt="CRM"
																	className="crm_img_class_margin"
																/>
															</div>
															<div clasasName="col-12">
																<p className="mt-5">
																	CRM NEXT
																	Founded in
																	2001,
																	CRMNEXT
																	takes it
																	from where
																	traditional
																	CRMs leave
																	off. From
																	Fortune 500
																	to
																	start-ups,
																	businesses
																	across nine
																	verticals
																	have built
																	profitable
																	customer
																	relationships
																	via CRMNEXT.
																	It
																	eliminates
																	the
																	artificial
																	barriers
																	between
																	human and
																	digital
																	channels,
																	enabling
																	world-class,
																	omni-channel
																	customer
																	interactions
																	from a
																	single,
																	unified
																	platform.
																	With more
																	than a
																	million
																	financial
																	service
																	associates
																	and a
																	billion
																	customers
																	supported by
																	the platform
																	globally,
																	CRMNEXT
																	effectively
																	recalibrates
																	banks’
																	potential to
																	grow
																	engagement,
																	drive
																	profitability
																	and deliver
																	innovation.
																	<br />
																	<div className="website_url_container">
																		<p>
																			<strong>
																				Website
																				:{" "}
																			</strong>
																			<a
																				href="{https://www.crmnext.com/}"
																				target="_blank"
																			>
																				https://www.crmnext.com/
																			</a>
																		</p>
																	</div>
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="row mt-3">
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											// onClick={this.apnomicToogle}
											data-toggle="modal"
											data-target="#appnomicModal"
										>
											<img
												src={require("../assets/APPNOmic.png")}
												alt="appnomic"
												className="appnomic-img img-fluid"
											/>
										</div>
										<div
											class="modal fade"
											id="appnomicModal"
											tabindex="-1"
											role="dialog"
											aria-labelledby="exampleModalLabel"
											aria-hidden="true"
										>
											<div
												class="modal-dialog modal-lg team_modal_bg"
												role="document"
											>
												<div class="modal-content portfolio_modal_content">
													<div className="row">
														<div className="container">
															<div class="modal-header portfolio_modal_header">
																<i
																	className="lni lni-close"
																	data-dismiss="modal"
																></i>
															</div>
														</div>
													</div>
													<div class="modal-body">
														<div className="new_portfolio_content">
															<div className="col-12">
																<img
																	src={require("../assets/APPNOmic.png")}
																	alt="appnomic"
																	className="img-fluid"
																/>
															</div>
															<div clasasName="col-12">
																<p className="mt-5">
																	APPNOMIC
																	Founded in
																	2001,
																	CRMNEXT
																	takes it
																	from where
																	traditional
																	CRMs leave
																	off. From
																	Fortune 500
																	to
																	start-ups,
																	businesses
																	across nine
																	verticals
																	have built
																	profitable
																	customer
																	relationships
																	via CRMNEXT.
																	It
																	eliminates
																	the
																	artificial
																	barriers
																	between
																	human and
																	digital
																	channels,
																	enabling
																	world-class,
																	omni-channel
																	customer
																	interactions
																	from a
																	single,
																	unified
																	platform.
																	With more
																	than a
																	million
																	financial
																	service
																	associates
																	and a
																	billion
																	customers
																	supported by
																	the platform
																	globally,
																	CRMNEXT
																	effectively
																	recalibrates
																	banks’
																	potential to
																	grow
																	engagement,
																	drive
																	profitability
																	and deliver
																	innovation.
																	<br />
																	<div className="website_url_container">
																		<p>
																			<strong>
																				Website
																				:{" "}
																			</strong>
																			<a
																				href="{http://appnomic.com/}"
																				target="_blank"
																			>
																				http://appnomic.com/
																			</a>
																		</p>
																	</div>
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>{" "}
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											// onClick={this.elasticToogle}
											data-toggle="modal"
											data-target="#elasticModal"
										>
											<img
												src={require("../assets/Elastic_Run.png")}
												alt="Elastic_Run"
												className="img-fluid elastic_run_image"
											/>
										</div>
										<div
											class="modal fade"
											id="elasticModal"
											tabindex="-1"
											role="dialog"
											aria-labelledby="exampleModalLabel"
											aria-hidden="true"
										>
											<div
												class="modal-dialog modal-lg team_modal_bg"
												role="document"
											>
												<div class="modal-content portfolio_modal_content">
													<div className="row">
														<div className="container">
															<div class="modal-header portfolio_modal_header">
																<i
																	className="lni lni-close"
																	data-dismiss="modal"
																></i>
															</div>
														</div>
													</div>
													<div class="modal-body">
														<div className="new_portfolio_content">
															<div className="col-12">
																<img
																	src={require("../assets/Elastic_Run.png")}
																	alt="Elastic_Run"
																	className="img-fluid"
																/>
															</div>
															<div clasasName="col-12">
																<p className="mt-5">
																	ELASTIC RUN
																	Founded in
																	2016, by
																	veterans in
																	the
																	Logistics
																	Industry,
																	ElasticRun
																	is an
																	aggregated
																	variable
																	capacity
																	transportation
																	network
																	built using
																	idle
																	transportation
																	and
																	logistics
																	capacities
																	from large
																	number of
																	dispersed
																	entrepreneurs
																	and ensure
																	distribution
																	across
																	sectors and
																	geographies
																	ensuring a
																	last-Mile
																	connectivity.
																	https://www.elastic.run/
																	<br />
																	<div className="website_url_container">
																		<p>
																			<strong>
																				Website
																				:{" "}
																			</strong>
																			<a
																				href="{https://www.elastic.run/}"
																				target="_blank"
																			>
																				https://www.elastic.run/
																			</a>
																		</p>
																	</div>
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											// onClick={this.manhattanToggle}
											data-toggle="modal"
											data-target="#manhattanModal"
										>
											<img
												src={require("../assets/Manthan.png")}
												alt="Manthan"
												className="manhatan_img_margin img-fluid"
											/>
										</div>
										<div
											class="modal fade"
											id="manhattanModal"
											tabindex="-1"
											role="dialog"
											aria-labelledby="exampleModalLabel"
											aria-hidden="true"
										>
											<div
												class="modal-dialog modal-lg team_modal_bg"
												role="document"
											>
												<div class="modal-content portfolio_modal_content">
													<div className="row">
														<div className="container">
															<div class="modal-header portfolio_modal_header">
																<i
																	className="lni lni-close"
																	data-dismiss="modal"
																></i>
															</div>
														</div>
													</div>
													<div class="modal-body">
														<div className="new_portfolio_content">
															<div className="col-12">
																<img
																	src={require("../assets/Manthan.png")}
																	alt="Manthan"
																	className="manhatan_img_margin"
																/>
															</div>
															<div clasasName="col-12">
																<p className="mt-5">
																	MANTHAN
																	Founded in
																	2003,
																	Manthan’s
																	missionis to
																	build
																	sophisticated
																	analytics
																	products
																	intuitive
																	for customer
																	facing
																	businesses.
																	Their focus
																	is on AI, to
																	reimagine
																	how business
																	can
																	reimagine
																	their
																	relationship
																	with
																	customers in
																	a way our
																	human
																	capabilities
																	or
																	intelligence
																	never could.
																	Manthan
																	partners
																	with the
																	leading data
																	warehousing,
																	business
																	intelligence
																	and other
																	firms to
																	offer a
																	complete and
																	better
																	technology
																	proposition.
																	This makes
																	it easier
																	for
																	businesses
																	to adopt,
																	integrate
																	and
																	collaborate
																	on the
																	latest
																	technological
																	offerings.
																	www.manthan.com/
																	<br />
																	<div className="website_url_container">
																		<p>
																			<strong>
																				Website
																				:{" "}
																			</strong>
																			<a
																				href="{https://www.manthan.com/}"
																				target="_blank"
																			>
																				https://www.manthan.com/
																			</a>
																		</p>
																	</div>
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{this.state.isZenotiShow ? (
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutLeft"
									animationInDuration={1000}
									animationOutDuration={1000}
									isVisible={this.state.isZenotiShow}
								>
									<div className="container">
										<div className="people_flex_container mt-4 new_portfolio_flex_container_display">
											<div className="row">
												<div
													className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
													style={{ padding: "0" }}
												>
													<div className="new_portfolio_rectangle">
														<div className="row">
															<div className="col-12">
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
																	></i>
																</span>
															</div>
															<div className="new_portfolio_content">
																<div className="col-12">
																	<img
																		src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Zenoti.svg"
																		alt="Zenoti"
																		className="displayed"
																	/>
																</div>
																<div clasasName="col-12">
																	<p className="mt-5">
																		Having
																		experienced
																		first-hand
																		the
																		difficulty
																		in
																		running
																		a chain
																		of spa,
																		salon
																		and
																		fitness
																		centers
																		and not
																		finding
																		software
																		that was
																		affordable,
																		reliable,
																		easy to
																		use, and
																		supported
																		the
																		whole
																		ecosystem
																		with a
																		multi-location
																		chain of
																		a
																		thriving
																		spa and
																		salon
																		business,
																		Zenoti
																		was
																		founded
																		in 2010.
																		Today,
																		Zenoti
																		is used
																		by over
																		5,000
																		businesses
																		in 32
																		countries.
																		<br />
																		<strong>
																			Website
																			:{" "}
																		</strong>
																		<a
																			href="{https://www.zenoti.com/}"
																			target="_blank"
																		>
																			https://www.zenoti.com/
																		</a>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Animated>
							) : null}

							{/*CAPIILIARY*/}
							{this.state.isCapillaryShow ? (
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutLeft"
									animationInDuration={1000}
									animationOutDuration={1000}
									isVisible={this.state.isCapillaryShow}
								>
									<div className="container">
										<div className="people_flex_container mt-4 new_portfolio_flex_container_display">
											<div className="row">
												<div
													className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
													style={{ padding: "0" }}
												>
													<div className="new_portfolio_rectangle">
														<div className="row">
															<div className="col-12">
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
																	></i>
																</span>
															</div>
															<div className="new_portfolio_content">
																<div className="col-12">
																	<img
																		src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Capillary.svg"
																		alt="Capillary"
																	/>
																</div>
																<div clasasName="col-12">
																	<p className="mt-5">
																		CAPILLARY
																		Founded
																		in 2008,
																		Capillary
																		has been
																		at the
																		forefront
																		of the
																		constant
																		evolution
																		in
																		consumer
																		experiences.
																		When
																		consumer
																		brands
																		faced
																		the
																		biggest
																		challenges
																		due to
																		the
																		inability
																		to
																		capture
																		customer
																		data,
																		identify
																		consumers
																		visiting
																		their
																		stores
																		and to
																		communicate
																		effectively
																		with
																		them,
																		the Idea
																		of
																		Capillary
																		Tech was
																		conceptualised.
																		Capillary’s
																		products
																		help
																		brands
																		get a
																		360°
																		single
																		view of
																		customer
																		and
																		inventory
																		across
																		all
																		channels,
																		so they
																		could
																		stitch
																		together
																		previously
																		siloed
																		customer
																		journeys
																		with
																		data,
																		and
																		build a
																		unified,
																		cross
																		channel
																		strategies
																		that
																		deliver
																		a
																		consistent,
																		omnichannel
																		experience.
																	</p>
																	<p>
																		In this
																		era of
																		Artificial
																		Intelligence,
																		they
																		continue
																		to
																		innovate
																		and find
																		ways to
																		help
																		brands
																		stay
																		consumer
																		ready
																		and
																		deliver
																		newer,
																		better
																		experiences
																		into the
																		future.
																		<br />
																		<strong>
																			Website
																			:{" "}
																		</strong>
																		<a
																			href="{https://www.capillarytech.com/}"
																			target="_blank"
																		>
																			https://www.capillarytech.com/
																		</a>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Animated>
							) : null}

							{/*CARMNET*/}
							{this.state.isCarmnetShow ? (
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutLeft"
									animationInDuration={1000}
									animationOutDuration={1000}
									isVisible={this.state.isCarmnetShow}
								>
									<div className="container">
										<div className="people_flex_container mt-4 new_portfolio_flex_container_display">
											<div className="row">
												<div
													className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
													style={{ padding: "0" }}
												>
													<div className="new_portfolio_rectangle">
														<div className="row">
															<div className="col-12">
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
																	></i>
																</span>
															</div>
															<div className="new_portfolio_content">
																<div className="col-12">
																	<img
																		src="https://s3.ap-south-1.amazonaws.com/avataar.vc/CRM.svg"
																		alt="CRM"
																		className="crm_img_class_margin"
																	/>
																</div>
																<div clasasName="col-12">
																	<p className="mt-5">
																		CRM NEXT
																		Founded
																		in 2001,
																		CRMNEXT
																		takes it
																		from
																		where
																		traditional
																		CRMs
																		leave
																		off.
																		From
																		Fortune
																		500 to
																		start-ups,
																		businesses
																		across
																		nine
																		verticals
																		have
																		built
																		profitable
																		customer
																		relationships
																		via
																		CRMNEXT.
																		It
																		eliminates
																		the
																		artificial
																		barriers
																		between
																		human
																		and
																		digital
																		channels,
																		enabling
																		world-class,
																		omni-channel
																		customer
																		interactions
																		from a
																		single,
																		unified
																		platform.
																		With
																		more
																		than a
																		million
																		financial
																		service
																		associates
																		and a
																		billion
																		customers
																		supported
																		by the
																		platform
																		globally,
																		CRMNEXT
																		effectively
																		recalibrates
																		banks’
																		potential
																		to grow
																		engagement,
																		drive
																		profitability
																		and
																		deliver
																		innovation.
																		<br />
																		<strong>
																			Website
																			:{" "}
																		</strong>
																		<a
																			href="{https://www.crmnext.com/}"
																			target="_blank"
																		>
																			https://www.crmnext.com/
																		</a>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Animated>
							) : null}

							{/*APPNOMIC*/}
							{this.state.isApnomicShow ? (
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutLeft"
									animationInDuration={1000}
									animationOutDuration={1000}
									isVisible={this.state.isApnomicShow}
								>
									<div className="container">
										<div className="people_flex_container mt-4 new_portfolio_flex_container_display">
											<div className="row">
												<div
													className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
													style={{ padding: "0" }}
												>
													<div className="new_portfolio_rectangle">
														<div className="row">
															<div className="col-12">
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
																	></i>
																</span>
															</div>
															<div className="new_portfolio_content">
																<div className="col-12">
																	<img
																		src="https://s3.ap-south-1.amazonaws.com/avataar.vc/appnomic.png"
																		alt="appnomic"
																		className="appnomic-img img-fluid"
																	/>
																</div>
																<div clasasName="col-12">
																	<p className="mt-5">
																		APPNOMIC
																		Founded
																		in 2001,
																		CRMNEXT
																		takes it
																		from
																		where
																		traditional
																		CRMs
																		leave
																		off.
																		From
																		Fortune
																		500 to
																		start-ups,
																		businesses
																		across
																		nine
																		verticals
																		have
																		built
																		profitable
																		customer
																		relationships
																		via
																		CRMNEXT.
																		It
																		eliminates
																		the
																		artificial
																		barriers
																		between
																		human
																		and
																		digital
																		channels,
																		enabling
																		world-class,
																		omni-channel
																		customer
																		interactions
																		from a
																		single,
																		unified
																		platform.
																		With
																		more
																		than a
																		million
																		financial
																		service
																		associates
																		and a
																		billion
																		customers
																		supported
																		by the
																		platform
																		globally,
																		CRMNEXT
																		effectively
																		recalibrates
																		banks’
																		potential
																		to grow
																		engagement,
																		drive
																		profitability
																		and
																		deliver
																		innovation.
																		<br />
																		<strong>
																			Website
																			:{" "}
																		</strong>
																		<a
																			href="{http://appnomic.com/}"
																			target="_blank"
																		>
																			http://appnomic.com/
																		</a>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Animated>
							) : null}

							{/*ELASTCI RUN*/}
							{this.state.isElasticShow ? (
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutLeft"
									animationInDuration={1000}
									animationOutDuration={1000}
									isVisible={this.state.isElasticShow}
								>
									<div className="container">
										<div className="people_flex_container mt-4 new_portfolio_flex_container_display">
											<div className="row">
												<div
													className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
													style={{ padding: "0" }}
												>
													<div className="new_portfolio_rectangle">
														<div className="row">
															<div className="col-12">
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
																	></i>
																</span>
															</div>
															<div className="new_portfolio_content">
																<div className="col-12">
																	<img
																		src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Elastic_Run.svg"
																		alt="Elastic_Run"
																		className="img-fluid"
																	/>
																</div>
																<div clasasName="col-12">
																	<p className="mt-5">
																		APPNOMIC
																		Founded
																		in 2001,
																		CRMNEXT
																		takes it
																		from
																		where
																		traditional
																		CRMs
																		leave
																		off.
																		From
																		Fortune
																		500 to
																		start-ups,
																		businesses
																		across
																		nine
																		verticals
																		have
																		built
																		profitable
																		customer
																		relationships
																		via
																		CRMNEXT.
																		It
																		eliminates
																		the
																		artificial
																		barriers
																		between
																		human
																		and
																		digital
																		channels,
																		enabling
																		world-class,
																		omni-channel
																		customer
																		interactions
																		from a
																		single,
																		unified
																		platform.
																		With
																		more
																		than a
																		million
																		financial
																		service
																		associates
																		and a
																		billion
																		customers
																		supported
																		by the
																		platform
																		globally,
																		CRMNEXT
																		effectively
																		recalibrates
																		banks’
																		potential
																		to grow
																		engagement,
																		drive
																		profitability
																		and
																		deliver
																		innovation.
																		<br />
																		<strong>
																			Website
																			:{" "}
																		</strong>
																		<a
																			href="{https://www.elastic.run/}"
																			target="_blank"
																		>
																			https://www.elastic.run/
																		</a>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Animated>
							) : null}

							{/*MANHATAN*/}
							{this.state.isManhatanShow ? (
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutLeft"
									animationInDuration={1000}
									animationOutDuration={1000}
									isVisible={this.state.isManhatanShow}
								>
									<div className="container">
										<div className="people_flex_container mt-4 new_portfolio_flex_container_display">
											<div className="row">
												<div
													className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
													style={{ padding: "0" }}
												>
													<div className="new_portfolio_rectangle">
														<div className="row">
															<div className="col-12">
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
																	></i>
																</span>
															</div>
															<div className="new_portfolio_content">
																<div className="col-12">
																	<img
																		src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Manthan.svg"
																		alt="Manthan"
																		className="manhatan_img_margin"
																	/>
																</div>
																<div clasasName="col-12">
																	<p className="mt-5">
																		APPNOMIC
																		Founded
																		in 2001,
																		CRMNEXT
																		takes it
																		from
																		where
																		traditional
																		CRMs
																		leave
																		off.
																		From
																		Fortune
																		500 to
																		start-ups,
																		businesses
																		across
																		nine
																		verticals
																		have
																		built
																		profitable
																		customer
																		relationships
																		via
																		CRMNEXT.
																		It
																		eliminates
																		the
																		artificial
																		barriers
																		between
																		human
																		and
																		digital
																		channels,
																		enabling
																		world-class,
																		omni-channel
																		customer
																		interactions
																		from a
																		single,
																		unified
																		platform.
																		With
																		more
																		than a
																		million
																		financial
																		service
																		associates
																		and a
																		billion
																		customers
																		supported
																		by the
																		platform
																		globally,
																		CRMNEXT
																		effectively
																		recalibrates
																		banks’
																		potential
																		to grow
																		engagement,
																		drive
																		profitability
																		and
																		deliver
																		innovation.
																		<br />
																		<strong>
																			Website
																			:{" "}
																		</strong>
																		<a
																			href="{https://www.manthan.com/}"
																			target="_blank"
																		>
																			https://www.manthan.com/
																		</a>
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Animated>
							) : null}
						</div>
					</div>

					<div className="container">
						<div className="about_btn_center">
							<center>
								<Link to="/team">
									<button
										type="button"
										className="btn btn-outline-primary portfolio_meet_end_btn_spec"
									>
										MEET THE SCALE-UP TEAM
										<span>
											{" "}
											<i className="fas fa-angle-right"></i>
										</span>
									</button>
								</Link>
							</center>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default Portfolio;
