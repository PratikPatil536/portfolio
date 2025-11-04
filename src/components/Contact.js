import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:pratik@example.com', label: 'Email' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/pratik-patil-145579281', label: 'LinkedIn' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section className="contact section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Let's Connect
        </motion.h2>
        <motion.div
          className="contact-content glass"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="contact-text">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="social-link hoverable"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <link.icon />
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>&copy; 2024 Pratik Patil. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;