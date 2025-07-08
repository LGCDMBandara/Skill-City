import React from 'react';
import './otherContact.css';
import { assets } from '../../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTiktok, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const OtherContact = () => {
    return (
        <div>
            <div className="other-contact-container">
                <h1 className="other-contact-title">Contact Us Today</h1>
                <p className="other-contact-subtitle">Request Labour Now</p>
                <div className="other-contact-bootom-container">
                    <div className="other-contact-box-container">
                        <div className="other-contact-box-left">
                            <p className="other-contact-box-title">Get in Touch</p>
                            <p className="other-contact-box-description">A paragraph is a group of sentences that develop one main idea.</p>
                            <div className="other-contact-details">
                                <p className="other-contact-detail"><FaMapMarkerAlt /> Address : 4A Haughton Road, Oakleigh, 3166, VIC</p>
                                <p className="other-contact-detail"><FaPhoneAlt /> Call Us : 039 034 6492</p>
                                <p className="other-contact-detail"><FaEnvelope /> Email Us : admin@skillcityfs.com.au</p>
                            </div>
                            <div className="contacts-bottom">
                                <div>
                                    <p className="contacts-detail">Follow Us</p>
                                    <div className="contacts-social-icons">
                                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className='contacts-icons' />
                                        </a>
                                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                            <FaFacebook className='contacts-icons' />
                                        </a>
                                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className='contacts-icons' />
                                        </a>
                                        <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                            <FaXTwitter className='contacts-icons' />
                                        </a>
                                        <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
                                            <FaTiktok className='contacts-icons' />
                                        </a>
                                    </div>
                                </div>
                                <div className="contacts-box-image-placeholder">
                                    <img src={assets.LabourContactImage} alt="Contact Image" />
                                </div>
                            </div>
                        </div>
                        <div className="other-contact-box-right">
                            <p className="other-contact-box-subtitle">Book a Consultation </p>
                            <form className="other-contact-form">
                                <h4>Name</h4>
                                <input
                                    type="text"
                                    placeholder="Full Name" />

                                <h4>Mobile Number</h4>
                                <input
                                    type="text"
                                    placeholder="Mobile Number" />

                                <h4>Email</h4>
                                <input
                                    type="email"
                                    placeholder="Email Address" />

                                <h4>Service Type</h4>
                                <input
                                    type="text"
                                    placeholder="Service Type" />

                                <h4>Details</h4>
                                <textarea
                                    placeholder="Details" />

                                <button className="other-contact-send-btn">Book an Appointment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherContact;
