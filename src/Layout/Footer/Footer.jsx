import React from "react";
import { Container, Row, Col, Input } from "reactstrap";
import logo from "./logo-2.png";
function Footer() {
	return (
		<Container style={{ padding: "8rem 0" }}>
			<Row>
				<Col xs="12" sm="3">
					<img
						src={logo}
						alt="logo"
						style={{ padding: "0rem", width: "120px", height: "120px", marginTop: "-22px", marginBottom: "-22px" }}
					/>
					{/* <h2 className="logo-name">
						Bookify
					</h2> */}
					<p>
						© 2021 Flone. <br /> All Rights Reserved
					</p>
				</Col>
				<Col xs="6" sm="3">
					<h6>ABOUT US</h6>
					<div className="footer-div">
						<p>About us</p>
						<p>Store location</p>
						<p>Contact</p>
						<p>Orders tracking</p>
					</div>
				</Col>
				<Col xs="6" sm="3">
					<h6>USEFUL LINKS</h6>
					<div className="footer-div">
						<p>Returns</p>
						<p>Support Policy</p>
						<p>Size guide</p>
						<p>FAQs</p>
					</div>
				</Col>
				<Col xs="12" sm="3">
					<h6>SUBSCRIBE</h6>
					<div className="footer-div">
						<p>Get E-mail updates about our latest shop and special offers.</p>
					</div>
					<Input type="email" placeholder="Enter Your Email Address" />
					<div className="footer-div">
						<p style={{ marginTop: "10px" }}>SUBSCRIBE</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
