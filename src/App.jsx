import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Features from './components/Features'
import Analytics from './components/Analytics'
import Pricing from './components/pricing/Pricing'
import FAQ from './components/FAQ'
import TailoredSolutions from './components/tailored-solutions/TailoredSolutions'
import Integrations from './components/integrations/Integrations'
import PreFooter from './components/prefooter/PreFooter'
import Footer from './components/Footer'
import WhyChooseUs from './components/why-choose-us/WhyChooseUs'

function App() {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>

            <Navbar />
            <main style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
                <DashboardPreview />
                <Features />
                <Analytics />
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

export default App
