import React from 'react';
import './LabourHire.css';
import labourHire from '../../JSON/LabourHire';

const LabourHire = () => {
    return (
        <div>
            <div className="labour-hire-container">
                <h1 className="labour-hire-title"> Why Choose Skill City for Labour Hire?</h1>
                <div className="labour-hire-bottom">
                    {labourHire.map((item) => (
                        <div key={item._id} className="labour-hire-item">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="labour-hire-image"
                            />
                            <p className="labour-hire-item-title">{item.title}</p>
                            <p className="labour-hire-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default LabourHire;
