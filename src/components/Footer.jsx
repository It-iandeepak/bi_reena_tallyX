import React from 'react';
import { Twitter, Linkedin, Youtube, Mail, MapPin, Phone, Shield, FileText, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    {/* Column 1: Branding */}
                    <div className="footer-brand-col">
                        <h2 className="footer-logo-text">BiReenaTallyX</h2>
                        <p className="footer-desc">
                            Smart accounting solutions for modern businesses.
                        </p>
                        <div className="trust-labels">
                            <span className="trust-badge"><Shield size={14} className="mr-1" /> Secure</span>
                            <span className="trust-badge"><Globe size={14} className="mr-1" /> Compliant</span>
                            <span className="trust-badge"><FileText size={14} className="mr-1" /> Reliable</span>
                        </div>
                    </div>

                    {/* Column 2: Product */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Product</h3>
                        <ul className="footer-links">
                            <li><a href="#">Accounting Dashboard</a></li>
                            <li><a href="#">Invoicing</a></li>
                            <li><a href="#">Expense Tracking</a></li>
                            <li><a href="#">GST / Tax Management</a></li>
                            <li><a href="#">Payroll</a></li>
                            <li><a href="#">Financial Reports</a></li>
                            <li><a href="#">Inventory Management</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Company</h3>
                        <ul className="footer-links">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Partner Program</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Support */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Support & Resources</h3>
                        <ul className="footer-links">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Tutorials</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Contact */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Contact & Compliance</h3>
                        <ul className="footer-contact">
                            <li><MapPin size={16} className="icon" /> 123 Business Park, Tech City</li>
                            <li><Phone size={16} className="icon" /> +1 (800) 123-4567</li>
                            <li><Mail size={16} className="icon" /> support@bireenatallyx.com</li>
                            <li className="faded-text">Mon - Fri, 9am - 6pm EST</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                        <a href="#" className="social-icon"><Youtube size={20} /></a>
                    </div>

                    <div className="footer-legal">
                        <span>&copy; 2026 BiReenaTallyX. All rights reserved.</span>
                        <div className="legal-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Data Processing Agreement</a>
                            <a href="#">Security Policy</a>
                            <a href="#">Cookie Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
