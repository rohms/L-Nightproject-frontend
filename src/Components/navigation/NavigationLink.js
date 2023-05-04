import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const NavigationLink = ({ path, label, isActive }) => {
  const navLinkClasses = classNames("navlink", { active: isActive });

  return (
    <NavLink className={navLinkClasses} to={path} tabIndex="0">
      {label}
    </NavLink>
  );
};

export { NavigationLink };
