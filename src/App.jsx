import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Features from './components/Features'
import FullPageSlider from './components/FullPageSlider'
import Pricing from './components/pricing/Pricing'
import FAQ from './components/FAQ'
import TailoredSolutions from './components/tailored-solutions/TailoredSolutions'
import Integrations from './components/integrations/Integrations'
import PreFooter from './components/prefooter/PreFooter'
import Footer from './components/Footer'
import WhyChooseUs from './components/why-choose-us/WhyChooseUs'

import CustomCursor from './components/CustomCursor';

function App() {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <CustomCursor />
            <Navbar />
            <main style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
                <DashboardPreview />
                <Features />
                <FullPageSlider />
                <WhyChooseUs />
                <Pricing />
                <TailoredSolutions />
                <Integrations />
                <FAQ />
            </main>
            <PreFooter />
            <Footer />
        </div>
    )
}
