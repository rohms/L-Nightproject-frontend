import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Styles/Index.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink className="navlink" to="/">Homepage</NavLink>
            <NavLink className="navlink" to="/about">About</NavLink>
            <NavLink className="navlink" to="/people">People</NavLink>
            <NavLink className="navlink" to="/calendar">Calendar</NavLink>
            <NavLink className="navlink" to="/gallery">Gallery</NavLink>
            <NavLink className="navlink" to="/merchandise">Merch</NavLink>
            <NavLink className="navlink" to="/contact">Contact</NavLink>
            <div className="adminlog"><NavLink className="navlink" to="/adlog">admin</NavLink></div>
            
            
        </div>
    )
}

export default Navbar;
