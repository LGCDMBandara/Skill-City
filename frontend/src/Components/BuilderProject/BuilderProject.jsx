import React from 'react';
import './builderProject.css';
import { assets } from '../../assets/assets';

const BuilderProject = () => {
    return (
        <div>
            <div className="builder-project-container">
                <h1 className="builder-project-title">Project Gallery</h1>
                <p className="builder-project-subtitle">
                    A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                    sentence that introduces the main idea, followed by supporting sentences that provide details,
                    evidence, or examples related to that idea.
                </p>
                <div className="builder-project-main">
                    <div className='builder-project-main-container'>
                        <p className="builder-project-box-title">Avalon Complex</p>
                        <div className="builder-project-box-container">
                            <div className="builder-project-box-left">
                                <p className="builder-project-box-text">Before</p>
                                <img src={assets.BeforeImage} alt="Before Image" />
                            </div>
                            <div className="builder-project-box-right">
                                <p className="builder-project-box-text">After</p>
                                <img src={assets.AfterImage} alt="Before Image" />
                            </div>
                        </div>
                        <p className="builder-project-box-description">
                            A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                            sentence that introduces the main idea, followed by supporting sentences that provide details,
                            evidence, or examples related to that idea.
                        </p>
                    </div>
                    <div className='builder-project-main-container'>
                        <p className="builder-project-box-title">Oakridge Residencies</p>
                        <div className="builder-project-box-container">
                            <div className="builder-project-box-left">
                                <p className="builder-project-box-text">Before</p>
                                <img src={assets.BeforeImage} alt="Before Image" />
                            </div>
                            <div className="builder-project-box-right">
                                <p className="builder-project-box-text">After</p>
                                <img src={assets.AfterImage} alt="Before Image" />
                            </div>
                        </div>
                        <p className="builder-project-box-description">
                            A paragraph is a group of sentences that develop one main idea. It typically starts with a topic
                            sentence that introduces the main idea, followed by supporting sentences that provide details,
                            evidence, or examples related to that idea.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default BuilderProject;
