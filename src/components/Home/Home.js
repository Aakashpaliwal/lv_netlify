import React, { Fragment, Component } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isGrowthDivShow: false,
			isOperationDisShow: false,
			isConcentratedDivShow: false,
			options: {
				loop: true,
				margin: 10,
				nav: false,
				// responsive: {
				// 	0: {
				// 		items: 1,
				// 	},
				// 	600: {
				// 		items: 3,
				// 	},
				// 	1000: {
				// 		items: 4,
				// 	},
				// },
			},
			options2: {
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

	componentDidMount() {}

	growth_div_toggle = () => {
		this.setState({
			isGrowthDivShow: !this.state.isGrowthDivShow,
		});
	};
	operational_div_toggle = () => {
		this.setState({
			isOperationDisShow: !this.state.isOperationDisShow,
		});
	};
	concentrated_div_toggle = () => {
		this.setState({
			isConcentratedDivShow: !this.state.isConcentratedDivShow,
		});
	};

	closeHandler = () => {
		this.setState({
			isGrowthDivShow: false,
			isOperationDisShow: false,
			isConcentratedDivShow: false,
		});
	};

	render() {
		// var settings = {
		// 	dots: true,
		// 	infinite: true,
		// 	speed: 500,
		// 	slidesToShow: 3,
		// 	slidesToScroll: 1,
		// };
		return (
			<Fragment>
				<div className="background_image_home_page">
					<div className="container">
						<div
							className="row home_section custom_home_section"
							id="home"
							// data-aos="fade-up"
							// data-aos-duration="1500"
						>
							<div
								className="col-sm-4 banner_text banner_text_bg"
								data-aos="fade-up"
								data-aos-duration="1500"
							>
								<h1 className="page_heading">
									ACCELERATING TRANSFORMATION
								</h1>
								<div className="home-content d-inline-flex mt-5 mt-xs-0">
									<div className="sub_section home_content_subsection">
										<p>
											Avataar is a
											<span className="strong">
												&nbsp; growth stage, Operational
												fund
											</span>
											&nbsp; - partnering actively with
											brilliant regional Tech-led B2B &
											SaaS startups to Re-invent, Scale &
											Transform into successful, enduring
											global businesses.
										</p>
										<p>
											Together, we believe we can scale
											new peaks and transform India &
											South-East Asia into product
											nations, building for the world! So
											say hello to your scale-up sherpas
											and goodbye to tons of preparation
											for the next board meeting.
										</p>
									</div>
								</div>
								{/*<button className="btn btn-primary theme_button">PRESS RELEASE</button>*/}
							</div>
						</div>
					</div>

					<div
						className="col-sm-12 text-center arrow bounce mobile_bounce"
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
					className="ethos ethos_more_about_inverted_line"
					id="ethos"
					// data-aos="fade-up"
					// data-aos-duration="100"
				>
					<div className="ethos-heading">
						<center>
							<p>ETHOS</p>
						</center>
					</div>

					<div className="ethos-subheading col-sm-12 mt-3 home_ethos_subheading">
						<p>
							Avataar partners are not just VCs on your board, we
							are scale-up sherpas in action – labouring
							responsibilities, portering our learning and
							enabling the right global networks for our
							entrepreneurs.
						</p>

						<p className="ethos_subheading_second_para">
							Funding is only one part of your journey with us. We
							have orchestrated a paradigm shift in the
							Entrepreneur-VC equation with our{" "}
							<Link to="/ethos">
								<span style={{ color: "#4a90e2" }}>
									4E framework
								</span>
							</Link>{" "}
							and are core tenets to shape our collective
							long-term success. We are committed to :
						</p>
					</div>

					<div className="container">
						<div className="row">
							<div
								className="col-lg-4 col-md-4 col-sm-12 col-xs-12"
								style={{ padding: "0" }}
							>
								<div
									className="growth_reactangle mb-3"
									onClick={this.growth_div_toggle}
								>
									<div className="ethos-bitmap">
										<img
											src={require("../assets/portfolio.svg")}
											alt="growth"
										/>
									</div>
									<div className="ethos-title">
										GROWTH & EXPANSION FOCUS
									</div>
									<div className="ethos-content">
										KNOW MORE
										<i className="lni lni-chevron-right" />
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-4 col-sm-12 col-xs-12"
								style={{ padding: "0" }}
							>
								<div
									className="operational_reactangle mb-3"
									onClick={this.operational_div_toggle}
								>
									<div className="ethos-bitmap">
										<img
											src={require("../assets/operational.svg")}
											alt="operational"
										/>
									</div>

									<div className="ethos-title">
										OPERATIONAL <br />
										MINDSET
									</div>
									<div className="ethos-content">
										KNOW MORE
										<i className="lni lni-chevron-right" />
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-md-4 col-sm-12 col-xs-12"
								style={{ padding: "0" }}
							>
								<div
									className="concentrated_reactangle mb-3"
									onClick={this.concentrated_div_toggle}
								>
									<div className="ethos-bitmap">
										<img
											src={require("../assets/expansion.svg")}
											alt="concentrated"
										/>
									</div>

									<div className="ethos-title">
										CONCENTRATED <br />
										PORTFOLIO
									</div>
									<div className="ethos-content">
										KNOW MORE
										<i className="lni lni-chevron-right" />
									</div>
								</div>
							</div>
							{/*{this.state.isGrowthDivShow ? (
								<div
									className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div
										className="growth_reactangle_toogle_div mb-3"
										onClick={this.growth_div_toggle}
									>
										<div className="ethos-bitmap">
											<img
												src={require("../assets/portfolio.svg")}
												alt="growth"
											/>
										</div>
										<div className="ethos-title">
											GROWTH & EXPANSION FOCUS
										</div>
										<div className="ethos-content">
											KNOW MORE
											<i className="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							) : null}*/}
						</div>
					</div>

					{this.state.isGrowthDivShow ? (
						<div className="toggle_elements">
							<div className="container">
								<div className="row">
									<div
										className="col-12"
										style={{ padding: "0" }}
									>
										<div className="growth_reactangle_toogle_div mb-3">
											<Animated
												animationIn="fadeInLeft"
												animationOut="fadeOutLeft"
												animationInDuration={100}
												animationOutDuration={100}
												isVisible={
													this.state.isGrowthDivShow
												}
											>
												<div className="row">
													<div className="col-lg-2 col-md-2 col-sm-0 col-xs-0" />
													<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
														<span className="ethos-title">
															GROWTH & EXPANSION
															FOCUS
														</span>

														<i
															className="lni lni-close"
															onClick={
																this
																	.closeHandler
															}
														/>
													</div>
												</div>
												<div className="row mt-3">
													<div className="col-lg-2 col-md-2 col-sm-0 col-xs-0">
														<div className="ethos-bitmap">
															<img
																src={require("../assets/portfolio.svg")}
																alt="growth"
															/>
														</div>
													</div>

													<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
														<p>
															We provide growth
															capital of $10-30M
															so companies can
															focus on their core
															business, not
															fund-raising. Yet we
															know global
															expansion needs more
															than just funding.
															The strength of our
															networks in various
															geos will unlock the
															right formula for
															each market.
														</p>
														<p>
															Beyond our deep
															global connects, we
															enable entrepreneurs
															with hands-on
															support across all
															aspects of business
															building. From best
															practice,
															geo-specific GTM
															playbooks/
															frameworks (with
															active support from
															our fund’s BD team)
															to product tweaks,
															analytics,
															management &
															strategic
															recommendations
															(leveraging our fund
															BizOps team).{" "}
														</p>
													</div>
												</div>
											</Animated>
										</div>

										{/*<div className="ethos-bitmap">
													<img
														src={require("../assets/portfolio.svg")}
														alt="growth"
													/>
													<span
														onClick={
															this.closeHandler
														}
													>
														<i className="fas fa-times"></i>
													</span>
												</div>*/}
										{/*<div className="ethos-title">
													GROWTH & EXPANSION FOCUS
												</div>*/}
									</div>
								</div>
							</div>
						</div>
					) : null}

					{this.state.isOperationDisShow ? (
						<div className="toggle_elements">
							<div className="container">
								<div className="row">
									<div
										className="col-12"
										style={{ padding: "0" }}
									>
										<div className="operation_reactangle_toogle_div mb-3">
											<Animated
												animationIn="fadeInLeft"
												animationOut="fadeOutLeft"
												animationInDuration={100}
												animationOutDuration={100}
												isVisible={
													this.state
														.isOperationDisShow
												}
											>
												<div className="row">
													<div className="col-lg-2 col-md-2 col-sm-0 col-xs-0" />
													<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
														<span className="ethos-title">
															OPERATIONAL MINDSET
														</span>
														<i
															className="lni lni-close"
															onClick={
																this
																	.closeHandler
															}
														/>
													</div>
												</div>
												<div className="row mt-3">
													<div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
														<div className="ethos-bitmap">
															<img
																src={require("../assets/operational.svg")}
																alt="operational"
															/>
														</div>
													</div>

													<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
														<p>
															As execution
															partners with an
															action bias, we’re
															ready to roll up our
															sleeves for you. You
															still decide the
															direction; we bring
															timely learnings &
															relevant context
															from our past
															successes &
															failures. Partners
															at Avataar have had
															several operating
															stints as executives
															at marquee SaaS
															companies, with the
															largest ones
															reaching multiple
															billions of dollars
															of enterprise value.
														</p>
														<p>
															Coupled with the
															founder’s passion,
															these learnings help
															our companies
															accelerate together;
															and back companies
															in developing their
															own scale-up success
															formula from $10M to
															$100M in ARR.
														</p>
													</div>
												</div>
											</Animated>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : null}

					{this.state.isConcentratedDivShow ? (
						<div className="toggle_elements">
							<div className="container">
								<div className="row">
									<div
										className="col-12"
										style={{ padding: "0" }}
									>
										<div className="concentrated_reactangle_toogle_div mb-3">
											<Animated
												animationIn="fadeInLeft"
												animationOut="fadeOutLeft"
												animationInDuration={100}
												animationOutDuration={100}
												isVisible={
													this.state
														.isConcentratedDivShow
												}
											>
												<div className="row">
													<div className="col-lg-2 col-md-2 col-sm-0 col-xs-0" />
													<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
														<span className="ethos-title">
															CONCENTRATED
															PORTFOLIO
														</span>
														<i
															className="lni lni-close"
															onClick={
																this
																	.closeHandler
															}
														/>
													</div>
												</div>
												<div className="row mt-3">
													<div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
														<div className="ethos-bitmap">
															<img
																src={require("../assets/expansion.svg")}
																alt="concentrated"
															/>
														</div>
													</div>

													<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
														<p>
															Having been in your
															shoes before, we
															know focus matters &
															every company’s
															journey is unique.
															To maximize every
															partnership, we
															invest more in less.
														</p>
														<p>
															We commit only on
															8-10 investments per
															fund. We concentrate
															exclusively on
															Tech-led B2B & SaaS
															Companies where we
															have deep
															experience.
														</p>
													</div>
												</div>{" "}
											</Animated>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : null}
					{/*<div className="container">
						<div className="ethos-flex-container mt-5">
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 growth_parent_col">
								<div
									data-aos="zoom-in-right"
									data-aos-duration="1000"
								>
									<div className="growth_reactangle">
										<div className="ethos-bitmap">
											<img
												src={require("../assets/portfolio.svg")}
												alt="growth"
											/>
										</div>
										<div className="ethos-title">
											GROWTH & EXPANSION FOCUS
										</div>
										<div className="ethos-content">
											KNOW MORE
											<i className="fas fa-angle-right"></i>
										</div>
									</div>
									<div className="growth_reactangle growth_rectangle_overlap"></div>
								</div>
							</div>

							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 operational_parent_col">
								<div
									data-aos="zoom-in-right"
									data-aos-duration="1500"
								>
									<div className="operational_reactangle">
										<div className="ethos-bitmap">
											<img
												src={require("../assets/operational.svg")}
												alt="operational"
											/>
										</div>

										<div className="ethos-title">
											OPERATIONAL MINDSET
										</div>
										<div className="ethos-content">
											KNOW MORE
											<i className="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							</div>

							<div
								className="col-lg-4 col-md-4 col-sm-12 col-xs-12 concentrated_parent_col"
								style={{ paddingLeft: "0" }}
							>
								<div
									data-aos="zoom-in-right"
									data-aos-duration="2000"
								>
									<div className="concentrated_reactangle">
										<div className="ethos-bitmap">
											<img
												src={require("../assets/expansion.svg")}
												alt="concentrated"
											/>
										</div>

										<div className="ethos-title">
											CONCENTRATED PORTFOLIO
										</div>
										<div className="ethos-content">
											KNOW MORE
											<i className="fas fa-angle-right"></i>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>*/}

					<div className="row">
						<div className="container">
							<div className="about_btn_center">
								<center>
									<Link to="/ethos">
										<button
											type="button"
											className="btn btn-outline-primary content_end_btn_spec"
										>
											{" "}
											<div className="btn_flex">
												<div>
													ABOUT OUR 4E FRAMEWORK{" "}
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
					{/*<div className="ethos_more_about_inverted_line"></div>*/}
				</div>

				{/*FOCUS SECTION*/}
				{/*<div
					className="row"
					id="focus"
					style={{ height: "20px" }}
				></div>*/}
				<div className="focus-container">
					<div
						className="focus"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<div className="ethos-heading">
							<center>
								<p>FOCUS</p>
							</center>
						</div>
						<div className="focus-subheading mt-5">
							We focus on brilliant companies with robust teams,
							who harbour global ambitions. <br />
						</div>
						<div className="focus-subheading">We Look For:</div>
						<div className="focus-content mt-3">
							<span className="light_strong">$15 Million</span> +
							in Annual Recurring Revenues
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

				{/*PORTFOLIO SECTION */}
				<div className="row pt-5 pb-5" id="portfolio">
					<div
						className="col-sm-12 text-center"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<div className="ethos-heading">
							<p>PORTFOLIO</p>
						</div>
						<p className="theme_sub_heading mt-3">
							The mountaineers scaling the new peaks & building
							the next-generation of global <br />
							businesses.
						</p>

						<OwlCarousel
							className="owl-theme portfolio_ap_carousel"
							{...this.state.options}
						>
							<div class="item">
								<a
									href="https://www.zenoti.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={require("../assets/Zenoti.png")}
										alt="Zenoti"
										className="img-fluid appnomic-img"
									/>
								</a>
							</div>
							<div class="item">
								<a
									href="https://www.elastic.run/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={require("../assets/Elastic_Run.png")}
										alt="Elastic_Run"
										className="img-fluid appnomic-img"
									/>
								</a>
							</div>
							<div class="item">
								<a
									href="https://www.capillarytech.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={require("../assets/Capillary.png")}
										alt="Capillary"
										className="img-fluid"
									/>
								</a>
							</div>
							<div class="item">
								<a
									href="{https://www.manthan.com/}"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={require("../assets/Manthan.png")}
										alt="Manthan"
										className="img-fluid appnomic-img"
									/>
								</a>
							</div>
							<div class="item">
								<a
									href="https://www.crmnext.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={require("../assets/CRM_Next.png")}
										alt="CRM"
										className="img-fluid"
									/>
								</a>
							</div>
							<div class="item">
								<a
									href="http://appnomic.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={require("../assets/APPNOmic.png")}
										alt="appnomic"
										className="appnomic-img img-fluid"
									/>
								</a>
							</div>
						</OwlCarousel>

						{/*<div id="owl-example" className="owl-carousel mt-4">
							<div>
								<a
									href="https://www.zenoti.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										
										src={require("../assets/Zenoti.png")}
										alt="Zenoti"
										className="img-fluid appnomic-img"
									/>
								</a>
							</div>
							<div>
								<a
									href="https://www.elastic.run/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
									
										src={require("../assets/Elastic_Run.png")}
										alt="Elastic_Run"
										className="img-fluid appnomic-img"
									/>
								</a>
							</div>
							<div>
								<a
									href="https://www.capillarytech.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										
										src={require("../assets/Capillary.png")}
										alt="Capillary"
										className="img-fluid"
									/>
								</a>
							</div>
							<div>
								<a
									href="{https://www.manthan.com/}"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
									
										src={require("../assets/Manthan.png")}
										alt="Manthan"
										className="img-fluid appnomic-img"
									/>
								</a>
							</div>
							<div>
								<a
									href="https://www.crmnext.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										
										src={require("../assets/CRM_Next.png")}
										alt="CRM"
										className="img-fluid"
									/>
								</a>
							</div>

							<div>
								<a href="http://appnomic.com/" target="_blank">
									<img
										
										src={require("../assets/APPNOmic.png")}
										alt="appnomic"
										className="appnomic-img img-fluid"
									/>
								</a>
							</div>
						</div>*/}
					</div>
					<div className="container">
						<div className="portfolio_btn_center">
							<center>
								<Link to="/portfolio">
									<button
										type="button"
										className="btn btn-outline-primary content_end_btn_spec"
									>
										KNOW MORE
										<span>
											<i className="lni lni-chevron-right" />
										</span>
									</button>
								</Link>
							</center>
						</div>
					</div>
				</div>
				{/*TEAM SECTION*/}
				<div className="inverted_line" />
				<div
					className="row"
					id="people"
					// style={{ height: "40px" }}
				/>
				<div className="people_section pt-5 pb-5">
					<div className="row text-center">
						<div
							className="col-sm-12"
							data-aos="fade-up"
							data-aos-duration="1500"
						>
							<div className="ethos-heading">
								<center>
									<p>CORE TEAM</p>
								</center>
							</div>
						</div>
					</div>
					<div
						className="people_container"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<p className="theme_sub_heading team_heading mt-3">
							The Avataar Ventures team started its journey with
							two founding partners who are seasoned campaigners
							in the tech & startup space. Having successfully led
							our own global-scale journeys, we are now committed
							to help create a broader impact by building a
							world-class team that will actively support you on
							different fronts & in different parts of the world.
						</p>
					</div>

					<div className="row">
						<div className="container">
							<div
								className="people_flex_container mt-4"
								data-aos="fade-up"
								data-aos-duration="1500"
							>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div className="text-center card_wrapper">
											<div
												className=""
												data-toggle="modal"
												data-target="#mohanModal"
											>
												<div className="parent_team_img_container">
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/mohan_coloured.png"
														className="card-img-top"
														alt="..."
													/>
													<div className="overlay">
														<div className="text">
															MOHAN KUMAR <br />
															<span>
																Investments
															</span>
														</div>
													</div>
												</div>
												{/*<div className="card-body">
								<h5 className="card-title card_title">
									MOHAN KUMAR
								</h5>
								<p className="card-text">
									
								</p>
							</div>
							<div className="d-flex justify-content-center">
								<p className="p-2">
									<a
										href="https://twitter.com/kumarmohanv"
										target="_blank"
									>
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/twitter_logo.svg"
											height="25"
											width="25"
											alt="mohan_twitter"
										/>
									</a>
								</p>
								<p className="p-2">
									<a
										href="https://www.linkedin.com/in/vmohankumar/"
										target="_blank"
									>
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/linkedin_icon.svg"
											height="25"
											width="25"
											alt="mohan_linkedin"
										/>
									</a>
								</p>
							</div>*/}
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div className="text-center card_wrapper">
											<div
												className=""
												data-toggle="modal"
												data-target="#nishantModal"
											>
												<div className="parent_team_img_container">
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Nishant-headshot.svg"
														className="card-img-top"
														alt="..."
													/>
													<div className="overlay">
														<div className="text">
															NISHANT RAO
															<br />
															<span>
																Investments
															</span>
														</div>
													</div>
												</div>
												{/*<div className="card-body">
								<h5 className="card-title card_title">
									NISHANT RAO
								</h5>
								<p className="card-text">
									
								</p>
							</div>
							<div className="d-flex justify-content-center">
								<p className="p-2">
									<a
										href="https://twitter.com/nishrao/"
										target="_blank"
									>
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/twitter_logo.svg"
											height="25"
											width="25"
											alt="twitter_logo"
										/>
									</a>
								</p>
								<p className="p-2">
									<a
										href="https://www.linkedin.com/in/nishantrao/"
										target="_blank"
									>
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/linkedin_icon.svg"
											height="25"
											width="25"
											alt="linkedin_icon"
										/>
									</a>
								</p>
							</div>*/}
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div className="text-center card_wrapper">
											<div
												className=""
												data-toggle="modal"
												data-target="#sudhanshuModal"
											>
												<div className="parent_team_img_container">
													<img
														src={require("../assets/Sudhanshu_Potrait.jpeg")}
														className="card-img-top"
														alt="..."
														// onmouseover="this.src='https://s3.ap-south-1.amazonaws.com/avataar.vc/Mike-mulica.jpg'"
														// onmouseout="this.src='https://s3.ap-south-1.amazonaws.com/avataar.vc/Mike-mulica-ConvertImage.jpg'"
													/>
													<div className="overlay george-overlay">
														<div className="text">
															SUDHANSHU BHASIN
															<br />
															<span>
																Operations
															</span>
														</div>
													</div>
												</div>
												{/*<div className="card-body">
								<h5 className="card-title card_title">
									Mike Mulica
								</h5>
								<p className="card-text"></p>
							</div>
							<div className="d-flex justify-content-center">
								<p className="p-2">
									<a
										href="https://www.linkedin.com/in/mikemulica/"
										target="_blank"
									>
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/linkedin_icon.svg"
											height="25"
											width="25"
											alt="mohan_linkedin"
										/>
									</a>
								</p>
							</div>*/}
											</div>
										</div>
									</div>

									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div className="text-center card_wrapper">
											<div
												className=""
												data-toggle="modal"
												data-target="#georgeModal"
											>
												<div className="parent_team_img_container">
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/george_color.jpg"
														className="card-img-top"
														alt="..."
														// onmouseover="this.src='https://s3.ap-south-1.amazonaws.com/avataar.vc/george_color.jpg'"
														// onmouseout="this.src='https://s3.ap-south-1.amazonaws.com/avataar.vc/george1-black_white.png'"
													/>
													<div className="overlay george-overlay">
														<div className="text">
															GEORGE THANGADURAI
															<br />
															<span>
																Operations
															</span>
														</div>
													</div>
												</div>
												{/*<div className="card-body">
								<h5 className="card-title card_title">
									GEORGE THANGADURAI
								</h5>
								<p className="card-text"></p>
							</div>
							<div className="d-flex justify-content-center">
								<p className="p-2">
									<a
										href="https://twitter.com/George_Thangad"
										target="_blank"
									>
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/twitter_logo.svg"
											height="25"
											width="25"
											alt="twitter_logo"
										/>
									</a>
								</p>
								<p className="p-2">
									<a
										href="https://www.linkedin.com/in/george-thangadurai-9034ba3/"
										target="_blank"
									>
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/linkedin_icon.svg"
											height="25"
											width="25"
											alt="linkedin_icon"
										/>
									</a>
								</p>
							</div>*/}
											</div>
										</div>
									</div>

									<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
										<div className="text-center card_wrapper">
											<div
												className=""
												data-toggle="modal"
												data-target="#mikeModal"
											>
												<div className="parent_team_img_container">
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Mike-mulica.jpg"
														className="card-img-top"
														alt="..."
														// onmouseover="this.src='https://s3.ap-south-1.amazonaws.com/avataar.vc/Mike-mulica.jpg'"
														// onmouseout="this.src='https://s3.ap-south-1.amazonaws.com/avataar.vc/Mike-mulica-ConvertImage.jpg'"
													/>
													<div className="overlay">
														<div className="text">
															MIKE MULICA
															<br />
															<span>
																Operations
															</span>
														</div>
													</div>
												</div>
												{/*<div className="card-body">
								<h5 className="card-title card_title">
									Mike Mulica
								</h5>
								<p className="card-text"></p>
							</div>
							<div className="d-flex justify-content-center">
								<p className="p-2">
									<a
										href="https://www.linkedin.com/in/mikemulica/"
										target="_blank"
									>
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/linkedin_icon.svg"
											height="25"
											width="25"
											alt="mohan_linkedin"
										/>
									</a>
								</p>
							</div>*/}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="container">
							<div className="team_btn_center">
								<center>
									<Link to="/team">
										<button
											type="button"
											className="btn btn-outline-primary home_team_btn_focus_bg"
										>
											<div className="btn_flex">
												<div>
													THE TEAMS WE ARE BUILDING
												</div>
												<div>
													<span>
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

				{/***MEDIA SECTION*******/}
				<div className="row media_section_parent_div" id="media" />
				<div
					className="row justify-content-center mb-5"
					data-aos="fade-up"
					data-aos-duration="1500"
				>
					<div className="col-sm-10">
						<div className="ethos-heading text-center">
							<p>IN THE MEDIA</p>
						</div>

						<div className="custom_media_card_container">
							<OwlCarousel
								className="owl-theme"
								{...this.state.options2}
							>
								<div class="item">
									<div className="card custom-card-spec">
										<img
											className="card-img-top"
											src={require("./288x331.png")}
											alt="Card cap"
										/>
										<div className="card-body">
											<p className="card-title">
												21 Sep 2019, Bangalore
											</p>
											<p className="card-text">
												Blogpost 1 - Loreem Ipsum dolor
												amet Loreem Ipsum dolor amet
												Loreem Ipsum dolor amet
											</p>
											<p
												style={{
													color: "#3b73b5",
													cursor: "pointer",
												}}
											>
												More<span>&nbsp;&#62;</span>
											</p>
										</div>
									</div>
								</div>
								<div class="item">
									<div className="card custom-card-spec">
										<img
											className="card-img-top"
											src={require("./288x331.png")}
											alt="Card cap"
										/>
										<div className="card-body">
											<p className="card-title">
												21 Sep 2019, Bangalore
											</p>
											<p className="card-text">
												Blogpost 1 - Loreem Ipsum dolor
												amet Loreem Ipsum dolor amet
												Loreem Ipsum dolor amet
											</p>
											<p
												style={{
													color: "#3b73b5",
													cursor: "pointer",
												}}
											>
												More<span>&nbsp;&#62;</span>
											</p>
										</div>
									</div>
								</div>
								<div class="item">
									<div className="card custom-card-spec">
										<img
											className="card-img-top"
											src={require("./288x331.png")}
											alt="Card cap"
										/>
										<div className="card-body">
											<p className="card-title">
												21 Sep 2019, Bangalore
											</p>
											<p className="card-text">
												Blogpost 1 - Loreem Ipsum dolor
												amet Loreem Ipsum dolor amet
												Loreem Ipsum dolor amet
											</p>
											<p
												style={{
													color: "#3b73b5",
													cursor: "pointer",
												}}
											>
												More<span>&nbsp;&#62;</span>
											</p>
										</div>
									</div>
								</div>
							</OwlCarousel>
							{/*<div
								id="media_section"
								className="owl-carousel mt-5"
							>
								
								<div
									className="card custom-card-spec"
								
								>
									<img
										className="card-img-top"
										src={require("./288x331.png")}
										alt="Card cap"
									/>
									<div className="card-body">
										<p className="card-title">
											21 Sep 2019, Bangalore
										</p>
										<p className="card-text">
											Blogpost 1 - Loreem Ipsum dolor amet
											Loreem Ipsum dolor amet Loreem Ipsum
											dolor amet
										</p>
										<a href="#">
											More<span>&nbsp;&#62;</span>
										</a>
									</div>
								</div>*/}
							{/*<a
							href="/press-release"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<div className="media_card">
								<p className="media_card_title">RELEASE</p>
								<p className="media_card_subtitle mt-3">
									21 Sep 2019, Banglore
								</p>
								<p className="media_card_content">
									Avataar - backed by HarbourVest Partners to
									launch new VC paradigm to help fund &
									globally scale B2B/SaaS companies
								</p>
								<p className="media_card_link">More ></p>
							</div>
						</a>*/}
							{/*<div className="card custom-card-spec">
									<img
										className="card-img-top"
										src={require("./288x331.png")}
										alt="Card cap"
									/>
									<div className="card-body">
										<p className="card-title">
											21 Sep 2019, Bangalore
										</p>
										<p className="card-text">
											Blogpost 1 - Loreem Ipsum dolor amet
											Loreem Ipsum dolor amet Loreem Ipsum
											dolor amet
										</p>
										<a href="#">
											More<span>&nbsp;&#62;</span>
										</a>
									</div>
								</div>*/}
							{/*<a
							href="https://economictimes.indiatimes.com/small-biz/startups/newsbuzz/avataar-venture-partners-to-invest-300m-in-b2b-and-saas-companies/articleshow/71251825.cms"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<div className="media_card">
								<p className="media_card_title">
									ECONOMIC TIMES
								</p>
								<p className="media_card_subtitle mt-3">
									24 Sep 2019, Banglore
								</p>
								<p className="media_card_content">
									Avataar Venture Partners to invest $300
									million in B2B and SaaS companies
								</p>
								<p className="media_card_link">More ></p>
							</div>
						</a>*/}

							{/*<div
									className="card custom-card-spec"
									
								>
									<img
										className="card-img-top"
										src={require("./288x331.png")}
										alt="Card cap"
									/>
									<div className="card-body">
										<p className="card-title">
											21 Sep 2019, Bangalore
										</p>
										<p className="card-text">
											Blogpost 1 - Loreem Ipsum dolor amet
											Loreem Ipsum dolor amet Loreem Ipsum
											dolor amet
										</p>
										<a href="#">
											More<span>&nbsp;&#62;</span>
										</a>
									</div>
								</div>*/}
							{/*<a
							href="https://inc42.com/buzz/former-freshworks-norwest-partners-executives-launch-300-mn-investment-fund/"
							target="_blank"
							style={{ textDecoration: "none" }}
						>
							<div className="media_card">
								<p className="media_card_title">INC 42</p>
								<p className="media_card_subtitle mt-3">
									24 Sep 2019, Banglore
								</p>
								<p className="media_card_content">
									Former Freshworks, Norwest Partners
									Executives Launch $300 Mn Investment Fund
								</p>
								<p className="media_card_link">More ></p>
							</div>
						</a>*/}
							{/*</div>*/}
						</div>
					</div>
				</div>

				{/******CONTACT SECTION*********/}
				<div className="contact_inverted_line" />

				<div className="row contact-us pt-3 pb-5" id="contact">
					<div
						className="col-sm-12 text-center"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<div className="mt-5 text-center ethos-heading">
							<center>
								<p>CONTACT US</p>
							</center>
						</div>
						<div className="contact-wrapper mt-4">
							<div className="contact-item">
								<img
									src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Location.svg"
									className="mt-2"
									alt="contact_item"
								/>
								<div className="contact-us-title mt-3">
									BANGALORE OFFICE
								</div>
								<div className="contact-us-content mt-2">
									67/1B, 4th Cross, <br />
									Lavelle Rd, Bangalore- 560001
								</div>
							</div>

							<div className="contact-item mail_icon">
								<img
									src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Mail.svg"
									className="mt-2"
									width="46"
									height="46"
									alt="contact_item"
								/>

								<div className="contact-us-title mt-3">
									WRITE TO US
								</div>
								<div className="contact-us-content mt-2">
									contact@avataar.vc
								</div>
							</div>
							<div className="contact-item">
								<img
									src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Location.svg"
									alt="contact_item"
									className="mt-2"
								/>
								<div className="contact-us-title mt-3">
									DELHI OFFICE
								</div>
								<div className="contact-us-content mt-2">
									The Quorum Club <br />2 Horizon Center,
									First Floor, <br />
									Golf Course Road, DLF Phase 5, <br />
									Sector-43, Gurgaon, Haryana - 122002
								</div>
							</div>
						</div>
					</div>
				</div>

				{/******NISHANT MODAL********/}
				<div className="modal" id="nishantModal">
					<div className="modal-dialog" style={{ maxWidth: "90%" }}>
						<div className="modal-content">
							<div className="inverted_line_modal" />

							<div className="modal-header">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
								>
									&times;
								</button>
							</div>

							<div className="modal-body">
								<div className="stakeholder">
									<div className="card stakeholder-img">
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Nishant-headshot.svg"
											className="card-img-top"
											alt="..."
										/>
									</div>
									<div className="stakeholder-main">
										<div className="stakeholder-head">
											<div className="stakeholder-head-left">
												<div className="stakeholder-name">
													Nishant Rao
												</div>
												<div className="stakeholder-position">
													<b>
														Investor | Proven
														Scale-up Entrepreneur |
														Sales & GTM expert |
														Strategy & BizOps
													</b>
												</div>
											</div>
											<div className="stakeholder-social-links">
												<div
													style={{
														cursor: "pointer",
													}}
												>
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Mail_modal.svg"
														width="25"
														height="25"
														alt="..."
													/>
												</div>
												<a
													href="https://twitter.com/nishrao/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/twitter_logo.svg"
														width="25"
														height="25"
														alt="avatar_twitter"
													/>
												</a>
												<a
													href="https://www.linkedin.com/in/nishantrao/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Linkedin.svg"
														width="25"
														height="25"
														alt="avataar_linkedin"
													/>
												</a>
											</div>
										</div>
										<div className="stakeholder-content">
											<p>
												Nishant Rao brings expertise in
												B2B technology & SaaS sales and
												marketing with a repeat track
												record of delivering value &
												globally scaling successful
												companies in consumer internet &
												enterprise software with
												multiple stints of growth past
												$100M+.
											</p>
											<p>
												He has played many avataars
												across a multitude of leadership
												roles from running global
												growth-stage SaaS companies
												achieving unicorn status (Global
												Head of Strategy, LinkedIn HQ
												then MD, LinkedIn-India & SE
												Asia + Global COO @ Freshworks)
												to being an entrepreneur (helped
												co-found Epicenter, India’s 1st
												voice call-centre), a C-level
												strategy advisor (McKinsey) & an
												engineer/product manager (Ariba
												& Microsoft).
											</p>
											<p>
												He has an MBA from the
												Massachusetts Institute of
												Technology and a Computer
												Science degree from UT, Austin.
												He has been recognized as 40-
												under-40 executive by the likes
												of Economic Times & Fortune for
												impact created
											</p>
										</div>
										<div className="heading">
											Current Companies
										</div>

										<div className="current_companies">
											<a
												href="https://capillarytech.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Capillary
											</a>{" "}
											|{" "}
											<a
												href="https://www.crmnext.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												CRMNext
											</a>{" "}
											|{" "}
											<a
												href="https://www.zenoti.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Zenoti
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*********END NISHANT MODAL*******/}

				{/**********MOHAN MODAL*********/}
				<div className="modal" id="mohanModal">
					<div className="modal-dialog" style={{ maxWidth: "90%" }}>
						<div className="modal-content">
							<div className="inverted_line_modal" />

							<div className="modal-header">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
								>
									&times;
								</button>
							</div>

							<div className="modal-body">
								<div className="stakeholder">
									<div className="card stakeholder-img">
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/mohan_coloured.png"
											className="card-img-top"
											alt="..."
										/>
									</div>
									<div className="stakeholder-main">
										<div className="stakeholder-head">
											<div className="stakeholder-head-left">
												<div className="stakeholder-name">
													Mohan Kumar
												</div>
												<div className="stakeholder-position">
													<b>
														Investor | Product Maven
														| Team Builder
													</b>
												</div>
											</div>
											<div className="stakeholder-social-links">
												<a
													href="https://twitter.com/kumarmohanv"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/twitter_logo.svg"
														width="25"
														height="25"
														alt="twitter_logo"
													/>
												</a>
												<a
													href="https://www.linkedin.com/in/vmohankumar"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Linkedin.svg"
														width="25"
														height="25"
														alt="linkedin_logo"
													/>
												</a>
											</div>
										</div>
										<div className="stakeholder-content">
											<p>
												Mohan Kumar was the Managing
												Partner at Norwest Venture
												Partners (NVP) and has led
												investment rounds in some of the
												most successful Enterprise and
												SAAS startup stories in India.
											</p>
											<p>
												Before his avataar as a VC, he
												spent two decades in leadership
												& operating roles including as
												Corporate Vice-President of
												Motorola, responsible for
												leading their Mobile Products
												division & scaling their
												product/design centres across
												Asia.
											</p>
											<p>
												He is an IIT undergrad alum with
												Exec-MBA from Kellogg.
											</p>
										</div>
										<div className="heading">
											Current Companies
										</div>

										<div className="current_companies">
											<a
												href="https://www.zenoti.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Zenoti
											</a>{" "}
											|{" "}
											<a
												href="https://www.elastic.run/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Elastic Run
											</a>{" "}
											|{" "}
											<a
												href="https://capillarytech.com"
												target="_blank"
												rel="noopener noreferrer"
											>
												Capillary
											</a>{" "}
											|{" "}
											<a
												href="https://www.manthan.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Manthan
											</a>{" "}
											|{" "}
											<a
												href="https://appnomic.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Appnomic Inc
											</a>{" "}
											|{" "}
											<a
												href="https://www.crmnext.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												CRMNext
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/**********END MOHAN MODAL**********/}

				{/*********MIKE MODAL***********/}
				<div className="modal" id="mikeModal">
					<div className="modal-dialog" style={{ maxWidth: "90%" }}>
						<div className="modal-content">
							<div className="inverted_line_modal" />

							<div className="modal-header">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
								>
									&times;
								</button>
							</div>

							<div className="modal-body">
								<div className="stakeholder">
									<div className="card stakeholder-img">
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Mike-mulica.jpg"
											className="card-img-top"
											alt="..."
										/>
									</div>
									<div className="stakeholder-main">
										<div className="stakeholder-head">
											<div className="stakeholder-head-left">
												<div className="stakeholder-name">
													MIKE MULICA
												</div>
												<div className="stakeholder-position">
													<b>
														Strategy & Governance I
														M & A Expert
													</b>
												</div>
											</div>
											<div className="stakeholder-social-links">
												<a
													href="https://www.linkedin.com/in/mikemulica/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Linkedin.svg"
														width="25"
														height="25"
														alt="linkedin_logo"
													/>
												</a>
											</div>
										</div>
										<div className="stakeholder-content">
											<p>
												Mike Mulica is an advisor for
												AVP, based out of Chicago, US. A
												key strategist & farsighted
												investor in the areas of mobile
												communications, the internet,
												and globally scaled vertical
												solutions that Avataar has been
												able to bank upon. Mike is a
												mobile and internet industry
												veteran, playing a foundational
												role in pioneering the Mobile
												Internet and has led many highly
												successful companies and product
												introductions across the globe.
											</p>
											<p>
												Mike spends his time as an
												active investor, board director
												and advisor to private companies
												and public companies. Mike’s
												stewardship & governance of
												companies in emerging
												technologies has ushered in new
												large global markets that have
												changed the way the world works.
												Mike’s advisory companies
												include Phone.com, Syniverse,
												Sierra Wireless, Openwave,
												RealNetworks, FusionOne,
												Synchronoss, Actility, Unwired
												Planet Inc, Airmap, AlefEdge and
												most recently Apponomic.
											</p>
										</div>
										<div className="heading">
											Current Companies
										</div>

										<div className="current_companies">
											<a
												href="https://appnomic.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Appnomic Inc
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*********END MIKE MODAL*********/}

				{/*************GRORGE MODAL*********/}
				<div className="modal" id="georgeModal">
					<div className="modal-dialog" style={{ maxWidth: "90%" }}>
						<div className="modal-content">
							<div className="inverted_line_modal" />

							<div className="modal-header">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
								>
									&times;
								</button>
							</div>

							<div className="modal-body">
								<div className="stakeholder">
									<div className="card stakeholder-img">
										<img
											src="https://s3.ap-south-1.amazonaws.com/avataar.vc/george_color.jpg"
											className="card-img-top"
											alt="..."
										/>
									</div>
									<div className="stakeholder-main">
										<div className="stakeholder-head">
											<div className="stakeholder-head-left">
												<div className="stakeholder-name">
													GEORGE THANGADURAI
												</div>
												<div className="stakeholder-position">
													<b>
														BD Expert & Relationship
														Builder
													</b>
												</div>
											</div>
											<div className="stakeholder-social-links">
												<a
													href="https://twitter.com/George_Thangad"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/twitter_logo.svg"
														width="25"
														height="25"
														alt="twitter_logo"
													/>
												</a>
												<a
													href="https://www.linkedin.com/in/george-thangadurai-9034ba3/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Linkedin.svg"
														width="25"
														height="25"
														alt="linkedin_logo"
													/>
												</a>
											</div>
										</div>
										<div className="stakeholder-content">
											<p>
												George drives business
												development functions for AVP
												based out of San Fransisco and
												helps portfolio companies build
												deep CXO connects. He is a
												seasoned technology executive
												with multi-functional leadership
												experience, startup investments
												and helping grow businesses.
											</p>
											<p>
												Earlier George spent more than
												two decades in Intel Corporation
												in senior management roles that
												included GM of strategy &
												product management enabling
												revenue growth from $7B to
												$20B+, member of the Intel
												Capital Investments Committee
												and GM of Services Incubation
												with 3 successful launches. He
												was awarded the prestigious
												Intel’s Achievement Award for
												contributions to business
												growth.
											</p>
											<p>
												He leads global business for
												Borqs Technologies, a leading
												IoT company, with a key role
												during its Nasdaq IPO process
												and growing global revenues.
												George was also CSO/CMO and
												Board Advisor for Mobiliya
												Technologies, which was acquired
												by Quest Global. He has held
												multiple board and advisory
												roles and is a trusted advisor
												to many CxOs of emerging
												companies.
											</p>
											<p>
												George has 6 USA patents, 2 IEEE
												publications and interviewed in
												multiple technology magazines.
											</p>
										</div>
										<div className="heading">
											Current Companies
										</div>

										<div className="current_companies">
											<a
												href="https://appnomic.com/"
												target="_blank"
												rel="noopener noreferrer"
											>
												Appnomic Inc
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/************END GEORGE MODAL******/}
				{/****************SUDHANSHU MODAL********/}
				<div className="modal" id="sudhanshuModal">
					<div className="modal-dialog" style={{ maxWidth: "90%" }}>
						<div className="modal-content">
							<div className="inverted_line_modal" />

							<div className="modal-header">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
								>
									&times;
								</button>
							</div>

							<div className="modal-body">
								<div className="stakeholder">
									<div className="card stakeholder-img">
										<img
											src={require("../assets/Sudhanshu_Potrait.jpeg")}
											className="card-img-top"
											alt="..."
										/>
									</div>
									<div className="stakeholder-main">
										<div className="stakeholder-head">
											<div className="stakeholder-head-left">
												<div className="stakeholder-name">
													SUDHANSHU BHASIN
												</div>
												<div className="stakeholder-position">
													<b>
														Business Analysis &
														Modeling Guru | BizOps |
														Investment Banking
													</b>
												</div>
											</div>
											<div className="stakeholder-social-links">
												<a
													href="https://www.linkedin.com/in/sudhanshubhasin/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Linkedin.svg"
														width="25"
														height="25"
														alt="linkedin_logo"
													/>
												</a>
											</div>
										</div>
										<div className="stakeholder-content">
											<p>
												Sudhanshu brings in deep domain
												knowledge of the B2B technology
												and SaaS space. As an
												ex-investment banker at Lincoln
												International, he worked
												extensively with multiple
												technology companies.
											</p>
											<p>
												In his last role, Sudhanshu
												helped raise growth capital for
												an HR-tech SaaS company and a
												global, Enterprise-focused
												Logistics SaaS company. Prior to
												that, he held investment banking
												roles at Nomura and Edelweiss.
												Sudhanshu also has extensive
												capital markets experience
												having executed several IPOs in
												his previous roles.
											</p>
											<p>
												Sudhanshu holds an MBA from
												NMIMS ( Mumbai) and a B.E. from
												Delhi College of Engineering
												(Delhi University). He is also
												CFA Level-III cleared.{" "}
											</p>
										</div>
										{/*<div className="heading">
											Current Companies
										</div>

										<div className="current_companies">
											<a
												href="https://appnomic.com/"
												target="_blank"
											>
												Appnomic Inc
											</a>
										</div>*/}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/***************END SUDHANSHU MODAL***********/}
			</Fragment>
		);
	}
}

export default Home;
