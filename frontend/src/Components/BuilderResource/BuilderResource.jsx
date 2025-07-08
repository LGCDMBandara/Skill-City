import React from 'react';
import './builderResource.css';
import { assets } from '../../assets/assets';

const BuilderResource = () => {
    return (
        <div>
            <div className="builder-documentation-container">
                <div className="builder-documentation-left">
                    <h1 className="builder-documentation-title">Builders Cleaning Process by Skill City Facility Solutions</h1>
                    <p className="builder-documentation-subtitle">
                        At Skill City Facility Solutions, our builder’s cleaning service is a structured and thorough 
                        3-step process designed to support construction projects from the early building stages to 
                        final handover. We ensure your site remains safe, clean, and presentable at every phase, 
                        working closely with builders and site managers to deliver spotless, handover-ready results.
                    </p>
                    <button className='builder-documentation-btn'>Download</button>
                </div>
                <div className="builder-documentation-right">
                    <div className="builder-documentation-image-placeholder">
                        <img src={assets.ResourceImage} alt="Header Image" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default BuilderResource;
