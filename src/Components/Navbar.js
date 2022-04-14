import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Styles/Index.css";
import useAuthContext from "../hooks/useAuthContext";
import { Button } from "@mui/material";
import { Avatar } from "@material-ui/core";
import lnights from "../Images/lnightsmall.png";
import lnightxs from "../Images/lnightexs.png";
import "./Styles/Style.css";

const Navbar = (props) => {
  const { isLogged, setIsLogged, logout, user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <NavLink className="" exact={true} to="/">
        <img src={lnights} className="lnightlogo" alt="L-Night Berlin Group" />
      </NavLink>
      <div className="menu">
        <NavLink className="navlink nav" to="/about">
          ABOUT
        </NavLink>
        <NavLink className="navlink nav" to="/people">
          PEOPLE
        </NavLink>
        <NavLink className="navlink nav" to="/calendar">
          CALENDAR
        </NavLink>
        <NavLink className="navlink nav" to="/gallery">
          GALLERY
        </NavLink>
        <NavLink className="navlink nav" to="/merchandise">
          MERCH
        </NavLink>
        <NavLink className="navlink nav" to="/contact">
          CONTACT
        </NavLink>
        <div className="adminlog">
          <NavLink className="adminlog" to="/adlog">
            ADMIN
          </NavLink>
        </div>
      </div>

      {isLogged ? (
        <Button id="logout" onClick={logout}>
          Logout
        </Button>
      ) : null}
    </div>
  );
};

export default Navbar;
