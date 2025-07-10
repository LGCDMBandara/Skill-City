import React, { useEffect, useRef, useState } from 'react';
import './action.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import AndrewSherman from '../../assets/Customers/AndrewSherman.png';
import David from '../../assets/Customers/DavidHarold.png';
import Rodrigo from '../../assets/Customers/RodrigoMutzi.png';

const Action = () => {
    const scrollRef = useRef(null);
    const [scrollDistance, setScrollDistance] = useState(450);

    // Sample testimonials data
    const testimonials = [
        {
            id: 1,
            text: "I was amazed at the quality of Chamer. I'm good to go. Thank You! I don't know what else to say.",
            name: "Alex Parkinson",
            position: "Managing Director, Savespace",
            image: AndrewSherman
        },
        {
            id: 2,
            text: "Keep up the good work! Chamer should be nominated for service of the year. You won't regret it.",
            name: "Alberto Donko",
            position: "CEO, Squareround",
            image: David
        },
        {
            id: 3,
            text: "Chamer is the most valuable business resource we have ever purchased. I would be lost without chamer.",
            name: "Sarah Mitchell",
            position: "Operations Manager, TechFlow",
            image: Rodrigo
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setScrollDistance(350);
            } else if (window.innerWidth <= 768) {
                setScrollDistance(400);
            } else {
                setScrollDistance(500);
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
        <div className="testimonials-section">
            <div className="testimonials-container">
                <h1 className="testimonials-title">What Our Clients Say</h1>
                <p className="testimonials-text">Discover why businesses and homeowners trust Skill City for top-tier cleaning and construction services through their authentic experiences.</p>
                <div className="testimonials-navigation">
                    <button className="testimonial-arrow left-arrow" onClick={scrollLeft}>
                        <MdKeyboardArrowLeft />
                    </button>
                    <div className="testimonials-items" ref={scrollRef}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-card">
                                <div className="testimonial-content">
                                    <div className="testimonial-text">
                                        <p>"{testimonial.text}"</p>
                                    </div>
                                    <div className="testimonial-author">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.position}</p>
                                    </div>
                                </div>
                                <div className="testimonial-image">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="author-image"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="testimonial-arrow right-arrow" onClick={scrollRight}>
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Action;