import React from 'react';
import './team.css';
import team from '../../JSON/Team';

const Team = () => {
    return (
        <div>
            <div className="about-team-container">
                <div className="about-team-left">
                    <h1 className="about-team-title">Meet The Team</h1>
                    <p className="about-team-subtitle">
                        Get to know the dedicated professionals behind Skill City Facility Solutions — 
                        a passionate team committed to delivering excellence on every site, every day.
                    </p>
                </div>
                <div className="about-team">
                    {team.map((item) => (
                        <div key={item._id} className="about-team-item">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="about-team-image"
                            />
                            <p className="about-team-item-title">{item.title}</p>
                            <p className="about-team-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Team;