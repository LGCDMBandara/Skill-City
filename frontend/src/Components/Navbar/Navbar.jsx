import React, { useState, useEffect } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets.js';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { MdClose, MdOutlineMenu, MdArrowDropDown } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
    if (isOtherServicesOpen) setIsOtherServicesOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isOtherServicesOpen) setIsOtherServicesOpen(false);
  };

  const toggleOtherServicesDropdown = () => {
    setIsOtherServicesOpen(!isOtherServicesOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (id = null) => {
    toggleMenu();
    scrollToTop();
    setIsServicesOpen(false);
    setIsOtherServicesOpen(false);
    if (id) {
      navigate(`/others#${id}`); 
    }
  };

  const isOtherActive = (id) => {
    const hash = location.hash.replace('#', ''); 
    return hash === id;
  };

  return (
    <div className="navbar">
      <NavLink to="/" onClick={handleNavClick}>
        <img src={assets.Logo} alt="Logo" className="logo" />
      </NavLink>
      <MdOutlineMenu className="nav-icon" onClick={toggleMenu} />
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <MdClose className="nav-close-icon" onClick={toggleMenu} />
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
            onClick={handleNavClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutus"
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
            onClick={handleNavClick}
          >
            About Us
          </NavLink>
        </li>
        <li className="services-item">
          <div className="services-toggle" onClick={toggleServicesDropdown}>
            Services
            <span className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`}>
              <MdArrowDropDown />
            </span>
          </div>
          <ul className={`dropdown-menu ${isServicesOpen ? 'open' : ''}`}>
            <li>
              <NavLink
                to="/builders"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleNavClick}
              >
                Builders Cleaning
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/labours"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleNavClick}
              >
                Construction Labour
              </NavLink>
            </li>
            <li>
              {isMobile ? (
                <NavLink
                  to="/others"
                  className={({ isActive }) => (isActive || isOtherActive('3') ? 'active' : '')}
                  onClick={handleNavClick}
                >
                  Other Cleaning Services
                </NavLink>
              ) : (
                <div
                  className={`services-toggle ${isOtherActive('3') || isOtherActive('4') || isOtherActive('5') || isOtherActive('6') || isOtherActive('7') || isOtherActive('8') || isOtherActive('9') || isOtherActive('10') || isOtherActive('11') || isOtherActive('12') || isOtherActive('13') || isOtherActive('14') || isOtherActive('15') || isOtherActive('16') || isOtherActive('17') ? 'active' : ''}`}
                  onClick={toggleOtherServicesDropdown}
                >
                  Other Cleaning Services
                  <span className={`dropdown-arrow ${isOtherServicesOpen ? 'open' : ''}`}>
                    <MdArrowDropDown />
                  </span>
                </div>
              )}
              {!isMobile && (
                <ul className={`dropdown-menu nested-dropdown ${isOtherServicesOpen ? 'open' : ''}`}>
                  <div className="dropdown-columns">
                    <div className="dropdown-column">
                      <li>
                        <NavLink
                          to="/others#3"
                          className={({ isActive }) => (isOtherActive('3') ? 'active' : '')}
                          onClick={() => handleNavClick('3')}
                        >
                          Residential Cleaning
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#4"
                          className={({ isActive }) => (isOtherActive('4') ? 'active' : '')}
                          onClick={() => handleNavClick('4')}
                        >
                          Office Cleaning
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#5"
                          className={({ isActive }) => (isOtherActive('5') ? 'active' : '')}
                          onClick={() => handleNavClick('5')}
                        >
                          Retail Store Cleanup
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#6"
                          className={({ isActive }) => (isOtherActive('6') ? 'active' : '')}
                          onClick={() => handleNavClick('6')}
                        >
                          Healthcare Cleaning
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#7"
                          className={({ isActive }) => (isOtherActive('7') ? 'active' : '')}
                          onClick={() => handleNavClick('7')}
                        >
                          Educational Cleaning
                        </NavLink>
                      </li>
                    </div>
                    <div className="dropdown-column">
                      <li>
                        <NavLink
                          to="/others#8"
                          className={({ isActive }) => (isOtherActive('8') ? 'active' : '')}
                          onClick={() => handleNavClick('8')}
                        >
                          Transport Cleaning
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#9"
                          className={({ isActive }) => (isOtherActive('9') ? 'active' : '')}
                          onClick={() => handleNavClick('9')}
                        >
                          Event and Venue Cleaning
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#10"
                          className={({ isActive }) => (isOtherActive('10') ? 'active' : '')}
                          onClick={() => handleNavClick('10')}
                        >
                          Periodic Cleaning
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#11"
                          className={({ isActive }) => (isOtherActive('11') ? 'active' : '')}
                          onClick={() => handleNavClick('11')}
                        >
                          Window Cleaning
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#12"
                          className={({ isActive }) => (isOtherActive('12') ? 'active' : '')}
                          onClick={() => handleNavClick('12')}
                        >
                          Carpet Cleaning
                        </NavLink>
                      </li>
                    </div>
                    <div className="dropdown-column">
                      <li>
                        <NavLink
                          to="/others#13"
                          className={({ isActive }) => (isOtherActive('13') ? 'active' : '')}
                          onClick={() => handleNavClick('13')}
                        >
                          Hard Floor Maintenance
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#14"
                          className={({ isActive }) => (isOtherActive('14') ? 'active' : '')}
                          onClick={() => handleNavClick('14')}
                        >
                          Strip and Sealing
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#15"
                          className={({ isActive }) => (isOtherActive('15') ? 'active' : '')}
                          onClick={() => handleNavClick('15')}
                        >
                          Pressure Cleaning
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#16"
                          className={({ isActive }) => (isOtherActive('16') ? 'active' : '')}
                          onClick={() => handleNavClick('16')}
                        >
                          Graffiti Removal
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/others#17"
                          className={({ isActive }) => (isOtherActive('17') ? 'active' : '')}
                          onClick={() => handleNavClick('17')}
                        >
                          Emergency Flood and Mould Clean-Up
                        </NavLink>
                      </li>
                    </div>
                  </div>
                </ul>
              )}
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleNavClick}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleNavClick}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={handleNavClick}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;