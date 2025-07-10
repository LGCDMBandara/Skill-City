import React, { useRef, useState, useEffect } from 'react';
import './license.css';
import logo from '../../JSON/Logo';

const License = () => {
    return (
        <div>
            {/* <div className="about-license-container">
                <div className="about-license-left">
                    <h1 className="about-license-title">License and Expertise</h1>
                    <p className="about-license-subtitle">
                        A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                        sentence that introduces the main idea, followed by supporting sentences that provide details,
                        evidence, or examples related to that idea.
                    </p>
                </div>
            </div> */}
            {/* <div className="about-licence-logo">
                    {logo.map((item) => (
                        <div key={item._id} className="about-licence-logo-item">
                            <img
                                src={item.image}
                                className="about-licence-logo-image"
                            />
                        </div>
                    ))}
            </div> */}
            <hr />
        </div>
    );
}

export default License;