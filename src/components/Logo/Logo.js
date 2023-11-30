import React from 'react';
//styles
import "./Logo.css";
import logo from "../../assets/logo.svg";

const Logo = () => {
    return (
        <img src={logo} alt="App logo" className="logo"/>
    );
};

export default Logo;