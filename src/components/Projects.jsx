import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Mail, DollarSign, Dumbbell } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Shield size={20} color="var(--accent-primary)" />,
      date: "April 2023",
      title: "Women's Digital Security",
      subtitle: "Safety & Alert Application",
      description: "A mobile and web-based safety application designed to enhance women's security through real-time alerts and rapid emergency response.",
      points: [
        "Voice-triggered emergency alerts",
        "Real-time GPS location sharing",
        "Incident logging and notifications"
      ],
      presentation: "Presented at 9th National Techno Exhibition, Dr. Ambedkar Institute of Technology, Bengaluru",
      tags: ["Android SDK", "Flutter", "Firebase", "Google Maps API"]
    },
    {
      icon: <Activity size={20} color="var(--accent-primary)" />,
      date: "August 2023",
      title: "Wireless Vital Sign Monitoring",
      subtitle: "IoT Health Monitoring System",
      description: "An embedded and IoT-based health monitoring system designed to track vital signs wirelessly and generate alerts during abnormal conditions.",
      points: [
        "Real-time vital sign monitoring",
        "Wireless data transmission",
        "Automated alert generation"
      ],
      presentation: "Presented at Kongu Engineering College",
      tags: ["Embedded Systems", "Sensors", "Wireless Communication", "IoT"]
    },
    {
      icon: <Mail size={20} color="var(--accent-primary)" />,
      date: null,
      title: "Email Spam Detection System",
      subtitle: "ML-Based Classification",
      description: "A machine learning-based application designed to classify emails as spam or legitimate using text analysis techniques.",
      points: [
        "Automated spam classification",
        "Text preprocessing & feature extraction",
        "Improved email filtering accuracy"
      ],
      presentation: null,
      tags: ["Python", "Machine Learning", "NLP", "Scikit-learn"]
    },
    {
      icon: <DollarSign size={20} color="var(--accent-primary)" />,
      date: null,
      title: "MERN Stack Expense Tracker",
      subtitle: "Full-Stack Web Application",
      description: "A full-stack web application that helps users track daily expenses, manage budgets, and analyze spending patterns.",
      points: [
        "User authentication & secure storage",
        "Category-wise expense tracking",
        "Monthly and yearly summaries"
      ],
      presentation: null,
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      icon: <Dumbbell size={20} color="var(--accent-primary)" />,
      date: null,
      title: "Fitness Challenge Tracker",
      subtitle: "Goal-Oriented Fitness App",
      description: "A web application designed to help users participate in fitness challenges, track daily activities, and monitor progress toward personal.",
      points: [
        "User registration & profile management",
        "Daily activity logging",
        "Visual progress analytics"
      ],
      presentation: null,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
          >
            My <span style={{ color: 'var(--accent-primary)' }}>Projects</span>
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)' }}>A showcase of my technical projects spanning embedded systems, web development, and machine learning</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card card-light"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  {project.icon}
                </div>
                {project.date && (
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', backgroundColor: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', fontWeight: '500', boxShadow: 'var(--shadow-sm)' }}>
                    {project.date}
                  </span>
                )}
              </div>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '1.2rem', fontWeight: '500' }}>{project.subtitle}</p>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {project.description}
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', flex: 1 }}>
                {project.points.map((point, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--accent-primary)', marginTop: '0.2rem' }}>•</span>
                    {point}
                  </li>
                ))}
              </ul>

              {project.presentation && (
                <p style={{ fontStyle: 'italic', color: 'var(--accent-primary)', fontSize: '0.8rem', marginBottom: '1.5rem', opacity: 0.8 }}>
                  {project.presentation}
                </p>
              )}
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'white', padding: '0.3rem 0.8rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
