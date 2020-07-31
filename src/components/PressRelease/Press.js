import React, { Fragment, Component } from "react";
import "./press.css";

class Press extends Component {
	// componentDidMount() {
	// 	localStorage.setItem("press_route", true);
	// }

	render() {
		return (
			<Fragment>
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
									<h4 class="theme_color mb-5 press_theme_color">
										PRESS RELEASE
									</h4>
								</div>
							</div>
						</div>
					</div>

					<div className="container">
						<div className="row">
							<div className="col-12">
								<div style={{ lineHeight: "2.25rem" }}>
									<p className="subheading theme_color custom_press_subheading">
										23 September 2019, Bangalore | AVATAAR
										VENTURES
									</p>
									<p className="press_release_title custom_press_release_title">
										Avataar - backed by HarbourVest Partners
										to launch new VC paradigm to help fund &
										globally scale B2B/SaaS companies
									</p>
								</div>
							</div>
						</div>
						<div className="press_release_content">
							<div className="row">
								<div className="col-12">
									<p>
										Avataar Capital Management (“Avataar”)
										is excited to publicly announce the
										formation of Avataar Venture Partners I,
										bringing together an ethos of
										operationally focused venture capital
										investing. The fund will focus on making
										$10 – 30M growth-stage investments into
										B2B and SaaS companies that have at
										least $15M of Annual Recurring Revenues
										and are looking to scale globally.
										Avataar was founded on the belief that
										to successfully build, scale and
										accelerate the growth of companies;
										entrepreneurs will need partners with
										operational action bias. At closing,
										Avataar has acquired stakes in six B2B
										SaaS companies, namely Appnomic,
										Capillary, CRMNext, ElasticRun, Manthan
										and Zenoti from Norwest Venture
										Partners.
									</p>
									<p>
										{" "}
										Avataar will work with companies and
										their leadership teams to deliver on
										important initiatives that will help
										scale their businesses. Avataar will be
										led by Mohan Kumar – former Partner at
										Norwest Venture Partners India and
										Nishant Rao – ex COO Freshworks who will
										work with a global team of seasoned
										senior executives to help scale the
										companies.
									</p>
									<p>
										{" "}
										Mohan & Nishant say, “With Avataar we
										want to create an ecosystem of strong
										execution focused partners who have
										built scale, have seen the story before
										and can bring timely learning from past
										successes and failures to our
										entrepreneurs. The fund will focus on
										bringing this as a key differentiator
										beyond the capital. The partnership with
										HarbourVest will allow us to provide the
										capital needed to scale our businesses.”
									</p>
									<p>
										{" "}
										“As an investor in Avataar Venture
										Partners I, we are delighted to be
										partnering with Avataar to provide the
										necessary resources for the companies to
										reach their maximum potential and we
										look forward to working with the team as
										it executes its strategy of scaling
										these companies into global businesses,”
										said Tim Flower, Managing Director,
										HarbourVest Partners.
									</p>
									<span>
										<strong>About HarbourVest</strong>
									</span>
									<p>
										{" "}
										HarbourVest is an independent, global
										private markets investment specialist
										with 36 years of experience and more
										than $64 billion in assets under
										management, as of June 30, 2019. The
										Firm’s powerful global platform offers
										clients investment opportunities through
										primary fund investments, secondary
										investments, and direct co-investments
										in commingled funds or separately
										managed accounts. HarbourVest has more
										than 500 employees, including more than
										125 investment professionals across
										Asia, Europe, and the Americas.
									</p>
									<p>
										{" "}
										This global team has committed more than
										$37 billion to newly-formed funds,
										completed over $21 billion in secondary
										purchases, and invested over $11 billion
										directly in operating companies.
										Partnering with HarbourVest, clients
										have access to customized solutions,
										longstanding relationships, actionable
										insights, and proven results.
									</p>
									<p>
										<span>
											<strong>
												About Avataar Venture Partners
											</strong>
										</span>
										<p class="press_release_content">
											For further information, please
											visit&nbsp;&nbsp;
											<a
												href="/"
												class="subheading theme_color"
											>
												www.avataar.vc
											</a>
										</p>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Press;
