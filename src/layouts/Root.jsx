import React from 'react';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';
import NavBar from '../components/Header/NavBar';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Root;