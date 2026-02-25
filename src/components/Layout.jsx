import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PreFooter from './prefooter/PreFooter';
import CustomCursor from './CustomCursor';

const Layout = ({ children, hidePreFooter }) => {
    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <CustomCursor />
            <Navbar />
            <main style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </main>
            {!hidePreFooter && <PreFooter />}
            <Footer />
        </div>
    );
};

export default Layout;
