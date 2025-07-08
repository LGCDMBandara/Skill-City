import React from 'react';
import './process.css';
import { assets } from '../../assets/assets';
import { FaArrowRight } from 'react-icons/fa'; 

const Process = () => {
    const steps = [
        { title: 'Step 01', description: 'Initial Consultation & Site Assessment', ProcessImage: assets.ProcessImage1},
        { title: 'Step 02', description: 'Customised Quotation & Proposal', ProcessImage: assets.ProcessImage2 },
        { title: 'Step 03', description: 'Service Agreement & Scheduling', ProcessImage: assets.ProcessImage3 },
        { title: 'Step 04', description: 'Pre-Clean Preparation & Team Briefing', ProcessImage: assets.ProcessImage4 },
        { title: 'Step 05', description: 'Service Delivery & Quality Control', ProcessImage: assets.ProcessImage5 },
        { title: 'Step 06', description: 'Client Feedback & Ongoing Support', ProcessImage: assets.ProcessImage6 },
    ];

    return (
        <div>
            <div className="about-process-container">
                <div className="about-process-left">
                    <h1 className="about-process-title">Process of How We Work</h1>
                </div>
                <div className="about-process-circles">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="about-process-circle">
                                <div className="about-process-image">
                                    <img src={step.ProcessImage} alt={`Process Step ${index + 1}`} />
                                </div>
                                <div className="about-process-circle-inner"></div>
                                <h3 className="about-process-circle-title">{step.title}</h3>
                                <p className="about-process-circle-description">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="about-process-arrow">
                                    <FaArrowRight />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <button className="about-process-btn">Download</button>
            </div>
            <hr />
        </div>
    );
}

export default Process;