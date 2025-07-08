import React, { useEffect, useRef, useState } from 'react';
import './builderWork.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { assets } from '../../assets/assets';

const BuilderWork = () => {
    const scrollRef = useRef(null);
    const [scrollDistance, setScrollDistance] = useState(450);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setScrollDistance(260);
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
            <div className="builder-work-container">
                <div className="builder-work-left">
                    <h1 className="builder-work-title">Who We Work With</h1>
                </div>
            </div>
            <div className="builder-work-navigation">
                <button className="builder-work-arrow left-arrow" onClick={scrollLeft}>
                    <MdKeyboardArrowLeft />
                </button>
                <div className="builder-work-items" ref={scrollRef}>
                    <div className="builder-work-item-container">
                        <img
                            src={assets.BuilderWorkImage}
                            alt="Project Image"
                            className="builder-work-image"
                        />
                    </div>
                    <div className="builder-work-item-container">
                        <img
                            src={assets.BuilderWorkImage}
                            alt="Project Image"
                            className="builder-work-image"
                        />
                    </div>
                    <div className="builder-work-item-container">
                        <img
                            src={assets.BuilderWorkImage}
                            alt="Project Image"
                            className="builder-work-image"
                        />
                    </div>
                    <div className="builder-work-item-container">
                        <img
                            src={assets.BuilderWorkImage}
                            alt="Project Image"
                            className="builder-work-image"
                        />
                    </div>
                    <div className="builder-work-item-container">
                        <img
                            src={assets.BuilderWorkImage}
                            alt="Project Image"
                            className="builder-work-image"
                        />
                    </div>
                    <div className="builder-work-item-container">
                        <img
                            src={assets.BuilderWorkImage}
                            alt="Project Image"
                            className="builder-work-image"
                        />
                    </div>
                </div>
                <button className="builder-work-arrow right-arrow" onClick={scrollRight}>
                    <MdKeyboardArrowRight />
                </button>
            </div>
            <hr />
        </div>
    );
}

export default BuilderWork;
