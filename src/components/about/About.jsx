import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
	return (
		<>
			<section id="about" className="d-flex flex-column align-items-center">
				<h2 className="fw-bolder text-sec text-center mb-5">About Us</h2>
				<div className="container-small d-flex justify-content-between fs-5 my-5">
					<p className="px-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
						quibusdam, tenetur nulla labore veniam omnis quod! Doloremque
						maiores fuga necessitatibus inventore vitae explicabo quibusdam
						aliquid facere, vel, vero adipisci omnis.
					</p>
					<p className="px-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
						quibusdam, tenetur nulla labore veniam omnis quod! Doloremque
						maiores fuga necessitatibus inventore vitae explicabo quibusdam
						aliquid facere, vel, vero adipisci omnis.
					</p>
				</div>

				<Link exact to={"/products"}>
					<button className="btn bg-main text-white fs-5 fw-bolder rounded-3">
						Buy Our Products<i className="fa-solid fa-arrow-right ms-2"></i>
					</button>
				</Link>
			</section>
		</>
	);
}
