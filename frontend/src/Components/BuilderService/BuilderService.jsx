import React, { useEffect, useRef, useState } from 'react';
import './builderService.css';
import { assets } from '../../assets/assets';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const BuilderService = () => {
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
            <div className="builder-service-container">
                <div className="builder-service-left">
                    <h1 className="builder-service-title">What’s Included in Our Builders Cleaning Service?</h1>
                </div>
            </div>
            <div className="builder-service-navigation">
                <button className="builder-service-arrow left-arrow" onClick={scrollLeft}>
                    <MdKeyboardArrowLeft />
                </button>
                <div className="builder-service-items" ref={scrollRef}>
                    <div className="builder-service-item-container">
                        <div className="builder-service-item-left">
                            <h1 className="builder-service-item-title">Initial / Rough Cleaning</h1>
                            <p className="builder-service-item-description">Performed during or immediately after the major construction work begins.</p>
                        </div>
                        <div className="builder-service-item-right">
                            <div className="builder-service-item-image-placeholder">
                                <img src={assets.BuilderService1} alt="Header Image" />
                            </div>
                        </div>
                    </div>
                    <div className="builder-service-item-container">
                        <div className="builder-service-item-left">
                            <h1 className="builder-service-item-title">Detailed / Intermediate Cleaning</h1>
                            <p className="builder-service-item-description">Completed once most construction work is done.</p>
                        </div>
                        <div className="builder-service-item-right">
                            <div className="builder-service-item-image-placeholder">
                                <img src={assets.BuilderService2} alt="Header Image" />
                            </div>
                        </div>
                    </div>
                    <div className="builder-service-item-container">
                        <div className="builder-service-item-left">
                            <h1 className="builder-service-item-title">Final / Handover Cleaning</h1>
                            <p className="builder-service-item-description">Performed just before the property is presented to the client or tenant.</p>
                        </div>
                        <div className="builder-service-item-right">
                            <div className="builder-service-item-image-placeholder">
                                <img src={assets.BuilderService3} alt="Header Image" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="builder-service-arrow right-arrow" onClick={scrollRight}>
                    <MdKeyboardArrowRight />
                </button>
            </div>
            <hr />
        </div>
    );
}

export default BuilderService;
