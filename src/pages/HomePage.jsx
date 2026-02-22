import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import DashboardPreview from '../components/DashboardPreview';
import FullPageSlider from '../components/FullPageSlider';
import WhyChooseUs from '../components/why-choose-us/WhyChooseUs';
import Integrations from '../components/integrations/Integrations';

const HomePage = () => {
    return (
        <Layout>
            <Hero />
            <DashboardPreview />
            <FullPageSlider />
            <WhyChooseUs />
            <Integrations />
        </Layout>
    );
};

export default HomePage;
