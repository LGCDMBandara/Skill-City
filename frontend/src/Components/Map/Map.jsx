import React from 'react';
import './map.css';
import { assets } from '../../assets/assets';

const Map = () => {
    return (
        <div>
            <div className="about-map-container">
                <div className="about-map-left">
                    <h1 className="about-map-title"> Areas of service</h1>
                    <p className="about-map-subtitle">
                        A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                        sentence that introduces the main idea, followed by supporting sentences that provide details,
                        evidence, or examples related to that idea.
                    </p>
                </div>
                <div className="about-map-image">
                    <img src={assets.MapImage} alt="Map Image" />
                </div>
            </div>
        </div>
    );
}

export default Map;
