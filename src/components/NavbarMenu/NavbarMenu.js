import React, { useState } from 'react';
//styles and assetes
import menuButton from "../../assets/navbarMenu.svg"
import './NavbarMenu.css'
const NavbarMenu = () => {
    //states
    const [menuPosition, setMenuPosition] = useState("");
    //functions
    const handleClick = ()=>{
        setMenuPosition(pre=> pre === "menuCentre" ? "menuRight" : "menuCentre");
    }

    return (
        <>
        <section className='menuButton'>
            <img
            src={menuButton}
            alt="menu button"
            className={""}
            onClick={handleClick}
            />
        </section>
        <section className={`menuItems ${prompt.className}`}>
            <a href="/" className={`menuLink menuLink1  ${menuPosition}`}>Home</a>
            <a href="/attorneys"  className={`menuLink menuLink2  ${menuPosition}`}>attorneys</a>
            <a href="/practiceAreas"  className={`menuLink menuLink3  ${menuPosition}`}>practice Areas</a>
            <a href="/about"  className={`menuLink menuLink4  ${menuPosition}`}>about</a>
            <a href="/contact"  className={`menuLink menuLink5  ${menuPosition}`}>Contact us</a>
            <section onClick={handleClick} className={`dummyForNavbarMenu ${menuPosition}`}></section>
        </section>
        </>
    );
};

export default NavbarMenu;