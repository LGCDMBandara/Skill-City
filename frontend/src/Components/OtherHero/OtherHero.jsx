import React from 'react';
import './otherHero.css';
import { assets } from '../../assets/assets';
import { MdKeyboardArrowRight } from "react-icons/md";

const OtherHero = () => {
    return (
        <div>
            <div className="other-hero-container">
                <div className="other-hero-left">
                    <p className="other-hero-path">
                        <span className="underline-text">Home</span>
                        <MdKeyboardArrowRight />
                        <span className="underline-text">Products</span>
                        <MdKeyboardArrowRight />
                        <span className="underline-text">Services</span>
                        <MdKeyboardArrowRight />
                        <span className='other-hero-path-end'>Other Cleaning Services</span>
                    </p>
                    <h1 className="other-hero-title">Comprehensive Cleaning Solutions for Every Environment</h1>
                    <p className="other-hero-subtitle">
                        At Skill City Facility Solutions, our expertise goes beyond construction. We proudly 
                        offer a wide range of commercial, residential, and specialised cleaning services to support 
                        businesses, institutions, and homeowners across Melbourne and regional Victoria. With 
                        industry-trained staff, high-grade equipment, and a commitment to excellence, we deliver 
                        tailored solutions that meet the highest hygiene and presentation standards.
                    </p>
                </div>
                <div className="other-hero-right">
                    <div className="other-hero-image-placeholder">
                        <img src={assets.OtherHeader} alt="Header Image" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default OtherHero;
