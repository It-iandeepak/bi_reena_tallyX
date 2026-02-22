import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-grid-layout">
                    {/* Left Typography Side */}
                    <div className="about-content">
                        <div className="about-label">About BiReenaTellyX</div>
                        <h2 className="about-headline">
                            Simplifying accounting for <span className="highlight-text">growing businesses</span> worldwide.
                        </h2>
                        <p className="about-description">
                            We believe that accounting shouldn't be a hurdle. BiReenaTellyX was built from the ground up to give entrepreneurs, accountants, and enterprises a seamless, automated, and totally transparent financial ecosystem.
                        </p>
                        <p className="about-description">
                            Inspired by industry leaders like Zoho and Mocha, our platform combines enterprise-grade security with consumer-grade design, giving you absolute clarity over your cash flow.
                        </p>

                        <div className="about-stats-container">
                            <div className="about-stat">
                                <h4 className="stat-number">99.9%</h4>
                                <p className="stat-label">Uptime SLA</p>
                            </div>
                            <div className="about-stat">
                                <h4 className="stat-number">24/7</h4>
                                <p className="stat-label">Expert Support</p>
                            </div>
                            <div className="about-stat">
                                <h4 className="stat-number">10K+</h4>
                                <p className="stat-label">Active Users</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Side */}
                    <div className="about-visual">
                        <div className="about-image-wrapper">
                            {/* Abstract decorative aesthetic common in Enterprise Software */}
                            <div className="creative-shape shape-1"></div>
                            <div className="creative-shape shape-2"></div>

                            <div className="about-feature-box top-box">
                                <div className="box-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="box-title">Trusted & Secure</h5>
                                    <p className="box-desc">Bank-level encryption.</p>
                                </div>
                            </div>

                            <div className="about-feature-box bottom-box">
                                <div className="box-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="box-title">Real-time Sync</h5>
                                    <p className="box-desc">Zero manual entry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
