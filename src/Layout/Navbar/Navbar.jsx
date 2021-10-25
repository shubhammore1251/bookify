import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	Row,
	Col,
} from "reactstrap";
// import {logo} from "./logo-2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "./logo-2.png";
const Example = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div
			style={{
				position: "sticky",
				top: "0",
				right: "0",
				left: "0",
				zIndex: "1000",
			}}
		>
			<Navbar light expand="md">
				<NavbarBrand href="/">
					<img
						src={logo}
						alt="logo"
						style={{ padding: "0rem", width: "100px", height: "100px", marginTop: "-25px", marginBottom: "-25px" }}
					/>
					{/* <h2 className="logo-name">
						Bookify
					</h2> */}
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar style={{ justifyContent: "flex-end" }}>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink
								className="nav-items"
								style={{ color: "black" }}
								href="/"
							>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className="nav-items"
								style={{ color: "black" }}
								href="/about"
							>
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className="nav-items"
								style={{ color: "black" }}
								href="/contact"
							>
								Contact Us
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className="nav-items"
								style={{ color: "black" }}
								href="/question-paper"
							>
								Question Papers
							</NavLink>
						</NavItem>
						{/* <NavItem>
							<NavLink
								className="nav-items"
								style={{ color: "black" }}
								href="/my-account"
							>
								My Account
							</NavLink>
						</NavItem> */}

						<NavItem>
							<NavLink
								className="nav-items"
								style={{ color: "black" }}
								href="/my-account"
							>
								<FontAwesomeIcon icon={faUser} />
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className="nav-items"
								style={{ color: "black" }}
								href="/cart"
							>
								<FontAwesomeIcon icon={faShoppingCart} />
							</NavLink>
						</NavItem>
					</Nav>
					<NavbarText></NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Example;
