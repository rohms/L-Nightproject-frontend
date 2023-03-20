import React, { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Styles/Index.css";
import useAuthContext from "../hooks/useAuthContext";
import { Button } from "@mui/material";
import { Avatar } from "@mui/joy/Avatar";
import lnights from "../Images/lnightsmall.png";
import lnightexs from "../Images/lnightexs.png";

import "./Styles/Style.css";
import classnames from "classnames";
import { default as CloseIcon } from "@mui/icons-material/Close";
import { default as MenuIcon } from "@mui/icons-material/Menu";

const Navbar = (props) => {
  const { isLogged, setIsLogged, logout, user } = useAuthContext();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className="navbar">
      <NavLink className="lnightlogo" to="/">
        <img
          src={active ? lnightexs : lnights}
          alt="L-Night Berlin Group"
          onClick={() => setActive(false)}
        />
      </NavLink>
      <div className="menu-icon">
        <MenuIcon className="menu" onClick={toggleMenu} />
      </div>
      <nav className={active ? "slider active" : "slider"}>
        <ul>
          <div className="closed">
            <CloseIcon className="close" onClick={toggleMenu} />
          </div>
          <li>
            <NavLink
              className="navlink nav"
              to="/about"
              onClick={() => setActive(false)}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink nav"
              to="/people"
              onClick={() => setActive(false)}
            >
              PEOPLE
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink nav"
              to="/calendar"
              onClick={() => setActive(false)}
            >
              CALENDAR
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink nav"
              to="/gallery"
              onClick={() => setActive(false)}
            >
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink nav"
              to="/merchandise"
              onClick={() => setActive(false)}
            >
              MERCH
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink nav"
              to="/contact"
              onClick={() => setActive(false)}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink to="/adlog" onClick={() => setActive(false)}>
              <i className="fas fa-toolbox"></i>
            </NavLink>
          </li>
        </ul>
        {isLogged ? (
          <Button id="logout" onClick={logout}>
            Logout
          </Button>
        ) : null}
        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
