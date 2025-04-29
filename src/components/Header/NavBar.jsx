import React from 'react';
import { NavLink } from 'react-router';
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
        </nav>
    );
};

export default NavBar;