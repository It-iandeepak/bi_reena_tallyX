import React from 'react';
import Layout from '../components/Layout';
import FAQ from '../components/FAQ';

const ContactPage = () => (
    <Layout>
        <section style={{ padding: '8rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Contact Us</h1>
            <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '3rem', lineHeight: 1.7 }}>
                Have a question or want to schedule a demo? Reach out and we'll get back to you shortly.
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left' }}>
                <div>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Full Name</label>
                    <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #e2e8f0', borderRadius: '10px', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Email Address</label>
                    <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #e2e8f0', borderRadius: '10px', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem', display: 'block' }}>Message</label>
                    <textarea rows={5} placeholder="Tell us how we can help..." style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #e2e8f0', borderRadius: '10px', fontSize: '1rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                </div>
                <button type="submit" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white', border: 'none', borderRadius: '10px', padding: '0.9rem 2rem', fontSize: '1rem', fontWeight: 700, cursor: 'pointer' }}>
                    Send Message →
                </button>
            </form>
        </section>
        <FAQ />
    </Layout>
);

export default ContactPage;
