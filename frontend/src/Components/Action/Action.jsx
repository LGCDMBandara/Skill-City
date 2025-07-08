import React, { useEffect, useRef, useState } from 'react';
import './action.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { assets } from '../../assets/assets';

const Action = () => {
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
            <div className="action-container">
                <h1 className="action-title">Our Work in Action : Clients, Crews & Equipment</h1>
                <div className="action-navigation">
                    <button className="action-arrow left-arrow" onClick={scrollLeft}>
                        <MdKeyboardArrowLeft />
                    </button>
                    <div className="action-items" ref={scrollRef}>
                        <div className="action-item-container">
                            <img
                                src={assets.BuilderWorkImage}
                                alt="Project Image"
                                className="action-image"
                            />
                        </div>
                        <div className="action-item-container">
                            <img
                                src={assets.BuilderWorkImage}
                                alt="Project Image"
                                className="action-image"
                            />
                        </div>
                        <div className="action-item-container">
                            <img
                                src={assets.BuilderWorkImage}
                                alt="Project Image"
                                className="action-image"
                            />
                        </div>
                        <div className="action-item-container">
                            <img
                                src={assets.BuilderWorkImage}
                                alt="Project Image"
                                className="action-image"
                            />
                        </div>
                        <div className="action-item-container">
                            <img
                                src={assets.BuilderWorkImage}
                                alt="Project Image"
                                className="action-image"
                            />
                        </div>
                        <div className="action-item-container">
                            <img
                                src={assets.BuilderWorkImage}
                                alt="Project Image"
                                className="action-image"
                            />
                        </div>
                    </div>
                    <button className="action-arrow right-arrow" onClick={scrollRight}>
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Action;
