import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {
    useEffect(() => {
		AOS.init();
	}, []);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;