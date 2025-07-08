import React from 'react';
import './contact.css';
import { assets } from '../../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleContactClick = () => {
        navigate('/contact');
        scrollToTop();
    };

    return (
        <div>
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <div className="contact-box-container">
                    <div className="contact-box-left">
                        <p className="contact-box-title">Contact Information</p>
                        <p className="contact-box-description">A paragraph is a group of sentences that develop one main idea.</p>
                        <div className="contact-details">
                            <p className="contact-detail"><FaPhoneAlt /> Call Us : 039 034 6492</p>
                            <p className="contact-detail"><FaEnvelope /> Email Us : admin@skillcityfs.com.au</p>
                            <p className="contact-detail"><FaGlobe /> Website : www.skillcityfacilityfs.com.au</p>
                            <p className="contact-detail"><FaMapMarkerAlt /> Address : 4A Haughton Road, Oakleigh, 3166, VIC</p>
                        </div>
                        <button className="contact-button" onClick={handleContactClick}>Contact Us Now <FaArrowRight /></button>
                    </div>
                    <div className="contact-box-right">
                        <div className="contact-box-image-placeholder">
                            <img src={assets.Contact} alt="Contact Image" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Contact;