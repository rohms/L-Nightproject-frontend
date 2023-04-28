import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Styles/Index.css";
import { useAuthContext } from "../hooks/useAuthContext";
import lnights from "../Images/lnightsmall.png";
import lnightexs from "../Images/lnightexs.png";

import "./Styles/Style.css";
import { default as CloseIcon } from "@mui/icons-material/Close";
import { default as MenuIcon } from "@mui/icons-material/Menu";

const Navbar = (props) => {
  const { isLogged, logout } = useAuthContext();
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className="navbar">
      <NavLink className="lnightlogo" to="/" tabIndex="0">
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
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink nav"
              to="/people"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              PEOPLE
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink nav"
              to="/calendar"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              CALENDAR
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink nav"
              to="/gallery"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink nav"
              to="/merchandise"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              MERCH
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink nav"
              to="/contact"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink to="/adlog" tabIndex="0" onClick={() => setActive(false)}>
              <i className="fas fa-toolbox"></i>
            </NavLink>
          </li>
          <li className="nav-logout">
            {isLogged ? (
              <button id="logout" onClick={logout}>
                Logout
              </button>
            ) : null}
          </li>
        </ul>

        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
