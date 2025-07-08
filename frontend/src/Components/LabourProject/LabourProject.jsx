import React, { useEffect, useRef, useState } from 'react';
import './LabourProject.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { assets } from '../../assets/assets';

const LabourProject = () => {
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
            <div className="labour-project-container">
                <div className="labour-project-left">
                    <h1 className="labour-project-title">Industries & Projects We Support</h1>
                    <p className="labour-project-subtitle">
                        A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                        sentence that introduces the main idea, followed by supporting sentences that provide details,
                        evidence, or examples related to that idea.
                    </p>
                </div>
            </div>
            <div className="labour-project-navigation">
                <button className="labour-project-arrow left-arrow" onClick={scrollLeft}>
                    <MdKeyboardArrowLeft />
                </button>
                <div className="labour-project-items" ref={scrollRef}>
                    <div className="labour-project-item-container">
                        <img
                            src={assets.ProjectImage}
                            alt="Project Image"
                            className="labour-project-image"
                        />
                    </div>
                    <div className="labour-project-item-container">
                        <img
                            src={assets.ProjectImage}
                            alt="Project Image"
                            className="labour-project-image"
                        />
                    </div>
                    <div className="labour-project-item-container">
                        <img
                            src={assets.ProjectImage}
                            alt="Project Image"
                            className="labour-project-image"
                        />
                    </div>
                    <div className="labour-project-item-container">
                        <img
                            src={assets.ProjectImage}
                            alt="Project Image"
                            className="labour-project-image"
                        />
                    </div>
                    <div className="labour-project-item-container">
                        <img
                            src={assets.ProjectImage}
                            alt="Project Image"
                            className="labour-project-image"
                        />
                    </div>
                    <div className="labour-project-item-container">
                        <img
                            src={assets.ProjectImage}
                            alt="Project Image"
                            className="labour-project-image"
                        />
                    </div>
                </div>
                <button className="labour-project-arrow right-arrow" onClick={scrollRight}>
                    <MdKeyboardArrowRight />
                </button>
            </div>
            <hr />
        </div>
    );
}

export default LabourProject;
