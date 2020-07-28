import React, { Fragment } from "react";
import "./footer.css";

const Footer = (props) => {
	return (
		<Fragment>
			<footer>
				<div className="footer">
					<div className="footer-head">
						<img
							src="https://s3.ap-south-1.amazonaws.com/avataar.vc/avataar_log_white_new.png"
							alt="logo"
							className="img-fluid"
						/>
					</div>
					<div className="footer-content">
						<div className="footer-link">
							<a href="#home">HOME</a>
						</div>
						<div className="footer-link">
							<a href="#ethos">ETHOS</a>
						</div>
						<div className="footer-link">
							<a href="#focus">FOCUS</a>
						</div>
						<div className="footer-link">
							<a href="#portfolio">PORTFOLIO</a>
						</div>
						<div className="footer-link">
							<a href="#people">TEAM</a>
						</div>
						<div className="footer-link">
							<a href="#media_section">MEDIA</a>
						</div>
						<div className="footer-link">
							<a href="#contact">CONTACT</a>
						</div>
					</div>
					<div className="follow-us">
						<div>FOLLOW US</div>
						<div>
							<a
								href="https://twitter.com/AvataarVC"
								target="_blank"
							>
								<img
									src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Twitter.svg"
									className="m-1"
								/>
							</a>
							<a
								href="https://www.linkedin.com/company/avataarvc"
								target="_blank"
							>
								<img
									src="https://s3.ap-south-1.amazonaws.com/avataar.vc/LinkedIn.svg"
									className="m-1"
								/>
							</a>
						</div>
						<div>© 2019 Avataar Ventures</div>
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
