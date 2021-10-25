import axios from "axios";
import React, { useState, useEffect } from "react";
import {
	Card,
	CardImg,
	CardTitle,
	CardText,
	CardSubtitle,
	CardBody,
	Container,
	Row,
	Col,
} from "reactstrap";
import "./ProductList.css";
import Footer from "../Layout/Footer/Footer";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useStoreActions, useStoreState } from "easy-peasy";

const ProductList = ({ data }) => {
	const [product, setProduct] = useState([]);
	const [singleProducts, setSingleProducts] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		axios
			.get("http://localhost:3000/data")
			.then((res) => {
				setProduct(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		setSingleProducts(id);
		if (id) {
			axios
				.get(`http://localhost:3000/data/${id}`)
				.then((res) => {
					setSingleProducts(res.data);
					console.log("SingleProduct", res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [id]);
	// const cart = useStoreState((state) => state.cart);
	// const addtoCart = useStoreActions((actions) => actions.addtoCart);
	// console.log("cart", cart);

	// const isAlreadyInCart =
	// 	cart.findIndex(
	// 		(singleProduct) => singleProduct.id === singleProducts["id"]
	// 	) !== -1;

	// console.log("carDatasss", singleProducts);
	// const handlecart = (singleProducts) => {
	// 	addtoCart(singleProducts);
	// };

	return (
		<>
			<Layout />
			<Container>
				<Row className="product-list-offer" style={{ margin: "80px 0" }}>
					<Col xs="12" sm="4">
						<div className="hero-special">
							<img
								src="https://htmldemo.hasthemes.com/flone/flone/assets/img/icon-img/support-1.png"
								alt=""
							/>
							<div>
								<h5
									style={{
										margin: "15px",
										color: "#959795",
										fontWeight: "400",
									}}
								>
									Free Shipping
								</h5>
								<p
									style={{
										margin: "0px 22px",
										fontSize: "15px",
										color: "#rgb(111 111 111)",
									}}
								>
									We will ship your book for <strong>freeee</strong><br />
									So buy now without spending extra money
								</p>
							</div>
						</div>
					</Col>
					<Col xs="12" sm="4">
						<div className="hero-special">
							<img
								src="https://htmldemo.hasthemes.com/flone/flone/assets/img/icon-img/support-2.png"
								alt=""
							/>
							<div>
								<h5
									style={{
										margin: "15px",
										color: "#959795",
										fontWeight: "400",
									}}
								>
									Support 24/7
								</h5>
								<p
									style={{
										margin: "0px 22px",
										fontSize: "15px",
										color: "#rgb(111 111 111)",
									}}
								>
									Customer is able to get their issue resolved no matter what day or time it is
								</p>
							</div>
						</div>
					</Col>
					<Col xs="12" sm="4">
						<div className="hero-special-1">
							<img
								src="https://htmldemo.hasthemes.com/flone/flone/assets/img/icon-img/support-3.png"
								alt=""
							/>
							<div>
								<h5
									style={{
										margin: "15px",
										color: "#959795",
										fontWeight: "400",
									}}
								>
									Money Return
								</h5>
								<p
									style={{
										margin: "0px 22px",
										fontSize: "15px",
										color: "#rgb(111 111 111)",
									}}
								>
									All items must be exchanged or returned within 30 days of receipt of the good.
								</p>
							</div>
						</div>
					</Col>
				</Row>
				<div className="product-list-deals">
					<h2 className="product-list-deals-h2" id="deals"> Daily Deals! </h2>
					<p>Get Upto 70% off on purchase</p>
				</div>
				<Row>
					{product &&
						product.slice(7, 15).map((list, key) => (
							<Col xs="12" sm="3">
								<Card className="product-list" key={list?.id}>
									<CardImg
										className="product-img"
										src={list?.image}
										alt="Card image cap"
									/>
									{/* <h1>
										{list?.bname}
									</h1> */}
									<Link
										to={`/home/${list?.id}`}
										style={{ textDecoration: "none" }}
									>
										<div className="shop-btn-div">
											<FontAwesomeIcon
												icon={faShoppingCart}
												className="product-list-shop-btn"
											/>
											<FontAwesomeIcon
												icon={faEye}
												className="product-list-shop-btn"
											/>
											<FontAwesomeIcon
												icon={faHeart}
												className="product-list-shop-btn"
											/>
										</div>
									</Link>
								</Card>
								<CardBody>
									<CardTitle className="product-title" tag="h5">
										{list?.bname.length > 40
											? list?.bname.slice(0, 40) + "..."
											: list?.bname}
										{/* {list?.bname} */}
									</CardTitle>
									<div style={{ display: "flex", color: "#ff5e00", fontWeight: "bold" }}>
										<p>{list?.price} -</p>
										{/* <p style={{ color: "#FA6BFF", marginLeft: "10px" }}>
											<strike>${Math.round(list?.price + 50)}</strike>
										</p> */}
									</div>
									{/* <CardSubtitle tag="h6" className="mb-2 text-muted">
										Description
									</CardSubtitle>
									<CardText>
										{list?.description.length > 100
											? list?.description.slice(0, 100) + "..."
											: list?.description}
									</CardText> */}
									{/* {isAlreadyInCart === false ? (
										<button
											className="hero-product-cart-btn"
											onClick={() => handlecart(singleProducts)}
										>
											Add To Cart
										</button>
									) : (
										<button
											className="hero-product-cart-btn"
											onClick={() => handlecart(singleProducts)}
										>
											Remove To Cart
										</button>
									)} */}
								</CardBody>
							</Col>
						))}
				</Row>
				<div className="product-list-deals">
					<h2 className="product-list-deals-h2">All Books </h2>
					<p>Get All Engineeing Books At One Place</p>
				</div>
				<Row>
					{product &&
						product.map((list, key) => (
							<Col xs="12" sm="3">
								<Card className="product-list" key={list?.id}>
									<CardImg
										className="product-img"
										src={list?.image}
										alt="Card image cap"
									/>
									{/* <h1>
										{list?.bname}
									</h1> */}
									<Link
										to={`/home/${list?.id}`}
										style={{ textDecoration: "none" }}
									>
										<div className="shop-btn-div">
											<FontAwesomeIcon
												icon={faShoppingCart}
												className="product-list-shop-btn"
											/>
											<FontAwesomeIcon
												icon={faEye}
												className="product-list-shop-btn"
											/>
											<FontAwesomeIcon
												icon={faHeart}
												className="product-list-shop-btn"
											/>
										</div>
									</Link>
								</Card>
								<CardBody>
									<CardTitle className="product-title" tag="h5">
										{list?.bname.length > 40
											? list?.bname.slice(0, 40) + "..."
											: list?.bname}
										{/* {list?.bname} */}
									</CardTitle>
									<div style={{ display: "flex", color: "#ff5e00", fontWeight: "bold" }}>
										<p>{list?.price} -</p>
										{/* <p style={{ color: "#FA6BFF", marginLeft: "10px" }}>
											<strike>${Math.round(list?.price + 50)}</strike>
										</p> */}
									</div>
									{/* <CardSubtitle tag="h6" className="mb-2 text-muted">
										Description
									</CardSubtitle>
									<CardText>
										{list?.description.length > 100
											? list?.description.slice(0, 100) + "..."
											: list?.description}
									</CardText> */}
									{/* {isAlreadyInCart === false ? (
										<button
											className="hero-product-cart-btn"
											onClick={() => handlecart(singleProducts)}
										>
											Add To Cart
										</button>
									) : (
										<button
											className="hero-product-cart-btn"
											onClick={() => handlecart(singleProducts)}
										>
											Remove To Cart
										</button>
									)} */}
								</CardBody>
							</Col>
						))}
				</Row>
				<div>
					<Footer />
				</div>
			</Container>
		</>
	);
};

export default ProductList;
