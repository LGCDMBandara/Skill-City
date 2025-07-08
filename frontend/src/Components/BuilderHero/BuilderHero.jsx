import React from 'react';
import './builderHero.css';
import { assets } from '../../assets/assets';
import { MdKeyboardArrowRight } from "react-icons/md";

const BuilderHero = () => {
    return (
        <div>
            <div className="builder-hero-container">
                <div className="builder-hero-left">
                    <p className="builder-hero-path">
                        <span className="underline-text">Home</span>
                        <MdKeyboardArrowRight />
                        <span className="underline-text">Products</span>
                        <MdKeyboardArrowRight />
                        <span className="underline-text">Services</span>
                        <MdKeyboardArrowRight />
                        <span className='builder-hero-path-end'>Builders Cleaning</span>
                    </p>
                    <h1 className="builder-hero-title">Complete Construction Site Cleaning – From First Brick to Final Handover</h1>
                    <p className="builder-hero-subtitle">
                        At Skill City Facility Solutions, we provide professional Builder’s Cleaning Services tailored 
                        to meet the specific needs of residential, commercial, and industrial construction sites across 
                        Melbourne and regional Victoria. Our cleaning solutions are designed to maintain cleanliness, safety, 
                        and presentation throughout the building process — from the early stages of construction through to 
                        the final client handover.
                    </p>
                    <br />
                    <p className="builder-hero-subtitle">
                        We understand the high standards expected by builders, developers, and 
                        property owners, and we deliver a consistent, high-quality service that ensures every project is 
                        clean, safe, and handover ready.
                    </p>
                </div>
                <div className="builder-hero-right">
                    <div className="builder-hero-image-placeholder">
                        <img src={assets.BuilderHeader} alt="Header Image" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default BuilderHero;
