import React from 'react';
//components
import Logo from '../Logo/Logo';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
//styles
import "./Navbar.css";
import "../../commonStyles.css";
const Navbar = () => {
    return (
        <nav className='common-padding'>
            <a href="/" className='logoSpan'>
                <Logo />
            </a>
            <span className='linksList linksList-large'>
                <a href='#'>home</a>
                <a href='#attorneys'>attorneys</a>
                <a href='#practiceAreas'>practice areas</a>
                <a href='#about'>about us</a>
            </span>
            <span className='contactUsButtonContainer contactUsButtonContainer-large'>
                <a href="/contact" className='contactUsButton'>contact us</a>
            </span>
            <NavbarMenu ></NavbarMenu>
        </nav>
    );
};

export default Navbar;