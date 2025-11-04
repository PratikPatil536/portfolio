import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: 'Python', icon: FaPython, level: 90 },
    { name: 'HTML', icon: FaHtml5, level: 95 },
    { name: 'CSS', icon: FaCss3Alt, level: 90 },
    { name: 'JavaScript', icon: FaJs, level: 85 },
    { name: 'React', icon: FaReact, level: 80 },
    { name: 'MS SQL', icon: FaDatabase, level: 75 }
  ];

  return (
    <section className="skills section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card glass hoverable"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="skill-icon">
                <skill.icon />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                />
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;