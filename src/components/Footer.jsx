import React from 'react';
import { Download, Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        
        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Interested in working together?</p>
          <a href="#" className="btn-outline" style={{ display: 'inline-flex', padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            <Download size={16} style={{ marginRight: '0.5rem' }} /> Download My Resume
          </a>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--accent-primary)' }}>
              Saranya G
            </div>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <FaGithub size={18} />
              </a>
              <a href="#" style={{ color: 'var(--text-secondary)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <FaLinkedin size={18} />
              </a>
              <a href="#" style={{ color: 'var(--text-secondary)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Mail size={18} />
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              &copy; {new Date().getFullYear()} Made with <Heart size={14} fill="var(--accent-primary)" color="var(--accent-primary)" /> by Saranya
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
