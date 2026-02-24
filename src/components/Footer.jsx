import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-modern-section">
            <div className="footer-modern-container">
                <div className="footer-modern-card">

                    {/* Top Section */}
                    <div className="footer-modern-top">
                        {/* Logo Block (Cutout style area) */}
                        <div className="footer-modern-logo-block">
                            <div className="footer-logo-content">
                                <div className="logo-icon-modern">B</div>
                                <div className="logo-text-modern">BiReenaTellyX</div>
                            </div>
                            <p className="footer-tagline-modern">Simple. Secure. Tailored.</p>
                        </div>

                        {/* Links Block */}
                        <div className="footer-modern-links">
                            <div className="footer-nav-col">
                                <h3>Product</h3>
                                <ul>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Features</a></li>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Pricing</a></li>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Blogs</a></li>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Tally Alternative</a></li>
                                </ul>
                            </div>

                            <div className="footer-nav-col">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> About</a></li>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Vision</a></li>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Our Values</a></li>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Contact Us</a></li>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Careers</a></li>
                                </ul>
                            </div>

                            <div className="footer-nav-col">
                                <h3>Support</h3>
                                <ul>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Getting Started</a></li>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Help Center</a></li>
                                    <li><a href="#"><ArrowRight size={14} className="link-arrow" /> Request Support</a></li>
                                </ul>
                            </div>

                            {/* Social Icons rightmost aligned as in image */}
                            <div className="footer-modern-social">
                                <a href="https://www.facebook.com/people/Bireena-Bireena/61572904348705/" target="_blank" rel="noopener noreferrer"><Facebook size={18} /></a>
                                <a href="https://www.instagram.com/bireenainfo/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
                                <a href="https://www.linkedin.com/in/bireena-info-tech-a975533a1/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
                                <a href="https://www.youtube.com/@bireenainfotech" target="_blank" rel="noopener noreferrer"><Youtube size={18} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section (Big Callout Text) */}
                    <div className="footer-modern-middle">
                        <h2 className="footer-callout-text">
                            Cost-Effective, Customizable, Streamlined, Accounting Software.
                        </h2>
                        <button className="footer-demo-button">Book a Demo</button>
                    </div>

                    {/* Bottom Section */}
                    <div className="footer-modern-bottom">
                        <div className="footer-modern-copyright">
                            Copyright &copy; 2026 Bireena Info Tech | All Rights Reserved | Terms and Conditions | Privacy Policy
                        </div>
                        <div className="footer-modern-contact">
                            Contact: +91 91351-55931<br />
                            Email: support@bireenatallyx.com
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
