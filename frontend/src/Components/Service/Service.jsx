import React from 'react';
import './service.css';
import service from '../../JSON/Service';

const Service = () => {
    const firstTwoItems = service.slice(0, 2);
    const remainingItems = service.slice(2);

    return (
        <div>
            <div className="service-container">
                <h1 className="service-title">Services we Offer</h1>
                <p className="service-subtitle">
  Expert cleaning and labour services across Victoria.
</p>
                <div className="service-top">
                    {firstTwoItems.map((item) => (
                        <div key={item._id} className="service-item-top">
                            <div className="service-description-top">
                                <p className='service-description-top-title'>{item.title}</p>
                                <p className='service-description-top-p'>{item.description}</p>
                            </div>
                            <div className="service-image-top">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="service-top-image"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                {remainingItems.length > 0 && (
                    <div className="service-bottom">
                        {remainingItems.map((item) => (
                            <div key={item._id} className="service-item">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="service-image"
                                />
                                <p className="service-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <hr />
        </div>
    );
};

export default Service;