import React, { Fragment, Component } from "react";
import "./team.css";

class Team extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Fragment>
				<div className="background_image_team">
					<div
						className="row home_section"
						id="home"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<div
							className="col-sm-12 banner_text team_banner_text"
							data-aos="fade-up"
							data-aos-duration="1500"
						>
							<h1 className="ethos_banner_heading">
								<center>TEAM</center>
							</h1>
							<div className="home-content d-inline-flex">
								<div className="sub_section team_sub_section">
									<p>
										We see ourselves as trusted partners who
										have been invited to enable our
										founders’ success. So, with humility &
										purpose, we work to first earn the trust
										of our leadership teams and ultimately
										become confidants & reliable
										consiglieres. We value this trust put in
										us & having been CEOs ourselves, with
										successful track records of scaling
										companies, each of us brings a passion
										for the 4Es that go into building strong
										teams & great global businesses.
									</p>
									<p>
										<strong>
											Entrepreneurial DNA • Expansion
											Expertise • Executive Networks •
											Empathy
										</strong>
									</p>
									<p>
										Come, explore the many “avataars" of
										each of our team-members..
									</p>
								</div>
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
					className="ethos"
					data-aos="fade-up"
					data-aos-duration="100"
				>
					<div className="ethos-framework-para">
						<center>
							<p>CORE TEAM</p>
						</center>
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
															NISHANT
															<br />
															<span>
																Investments
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
													/>
													<div className="overlay">
														<div
															className="text"
															style={{
																fontSize:
																	"0.8rem",
															}}
														>
															GEORGE THANGADURAI
															<br />
															<span>
																Investments
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
													/>
													<div className="overlay">
														<div className="text">
															MIKE MULICA
															<br />
															<span>
																Investments
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="ethos-framework-para">
					<center>
						<p>TEAMS WE ARE BUILDING NOW</p>
					</center>
				</div>
				<div className="row">
					<div className="container">
						<div className="people_flex_container mt-4">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
									<div
										className="team_rectangle"
										data-toggle="modal"
										data-target="#usbdModal"
									>
										<div className="ethos-title">
											US-BD <br /> Team
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
									<div
										class="modal fade"
										id="usbdModal"
										tabindex="-1"
										role="dialog"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true"
									>
										<div
											class="modal-dialog modal-lg team_modal_bg"
											role="document"
										>
											<div class="modal-content team_modal_content">
												<div className="row">
													<div className="container">
														<div class="modal-header">
															<p
																class="modal-title"
																id="exampleModalLabel"
															>
																US - Business
																Development Team
															</p>

															<i
																className="lni lni-close"
																data-dismiss="modal"
															></i>
														</div>
													</div>
												</div>
												<div class="modal-body">
													<div className="team-modal-para-detail">
														<p>
															The United States is
															a market like no
															other. Succeeding
															here is crucial to
															any company’s global
															scale. Yet, like
															many other markets,
															the ability to crack
															it lies in having
															strong prior
															relationships to
															open up the right
															doors at the right
															levels. Our kickass
															BD team leaders each
															come with a proven
															past track record of
															having led large
															business at tech
															companies.
														</p>
														<p>
															Their focus is
															three-fold:
															<ul>
																<li>
																	Foster
																	strong
																	relationships
																	as thought
																	partners to
																	CXOs in our
																	priority
																	industries;
																	over time
																	this also
																	helps
																	cultivate
																	the right
																	strategic
																	exit
																	dialogues
																</li>
																<li>
																	Generate
																	qualified
																	pipeline
																	every
																	quarter for
																	our
																	portfolio
																	companies
																</li>
																<li>
																	Leverage
																	their past
																	learnings to
																	coach
																	portfolio
																	teams &
																	maximize
																	closed ARR
																</li>
																<li>
																	Once we have
																	established
																	our US
																	presence, we
																	plan to have
																	similar
																	local BD
																	leadership
																	in other
																	core
																	international
																	markets
																	across
																	Europe, APAC
																	& LATAM.
																</li>
															</ul>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
									<div
										className="team_rectangle"
										data-toggle="modal"
										data-target="#bizopModal"
									>
										<div className="ethos-title">
											Biz Ops <br /> Team
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
									<div
										className="modal fade"
										id="bizopModal"
										tabindex="-1"
										role="dialog"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true"
									>
										<div
											class="modal-dialog modal-lg team_modal_bg"
											role="document"
										>
											<div class="modal-content team_modal_content">
												<div className="row">
													<div className="container">
														<div class="modal-header">
															<p
																class="modal-title"
																id="exampleModalLabel"
															>
																US - Business
																Operations Team
															</p>
															<i
																className="lni lni-close"
																data-dismiss="modal"
															></i>
														</div>
													</div>
												</div>
												<div class="modal-body">
													<div className="team-modal-para-detail">
														<p>
															In today’s day &
															age, having the
															right data & mining
															the right insights
															from it are crucial
															to the successful
															scale of any
															business. Yet, most
															companies get
															consumed by the
															day-to-day,
															week-to-week &
															quarter-to-quarter
															priorities (and we
															agree that one can’t
															take the eye off
															those).
														</p>
														<p>
															Our BizOps team,
															with dedicated team-
															members for each
															portfolio company,
															works to re-build &
															strengthen your
															company’s data
															foundations. And
															then leveraging that
															data to unlock
															timely growth
															insights – whether
															it is to answer top
															of mind strategic
															questions for
															portfolio CXOs –or-
															to look out on a
															farther time horizon
															to proactively
															identify future
															bottlenecks or
															near-term growth
															opportunities.
														</p>
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
										className="team_rectangle"
										data-toggle="modal"
										data-target="#gtmModal"
									>
										<div className="ethos-title">
											GTM <br />
											Expert <br />
											COE
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
									<div
										className="modal fade"
										id="gtmModal"
										tabindex="-1"
										role="dialog"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true"
									>
										<div
											class="modal-dialog modal-lg team_modal_bg"
											role="document"
										>
											<div class="modal-content team_modal_content">
												<div className="row">
													<div className="container">
														<div class="modal-header">
															<p
																class="modal-title"
																id="exampleModalLabel"
															>
																GTM Expert COE
															</p>
															<i
																className="lni lni-close"
																data-dismiss="modal"
															></i>
														</div>
													</div>
												</div>
												<div class="modal-body">
													<div className="team-modal-para-detail">
														<p>
															With each market &
															stage of growth
															requiring different
															growth-hacking
															techniques, we aim
															to provide hands-on
															services to help our
															portfolio companies
															efficiently scale.
														</p>
														<p>
															These team-members
															will have deep
															expertise in sales
															(both enterprise &
															inside-selling) and
															marketing (both
															outbound & inbound).
															They will translate
															prior hands-on
															project experience
															in areas like Sales
															Effectiveness, Sales
															Org design & ABM,
															into codified
															playbooks that they
															will use to guide
															your journey.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<div
										className="team_rectangle"
										data-toggle="modal"
										data-target="#securityModal"
									>
										<div className="ethos-title">
											Security & Analytics COE
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
									<div
										className="modal fade"
										id="securityModal"
										tabindex="-1"
										role="dialog"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true"
									>
										<div
											class="modal-dialog modal-lg team_modal_bg"
											role="document"
										>
											<div class="modal-content team_modal_content">
												<div className="row">
													<div className="container">
														<div class="modal-header">
															<p
																class="modal-title"
																id="exampleModalLabel"
															>
																Security &
																Analytics COE
															</p>
															<i
																className="lni lni-close"
																data-dismiss="modal"
															></i>
														</div>
													</div>
												</div>
												<div class="modal-body">
													<div className="team-modal-para-detail">
														<p>
															Expert team-members
															will help you with
															tricky yet important
															items like GDPR
															compliance, data
															warehouse design
															&amp; BI / analytics
															support.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
									<div
										className="team_rectangle"
										data-toggle="modal"
										data-target="#productModal"
									>
										<div className="ethos-title">
											Product & Texh COE
										</div>
										<div
											className="ethos-content"
											style={{ paddingTop: "40px" }}
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
									<div
										className="modal fade"
										id="productModal"
										tabindex="-1"
										role="dialog"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true"
									>
										<div
											class="modal-dialog modal-lg team_modal_bg"
											role="document"
										>
											<div class="modal-content team_modal_content">
												<div className="row">
													<div className="container">
														<div class="modal-header">
															<p
																class="modal-title"
																id="exampleModalLabel"
															>
																Product & Tech
																COE
															</p>
															<i
																className="lni lni-close"
																data-dismiss="modal"
															></i>
														</div>
													</div>
												</div>
												<div class="modal-body">
													<div className="team-modal-para-detail">
														<p>
															Consult with tech
															experts that have
															themselves grappled
															with building &
															scaling complex
															enterprise products
															in the past.
														</p>
														<p>
															Eventually we might
															even productize some
															of these services
															for faster execution
															for any new Avataar
															portfolio company.
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
				</div>

				<div className="row mb-5">
					<div className="container">
						<div className="about_btn_center team_component_btn">
							<center>
								<button
									type="button"
									className="btn btn-outline-primary"
								>
									AVTAAR IN THE MEDIA
									<span>
										{" "}
										<i className="fas fa-angle-right"></i>
									</span>
								</button>
							</center>
						</div>
					</div>
				</div>

				{/******NISHANT MODAL********/}
				<div className="modal" id="nishantModal">
					<div className="modal-dialog" style={{ maxWidth: "90%" }}>
						<div className="modal-content">
							<div className="inverted_line_modal"></div>

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
												<a href="" target="_blank">
													<img
														src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Mail_modal.svg"
														width="25"
														height="25"
													/>
												</a>
												<a
													href="https://twitter.com/nishrao/"
													target="_blank"
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
												voice call-center), a C-level
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
											>
												Capillary
											</a>{" "}
											|{" "}
											<a
												href="https://www.crmnext.com/"
												target="_blank"
											>
												CRMNext
											</a>{" "}
											|{" "}
											<a
												href="https://www.zenoti.com/"
												target="_blank"
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
							<div className="inverted_line_modal"></div>

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
											>
												Zenoti
											</a>{" "}
											|{" "}
											<a
												href="https://www.elastic.run/"
												target="_blank"
											>
												Elastic Run
											</a>{" "}
											|{" "}
											<a
												href="https://capillarytech.com"
												target="_blank"
											>
												Capillary
											</a>{" "}
											|{" "}
											<a
												href="https://www.manthan.com/"
												target="_blank"
											>
												Manthan
											</a>{" "}
											|{" "}
											<a
												href="https://appnomic.com/"
												target="_blank"
											>
												Appnomic Inc
											</a>{" "}
											|{" "}
											<a
												href="https://www.crmnext.com/"
												target="_blank"
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
							<div className="inverted_line_modal"></div>

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
							<div className="inverted_line_modal"></div>

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
			</Fragment>
		);
	}
}

export default Team;
