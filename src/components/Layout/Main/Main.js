import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../../Pages/Footer/Footer';
const Main = () => {
    useEffect(() => {
		AOS.init();
	}, []);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;