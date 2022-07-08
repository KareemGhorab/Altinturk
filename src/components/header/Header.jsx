import React from "react";
import "./Header.css";
import "./HeaderMedia.css"

export default function Header() {
	return (
		<>
			<header
				id="main-header"
				className="d-flex justify-content-center align-items-center text-white bg-main text-center"
			>
				<div className="header-content">
					<h1>Altinturk</h1>
					<span className="fs-5">We sell great antiques</span>
				</div>
			</header>
		</>
	);
}
