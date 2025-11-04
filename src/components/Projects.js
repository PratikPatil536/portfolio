import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ScrollReveal } from './ScrollAnimations';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React and Python backend.',
      technologies: ['React', 'Python', 'MS SQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analytics.',
      technologies: ['Python', 'React', 'MS SQL'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section className="projects section" ref={ref}>
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Featured Projects</h2>
        </ScrollReveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.2}>
              <motion.div
                className="project-card glass hoverable"
                whileHover={{ scale: 1.03, y: -5 }}
              >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link hoverable">
                    <FaGithub /> Code
                  </a>
                  <a href={project.live} className="project-link hoverable">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;