import React, { useRef } from 'react';
import './Services.css';
import {
    Calculator,
    FileText,
    PieChart,
    Users,
    Briefcase,
    Building,
    ArrowRight
} from 'lucide-react';

const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    // Calculate icon size based on position in bento grid
    // First card is the large hero card, so it gets a bigger icon
    const iconSize = index === 0 ? 38 : 28;

    return (
        <div
            ref={cardRef}
            className={`srv-card ${service.accent}`}
            onMouseMove={handleMouseMove}
        >
            <div className="srv-card-inner">
                <div className="srv-icon-box">
                    {React.cloneElement(service.icon, { size: iconSize })}
                </div>
                <div className="srv-text-content">
                    <h3 className="srv-title">{service.title}</h3>
                    <p className="srv-desc">{service.desc}</p>
                </div>
                <div className="srv-card-footer">
                    <a href="#contact" className="srv-link">
                        <span>Learn more</span>
                        <ArrowRight size={18} className="srv-arrow" />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    const services = [
        {
            icon: <Calculator />,
            title: "Automated Bookkeeping",
            desc: "Say goodbye to manual data entry. We categorize transactions, reconcile bank accounts, and keep your books perpetually audit-ready with intelligent automation.",
            accent: "srv-brand"
        },
        {
            icon: <FileText />,
            title: "Tax Prep & Compliance",
            desc: "Stay ahead of regulatory deadlines & minimize tax liability.",
            accent: "srv-emerald"
        },
        {
            icon: <PieChart />,
            title: "Financial Reporting",
            desc: "Custom balance sheets and granular cash flow analytics.",
            accent: "srv-purple"
        },
        {
            icon: <Users />,
            title: "Payroll Management",
            desc: "Simplify payroll processing with automated calculations, precise tax withholding, and direct deposit setups for your entire team globally.",
            accent: "srv-pink"
        },
        {
            icon: <Briefcase />,
            title: "CFO Advisory Services",
            desc: "Get strategic financial planning. Our virtual CFOs help you map out growth, analyze margins, and secure long-term capital forecasting.",
            accent: "srv-orange"
        },
        {
            icon: <Building />,
            title: "Enterprise Solutions",
            desc: "Custom consolidation and multi-entity management for scaling businesses that require advanced operational and multi-tenant workflows.",
            accent: "srv-indigo"
        }
    ];

    return (
        <section className="srv-section" id="services">
            <div className="srv-container">
                <div className="srv-header">
                    <span className="srv-pill">OUR EXPERTISE</span>
                    <h2 className="srv-headline">Comprehensive <br /> Accounting Services</h2>
                    <p className="srv-subheadline">
                        From basic ledger management to complex tax strategy, BiReenaTellyX offers a full <br />
                        suite of interactive solutions designed to let you focus on growing your business.
                    </p>
                </div>

                <div className="srv-bento-grid">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
