import React, { useState } from 'react';
import logo from "../../assets/works/logo.png"
import "./header.css";
import { motion } from "framer-motion"
import { headerVariants } from '../motion/motion';
function whenScrollHeader() {
    let scrollup = document.querySelector(".header");
    if (this.scrollY >= 550) {
        scrollup.classList.add("show-scroll");
    }
    else {
        scrollup.classList.remove("show-scroll");
    }
}
const Header = () => {
    window.addEventListener("scroll", whenScrollHeader);
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (<motion.header className='header' variants={headerVariants}>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo'>
                <img src={logo} alt='' width={60} height={60} />
            </a>

            <div className={Toggle ? 'nav__menu show__menu' : 'nav__menu'}>
                <ul className='nav__list'>
                    <li className={activeNav === "#home" ?
                        'nav_link active-link' :
                        'nav_link'} onClick={() => setActiveNav("#home")}>
                        <a href="#home" className='nav_link active-link'>
                            <i className="fa-solid fa-house nav__icon"></i>
                            Home
                        </a>
                    </li>
                    <li className='nav_item'>
                        <a href="#about"
                            className={activeNav === "#about" ?
                                'nav_link active-link' :
                                'nav_link'} onClick={() => setActiveNav("#about")}>
                            <i className="fa-solid fa-user nav__icon"></i>
                            About
                        </a>
                    </li>
                    <li className='nav_item'>
                        <a href="#skills" className={activeNav === "#skills" ?
                            'nav_link active-link' :
                            'nav_link'} onClick={() => setActiveNav("#skills")}>
                            <i className="fa-solid fa-file-pen nav__icon"></i>
                            Skills
                        </a>
                    </li>
                    <li className='nav_item'>
                        <a href="#service" className={activeNav === "#service" ?
                            'nav_link active-link' :
                            'nav_link'} onClick={() => setActiveNav("#service")}>
                            <i className="fa-solid fa-cake-candles nav__icon"></i>
                            Service
                        </a>
                    </li>
                    <li className='nav_item'>
                        <a href="#portfolio" className={activeNav === "#portfolio" ?
                            'nav_link active-link' :
                            'nav_link'} onClick={() => setActiveNav("#portfolio")}>
                            <i className="fa-solid fa-image nav__icon"></i>
                            Portfolio
                        </a>
                    </li>
                    <li className='nav_item'>
                        <a href="#contact" className={activeNav === "#contact" ?
                            'nav_link active-link' :
                            'nav_link'} onClick={() => setActiveNav("#contact")}>
                            <i className="fa-solid fa-comment nav__icon"></i>
                            Contact
                        </a>
                    </li>

                </ul>
                <i className="fa-solid fa-xmark nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                <i className="fa-solid fa-list-ul"></i>
            </div>
        </nav>
    </motion.header>
    );
}

export default Header