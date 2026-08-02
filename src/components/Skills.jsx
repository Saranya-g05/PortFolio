import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, percentage }) => (
  <div style={{ marginBottom: '1.2rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{name}</span>
      <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: '600' }}>{percentage}%</span>
    </div>
    <div style={{ width: '100%', height: '6px', backgroundColor: '#f3f4f6', borderRadius: '4px', overflow: 'hidden' }}>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ height: '100%', backgroundColor: 'var(--accent-primary)', borderRadius: '4px' }}
      />
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", percentage: 85 },
        { name: "Java", percentage: 75 },
        { name: "JavaScript", percentage: 80 },
        { name: "Python", percentage: 70 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", percentage: 80 },
        { name: "Node.js", percentage: 75 },
        { name: "Express.js", percentage: 75 },
        { name: "MongoDB", percentage: 70 }
      ]
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "Cadence", percentage: 80 },
        { name: "Proteus", percentage: 85 },
        { name: "Keil", percentage: 80 },
        { name: "MATLAB", percentage: 75 }
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "ANSYS", percentage: 70 },
        { name: "Git/GitHub", percentage: 75 },
        { name: "Firebase", percentage: 70 },
        { name: "Flutter", percentage: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
          >
            My <span style={{ color: 'var(--accent-primary)' }}>Skills</span>
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)' }}>A comprehensive overview of my technical skills and proficiency levels</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
                {category.title}
              </h3>
              <div>
                {category.skills.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
