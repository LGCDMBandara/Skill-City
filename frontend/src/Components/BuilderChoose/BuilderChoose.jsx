import React from 'react';
import './builderChoose.css';
import builderChoose from '../../JSON/BuilderChoose'

const BuilderChoose = () => {
    return (
        <div>
            <div className="builder-choose-container">
                <h1 className="builder-choose-title"> Why Choose Skill City for Builders Cleaning?</h1>
                <div className="builder-choose-bottom">
                    {builderChoose.map((item) => (
                        <div key={item._id} className="builder-choose-item">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="builder-choose-image"
                            />
                            <p className="builder-choose-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default BuilderChoose;
