import React from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./Styles/Index.css";
import useAuthContext from "../hooks/useAuthContext";
import { Button } from "@mui/material";
import { Avatar } from "@material-ui/core";

const Navbar = (props) => {
  const { isLogged, setIsLogged, logout, user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <NavLink className="navlink" exact={true} to="/">
        HOME
      </NavLink>
      <NavLink className="navlink" to="/about">
        ABOUT
      </NavLink>
      <NavLink className="navlink" to="/people">
        PEOPLE
      </NavLink>
      <NavLink className="navlink" to="/calendar">
        CALENDAR
      </NavLink>
      <NavLink className="navlink" to="/gallery">
        GALLERY
      </NavLink>
      <NavLink className="navlink" to="/merchandise">
        MERCH
      </NavLink>
      <NavLink className="navlink" to="/contact">
        CONTACT
      </NavLink>
      <div className="adminlog">
        <NavLink className="navlink" to="/adlog">
          admin
        </NavLink>
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
