import React, { useEffect } from 'react';
import BuilderHero from '../Components/BuilderHero/BuilderHero';
import BuilderService from '../Components/BuilderService/BuilderService';
import BuilderChoose from '../Components/BuilderChoose/BuilderChoose';
import BuilderWork from '../Components/BuilderWork/BuilderWork';
import BuilderResource from '../Components/BuilderResource/BuilderResource';
import BuilderContact from '../Components/BuilderContact/BuilderContact';
import BuilderProject from '../Components/BuilderProject/BuilderProject';
import { useLocation } from 'react-router-dom';

const Builders = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash === 'builder-resource') {
            const element = document.getElementById('builder-resource');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]);

    return (
        <div>
            <BuilderHero />
            <BuilderService />
            <BuilderChoose />
            <BuilderWork />
            <BuilderProject />
            <div id="builder-resource">
                <BuilderResource />
            </div>
            <BuilderContact />
        </div>
    );
}

export default Builders;