import React, { useEffect, useRef, useState } from 'react';
import './Features.css';
import smartInvoiceImg from '../assets/smart-invoice.png';
import connectBanksImg from '../assets/connect-banks.png';
import effortlessTrackingImg from '../assets/effort-tracking.png';

const Features = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const featuresList = [
        {
            title: "Connect Your Banks",
            desc: "Sync all your bank and credit card accounts securely. Transactions flow securely into the system, drastically reducing data entry and potential errors.",
            color: "#3b82f6", // Blue
            visual: (
                <div className="feature-mock-ui feature-image-ui">
                    <img
                        src={connectBanksImg}
                        alt="Connect Your Banks"
                        className="feature-invoice-img"
                    />
                </div>
            )
        },
        {
            title: "Smart Invoicing",
            desc: "Create professional invoices within seconds. Set up recurring profiles for repeat customers and implement automated payment reminders.",
            color: "#8b5cf6", // Purple
            visual: (
                <div className="feature-mock-ui feature-image-ui">
                    <img
                        src={smartInvoiceImg}
                        alt="Smart Invoicing"
                        className="feature-invoice-img"
                    />
                </div>
            )
        },
        {
            title: "Effortless Tracking",
            desc: "Snap a picture of your receipts and let our OCR technology automatically scan and categorize the expense to keep your accounts reconciled.",
            color: "#10b981", // Green
            visual: (
                <div className="feature-mock-ui feature-image-ui">
                    <img
                        src={effortlessTrackingImg}
                        alt="Effortless Tracking"
                        className="feature-invoice-img"
                    />
                </div>
            )
        }
    ];

    return (
        <section className="premium-features-section" id="features" ref={sectionRef}>
            <div className="premium-features-container">
                <div className="features-intro">
                    <h5 className="features-label">Platform Capabilities</h5>
                    <h2 className="features-main-title">Everything you need to manage your finances</h2>
                    <p className="features-subtitle">
                        Powerful automation algorithms working behind the scenes to keep your business fully synced.
                    </p>
                </div>

                <div className={`features-grid-layout ${isVisible ? 'in-view' : ''}`}>
                    {featuresList.map((feat, idx) => (
                        <div key={idx} className="feature-card" style={{ '--stagger-idx': idx }}>
                            <div className="feature-visual-block" style={{ '--accent': feat.color }}>
                                {feat.visual}
                            </div>
                            <div className="feature-text-block">
                                <h3 className="feature-heading">{feat.title}</h3>
                                <p className="feature-description">{feat.desc}</p>
                                <ul className="feature-bullets">
                                    <li><svg viewBox="0 0 24 24" fill="none" stroke={feat.color} strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Automated workflows</li>
                                    <li><svg viewBox="0 0 24 24" fill="none" stroke={feat.color} strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Multi-user access</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
