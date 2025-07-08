import React, { useEffect } from 'react';
import LabourHero from '../Components/LabourHero/LabourHero';
import LabourType from '../Components/LabourType/LabourType';
import LabourHire from '../Components/LabourHire/LabourHire';
import LabourProject from '../Components/LabourProject/LabourProject';
import LabourDocumentation from '../Components/LabourDocumentation/LabourDocumentation';
import LabourAvailable from '../Components/LabourAvailable/LabourAvailable';
import LabourContact from '../Components/LabourContact/LabourContact';
import { useLocation } from 'react-router-dom';

const Labour = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash === 'labour-documentation') {
            const element = document.getElementById('labour-documentation');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash]);

    return (
        <div>
            <LabourHero />
            <LabourType />
            <LabourHire />
            <LabourProject />
            <div id="labour-documentation">
                <LabourDocumentation />
            </div>
            <LabourAvailable />
            <LabourContact />
        </div>
    );
}

export default Labour;