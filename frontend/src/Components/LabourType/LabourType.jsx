import React, { useEffect, useRef, useState } from 'react';
import './labourType.css';
import { assets } from '../../assets/assets';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const LabourType = () => {
    const scrollRef = useRef(null);
    const [scrollDistance, setScrollDistance] = useState(450);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setScrollDistance(310);
            } else if (window.innerWidth <= 768) {
                setScrollDistance(300);
            } else {
                setScrollDistance(450);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -scrollDistance,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollDistance,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            <div className="labour-type-container">
                <div className="labour-type-left">
                    <h1 className="labour-type-title">Types of Labour We Provide</h1>
                </div>
            </div>
            <div className="labour-type-navigation">
                <button className="labour-type-arrow left-arrow" onClick={scrollLeft}>
                    <MdKeyboardArrowLeft />
                </button>
                <div className="labour-type-items" ref={scrollRef}>
                    <div className="labour-type-item-container">
                        <div className="labour-type-item-left">
                            <h1 className="labour-type-item-title">General Labourers</h1>
                            <p className="labour-type-item-description">For site clean-up, materials handling, and basic support tasks.</p>
                        </div>
                        <div className="labour-type-item-right">
                            <div className="labour-type-item-image-placeholder">
                                <img src={assets.LabourTypeImage1} alt="Header Image" />
                            </div>
                        </div>
                    </div>
                    <div className="labour-type-item-container">
                        <div className="labour-type-item-left">
                            <h1 className="labour-type-item-title">Trade Assistants</h1>
                            <p className="labour-type-item-description">Assisting carpenters, electricians, plumbers, and other trades.</p>
                        </div>
                        <div className="labour-type-item-right">
                            <div className="labour-type-item-image-placeholder">
                                <img src={assets.LabourTypeImage2} alt="Header Image" />
                            </div>
                        </div>
                    </div>
                    <div className="labour-type-item-container">
                        <div className="labour-type-item-left">
                            <h1 className="labour-type-item-title">Concrete Labourers & Formworkers</h1>
                            <p className="labour-type-item-description">For pouring, setting, and steel fixing.</p>
                        </div>
                        <div className="labour-type-item-right">
                            <div className="labour-type-item-image-placeholder">
                                <img src={assets.LabourTypeImage3} alt="Header Image" />
                            </div>
                        </div>
                    </div>
                    <div className="labour-type-item-container">
                        <div className="labour-type-item-left">
                            <h1 className="labour-type-item-title">Demolition & Strip-Out Crews</h1>
                            <p className="labour-type-item-description">Safe removal of internal structures and site preparation.</p>
                        </div>
                        <div className="labour-type-item-right">
                            <div className="labour-type-item-image-placeholder">
                                <img src={assets.LabourTypeImage4} alt="Header Image" />
                            </div>
                        </div>
                    </div>
                    <div className="labour-type-item-container">
                        <div className="labour-type-item-left">
                            <h1 className="labour-type-item-title">Skilled Power Tool Operators</h1>
                            <p className="labour-type-item-description">Proficient with jackhammers, grinders, saws, and more.</p>
                        </div>
                        <div className="labour-type-item-right">
                            <div className="labour-type-item-image-placeholder">
                                <img src={assets.LabourTypeImage5} alt="Header Image" />
                            </div>
                        </div>
                    </div>
                    <div className="labour-type-item-container">
                        <div className="labour-type-item-left">
                            <h1 className="labour-type-item-title">Traffic Controllers (Ticketed)</h1>
                            <p className="labour-type-item-description">Managing site access and pedestrian safety.</p>
                        </div>
                        <div className="labour-type-item-right">
                            <div className="labour-type-item-image-placeholder">
                                <img src={assets.LabourTypeImage6} alt="Header Image" />
                            </div>
                        </div>
                    </div>
                    <div className="labour-type-item-container">
                        <div className="labour-type-item-left">
                            <h1 className="labour-type-item-title">Spotters</h1>
                            <p className="labour-type-item-description">Assisting plant/machine operations in high-risk zones.</p>
                        </div>
                        <div className="labour-type-item-right">
                            <div className="labour-type-item-image-placeholder">
                                <img src={assets.LabourTypeImage7} alt="Header Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="labour-type-arrow right-arrow" onClick={scrollRight}>
                    <MdKeyboardArrowRight />
                </button>
            </div>
            <hr />
        </div>
    );
}

export default LabourType;
