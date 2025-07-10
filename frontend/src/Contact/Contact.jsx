import React, { useState } from 'react';
import './contact.css';
import { assets } from '../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderIcon, MailIcon, PhoneCallIcon } from 'lucide-react';

const Contact = () => {
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
        <div className="contact-main-container">
            <ToastContainer />
            <div className="contact-container">
                <h1 className="contact-title">Contact Us Today</h1>
                <p className="contact-subtitle">Expert Cleaning & Building Services at Your Fingertips - Contact Us Today!</p>
                <div className="contact-box-container">
                    <div className="contact-box-left">
                        <p className="contact-box-title">Get in Touch</p>
                        <p className="contact-box-description">Have a question or need a quote? Fill out the form below and our team will get back to you promptly to discuss your cleaning or labor hire needs.</p>
                        <div className="contact-details">
                            <p className="contact-detail"><LoaderIcon /> Address : 4A Haughton Road, Oakleigh, 3166, VIC</p>
                            <div className="contact-detail-row">
                                <p className="contact-detail"><PhoneCallIcon /> Call Us : 039 034 6492</p>
                                <p className="contact-detail"><MailIcon /> Email Us : admin@skillcityfs.com.au</p>
                            </div>
                        </div>
                        <div className="contact-bottom">
                            <div>
                                <p className="contact-follow" style={{ color: 'white' }}>Follow Us</p>
                                <div className="contact-social-icons">
                                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className='contact-icon' style={{ color: 'white' }} />
                                    </a>
                                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook className='contact-icon' style={{ color: 'white' }} />
                                    </a>
                                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className='contact-icon' style={{ color: 'white' }} />
                                    </a>
                                    <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter className='contact-icon' style={{ color: 'white' }} />
                                    </a>
                                    <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
                                        <FaTiktok className='contact-icon' style={{ color: 'white' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-box-right">
                        <p className="contact-box-subtitle">Send Us a Message</p>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h4>Name</h4>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                name="name"
                                onChange={handleChange}
                                required />

                            <div className="contact-form-row">
                                <div className="contact-form-column">
                                    <h4>Mobile Number</h4>
                                    <input
                                        type="text"
                                        placeholder="Mobile Number"
                                        value={formData.phone}
                                        name="phone"
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="contact-form-column">
                                    <h4>Email</h4>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required />
                                </div>
                            </div>

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

                            <button className="contact-send-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;