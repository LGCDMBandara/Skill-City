import React from 'react';
import AboutHero from '../Components/AboutHero/AboutHero';
import Process from '../Components/Process/Process';
import Team from '../Components/Team/Team';
import License from '../Components/License/License';
import Map from '../Components/Map/Map';

const About = () => {
    return (
        <div>
            <AboutHero />
            <Process />
            <Team />
            <License />
            <Map />
        </div>
    );
}

export default About;
