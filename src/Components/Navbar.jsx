import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Components/images/Logo.png";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" width="120px" />
        </NavLink>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activenav" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-quizzes"
              className={({ isActive }) => (isActive ? "activenav" : "")}
            >
              My Quizzes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
