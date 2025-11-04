import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScrollReveal } from './ScrollAnimations';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="about section" ref={ref}>
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="about-card glass">
            <p className="about-text">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and user-friendly applications that solve 
              real-world problems. With a strong foundation in both frontend and backend 
              development, I bring ideas to life through clean, efficient code.
            </p>
            <p className="about-text">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;