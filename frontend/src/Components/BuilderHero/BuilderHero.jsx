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
                    <h1 className="builder-hero-title">Full-Site Cleaning – From Construction Start to Handover</h1>
                    <p className="builder-hero-subtitle">
Skill City offers expert Builder’s Cleaning for residential, commercial, and industrial sites across Melbourne and regional Victoria. We keep sites clean, safe, and handover-ready from construction start to finish.
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
