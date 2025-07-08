import React from 'react';
import './labourHero.css';
import { assets } from '../../assets/assets';
import { MdKeyboardArrowRight } from "react-icons/md";

const LabourHero = () => {
    return (
        <div>
            <div className="labour-hero-container">
                <div className="labour-hero-left">
                    <p className="labour-hero-path">
                        <span className="underline-text">Home</span>
                        <MdKeyboardArrowRight />
                        <span className="underline-text">Products</span>
                        <MdKeyboardArrowRight />
                        <span className="underline-text">Services</span>
                        <MdKeyboardArrowRight />
                        <span className='labour-hero-path-end'> Construction Labour</span>
                    </p>
                    <h1 className="labour-hero-title"> Reliable, Skilled Labour When And Where You Need It</h1>
                    <p className="labour-hero-subtitle">
                        At Skill City Facility Solutions, we supply qualified and experienced skilled labourers 
                        to construction sites across Melbourne and regional Victoria. Our workforce is trained, 
                        safety-compliant, and ready to integrate seamlessly with your site team — ensuring your 
                        project stays on time and on budget.
                    </p>
                    <p className="labour-hero-subtitle">
                        We understand the dynamic and demanding nature of the construction industry. 
                        Whether you need short-term support, long-term placements, or urgent labour cover, 
                        Skill City provides dependable workers who get the job done right.
                    </p>
                </div>
                <div className="labour-hero-right">
                    <div className="labour-hero-image-placeholder">
                        <img src={assets.LabourHeader} alt="Header Image" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default LabourHero;
