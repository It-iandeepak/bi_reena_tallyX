import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DashboardPreview from './components/DashboardPreview'
import Features from './components/Features'
import Analytics from './components/Analytics'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

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
                <Analytics />
                <Pricing />
            </main>
            <Footer />
        </div>
    )
}

export default App
