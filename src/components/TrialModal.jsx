import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Building2, User, Mail, Lock, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import './TrialModal.css';

const TrialModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            setIsClosing(false);
        };
        window.addEventListener('openTrialModal', handleOpen);
        return () => window.removeEventListener('openTrialModal', handleOpen);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => setIsOpen(false), 500);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = {
            fullName: formData.get('fullName'),
            companyName: formData.get('companyName'),
            email: formData.get('email'),
            phone: 'N/A', // Not requested in Trial form
            sourceForm: 'TrialModal'
        };

        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
            setTimeout(() => {
                handleClose();
                }, 2000);
        }, 1000);
    };

    if (!isOpen) return null;

    return (
        <div className={`trial-modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
            {/* Colorful neon background orbs behind the modal */}
            <div className={`trial-modal-content ${isClosing ? 'closing-genie' : 'opening-genie'}`} onClick={(e) => e.stopPropagation()}>
                <div className="trial-glow-orb orb-orange"></div>
                <div className="trial-glow-orb orb-purple"></div>

                <button className="trial-modal-close" onClick={handleClose}>
                    <X size={24} />
                </button>

                {isSubmitted ? (
                    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                        <CheckCircle size={72} style={{ color: '#ec4899', marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Welcome Aboard!</h3>
                        <p style={{ color: '#cbd5e1', fontSize: '1.1rem' }}>Your 14-day free access to BiReena TallyX has been created. Check your email for login details.</p>
                    </div>
                ) : (
                    <>
                        <div className="trial-modal-header">
                            <div className="trial-badge">
                                <Sparkles size={16} /> 14-Day Free Access
                            </div>
                            <h2>Start Your <span className="trial-text-gradient">Financial Journey</span></h2>
                            <p>No credit card required. Full access to all premium accounting tools.</p>
                        </div>

                        <form className="trial-modal-form" onSubmit={handleSubmit}>
                            <div className="trial-field-row">
                                <div className="trial-field">
                                    <label><User size={14} /> Full Name</label>
                                    <input type="text" name="fullName" placeholder="Jane Doe" required />
                                </div>
                                <div className="trial-field">
                                    <label><Mail size={14} /> Work Email</label>
                                    <input type="email" name="email" placeholder="jane@company.com" required />
                                </div>
                            </div>

                            <div className="trial-field">
                                <label><Building2 size={14} /> Business Name</label>
                                <input type="text" name="companyName" placeholder="Acme Corporation" required />
                            </div>

                            <div className="trial-field-row">
                                <div className="trial-field">
                                    <label>Industry</label>
                                    <select defaultValue="" required>
                                        <option value="" disabled>Select Industry</option>
                                        <option>Retail & E-commerce</option>
                                        <option>IT & Software</option>
                                        <option>Manufacturing</option>
                                        <option>Freelance / Consultant</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="trial-field">
                                    <label><Lock size={14} /> Create Password</label>
                                    <input type="password" placeholder="••••••••" required />
                                </div>
                            </div>

                            <button type="submit" className="trial-modal-submit" disabled={isSubmitting}>
                                <span>{isSubmitting ? 'Creating Account...' : 'Create Account & Start Trial'}</span>
                                {!isSubmitting && <ArrowRight size={18} className="trial-btn-icon" />}
                            </button>
                            <p className="trial-terms">By signing up, you agree to our Terms of Service & Privacy Policy.</p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default TrialModal;
