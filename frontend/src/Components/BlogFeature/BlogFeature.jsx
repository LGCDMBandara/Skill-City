import React from 'react';
import './blogFeature.css';
import feature from '../../JSON/Feature';

const BlogFeature = () => {
    return (
        <div>
            <div className="blog-feature-container">
                <h1 className="blog-feature-title">Top Featured Blogs</h1>
                <p className="blog-feature-subtitle">
                    A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                    sentence that introduces the main idea, followed by supporting sentences that provide details,
                    evidence, or examples related to that idea.
                </p>
                <div className="blog-feature-bottom">
                    {feature.map((item) => (
                        <div key={item._id} className="blog-feature-item">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="blog-feature-image"
                            />
                            <div className='blog-feature-main1'>
                                <p className="blog-feature-item-title">{item.title}</p>
                                <p className="blog-feature-item-category">{item.category}</p>
                            </div>
                            <div className='blog-feature-main2'>
                                <p className="blog-feature-item-author">{item.author}</p>
                                <p className="blog-feature-item-time">{item.time}</p>
                            </div>
                            <p className="blog-feature-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default BlogFeature;
