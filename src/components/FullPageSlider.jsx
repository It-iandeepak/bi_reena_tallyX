import React, { useEffect, useRef, useState } from 'react';
import './FullPageSlider.css';

import section2 from '../assets/section2.jpg';
import section3 from '../assets/section3.jpg';
import section4 from '../assets/section4.jpg';

const slides = [
    { id: 1, image: section2, title: 'Seamless Integration' },
    { id: 2, image: section3, title: 'Analytics That Matter' },
    { id: 3, image: section4, title: 'Enterprise Ready' },
];

const FullPageSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fslider-wrapper">
            <div className="fslider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide) => (
                    <div key={slide.id} className="fslider-slide">
                        <img src={slide.image} alt={slide.title} className="fslider-img" />
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="fslider-dots">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className={`fslider-dot ${idx === current ? 'active' : ''}`}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FullPageSlider;
