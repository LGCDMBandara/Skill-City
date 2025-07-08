import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './footer.css';
import { assets } from '../../assets/assets';
import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (path, sectionId) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(`${path}#${sectionId}`);
    };

    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.Logo} alt="Logo" />
                    <p><b>Skill City Facility Solutions –</b> Your trusted partner for comprehensive cleaning and maintenance services across Victoria. With 5+ years of industry expertise, we deliver exceptional builders cleaning, commercial, industrial, and specialized cleaning solutions tailored to your unique facility needs.</p>
                </div>

                <div className="footer-content-center-company">
                    <h2>How It Works</h2>
                    <ul>
                        <li>
                            <div
                                onClick={() => scrollToSection('/builders', 'builder-resource')}
                                style={{ cursor: 'pointer', color: 'inherit' }}
                            >
                                Builders Cleaning
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => scrollToSection('/labours', 'labour-documentation')}
                                style={{ cursor: 'pointer', color: 'inherit' }}
                            >
                                Construction Labour
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="footer-content-center-quick">
                    <h2>Quick Link</h2>
                    <ul>
                        <li>
                            <NavLink
                                to="/pricing"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={scrollToTop}
                            >
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/resources"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={scrollToTop}
                            >
                                Resources
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>Subscribe</h2>
                    <div className="subscribe-wrapper">
                        <input
                            type="text"
                            className="subscribe-input"
                            placeholder="Enter email"
                        />
                        <button className="subscribe-button" type="button">Subscribe</button>
                    </div>
                </div>
            </div>

            <hr />
            <div className="footer-bottom">
                <p className="footer-copyright">
                    Copyright © 2024 Skill City. All Rights Reserved.
                </p>
                <div className="footer-social-icons">
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='footer-icons' />
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='footer-icons' />
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='contacts-icons' />
                    </a>
                    <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className='footer-icons' />
                    </a>
                    <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className='contacts-icons' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;