import React from 'react';
import './client.css';
import client from '../../JSON/Client';

const Client = () => {
    return (
        <div>
            <div className="client-container">
                <h1 className="client-title align-center">Our Clients</h1>
                <p className="client-subtitle">
                    From trusted local favorites to world-renowned global leaders - we serve them all with excellence.
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
