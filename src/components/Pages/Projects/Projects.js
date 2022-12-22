import React, { useEffect, useState } from 'react';

import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setProjects(data));
	}, []);
	
    return (
        <div className="my-40">
        <h1 className="text-xl font-serif text-center m-2 font-bold text-pink-600">
          Projects
        </h1>
        <h2 className="text-5xl font-serif text-center font-bold">
          My Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 m-10">
          
        {
				projects.map((project)=><ProjectCard key={project.id} project={project}></ProjectCard>)
			}
        </div>
      </div>
    );
};

export default Projects;