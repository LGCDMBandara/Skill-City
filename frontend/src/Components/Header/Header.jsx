import React from 'react';
import './header.css';
import { assets } from '../../assets/assets';

const Header = () => {
    return (
        <div>
            <div className="hero-container">
                <div className="hero-left">
                    <h1 className="hero-title">Welcome to Skill City Facility Solutions</h1>
                    <p className="hero-subtitle">
                        Your trusted partner in comprehensive cleaning and labour services across Victoria. 
                        We specialise in builder’s cleaning, construction labour hire, and a wide range of commercial, 
                        industrial, and residential cleaning solutions. With a commitment to quality, reliability, 
                        and safety, Skill City delivers tailored facility support that meets the highest industry 
                        standards—no matter the size or scope of your project.
                    </p>
                </div>
                <div className="hero-right">
                    <div className="hero-image-placeholder">
                        <img src={assets.HeaderImage} alt="Header Image" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;