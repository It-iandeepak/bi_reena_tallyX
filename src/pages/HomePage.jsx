import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import DashboardPreview from '../components/DashboardPreview';
import Services from '../components/Services';
import Features from '../components/Features';
import WhyChooseUs from '../components/why-choose-us/WhyChooseUs';
import Pricing from '../components/pricing/Pricing';
import TailoredSolutions from '../components/tailored-solutions/TailoredSolutions';
import Integrations from '../components/integrations/Integrations';
import FAQ from '../components/FAQ';

const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <DashboardPreview />
            <Services />
            <Features />
            <WhyChooseUs />
            <Pricing />
            <TailoredSolutions />
            <Integrations />
            <FAQ />
        </Layout>
    );
};

export default HomePage;
