import React from 'react';
import { FaBootstrap, FaCss3, FaCss3Alt, FaHtml5, FaJs, FaNode, FaReact,} from 'react-icons/fa';
import { SiReactrouter,SiFirebase ,SiMongodb,SiExpress} from "react-icons/si";

const Skills = () => {
    return (
        <div className="mt-40">
        <h3 className="text-center font-bold text-lg font-serif text-pink-500 mt-11">Skills</h3>
                <h2 className="text-4xl text-center font-bold font-serif">Fully comfortable with</h2>
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
                
                <div className="flex flex-wrap justify-center lg:justify-between text-8xl">
                    <FaHtml5 className="text-red-400"></FaHtml5>
                    <FaReact className="text-blue-400"></FaReact>
                    
                    <FaBootstrap className="text-purple-400"></FaBootstrap>
                    <FaJs className="text-yellow-400"></FaJs>
                    <SiReactrouter className="text-red-500"></SiReactrouter>
                    <FaCss3Alt className="text-sky-400"></FaCss3Alt>
                    
                    <FaNode className="text-green-400"></FaNode>
                    
                    <SiFirebase className="text-amber-700"></SiFirebase>
                    <SiMongodb className="text-green-500"></SiMongodb>
                    <SiExpress className="text-white"></SiExpress>
                    
                </div>
            </div>
        </section>
    </div>
    );
};

export default Skills;