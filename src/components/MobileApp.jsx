import React, { useRef } from 'react';
import { Apple, Play, CheckCircle, ArrowRight, Smartphone, Scan, Receipt, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './MobileApp.css';
import dashboardImage from '../assets/dashboard.png';
import girlPocketImg from '../assets/girl_pocket.png';

gsap.registerPlugin(ScrollTrigger);

const MobileApp = () => {
    const containerRef = useRef(null);
    const phoneRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",   // Start when section is halfway up the viewport
                end: "center 40%",  // Finish when section center is slightly above viewport center
                scrub: 1.5,
            }
        });

        tl.fromTo(phoneRef.current, {
            y: -250,
            scale: 0.95,
            rotation: 0,
            clipPath: 'inset(0% 0% 0% 0% round 36px)',
            opacity: 1
        }, {
            y: 80, // Drops straight down
            scale: 0.85,
            rotation: 0,
            clipPath: 'inset(0% 0% 55% 0% round 36px)', // Bottom 55% clips out
            ease: "sine.inOut"
        });
    }, { scope: containerRef });
    return (
        <section className="mobile-section" id="mobile-app" ref={containerRef}>
            {/* Background Aesthetic */}
            <div className="mo-bg-glow mo-glow-orange"></div>
            <div className="mo-bg-glow mo-glow-pink"></div>

            <div className="mo-container">
                <div className="mo-content">
                    <div className="mo-badge">
                        <Smartphone size={16} />
                        <span>Available on iOS & Android</span>
                    </div>
                    <h2 className="mo-title">
                        Your Entire Business in <br />
                        <span className="mo-gradient-text">Your Pocket</span>
                    </h2>
                    <p className="mo-description">
                        Don't wait until you're back at your desk. Send invoices, snap pictures of receipts, reconcile transactions, and view live cash flow right from your phone.
                    </p>

                    <div className="mo-feature-grid">
                        <div className="mo-feature">
                            <div className="mo-feat-icon bg-orange"><Receipt size={18} /></div>
                            <div>
                                <h4>Smart Receipt Scanner</h4>
                                <p>Auto-extract data from photos.</p>
                            </div>
                        </div>
                        <div className="mo-feature">
                            <div className="mo-feat-icon bg-pink"><ShieldCheck size={18} /></div>
                            <div>
                                <h4>FaceID Security</h4>
                                <p>Biometric lock for your data.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mo-download-buttons">
                        <a
                            href="#"
                            className="mo-btn-store"
                            onClick={(e) => {
                                e.preventDefault();
                                window.dispatchEvent(new Event('openMobileAppModal'));
                            }}
                        >
                            <Apple size={24} />
                            <div className="mo-btn-text">
                                <span className="mo-btn-sub">Download on the</span>
                                <span className="mo-btn-main">App Store</span>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="mo-btn-store"
                            onClick={(e) => {
                                e.preventDefault();
                                window.dispatchEvent(new Event('openMobileAppModal'));
                            }}
                        >
                            <Play size={24} />
                            <div className="mo-btn-text">
                                <span className="mo-btn-sub">GET IT ON</span>
                                <span className="mo-btn-main">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="mo-visual">
                    {/* Girl background wrapper */}
                    <div className="mo-girl-bg">
                        <img src={girlPocketImg} alt="Girl Pocket Background" />
                    </div>

                    <div className="mo-phone-mockup" ref={phoneRef}>
                        <div className="mo-phone-notch"></div>
                        <div className="mo-phone-screen">
                            {/* Abstract Mobile UI representation */}
                            <div className="mo-ui-top">
                                <div className="mo-ui-nav">
                                    <span>Hi, Rajesh</span>
                                    <div className="mo-ui-avatar"></div>
                                </div>
                                <div className="mo-ui-card">
                                    <span className="mo-ui-label">Total Balance</span>
                                    <h3 className="mo-ui-balance">₹ 12,45,000</h3>
                                    <span className="mo-ui-growth">+14% this month</span>
                                </div>
                            </div>
                            <div className="mo-ui-bottom">
                                <h4>Recent Transactions</h4>
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="mo-ui-transaction">
                                        <div className="mo-ui-icon"></div>
                                        <div className="mo-ui-text-lines">
                                            <div className="mo-line-1"></div>
                                            <div className="mo-line-2"></div>
                                        </div>
                                        <div className="mo-ui-amount"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Floating Orbs behind phone */}
                    <div className="mo-orbit mo-orbit-1"></div>
                    <div className="mo-orbit mo-orbit-2"></div>
                </div>
            </div>
        </section>
    );
};

export default MobileApp;
