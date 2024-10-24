import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-section">
        <NavLink className="heading" to="/">
          <div id="devil">Devil's </div>
          <span id="domain">Domain</span>
        </NavLink>
        <ul className="menu-bar">
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/">
              Home
            </NavLink>
            <div className="menu_underline"></div>
          </li>
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/Bollywood">
              Bollywood
            </NavLink>
            <div className="menu_underline"></div>
          </li>
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/Technology">
              Technology
            </NavLink>
            <div className="menu_underline"></div>
          </li>
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/Hollywood">
              Hollywood
            </NavLink>
            <div className="menu_underline"></div>
          </li>
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/Fitness">
              Fitness
            </NavLink>
            <div className="menu_underline"></div>
          </li>
          <li className="menu_list">
            <NavLink style={({ isActive }) => ({ color: isActive ? "#1c3342" : "#dae4e8" })} className="options" to="/Food">
              Food
            </NavLink>
            <div className="menu_underline"></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
