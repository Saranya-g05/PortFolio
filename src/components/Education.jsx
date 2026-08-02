import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Circle } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', color: 'var(--accent-primary)' }}
          >
            Education
          </motion.h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{ 
              maxWidth: '600px', 
              width: '100%', 
              padding: '2.5rem', 
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Background decorative blob */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '150px',
              height: '150px',
              backgroundColor: 'var(--accent-light)',
              borderRadius: '50%',
              zIndex: 0,
              opacity: 0.5
            }} />

            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'var(--accent-primary)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              zIndex: 1
            }}>
              <GraduationCap size={28} color="white" />
            </div>

            <div style={{ zIndex: 1 }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem', fontWeight: '700' }}>Bachelor of Engineering</h3>
              <p style={{ color: 'var(--accent-primary)', fontWeight: '500', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Electrical, Electronics & Communication Engineering
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <MapPin size={16} /> Kongu Engineering College, Perundurai
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <Calendar size={16} /> Expected Graduation: 2027
                </div>
              </div>

              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.4rem 1rem', 
                backgroundColor: 'var(--bg-card-light)', 
                color: 'var(--accent-primary)', 
                borderRadius: '20px', 
                fontSize: '0.85rem',
                fontWeight: '500'
              }}>
                <Circle size={8} fill="currentColor" /> Currently Pursuing
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             style={{
               marginTop: '2rem',
               padding: '0.5rem 1.5rem',
               border: '1px solid var(--border-color)',
               borderRadius: '30px',
               color: 'var(--text-secondary)',
               fontSize: '0.9rem',
               display: 'flex',
               alignItems: 'center',
               gap: '0.5rem',
               backgroundColor: 'white'
             }}
          >
             <Circle size={10} color="var(--accent-primary)" fill="var(--accent-primary)" /> Fresher - Open to Opportunities
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
