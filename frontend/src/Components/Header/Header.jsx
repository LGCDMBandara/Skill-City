import React from 'react';
import './header.css';
import ConstructionWorkersGroup from '../../assets/Home/Workers.png';

const Header = () => {
return (
<div>
<div className="hero-container">
<div className="hero-left">
<h1 className="hero-title">Welcome to Skill City <br/>Facility Solutions</h1>
<p className="hero-subtitle">
  Victoria's trusted provider of builder's cleaning, construction labour hire, and commercial cleaning services.
</p>
<button className="book-appointment-btn">
  Book an Appointment
</button>
</div>
<div className="hero-right">
<div className="hero-image-placeholder">
<img src={ConstructionWorkersGroup} alt="Construction Workers Group" />
</div>
</div>
</div>
<hr />
</div>
 );
};

export default Header;