import React from 'react';
import './labourAvailable.css';
import { assets } from '../../assets/assets';

const LabourAvailable = () => {
    return (
        <div>
            <div className="labour-available-container">
                <div className="labour-available-left">
                    <h1 className="labour-available-title">Australia-Wide Availability</h1>
                    <p className="labour-available-subtitle">
                        Blog Link
                    </p>
                </div>
                <div className="labour-available-right">
                    <div className="labour-available-image-placeholder">
                        <img src={assets.AvailableImage} alt="Header Image" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default LabourAvailable;
