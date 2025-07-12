import React from 'react';
import ContactForm from '../ReusableComponents/ContactForm';

const Contact = () => {
    return (
        <div>
                        <h1 className="builder-contact-title">Book A Builders Clean Today</h1>
            <p className="builder-contact-subtitle">Get a Free Quote</p>
            <ContactForm />
        </div>
    );
}

export default Contact;