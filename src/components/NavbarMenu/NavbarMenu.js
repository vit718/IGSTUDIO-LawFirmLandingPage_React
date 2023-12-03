import React, { useState } from 'react';
//styles and assetes
import menuButton from "../../assets/navbarMenu.svg"
import './NavbarMenu.css'
const NavbarMenu = () => {
    //states
    const [menuPosition, setMenuPosition] = useState("");
    //functions
    const handleClick = ()=>{
        console.log("aaaa")
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
            <a onClick={handleClick} href="#home" className={`menuLink menuLink1  ${menuPosition}`}>Home</a>
            <a onClick={handleClick} href="#attorneys"  className={`menuLink menuLink2  ${menuPosition}`}>attorneys</a>
            <a onClick={handleClick} href="#practiceAreas"  className={`menuLink menuLink3  ${menuPosition}`}>practice Areas</a>
            <a onClick={handleClick} href="#about"  className={`menuLink menuLink4  ${menuPosition}`}>about</a>
            <a onClick={handleClick} href="#"  className={`menuLink menuLink5  ${menuPosition}`}>Contact us</a>
            <section onClick={handleClick} className={`dummyForNavbarMenu ${menuPosition}`}></section>
        </section>
        </>
    );
};

export default NavbarMenu;