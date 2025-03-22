import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Gamal</h1>
                <ul className='footer__list'>
                    <li>
                        <a href="#about" className='footer__links'>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#portfolio" className='footer__links'>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#testimonial" className='footer__links'>
                            Testimonial
                        </a>
                    </li>

                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/gamalahmed3265/" className='footer__social-icon' target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-square-facebook"></i>
                    </a>
                    <a href="https://twitter.com/gamalahmmed7264" className='footer__social-icon' target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/gamalahmed3265/#" className='footer__social-icon' target='_blank' rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    <span>Gamal Ahmed</span>

                    &#169; Crypticalcoder. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;