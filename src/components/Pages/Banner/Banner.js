import React from 'react';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import bgb from '../../../assets/images/wave-haikei (3).png'
import {  Cursor, useTypewriter } from 'react-simple-typewriter'


const Banner = () => {
  const [text] = useTypewriter({
    words: ['Front-End Developer.', 'MERN Stack Developer.', 'React Developer.','JavaScript Developer.'],
    loop: false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
    return (
        <section
        id="home"
        style={{
          backgroundImage: `url(${bgb})`,
          backgroundSize: "cover",
        }}
        className="dark:bg-gray-800 dark:text-gray-100 text-white rounded-lg"
      >
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="flex lg:w-1/2 flex-col justify-center p-6 text-center rounded-sm xl:max-w-lg lg:text-left">
            <div className="text-3xl flex justify-start gap-12 py-3 mb-4">
              <a href="https://www.facebook.com/profile.php?id=100080019489287">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://www.linkedin.com/in/shamima-yesmin10/">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="https://github.com/Shamimayesmin">
                <FaGithub></FaGithub>
              </a>
            </div>
            <h2 className="text-2xl font-serif">
              Hello, I'M{" "}
              <span className="text-pink-500 font-bold font-serif">Shamima</span>
            </h2>
            <h2 className="text-4xl font-serif">
             <span>{text}</span>
            <Cursor cursorColor='red' />
            </h2>
            
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="shamima_yesmin_resume (1).pdf"
                download="Shamima's resume pdf"
                className="px-8 py-3 text-lg font-semibold border  rounded dark:bg-violet-400 dark:text-gray-900 bg-gradient-to-t from-pink-600"
              >
                <button className="flex justify-center items-center">
                  <p>Get Resume </p>
                  <span className="ml-2">
                    <FaDownload></FaDownload>
                  </span>
                </button>
              </a>
              <Link
                rel="noopener noreferrer"
                to="/contact"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 bg-gradient-to-t from-pink-600"
              >
                Contact Me
              </Link>
            </div>
          </div>
  
          <div className="flex items-center justify-center mt-8 lg:mt-0  sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "></div>
        </div>
      </section>
    );
};

export default Banner;