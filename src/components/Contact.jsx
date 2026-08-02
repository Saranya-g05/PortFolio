import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
          >
            Get In <span style={{ color: 'var(--accent-primary)' }}>Touch</span>
          </motion.h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            I'm always open to discussing new opportunities, collaborations, or just a friendly chat about technology!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Let's Connect</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Feel free to reach out through any of the following channels. I typically respond within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: <Mail size={20} color="var(--accent-primary)" />, label: "Email", value: "saranyagopal2005@gmail.com" },
                { icon: <FaGithub size={20} color="var(--accent-primary)" />, label: "GitHub", value: "Saranya-g05" },
                { icon: <FaLinkedin size={20} color="var(--accent-primary)" />, label: "LinkedIn", value: "saranya-g-271105g" }
              ].map((item, index) => (
                <div key={index} className="card card-light" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>{item.label}</p>
                    <p style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-primary)' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  style={{ 
                    width: '100%', padding: '0.8rem 1rem', background: 'var(--bg-secondary)', 
                    border: '1px solid var(--border-color)', borderRadius: '8px', outline: 'none', transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  style={{ 
                    width: '100%', padding: '0.8rem 1rem', background: 'var(--bg-secondary)', 
                    border: '1px solid var(--border-color)', borderRadius: '8px', outline: 'none', transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                <textarea 
                  rows="5"
                  placeholder="Your message here..." 
                  style={{ 
                    width: '100%', padding: '0.8rem 1rem', background: 'var(--bg-secondary)', 
                    border: '1px solid var(--border-color)', borderRadius: '8px', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                <Send size={18} style={{ marginRight: '0.5rem' }} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
