import React from 'react';
import './otherChange.css';
import { assets } from '../../assets/assets';

const OtherChange = () => {
    return (
        <div>
            <div className="other-change-container">
                <div className="other-change-left">
                    <h1 className="other-change-title">Services That Really Make A Change</h1>
                    <p className="other-change-subtitle">
                        A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                        sentence that introduces the main idea, followed by supporting sentences that provide details,
                        evidence, or examples related to that idea. A concluding sentence may summarize or restate the
                        main idea, bringing the paragraph to a close. Paragraphs are separated by blank lines or indentation,
                        making writing easier to read and understand.
                    </p>
                </div>
                <div className="other-change-right">
                    <div className="other-change-image-placeholder">
                        <img src={assets.OtherChange} alt="Header Image" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default OtherChange;
