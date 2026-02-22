import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Features from './components/Features'
import Analytics from './components/Analytics'
<<<<<<< HEAD
import Pricing from './components/Pricing'
import Footer from './components/Footer'

import CustomCursor from './components/CustomCursor';
=======
import Pricing from './components/pricing/Pricing'
import FAQ from './components/FAQ'
import TailoredSolutions from './components/tailored-solutions/TailoredSolutions'
import Integrations from './components/integrations/Integrations'
import PreFooter from './components/prefooter/PreFooter'
import Footer from './components/Footer'
import WhyChooseUs from './components/why-choose-us/WhyChooseUs'
>>>>>>> b7d66a52efb9b75153e3131d911daba953eae131

function App() {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
<<<<<<< HEAD
            <CustomCursor />
=======

>>>>>>> b7d66a52efb9b75153e3131d911daba953eae131
            <Navbar />
            <main style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
                <DashboardPreview />
                <Features />
                <Analytics />
<<<<<<< HEAD
                <Pricing />
            </main>
=======
                <WhyChooseUs />
                <Pricing />
                <TailoredSolutions />
                <Integrations />
                <FAQ />
            </main>
            <PreFooter />
>>>>>>> b7d66a52efb9b75153e3131d911daba953eae131
            <Footer />
        </div>
    )
}

export default App
