import React from 'react';
import './builderContact.css';
import { assets } from '../../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { LocateIcon, Phone } from 'lucide-react';
const BuilderContact = () => {
    return (
        <div>
            <div className="builder-contact-container">
                <h1 className="builder-contact-title">Book A Builders Clean Today</h1>
                <p className="builder-contact-subtitle">Get a Free Quote</p>
                <div className="builder-contact-bootom-container">
                    <div className="builder-contact-box-container">
                        <div className="builder-contact-box-left">
                            <p className="builder-contact-box-title">Get in Touch</p>
                            <p className="builder-contact-box-description">A paragraph is a group of sentences that develop one main idea.</p>
                            <div className="builder-contact-details">
                                <p className="builder-contact-detail"><FaMapMarkerAlt /> Address : 4A Haughton Road, Oakleigh, 3166, VIC</p>
                                <p className="builder-contact-detail"><FaPhoneAlt /> Call Us : 039 034 6492</p>
                                <p className="builder-contact-detail"><FaEnvelope /> Email Us : admin@skillcityfs.com.au</p>
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
                                <div className="contacts-box-image-placeholder">
                                    <img src={assets.LabourContactImage} alt="Contact Image" />
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

                                <button className="builder-contact-send-btn">Book an Appointment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuilderContact;
