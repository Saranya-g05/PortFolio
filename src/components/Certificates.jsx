import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Building2 } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "9th National Techno Exhibition",
      date: "April 2025",
      organizer: "Dr. Ambedkar Institute of Technology, Bengaluru",
      extraInfo: "Project: Women's Digital Security",
      image: "/certificates/techno-exhibition.png"
    },
    {
      title: "Introduction to Linux (LFS101)",
      date: "October 2025",
      organizer: "The Linux Foundation",
      extraInfo: "Credential ID: LF-8ryu3bt1sr",
      image: "/certificates/linux.png"
    },
    {
      title: "Paper Pioneers - IGNUZ'24",
      date: "November 2024",
      organizer: "KPR Institute of Engineering and Technology",
      extraInfo: "National Level Technical Symposium",
      image: "/certificates/ignuz.png"
    },
    {
      title: "IDEATHON",
      date: "July 2025",
      organizer: "Kongu Engineering College",
      extraInfo: "Project: Patient Monitoring System",
      image: "/certificates/ideathon.png"
    },
    {
      title: "PROOF OF CONCEPT",
      date: "August 2025",
      organizer: "Kongu Engineering College",
      extraInfo: "Project: Patient Monitoring System",
      image: "/certificates/poc.png"
    },
    {
      title: "Techno Cultural Fest",
      date: "August 2025",
      organizer: "Kongu Engineering College",
      extraInfo: "Project: Patient Monitoring System",
      image: "/certificates/techno-cultural.png"
    }
  ];

  return (
    <section id="certificates" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
          >
            My <span style={{ color: 'var(--accent-primary)' }}>Certificates</span>
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)' }}>Recognition and achievements from various technical events and courses</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              {/* Image Header */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', top: '10px', left: '10px', width: '30px', height: '30px',
                  backgroundColor: 'var(--accent-primary)', borderRadius: '6px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2
                }}>
                  <Award size={16} color="white" />
                </div>
                <div style={{
                  position: 'absolute', top: '10px', right: '10px',
                  backgroundColor: 'var(--accent-primary)', borderRadius: '20px', padding: '0.2rem 0.8rem',
                  display: 'flex', alignItems: 'center', gap: '0.4rem', zIndex: 2, color: 'white', fontSize: '0.8rem', fontWeight: '500'
                }}>
                  <Calendar size={12} /> {cert.date}
                </div>
                <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', fontWeight: '600' }}>{cert.title}</h3>
                
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>
                  <Building2 size={14} color="var(--accent-primary)" /> {cert.organizer}
                </p>
                
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>
                  {cert.extraInfo}
                </p>

                <a href="#" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  width: '100%', padding: '0.8rem', backgroundColor: 'var(--bg-card-light)',
                  color: 'var(--accent-primary)', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '500',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-light)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-card-light)'}
                >
                  <ExternalLink size={16} /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
