import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Styles/Index.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink className="navlink" to="/">HOME</NavLink>
            <NavLink className="navlink" to="/about">ABOUT</NavLink>
            <NavLink className="navlink" to="/people">PEOPLE</NavLink>
            <NavLink className="navlink" to="/calendar">CALENDAR</NavLink>
            <NavLink className="navlink" to="/gallery">GALLERY</NavLink>
            <NavLink className="navlink" to="/merchandise">MERCH</NavLink>
            <NavLink className="navlink" to="/contact">CONTACT</NavLink>
            <div className="adminlog"><NavLink className="navlink" to="/adlog">admin</NavLink></div>
            
            
        </div>
    )
}

export default Navbar;
