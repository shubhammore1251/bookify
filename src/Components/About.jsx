import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import { Container, Row, Col } from "reactstrap";
import Footer from "../Layout/Footer/Footer";
import "./ProductList.css";
import { Spinner } from 'reactstrap';

const About = () => {
	return (
		<div>
			<Navbar />
			<div
				style={{
					textAlign: "center",
					backgroundColor: "#F7F7F7",
					padding: "30px",
				}}
			>
				<p>
					<a href="/home" style={{ fontWeight: "600", color: "#a749ff", textDecoration: "none" }}>
						Home{" "}
					</a>
					<strong style={{ fontWeight: "500", color: "#000000" }}>
						{" "}
						/ About Us
					</strong>{" "}
				</p>
			</div>
			<div className="about-what-we">
				<p style={{ fontSize: "16px", color: "#666", margin: "0px" }}>
					Who Are We
				</p>
				<h3
					style={{ fontSize: "30px", color: "#433f3f", marginBottom: "30px" }}
				>
					Welcome To <strong style={{ color: "#a749ff" }}>Bookify</strong>
				</h3>
				<p style={{ fontSize: "16px", color: "#4b4b4b" }}>
					We a group of friends started Bookify because there was a major problem faced which was faced by most of the Engineering during their college times regarding how to find or where to find a particular subject book related to a specific author because most of the time, the books shops didn’t have that author books or they would say that it will take a month or week to arrive. And then if you see, how will the student wait for a week or month when exams are going to take in just a week.
					That's why we came to a solution of creating a web portal for students where they can visit and just select which book, they want just through some single clicks and no need to wait for week or month, we provide you the books with fast-delivery option.
				</p>
			</div>
			<div style={{ marginTop: "5rem" }}>
				<Container>
					<Row>
						<Col xs="12" sm="4">
							<h3>Our Vision</h3>
							<p style={{ fontSize: "14px", color: "#4b4b4b" }}>
								To reach out to most of the students across the country and help them ease out in their book hunt problem and save that time for effective study.
							</p>
						</Col>
						<Col xs="12" sm="4">
							<h3>Our Mission</h3>
							<p style={{ fontSize: "14px", color: "#4b4b4b" }}>
								We are providing a shop where they can halt anytime from anywhere and select and buy the books they want related to their particular field.
								And also, we are setting up a team that will help them find a particular book and some important question papers so also reduce confusion about the right book.
							</p>
						</Col>
						<Col xs="12" sm="4">
							<h3>Our Goal</h3>
							<p style={{ fontSize: "14px", color: "#4b4b4b" }}>
								To reduce the effort of searching the books. To expand our field from Engineering to various other domains also. A set up a new initiative where no need to waste time in finding the books but use that extra time to excel in your career.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</div>
	);
};

export default About;
