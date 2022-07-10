import React from "react";
import "./Product.css";

export default function Product(props) {
	const { name, description, src1, src2 } = props.item;

	return (
		<>
			<div className="col-lg-4">
				<article className="text-center text-white position-relative overflow-hidden p-0">
					<figure className="m-0">
						<img
							className="w-100"
							src={require("../../images/products/" + src1)}
							alt={name}
						/>
					</figure>
					<a href="mailto:someone@example.com" className="text-white">
						<div className="filter position-absolute top-100 h-100 d-flex justify-content-center align-content-center">
							{src2 ? (
								<figure className="position-absolute top-0 end-0 h-100">
									<img
										className="w-100 h-100"
										src={require("../../images/products/" + src2)}
										alt="name"
									/>
								</figure>
							) : (
								""
							)}

							<div className="filter-content filter bg-main w-100 h-100 p-2 d-flex flex-column justify-content-center">
								<h3>{name}</h3>
								<p>{description}</p>
							</div>
						</div>
					</a>
				</article>
			</div>
		</>
	);
}
