import React from 'react';
import { Play, Check, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            {/* Visual Elements */}
            <div className="blob blob-left"></div>
            <div className="blob blob-right"></div>

            <div className="container hero-container relative">
                <h1 className="hero-headline">
                    Smart Accounting & <br />
                    <span className="gradient-text">Automation for Modern Business</span>
                </h1>
                <p className="hero-subheadline">
                    Simplify GST filing, automate invoices, and get real-time business insights with India&apos;s most trusted cloud ERP.
                </p>

                <div className="hero-ctas">
                    <button className="btn btn-primary btn-xl">
                        Get Started <ArrowRight size={18} className="ml-2" />
                    </button>
                    <button className="btn btn-white btn-xl flex-center">
                        <Play size={18} fill="#0d6efd" color="#0d6efd" style={{ marginRight: '8px' }} /> Schedule Demo
                    </button>
                </div>

                <div className="trust-badges">
                    <div className="badge-item">
                        <div className="check-circle"><Check size={14} /></div>
                        <span>Easy Accounting</span>
                    </div>
                    <div className="badge-item">
                        <div className="check-circle"><Check size={14} /></div>
                        <span>GST Ready</span>
                    </div>
                    <div className="badge-item">
                        <div className="check-circle"><Check size={14} /></div>
                        <span>Secure Cloud Data</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
