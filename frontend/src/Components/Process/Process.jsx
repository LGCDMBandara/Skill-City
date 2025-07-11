import React from 'react';
import './process.css';
import { FaArrowRight } from 'react-icons/fa';
import consultation from '../../assets/Process/consultation.svg';
import quotation from '../../assets/Process/quotation.svg';
import serviceagreement from '../../assets/Process/serviceagreement.svg';
import teambriefing from '../../assets/Process/teambriefing.svg';
import cleaningprocess from '../../assets/Process/cleaningprocess.svg';
import clientfeedback from '../../assets/Process/clientfeedback.svg';

const Process = () => {
  const steps = [
    {
      title: 'Step 01',
      description: 'Initial Consultation & Site Assessment',
      ProcessImage: consultation
    },
    {
      title: 'Step 02',
      description: 'Customised Quotation & Proposal',
      ProcessImage: quotation
    },
    {
      title: 'Step 03',
      description: 'Service Agreement & Scheduling',
      ProcessImage: serviceagreement
    },
    {
      title: 'Step 04',
      description: 'Pre-Clean Preparation & Team Briefing',
      ProcessImage: teambriefing
    },
    {
      title: 'Step 05',
      description: 'Service Delivery & Quality Control',
      ProcessImage: cleaningprocess
    },
    {
      title: 'Step 06',
      description: 'Client Feedback & Ongoing Support',
      ProcessImage: clientfeedback
    },
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
        <button className="book-btn">Download</button>
      </div>
      <hr />
    </div>
  );
};

export default Process;