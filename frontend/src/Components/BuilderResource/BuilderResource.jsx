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
Skill City’s builder’s cleaning is a thorough 3-step process, ensuring your construction site stays safe and clean from start to handover. We work closely with builders to deliver spotless, ready resultss
                    </p>
                    <button className='book-btn'>Download Documentation</button>
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
