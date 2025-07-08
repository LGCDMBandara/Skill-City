import React from 'react';
import './labourContact.css';
import { assets } from '../../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const LabourContact = () => {
    return (
        <div>
            <div className="labour-contact-container">
                <h1 className="labour-contact-title">Need Labour Today?</h1>
                <p className="labour-contact-subtitle">Request Labour Now</p>
                <div className="labour-contact-bootom-container">
                    <div className="labour-contact-box-container">
                        <div className="labour-contact-box-left">
                            <p className="labour-contact-box-title">Get in Touch</p>
                            <p className="labour-contact-box-description">A paragraph is a group of sentences that develop one main idea.</p>
                            <div className="labour-contact-details">
                                <p className="labour-contact-detail"><FaMapMarkerAlt /> Address : 4A Haughton Road, Oakleigh, 3166, VIC</p>
                                <p className="labour-contact-detail"><FaPhoneAlt /> Call Us : 039 034 6492</p>
                                <p className="labour-contact-detail"><FaEnvelope /> Email Us : admin@skillcityfs.com.au</p>
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
                        <div className="labour-contact-box-right">
                            <p className="labour-contact-box-subtitle">Book a Consultation </p>
                            <form className="labour-contact-form">
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

                                <button className="labour-contact-send-btn">Book an Appointment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LabourContact;
