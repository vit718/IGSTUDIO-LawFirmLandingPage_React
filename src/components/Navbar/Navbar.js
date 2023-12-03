import React, { useState } from 'react';
//components
import Logo from '../Logo/Logo';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
//styles
import "./Navbar.css";
import "../../commonStyles.css";
import Contact from '../Contact/Contact';
const Navbar = () => {
    //states
    const [contactPage, setContactPage] = useState(false);
    const [contactAnimation, setContactAnimation] = useState("pageOut");
    //functions
    const handleContact = ()=>{
        if(!contactPage) setContactPage(true);

        contactAnimation === "pageOut" ? setContactAnimation("pageIn") : setContactAnimation("pageOut");
    }

    return (
        <nav className='common-padding'>
            <a href="/" className='logoSpan'>
                <Logo />
            </a>
            <span className='linksList linksList-large'>
                <a href='#home'>home</a>
                <a href='#attorneys'>attorneys</a>
                <a href='#practiceAreas'>practice areas</a>
                <a href='#about'>about us</a>
            </span>
            <span onClick={handleContact} className='contactUsButtonContainer contactUsButtonContainer-large'>
                <a href="#" className='contactUsButton'>contact us</a>
            </span>
            <NavbarMenu handleContact={handleContact}></NavbarMenu>
            {
                contactPage ? <Contact contactAnimation={contactAnimation} closeForm={handleContact}/> : null
            }
        </nav>
    );
};

export default Navbar;