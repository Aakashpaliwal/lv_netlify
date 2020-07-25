import React, { Fragment, Component } from "react";
import "./portfolio.css";
import { Animated } from "react-animated-css";

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
								<center>FOCUS & PORTFOLIO</center>
							</h1>
							<div className="home-content d-inline-flex mt-5">
								<p className="sub_section portfolio_sub_section">
									Here is our focus underlying all the
									brilliant tech-startup that we are serving
									today to build the next gen B2B Products.
								</p>
							</div>
							<div className="focus-content mt-2 portfolio_banner_content">
								<span className="light_strong">
									$15 Million
								</span>{" "}
								+ in Annual Recurring Revenues
								<br />
								Strong
								<span className="light_strong">
									{" "}
									Tech-Led B2B & SaaS
								</span>{" "}
								Companies
								<br />
								Open to{" "}
								<span className="light_strong">
									Active Partnering
								</span>
								<br />
								Core Operations in
								<span className="light_strong">
									{" "}
									India/ South East Asia
								</span>
								<br />
							</div>
						</div>
					</div>

					<div
						className="col-sm-12 text-center arrow bounce"
						style={{ position: "absolute" }}
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

					<div className="row">
						<div className="container">
							<div className="people_flex_container mt-4">
								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											onClick={this.zenotiToogle}
										>
											<a
												href="https://www.zenoti.com/"
												target="_blank"
											>
												<img
													src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Zenoti.svg"
													alt="Zenoti"
													className="displayed"
												/>
											</a>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											onClick={this.capillaryToogle}
										>
											<a
												href="https://www.capillarytech.com/"
												target="_blank"
											>
												<img
													src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Capillary.svg"
													alt="Capillary"
												/>
											</a>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											onClick={this.carmnetToogle}
										>
											<a
												href="https://www.crmnext.com/"
												target="_blank"
											>
												<img
													src="https://s3.ap-south-1.amazonaws.com/avataar.vc/CRM.svg"
													alt="CRM"
													className="crm_img_class_margin"
												/>
											</a>
										</div>
									</div>
								</div>

								<div className="row mt-3">
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											onClick={this.apnomicToogle}
										>
											<a
												href="http://appnomic.com/"
												target="_blank"
											>
												<img
													src="https://s3.ap-south-1.amazonaws.com/avataar.vc/appnomic.png"
													alt="appnomic"
													className="appnomic-img img-fluid"
												/>
											</a>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											onClick={this.elasticToogle}
										>
											<a
												href="https://www.elastic.run/"
												target="_blank"
											>
												<img
													src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Elastic_Run.svg"
													alt="Elastic_Run"
													className="img-fluid"
												/>
											</a>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div
											className="portfolio_rectangle"
											onClick={this.manhattanToggle}
										>
											<a
												href="https://www.manthan.com/"
												target="_blank"
											>
												<img
													src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Manthan.svg"
													alt="Manthan"
													className="manhatan_img_margin"
												/>
											</a>
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
								<button
									type="button"
									className="btn btn-outline-primary"
								>
									MEET THE SCALE-UP TEAM
									<span>
										{" "}
										<i className="fas fa-angle-right"></i>
									</span>
								</button>
							</center>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default Portfolio;
