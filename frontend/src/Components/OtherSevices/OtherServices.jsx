import React from 'react';
import './otherServices.css';
import service from '../../JSON/Service';

const OtherServices = () => {
    const remainingItems = service.slice(2);

    return (
        <div>
            <div className="other-service-container">
                <h1 className="other-service-title">Services We Offer</h1>
                {remainingItems.length > 0 && (
                    <div className="other-service-bottom">
                        {remainingItems.map((item) => (
                            <div
                                key={item._id}
                                id={String(item._id)}
                                className={`other-service-bottom-container ${item._id % 2 === 0 ? 'even' : 'odd'}`}
                            >
                                {item._id % 2 === 0 ? (
                                    <>
                                        <div className="other-service-bottom-right">
                                            <div className="other-service-bottom-image-placeholder">
                                                <img src={item.image} alt="Image" />
                                            </div>
                                        </div>
                                        <div className="other-service-bottom-left">
                                            <h1 className="other-service-bottom-title-right">{item.description}</h1>
                                            <p className="other-service-bottom-subtitle-right">{item.detail}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="other-service-bottom-left">
                                            <h1 className="other-service-bottom-title">{item.description}</h1>
                                            <p className="other-service-bottom-subtitle">{item.detail}</p>
                                        </div>
                                        <div className="other-service-bottom-right">
                                            <div className="other-service-bottom-image-placeholder">
                                                <img src={item.image} alt="Image" />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <hr />
        </div>
    );
};

export default OtherServices;