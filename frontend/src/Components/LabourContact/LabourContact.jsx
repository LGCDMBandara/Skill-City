import React from 'react';
import './labourContact.css';
import { assets } from '../../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from '../ReusableComponents/ContactForm';

const LabourContact = () => {
    return (
        <div>
                        <h1 className="labour-contact-title">Need Labour Today?</h1>
            <p className="labour-contact-subtitle ">Get a Free Quote</p>
            <ContactForm />
        </div>
    );
}

export default LabourContact;