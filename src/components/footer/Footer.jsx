import React from "react";
import "./Footer.css";

export default function Footer() {
	return (
		<>
			<footer id="main-footer" className="bg-main">
				<div className="container">
					<div className="row g-4">
						<div className="col-md-6 text-white py-5">
							<div className="item px-1">
								<h3 className="font-sec fw-bolder fs-2 mb-4">Our Branches</h3>
								<address className="fs-5">
									Lorem ipsum dolor sit amet consectetur.
								</address>
								<address className="fs-5">
									Lorem ipsum dolor sit amet consectetur.
								</address>
								<address className="fs-5">
									Lorem ipsum dolor sit amet consectetur.
								</address>
								<address className="fs-5">
									Lorem ipsum dolor sit amet consectetur.
								</address>
							</div>
						</div>
						<div className="col-md-6 text-white py-5">
							<div className="item px-1">
								<h3 className="font-sec fw-bolder fs-2 mb-4">Follow Us</h3>
								<div className="icons-container">
									<a
										href="https://facebook.com"
										className="text-white text-sec-hover me-5"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa-brands fa-facebook-f fa-2x"></i>
									</a>
									<a
										href="https://twitter.com"
										className="text-white text-sec-hover me-5"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa-brands fa-twitter fa-2x"></i>
									</a>
									<a
										href="https://instagram.com"
										className="text-white text-sec-hover me-5"
										target="_blank"
										rel="noreferrer"
									>
										<i className="fa-brands fa-instagram fa-2x"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer className="bg-sec text-white text-center py-4">
					<small>Copyright © Altinturk 2022</small>
				</footer>
			</footer>
		</>
	);
}
