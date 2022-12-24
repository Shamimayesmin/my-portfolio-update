import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const Details = () => {
	
	const [data, setData] = useState({});
	const { id } = useParams();
	console.log(data);

	useEffect(() => {
		fetch(`https://portfolio-server-chi-nine.vercel.app/details/${id}`)
			.then((res) => res.json())
			.then((data) => setData(data));
			
	}, [id]);

	
	return (
		<div className="flex flex-col lg:flex-row justify-around my-20 mx-5 gap-8">
			<div className="carousel lg:w-1/2 rounded-xl">
				<div id="slide1" className="carousel-item relative w-full">
					<img src={data.pic1} className="w-full" alt="" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img src={data.pic2} className="w-full" alt="" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img src={data.pic3} className="w-full" alt="" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img src={data.pic4} className="w-full" alt="" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</div>

			<div className="card lg:w-1/2 sm:w-full bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title">
						{data.name}
						<div className="badge badge-secondary">NEW</div>
					</h2>
					<p> 1. {data.text1}</p>
					<p>2. {data.text2}</p>
					<p>3. {data.text3}</p>
					<p>4. {data.text4}</p>
					<p className="font-bold">Technology : {data.technology}</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline text-white hover:bg-pink-500">
							<a href={data.livelink}>liveLink</a>
						</div>
						<div className="badge badge-outline text-white hover:bg-pink-500">
							<a href={data.clientlink}>ClientLink</a>
						</div>
						<div className="badge badge-outline text-white hover:bg-pink-500">
							<a href={data.serverlink}>ServerLink</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
