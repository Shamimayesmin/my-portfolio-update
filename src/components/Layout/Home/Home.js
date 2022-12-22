import React from 'react';
import About from '../../Pages/About/About';
import Banner from '../../Pages/Banner/Banner';
import Contact from '../../Pages/Contact/Contact';
import Feature from '../../Pages/Feature/Feature';
import Projects from '../../Pages/Projects/Projects';
import Skills from '../../Pages/Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;