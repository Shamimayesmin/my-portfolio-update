import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProjectCard = (project) => {
    const {id,name,img,text1,text2,text3,text4 } = project.project

    const navigateBtn = useNavigate()
    const handleNaviateBtn = () =>{
        navigateBtn(`/details/${id}`)
    }
    return (
        <div>
            <div data-aos="zoom-in-right" className="card card-compact bg-base-300 shadow-2xl">
					<figure>
						<img src={img} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">{name}</h2>
						<p>1.{text1}</p>
						<p>2.{text2}</p>
						<p>3.{text3}</p>
						<p>4.{text4}</p>
						<div className="card-actions justify-end">
{/* 							
							<Link to={`/details/${id}`}>
                            <button className="btn bg-gradient-to-t from-pink-600 ">View Details<FaArrowRight className="ml-2"/></button>
					</Link> */}
                    <button onClick={handleNaviateBtn} className="btn bg-gradient-to-t from-pink-600 ">View Details<FaArrowRight className="ml-2"/></button>
						</div>
					</div>
				</div> 
        </div>
    );
};

export default ProjectCard;