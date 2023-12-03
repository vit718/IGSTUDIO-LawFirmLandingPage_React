import React from 'react';
//styles and assets
import "./Footer.css";
import "../../commonStyles.css";
import instagram from "../../assets/Iconinstagram.svg"
import facebook from "../../assets/Iconfacebook.svg"
import twitter from "../../assets/Icontwitter.svg"
import pintrest from "../../assets/Iconpintrest.svg"
//components
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <footer className="common-padding footer">
            <section className='footer-top'>
                <a href="/" className='footerLogo logoSpan'>
                    <Logo />
                </a>
                <span className='linksList linksList-large footerLinksList'>
                    <a href='#'>home</a>
                    <a href='#attorneys'>attorneys</a>
                    <a href='#practiceAreas'>practice areas</a>
                    <a href='#about'>about us</a>
                </span>
                <span className='iconsList iconsList-large'>
                    <a href='#'>
                        <img src={instagram} alt='instagram icon' />
                    </a>
                    <a href='#'>
                        <img src={facebook} alt='facebook icon' />
                    </a>
                    <a href='#'>
                        <img src={twitter} alt='twitter icon' />
                    </a>
                    <a href='#'>
                        <img src={pintrest} alt='pintrest icon' />
                    </a>
                </span>
            </section>
            <section className='footer-bottom'>
                <span>© 2020 Acme. All right reserved.</span>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </section>
        </footer>
    );
};

export default Footer;