import React, { useState } from 'react';
import "./header.css";
const Header = () => {

    const [Toggle,showMenu]=useState(false);
    return (<header className='header'>
            <nav className='nav container'>
                <a href="index.html" className='nav__logo'>Gamal</a>

                <div className={Toggle ?'nav__menu show__menu': 'nav__menu'}>
                    <ul className='nav__list'>
                        <li className='nav_item'>
                            <a href="#home" className='nav_link active-link'>
                                <i className="fa-solid fa-house nav__icon"></i>
                                Home
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#about" className='nav_link'>
                                <i className="fa-solid fa-user nav__icon"></i>
                                About
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#skills" className='nav_link'>
                                <i className="fa-solid fa-file-pen nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#service" className='nav_link'>
                                <i className="fa-solid fa-cake-candles nav__icon"></i>
                                Service
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#portfolio" className='nav_link'>
                                <i className="fa-solid fa-image nav__icon"></i>
                                Portfolio
                            </a>
                        </li>
                        <li className='nav_item'>
                            <a href="#contact" className='nav_link'>
                                <i className="fa-solid fa-comment nav__icon"></i>
                                Contact
                            </a>
                        </li>

                    </ul>
                    <i className="fa-solid fa-xmark nav__close" onClick={()=>showMenu(!Toggle)}></i>
                </div>
                <div className='nav__toggle' onClick={()=>showMenu(!Toggle)}>
                    <i className="fa-solid fa-list-ul"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header