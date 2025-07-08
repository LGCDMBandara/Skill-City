import React from 'react';
import './blogHeader.css';
import { assets } from '../../assets/assets';

const BlogHeader = () => {
    return (
        <div>
            <div className="blog-hero-container">
                <div className="blog-hero-left">
                    <h1 className="blog-hero-title">Blogs</h1>
                    <p className="blog-hero-subtitle">
                        A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                        sentence that introduces the main idea, followed by supporting sentences that provide details,
                        evidence, or examples related to that idea. A concluding sentence may summarize or restate the
                        main idea, bringing the paragraph to a close. Paragraphs are separated by blank lines or indentation,
                        making writing easier to read and understand.
                    </p>
                </div>
                <div className="blog-hero-right">
                    <div className="blog-hero-image-placeholder">
                        <img src={assets.BlogHeader} alt="Header Image" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default BlogHeader;
