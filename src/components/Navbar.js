import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('light-theme', !isDark);
  };

  useEffect(() => {
    document.body.classList.toggle('light-theme', !isDark);
  }, [isDark]);

  return (
    <motion.nav
      className={`navbar glass ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="nav-content">
        <div className="nav-profile">
          <div className="profile-photo">
            <span>PP</span>
          </div>
          <span className="profile-name">Pratik Patil</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('about')} className="nav-link hoverable">About</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link hoverable">Contact</button>
          <button onClick={toggleTheme} className="theme-toggle hoverable">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;