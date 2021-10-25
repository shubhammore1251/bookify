import React from "react";
import "../Layout.css";
import image from "./Untitled-3.png"
import { useHistory } from "react-router-dom";
import Carousel2 from "./Untitled-5.png"
const HeroSection = (props) => {
	// let history = useHistory();
	// const scrolls = () => {
	// 	history.push("#deals");
	// }
	return (
		<div
			id="carouselExampleControls"
			class="carousel slide"
			data-ride="carousel"
		>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div class="container-1">
						<img
							src={image}
							alt="Norway"
							style={{ width: "100%", height: "40rem" }}
						/>
						<div class="text-block" >
							<h2 className="text-block-h2">--- Great Exam Offer ---</h2>
							<h1 className="text-block-h1">Question Papers</h1>
							<h3 className="text-block-h3">Get previous year question paper for free</h3>
							<div style={{ display: "flex", justifyContent: "center" }}>
								<button className="hero-btn"> <a href="#deals" style={{ color: "#fff", textDecoration: "none" }}>Buy Now</a> </button>
							</div>
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<div class="container-1">
						<img
							src={Carousel2}
							alt="Norway"
							style={{ width: "100%", height: "40rem" }}
						/>
						<div class="text-block">
							<h2 className="text-block-h2">--- Engineering Books ---</h2>
							<h1 className="text-block-h1">All Branch</h1>
							<h3 className="text-block-h3">30% off on complete set</h3>
							<div style={{ display: "flex", justifyContent: "center" }}>
								<button className="hero-btn"> <a href="#deals" style={{ color: "#fff", textDecoration: "none" }}>Buy Now</a></button>
							</div>
						</div>

					</div>{" "}
				</div>
			</div>
			<a
				class="carousel-control-prev"
				href="#carouselExampleControls"
				role="button"
				data-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a
				class="carousel-control-next"
				href="#carouselExampleControls"
				role="button"
				data-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	);
};

export default HeroSection;
