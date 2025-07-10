import React from 'react';
import './ComponentStyle.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const ContactForm = () => {
    return (
        <div className="builder-contact-container">
            <div className="builder-contact-bootom-container">
                <div className="builder-contact-box-container">
                    <div className="builder-contact-box-left">
                        <p className="builder-contact-box-title">Get in Touch</p>
                        <p className="builder-contact-box-description">A paragraph is a group of sentences that develop one main idea.</p>
                        <div className="builder-contact-details">
                            <p className="builder-contact-detail"><FaMapMarkerAlt /> Address : 4A Haughton Road, Oakleigh, 3166, VIC</p>
                            <div className="builder-contact-detail-row">
                                <p className="builder-contact-detail"><FaPhoneAlt /> Call Us : 039 034 6492</p>
                                <p className="builder-contact-detail"><FaEnvelope /> Email Us : admin@skillcityfs.com.au</p>
                            </div>
                        </div>
                        <div className="contacts-bottom">
                            <div>
                                <p className="contacts-detail" style={{ color: 'white' }}>Follow Us</p>
                                <div className="contacts-social-icons">
                                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className='contacts-icons' style={{ color: 'white' }} />
                                    </a>
                                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className='contacts-icons' style={{ color: 'white' }} />
                                    </a>
                                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className='contacts-icons' style={{ color: 'white' }} />
                                    </a>
                                    <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter className='contacts-icons' style={{ color: 'white' }} />
                                    </a>
                                    <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
                                        <FaTiktok className='contacts-icons' style={{ color: 'white' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="builder-contact-box-right">
                        <p className="builder-contact-box-subtitle"> Send Us a Message</p>
                        <form className="builder-contact-form">
                            <h4>Name</h4>
                            <input
                                type="text"
                                placeholder="Full Name" />
                    
                            <div className="builder-contact-form-row">
                                <div className="builder-contact-form-column">
                                    <h4>Mobile Number</h4>
                                    <input
                                        type="text"
                                        placeholder="Mobile Number" />
                                </div>
                                <div className="builder-contact-form-column">
                                    <h4>Email</h4>
                                    <input
                                        type="email"
                                        placeholder="Email Address" />
                                </div>
                            </div>

                            <h4>Service Type</h4>
                            <input
                                type="text"
                                placeholder="Service Type" />

                            <h4>Details</h4>
                            <textarea
                                placeholder="Details" />

                            <button className="builder-contact-send-btn">Book an Appointment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;