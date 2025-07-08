import React, { useState } from 'react';
import BlogCategory1 from './BlogCategory1';
import BlogCategory2 from './BlogCategory2';
import BlogCategory3 from './BlogCategory3';
import BlogCategory4 from './BlogCategory4';

const BlogCategory = () => {
    const [activeCategory, setActiveCategory] = useState('1'); // Default to Category 1

    return (
        <div>
            <div className='blog-category-btn-container'>
                <button
                    className={`blog-category-btn ${activeCategory === '1' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('1')}
                >
                    Category 01
                </button>
                <button
                    className={`blog-category-btn ${activeCategory === '2' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('2')}
                >
                    Category 02
                </button>
                <button
                    className={`blog-category-btn ${activeCategory === '3' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('3')}
                >
                    Category 03
                </button>
                <button
                    className={`blog-category-btn ${activeCategory === '4' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('4')}
                >
                    Category 04
                </button>
            </div>
            {activeCategory === '1' && <BlogCategory1 />}
            {activeCategory === '2' && <BlogCategory2 />}
            {activeCategory === '3' && <BlogCategory3 />}
            {activeCategory === '4' && <BlogCategory4 />}
        </div>
    );
}

export default BlogCategory;