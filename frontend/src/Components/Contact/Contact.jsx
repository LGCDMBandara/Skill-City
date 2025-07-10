import React from 'react';
import ContactForm from '../ReusableComponents/ContactForm';

const Contact = () => {
    return (
        <div>
            {/* You can add other content here like header, navigation, etc. */}
                        <h1 className="builder-contact-title">Book A Builders Clean Today</h1>
            <p className="builder-contact-subtitle">Get a Free Quote</p>
            <ContactForm />
            {/* You can add other content here like footer, etc. */}
        </div>
    );
}

export default Contact;