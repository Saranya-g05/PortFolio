import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Cpu size={24} color="var(--accent-primary)" />,
      title: "Embedded Systems",
      desc: "Passionate about hardware-software integration"
    },
    {
      icon: <Code size={24} color="var(--accent-primary)" />,
      title: "MERN Stack",
      desc: "Building full-stack web applications"
    },
    {
      icon: <Lightbulb size={24} color="var(--accent-primary)" />,
      title: "Quick Learner",
      desc: "Fast adaptable to new technologies"
    },
    {
      icon: <Rocket size={24} color="var(--accent-primary)" />,
      title: "Idea Presenter",
      desc: "Effective communication of concepts"
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About <span style={{ color: 'var(--accent-primary)' }}>Me</span>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
              ECE Student & Aspiring Developer
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              I am currently pursuing my B.E. in Electrical, Electronics, and Communication Engineering at Kongu Engineering College. With a strong foundation in both hardware and software, I bridge the gap between embedded systems and modern web development.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              My journey in technology is driven by curiosity and a desire to create impactful solutions. From designing safety applications to building full-stack web projects, I continuously expand my skill set to tackle diverse challenges.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              Currently focusing on learning Java and JavaScript while exploring the fascinating world of embedded systems and IoT applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
          >
            {cards.map((card, index) => (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem' }}>
                <div style={{ 
                  width: '45px', 
                  height: '45px', 
                  backgroundColor: 'var(--accent-light)', 
                  borderRadius: '10px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {card.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{card.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{card.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
