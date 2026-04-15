import React from 'react';
import Navbar from '../component/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/shared/Footer';

const RootLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default RootLayout;