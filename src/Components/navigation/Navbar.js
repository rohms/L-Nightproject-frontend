import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import lnights from "../../Images/lnightsmall.png";
import lnightexs from "../../Images/lnightexs.png";
import { default as CloseIcon } from "@mui/icons-material/Close";
import { default as MenuIcon } from "@mui/icons-material/Menu";
import { default as LoginIcon } from "@mui/icons-material/Login";
import classNames from "classnames";
import { NavigationLink } from "./NavigationLink";
import { navLinks } from "./NavLinks";

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
      <nav className={classNames("slider", { active: active })}>
        <ul>
          <div className="closed">
            <CloseIcon className="close" onClick={toggleMenu} />
          </div>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavigationLink
                className={(navData) =>
                  navData.isActive ? "navlink active" : "navlink"
                }
                path={link.path}
                label={link.title}
                isActive={(match, location) => location.pathname === link.to}
                onClick={() => setActive(false)}
              >
                {link.title}
              </NavigationLink>
            </li>
          ))}
        </ul>
        <div className="nav-logging">
          {isLogged ? (
            <button id="logout" onClick={logout}>
              Logout
            </button>
          ) : (
            <NavLink
              className="login-link"
              to="/adlog"
              tabIndex="0"
              onClick={() => setActive(false)}
            >
              <LoginIcon />
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
