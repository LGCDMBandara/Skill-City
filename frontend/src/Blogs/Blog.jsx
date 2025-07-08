import React from 'react';
import BlogHeader from '../Components/BlogHeader/BlogHeader';
import BlogFeature from '../Components/BlogFeature/BlogFeature';
import BlogCategory from '../Components/BlogCategory/BlogCategory';

const Blog = () => {
    return (
        <div>
            <BlogHeader />
            <BlogFeature />
            <BlogCategory />
        </div>
    );
}

export default Blog;
