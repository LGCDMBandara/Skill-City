import React from 'react';
import './labourDocumentation.css';
import { assets } from '../../assets/assets';

const LabourDocumentation = () => {
    return (
        <div>
            <div className="labour-documentation-container">
                <div className="labour-documentation-left">
                    <h1 className="labour-documentation-title">How To Hire Labour From Skill City Facility Solutions?</h1>
                    <p className="labour-documentation-subtitle">
                        At Skill City Facility Solutions, we make the labour hire process fast, flexible, and 
                        stress-free. Whether you're a builder, contractor, or site manager, we provide reliable, 
                        site-ready labor tailored to your project needs. Our team handles everything from recruitment 
                        to compliance, so you can stay focused on the build.
                    </p>
                    <button className='labour-documentation-btn'>Download</button>
                </div>
                <div className="labour-documentation-right">
                    <div className="labour-documentation-image-placeholder">
                        <img src={assets.ImageDocumentation} alt="Header Image" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default LabourDocumentation;
