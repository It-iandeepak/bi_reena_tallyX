import React from 'react';
import './Services.css';
import {
    Calculator,
    FileText,
    PieChart,
    Users,
    Briefcase,
    Building
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Calculator size={32} />,
            title: "Automated Bookkeeping",
            desc: "Say goodbye to manual data entry. We categorize transactions, reconcile bank accounts, and keep your books perpetually audit-ready."
        },
        {
            icon: <FileText size={32} />,
            title: "Tax Preparation & Compliance",
            desc: "Stay ahead of regulatory deadlines. We generate detailed tax reports, monitor compliance changes, and prepare everything for easy filing."
        },
        {
            icon: <PieChart size={32} />,
            title: "Financial Reporting",
            desc: "Gain deep insights into your cash flow. We provide customizable balance sheets, profit & loss statements, and granular cash flow analysis."
        },
        {
            icon: <Users size={32} />,
            title: "Payroll Management",
            desc: "Simplify payroll processing with automated calculations, precise tax withholding, and direct deposit setups for your entire team."
        },
        {
            icon: <Briefcase size={32} />,
            title: "CFO Advisory Services",
            desc: "Get strategic financial planning. Our virtual CFOs help you map out growth, analyze margins, and secure long-term capital forecasting."
        },
        {
            icon: <Building size={32} />,
            title: "Enterprise Solutions",
            desc: "Custom consolidation and multi-entity management for scaling businesses that require advanced operational workflows."
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="services-container">
                <div className="services-header">
                    <h5 className="services-label">Our Expertise</h5>
                    <h2 className="services-headline">Comprehensive Accounting Services</h2>
                    <p className="services-subheadline">
                        From basic ledger management to complex tax strategy, BiReenaTellyX offers a full suite of services designed to let you focus on growing your business.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon-box">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <a href="#contact" className="service-link">Learn more &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
