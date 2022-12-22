import React from 'react';
import img from '../../../assets/images/pic.jpg'
import img2 from '../../../assets/images/web2.jpg'

const About = () => {
    return (
        <div className="hero my-20">
			<div className="hero-content flex-col lg:flex-row">
				<div className="relative w-1/2">
					<img
						src={img2} alt=''
						className="w-4/5 h-full rounded-lg shadow-2xl"
					/>
					<img
						src={img2} alt=''
						className="w-3/5 right-5 top-1/2 border-4 absolute rounded-full shadow-2xl"
					/>
				</div>
				<div className="w-1/2 font-serif">
					<h1 className="text-5xl my-5 font-bold">About Me</h1>
					<p className="py-6">
                    My name is Shamima Yesmin. I am a Web Developer focused on MERN Stack but still exploring other technology frameworks which catch my interest, and I am very passionate and dedicated to my work. I love creating pages where I can make enjoyable interactions and experiences for everyone.
                    
					</p>
					<p className="py-6">
                    I like to learn and make new things. As well as I also love traveling, sight seeing, and reading books in my free time.
                    
					</p>

					<button className="btn bg-gradient-to-t from-pink-600">Get Resume</button>
				</div>
			</div>
		</div>
    );
};

export default About;