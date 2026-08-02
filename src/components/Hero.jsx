import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: 'var(--accent-primary)', fontWeight: '600', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
              Hello, I'm
            </p>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', marginBottom: '1rem', color: 'var(--text-primary)', letterSpacing: '-1px' }}>
              Saranya G
            </h1>
            <h2 style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', fontWeight: '500', marginBottom: '1.5rem', lineHeight: '1.4' }}>
              ECE Student | MERN Stack Developer | Embedded System Enthusiast
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem', maxWidth: '500px' }}>
              A quick learner with a determined mind, passionate about building innovative solutions in embedded systems and web development. Currently pursuing B.E. in ECE at Kongu Engineering College.
            </p>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                { icon: <FaGithub size={20} />, href: '#' },
                { icon: <FaLinkedin size={20} />, href: '#' },
                { icon: <Mail size={20} />, href: '#' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    backgroundColor: '#f3f4f6',
                    color: 'var(--text-primary)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-primary)'; e.currentTarget.style.color = 'white'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#" className="btn-primary">
                <Download size={18} style={{ marginRight: '0.5rem' }} /> Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* Decorative circles */}
            <div style={{ position: 'absolute', top: '10%', left: '0%', width: '80px', height: '80px', backgroundColor: 'var(--accent-light)', borderRadius: '50%', zIndex: -1 }} />
            <div style={{ position: 'absolute', bottom: '5%', right: '10%', width: '100px', height: '100px', backgroundColor: 'var(--accent-light)', borderRadius: '50%', zIndex: -1 }} />
            
            <div style={{
              position: 'relative',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              border: '6px solid var(--accent-primary)',
              padding: '10px',
              backgroundColor: 'white'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#f3f4f6'
              }}>
                <img 
                  src="/profile.jpg" 
                  alt="Saranya G" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
