import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Gradient Bar from VMSlide */}
            <div className="top-gradient-bar"></div>

            <div className="container navbar-container">
                <div className="logo-section">
                    <div className="logo-icon">B</div>
                    <div className="logo-text">BiReenaTellyX</div>
                </div>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                    <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                    <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact <ChevronDown size={14} style={{ marginLeft: 4 }} /></a>
                </div>

                <div className="nav-actions">
                    <button className="btn btn-default demo-btn">
                        Schedule a Demo <span className="arrow">→</span>
                    </button>
                    <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
