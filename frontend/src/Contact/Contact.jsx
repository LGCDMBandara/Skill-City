import React, { useState } from 'react';
import './contact.css';
import { assets } from '../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_dw4tsfi',
            'template_hxfvgof',
            formData,
            'kD5EYgZzaWyeg9BMg'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Message sent successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            })
            .catch((error) => {
                console.error('FAILED...', error);
                toast.error('Failed to send message. Please try again.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <div>
            <ToastContainer />
            <div className="contacts-container">
                <div className="contacts-box-container">
                    <div className="contacts-box-left">
                        <p className="contacts-box-title">Get in Touch</p>
                        <p className="contacts-box-description">Have a question or need a quote? Fill out the form below and our team will get back to you promptly to discuss your cleaning or labor hire needs.</p>
                        <div className="contacts-details">
                            <p className="contacts-detail"><FaMapMarkerAlt /> Address : 4A Haughton Road, Oakleigh, 3166, VIC</p>
                            <p className="contacts-detail"><FaPhoneAlt /> Call Us : 039 034 6492</p>
                            <p className="contacts-detail"><FaEnvelope /> Email Us : admin@skillcityfs.com.au</p>
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
                                <img src={assets.ContactImage} alt="Contact Image" />
                            </div>
                        </div>
                    </div>
                    <div className="contacts-box-right">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h4>Name</h4>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                name="name"
                                onChange={handleChange}
                                required />

                            <h4>Mobile Number</h4>
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                value={formData.phone}
                                name="phone"
                                onChange={handleChange}
                                required />

                            <h4>Email</h4>
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required />

                            <h4>Subject</h4>
                            <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required />

                            <h4>Message</h4>
                            <textarea
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required />

                            <button className="send-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default contact;
