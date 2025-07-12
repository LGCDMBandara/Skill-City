import React from 'react';
import './otherContact.css';
import { assets } from '../../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTiktok, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from '../ReusableComponents/ContactForm';

const OtherContact = () => {
    return (
                <div>
                        <h1 className="other-contact-title">Book A Builders Clean Today</h1>
            <p className="other-contact-subtitle ">Get a Free Quote</p>
            <ContactForm />
        </div>
    );
}

export default OtherContact;
