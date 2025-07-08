import React from 'react';
import './blogCategory.css';
import feature from '../../JSON/Feature';

const BlogCategory2 = () => {
    return (
        <div>
            <div className="blog-category-container">
                <h1 className="blog-category-title">Category Name 02</h1>
                <p className="blog-category-subtitle">
                    A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                    sentence that introduces the main idea, followed by supporting sentences that provide details,
                    evidence, or examples related to that idea.
                </p>
                <div className="blog-category-bottom">
                    {feature.map((item) => (
                        <div key={item._id} className="blog-category-item">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="blog-category-image"
                            />
                            <div className='blog-category-main1'>
                                <p className="blog-category-item-title">{item.title}</p>
                                <p className="blog-category-item-category">{item.category}</p>
                            </div>
                            <div className='blog-category-main2'>
                                <p className="blog-category-item-author">{item.author}</p>
                                <p className="blog-category-item-time">{item.time}</p>
                            </div>
                            <p className="blog-category-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogCategory2;
