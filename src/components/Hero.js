import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import certificate1 from '../images/certificate1.png';
import certificate2 from '../images/certificate2.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section">
      <div className="floating-elements">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-shape"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      <div className="container">
        <motion.div
          className="hero-content glass"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Pratik Patil</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Full Stack Developer & Problem Solver
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button className="btn-primary hoverable" onClick={() => scrollToSection('projects')}>View My Work</button>
            <button className="btn-secondary hoverable" onClick={() => scrollToSection('contact')}>Contact Me</button>
          </motion.div>
        </motion.div>
        <div className="hero-bottom">
          <motion.div
            className="qualification-card glass"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3>🎓 Education</h3>
            <p>
            <span className="highlight-group">I'm currently a</span> <span className="highlight-group">Third-Year Computer Science</span> <span className="highlight-group">student, specializing in</span> <span className="highlight-group">Artificial Intelligence and</span> <span className="highlight-group">Data Science through</span> <span className="highlight-group">a collaborative program</span> <span className="highlight-group">with IIT Indore</span> <span className="highlight-group">and Microsoft.</span><br/>
            <span className="highlight-group">My coursework and</span> <span className="highlight-group">projects focus on</span> <span className="highlight-group">machine learning, full-stack</span> <span className="highlight-group">development, and real-world</span> <span className="highlight-group">AI applications, helping</span> <span className="highlight-group">me bridge the</span> <span className="highlight-group">gap between theory</span> <span className="highlight-group">and practical innovation.</span>
          </p>
          </motion.div>
          <motion.div
            className="certifications-card glass"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3>🏆 Certifications</h3>
            <div className="certificates-section">
              <div className="certificate-card">
                <div className="certificate-image">
                  <img src={certificate1} alt="SQL Certificate" />
                </div>
                <h4>SQL Certificate</h4>
              </div>
              <div className="certificate-card">
                <div className="certificate-image">
                  <img src={certificate2} alt="Transact-SQL Certificate" />
                </div>
                <h4>Transact-SQL Certificate</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;