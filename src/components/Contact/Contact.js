import React, { Component, Fragment } from "react";
import "./contact.css";

class Contact extends Component {
	render() {
		return (
			<Fragment>
				<div className="contact_hero">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 contact_banner_text_bg">
								<h1 className="page_heading">CONTACT US</h1>
								<div className="content_sec_main_contact">
									<div className="contact_content_sec_bangalore">
										<p className="bangalore">BANGALORE </p>
										<p>
											67/1B, 4th Cross, <br />
											Lavelle Rd, <br />
											Bangalore- 560001
										</p>
									</div>

									<div className="contact_content_sec_delhi">
										<p className="bangalore">DELHI </p>
										<p>
											The Quorum Club
											<br />
											2 Horizon Center, First Floor,
											<br />
											Golf Course Road, DLF Phase 5,{" "}
											<br />
											Sector-43, Gurgaon, Haryana - 122002
										</p>
									</div>

									<div className="contact_content_sec_write">
										<div className="row">
											<div
												className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
												style={{ paddingLeft: "0" }}
											>
												<p className="write">
													WRITE TO US
												</p>
												<p className="write_contact">
													contact@avataar.vc
												</p>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 contact_social_left_parent_padding">
												<div className="contact_social_icons">
													<a
														href="https://twitter.com/AvataarVC"
														target="_blank"
														rel="noopener noreferrer"
													>
														<img
															src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Twitter.svg"
															className="img-fluid"
															alt="avataar_twitter"
														/>
													</a>
													<a
														href="https://www.linkedin.com/company/avataarvc"
														target="_blank"
														rel="noopener noreferrer"
													>
														<img
															src="https://s3.ap-south-1.amazonaws.com/avataar.vc/LinkedIn.svg"
															className="img-fluid"
															alt="avataar_linkedIn"
														/>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Contact;
