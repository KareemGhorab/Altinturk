import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../product/Product";
import "./Products.css";
import "./ProductsMedia.css"

export default function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts([
			{
				id: 1,
				name: "Golden Plate 401",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "401_gold_1.jpeg",
				src2: "401_gold_2.jpeg",
			},
			{
				id: 2,
				name: "Silver Plate 401",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "401_silver_1.jpeg",
				src2: "401_silver_2.jpeg",
			},
			{
				id: 3,
				name: "Golden Tray 403",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "403_gold_1.jpeg",
				src2: undefined,
			},
			{
				id: 4,
				name: "Golden Tray 404",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "404_gold_1.jpeg",
				src2: undefined,
			},
			{
				id: 5,
				name: "Silver Tray 404",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "404_silver_1.jpeg",
				src2: undefined,
			},
			{
				id: 6,
				name: "Golden Tray 406",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "406_gold_1.jpeg",
				src2: undefined,
			},
			{
				id: 7,
				name: "Golden Tray 408",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "408_gold_1.jpeg",
				src2: undefined,
			},
			{
				id: 8,
				name: "Silver Tray 408",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "408_silver_1.jpeg",
				src2: undefined,
			},
			{
				id: 9,
				name: "Golden Tray 409",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "409_gold_1.jpeg",
				src2: "409_gold_2.jpeg",
			},
			{
				id: 10,
				name: "Silver Tray 409",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "409_silver_1.jpeg",
				src2: undefined,
			},
			{
				id: 11,
				name: "Silver Tray 421",
				description:
					"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam rerum doloremque nisi.",
				src1: "421_silver_1.jpeg",
				src2: undefined,
			},
		]);
	}, []);

	return (
		<>
			<main className="container my-5" id="products">
				<div className="row gy-3">
					{products.map(element => (
						<Product key={element.id} item={element} />
					))}
				</div>
			</main>
		</>
	);
}
