import React, { useEffect } from 'react';
import OtherHero from '../Components/OtherHero/OtherHero';
import OtherServices from '../Components/OtherSevices/OtherServices';
import OtherChange from '../Components/OtherChange/OtherChange';
import OtherContact from '../Components/OtherContact/OtherContact';
import { useLocation } from 'react-router-dom';

const Other = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.other-service-bottom-container');
      let currentId = null;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentId = section.id;
        }
      });
      if (currentId && window.location.hash !== `#${currentId}`) {
        window.history.pushState(null, '', `/others#${currentId}`);
      }
    };

    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.hash]); 

  return (
    <div>
      <OtherHero />
      <OtherServices />
      <OtherChange />
      <OtherContact />
    </div>
  );
}

export default Other;