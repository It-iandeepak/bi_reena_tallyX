import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Services', to: '/services' },
        { label: 'Features', to: '/features' },
        { label: 'Pricing', to: '/pricing' },
        { label: 'Contact', to: '/contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="top-gradient-bar">
                Powered by AI, Ringless Voicemails &amp; Marketing That Converts
            </div>

            <div className="container navbar-container">
                <div className="logo-section">
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        <div className="logo-icon">B</div>
                        <div className="logo-text">BiReenaTellyX</div>
                    </Link>
                </div>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className={location.pathname === to ? 'active-nav-link' : ''}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {label}
                            {label === 'Contact' && <ChevronDown size={14} style={{ marginLeft: 4 }} />}
                        </Link>
                    ))}
                </div>

                <div className="nav-actions">
                    <Link to="/contact">
                        <button className="btn btn-default demo-btn">
                            Schedule a Demo <span className="arrow">→</span>
                        </button>
                    </Link>
                    <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
