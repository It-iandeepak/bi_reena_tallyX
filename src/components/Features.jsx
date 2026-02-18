import React from 'react';
import { ShieldCheck, Receipt, Clock, Globe } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <ShieldCheck size={32} />,
            title: "100% Tax Compliance",
            desc: "Stay audit-ready with automated tax calculations and instant filing reports."
        },
        {
            icon: <Clock size={32} />,
            title: "Real-time Tracking",
            desc: "Monitor expenses and revenue streams as they happen, down to the second."
        },
        {
            icon: <Receipt size={32} />,
            title: "Automated Invoicing",
            desc: "Generate and send professional invoices automatically on recurring schedules."
        },
        {
            icon: <Globe size={32} />,
            title: "Multi-Currency",
            desc: "Handle international transactions seamlessly with real-time exchange rates."
        }
    ];

    return (
        <section className="section features-section" id="features">
            <div className="container">
                <div className="grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
