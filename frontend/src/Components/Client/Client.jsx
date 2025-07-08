import React from 'react';
import './client.css';
import client from '../../JSON/Client';

const Client = () => {
    return (
        <div>
            <div className="client-container">
                <h1 className="client-title">Our Clients</h1>
                <p className="client-subtitle">
                    A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                    sentence that introduces the main idea, followed by supporting sentences that provide details,
                    evidence, or examples related to that idea.
                </p>
                <div className="client">
                    {client.map((item) => (
                        <div key={item._id} className="client-item">
                            <img
                                src={item.image}
                                className="client-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Client;
