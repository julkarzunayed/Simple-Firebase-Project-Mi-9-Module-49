import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <nav>
            <NavLink to={"/"}>Home</NavLink>
        </nav>
    );
};

export default NavBar;