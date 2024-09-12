import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import Logo from "./Logo/Logo";

const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                <Logo />
            </NavLink>
            <ul className="nav-links">
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>ACCUEIL</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A PROPOS</li>
                </NavLink>
            </ul>



        </nav >
    );
};

export default Navigation;