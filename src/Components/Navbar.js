import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import lnights from "../Images/lnightsmall.png";
import lnightexs from "../Images/lnightexs.png";
import { default as CloseIcon } from "@mui/icons-material/Close";
import { default as MenuIcon } from "@mui/icons-material/Menu";
import { default as LoginIcon } from "@mui/icons-material/Login";

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
              className={(navData) =>
                navData.isActive ? "navlink active" : "navlink"
              }
              to="/about"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navlink active" : "navlink"
              }
              to="/people"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              PEOPLE
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navlink active" : "navlink"
              }
              to="/calendar"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              CALENDAR
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navlink active" : "navlink"
              }
              to="/gallery"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navlink active" : "navlink"
              }
              to="/merchandise"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              MERCH
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                navData.isActive ? "navlink active" : "navlink"
              }
              to="/contact"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              CONTACT
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
        <NavLink
          className="login-link"
          to="/adlog"
          tabIndex="0"
          onClick={() => setActive(false)}
        >
          <LoginIcon />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
