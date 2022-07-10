import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import $ from "jquery/dist/jquery.min.js";

export default function Navbar() {
	const [navPadding, setNavPadding] = useState("p-0");

	useEffect(() => {
		$(window).on("scroll", () => {
			$(window).scrollTop() > 500
				? setNavPadding("py-2")
				: setNavPadding("py-0");
		});
	}, []);

	return (
		<>
			<nav
				className={`navbar navbar-dark bg-sec navbar-expand-lg bg-light fixed-top ${navPadding}`}
			>
				<div className="container">
					<Link className="navbar-brand" to="home">
						{/* <figure>
							<img
								className="w-100"
								src={require("../../images/logo.jpeg")}
								alt="altinturk logo"
							/>
						</figure> */}
						<h1>Altinturk</h1>
					</Link>
					<button
						className="navbar-toggler border-0 py-2 px-3 border-0 rounded bg-transparent"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i className="fa-solid fa-bars text-white fa-2x"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item ms-lg-4">
								<Link
									className="nav-link text-white text-main-hover fs-5 fw-bolder"
									aria-current="page"
									to="home"
								>
									Home
								</Link>
							</li>
							<li className="nav-item ms-lg-4">
								<Link
									className="nav-link text-white text-main-hover  fs-5 fw-bolder"
									aria-current="page"
									to="products"
								>
									Products
								</Link>
							</li>
							<li className="nav-item ms-lg-4">
								<Link
									className="nav-link text-white text-main-hover fs-5 fw-bolder"
									aria-current="page"
									to="contact"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
