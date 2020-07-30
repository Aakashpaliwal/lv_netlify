import React, { Fragment } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = (props) => {
	const homeRouteHandler = () => {
		window.location.assign("/");
	};
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
							<div
								onClick={homeRouteHandler}
								className="home_link"
							>
								HOME
							</div>
						</div>
						<div className="footer-link">
							<Link to="/ethos">
								<div className="home_link">ETHOS</div>
							</Link>
						</div>
						{/*<div className="footer-link">
							<a href="#focus">FOCUS</a>
						</div>*/}
						<div className="footer-link">
							<Link to="/portfolio">
								<div className="home_link">PORTFOLIO</div>
							</Link>
						</div>
						<div className="footer-link">
							<Link to="/team">
								<div className="home_link">TEAM</div>
							</Link>
						</div>
						<div className="footer-link">
							<Link to="/media">
								<div className="home_link">MEDIA</div>
							</Link>
						</div>
						<div className="footer-link">
							<Link to="/contact">
								<div className="home_link">CONTACT</div>
							</Link>
						</div>
					</div>
					<div className="follow-us">
						<div>FOLLOW US</div>
						<div>
							<a
								href="https://twitter.com/AvataarVC"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src="https://s3.ap-south-1.amazonaws.com/avataar.vc/Twitter.svg"
									className="m-1"
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
									className="m-1"
									alt="avataar_linkedIn"
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
