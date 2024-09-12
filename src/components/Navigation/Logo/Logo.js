import React from "react";
import "./logo.css"
import logo from "./img/logo.png"

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo tmdb" />
        </div>
    );

};

export default Logo;