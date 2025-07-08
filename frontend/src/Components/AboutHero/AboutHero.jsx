import React from 'react';
import './aboutHero.css';
import { assets } from '../../assets/assets';

const AboutHero = () => {
    return (
        <div>
            <div className="about-hero-container">
                <div className="about-hero-left">
                    <h1 className="about-hero-title">About Us</h1>
                    <p className="about-hero-subtitle">
                        With over 15 years of collective experience in the cleaning and facilities management industry, 
                        our senior leadership team brings deep expertise and proven excellence to every project. 
                    </p>
                    <p className="about-hero-paragraph">
                        Operating across multiple states with a large, skilled workforce, we deliver a comprehensive 
                        range of commercial, industrial, and residential cleaning services tailored to meet the highest 
                        standards. From supporting Victoria’s booming construction sector to servicing retail, healthcare, 
                        transport, education, and more — we’ve built a strong reputation for reliability, compliance, 
                        and results. Whether it’s routine office cleaning, specialised flood restoration, or large-scale 
                        venue clean-ups, our team is committed to maintaining safe, spotless environments that exceed client 
                        expectations.
                    </p>
                </div>
                <div className="about-hero-right">
                    <div className="about-hero-image-placeholder">
                        <img src={assets.About} alt="About Us" />
                    </div>
                    <div className="about-hero-squares">
                        <div className="about-hero-square">
                            <p className="about-hero-square-top">150+</p>
                            <p className="about-hero-square-bottom">Projects</p>
                        </div>
                        <div className="about-hero-square">
                            <p className="about-hero-square-top">15+</p>
                            <p className="about-hero-square-bottom">Years of Experience</p>
                        </div>
                        <div className="about-hero-square">
                            <p className="about-hero-square-top">200+</p>
                            <p className="about-hero-square-bottom">Experience Cleaners</p>
                        </div>
                        <div className="about-hero-square">
                            <p className="about-hero-square-top">300+</p>
                            <p className="about-hero-square-bottom">Construction Workers</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default AboutHero;