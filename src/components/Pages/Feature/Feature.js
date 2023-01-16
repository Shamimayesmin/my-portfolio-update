import React from 'react';
import { FaAlignJustify, FaAndroid, FaArrowRight, FaReact } from 'react-icons/fa';

const Feature = () => {
    return (
        <div className="m-16 p-7">
			<h2 className="text-center font-bold text-lg font-serif text-pink-500">
				Features
			</h2>
            <hr />
			<h3 className="text-center font-bold text-5xl font-serif mt-5 mb-9 ">
				What I Do
			</h3>
			<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-dark">
				<div className="card bg-base-100 shadow-2xl transform transition duration-500 hover:scale-125 hover:bg-cyan-700">
					<div className="card-body">
						<FaReact className="text-3xl text-pink-600"></FaReact>
						<h2 className="card-title">Web Development</h2>
						<p>To create and maintain a website is my work. I'm also responsible for the site's technical aspects, such as its performance and capacity.</p>
						<div className="card-actions justify-end">
							<FaArrowRight className=" text-pink-600"></FaArrowRight>
						</div>
					</div>
				</div>
				<div className="card bg-base-100 shadow-2xl transform transition duration-500 hover:scale-125 hover:bg-cyan-700">
					<div className="card-body">
						<FaAlignJustify className="text-3xl text-pink-600"></FaAlignJustify>
						<h2 className="card-title">UX & UI Design</h2>
						<p>I will make your website good user experience.By best UI UX design I create the user interface for an app, website, or other interactive media</p>
						<div className="card-actions justify-end">
							<FaArrowRight className="text-pink-600"></FaArrowRight>
						</div>
					</div>
				</div>
				<div className="card bg-base-100 shadow-2xl transform transition duration-500 hover:scale-125 hover:bg-cyan-700">
					<div className="card-body">
						<FaAndroid className="text-3xl text-pink-600"></FaAndroid>
						<h2 className="card-title">Front-End Development</h2>
						<p>
							I’ll handle everything from to front-end development process until it
							is time to make your project live.
						</p>
						<div className="card-actions justify-end">
							<FaArrowRight className="text-pink-600"></FaArrowRight>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Feature;