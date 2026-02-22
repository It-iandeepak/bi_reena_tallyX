import React, { useEffect, useRef } from 'react';
import './FullPageSlider.css';

import section1 from '../assets/section1.jpg';
import section2 from '../assets/section2.jpg';
import section3 from '../assets/section3.jpg';
import section4 from '../assets/section4.jpg';

const sections = [
    {
        id: 1,
        title: 'Discover Innovation',
        subtitle: 'Experience the next generation of our platform with intuitive design and powerful features.',
        image: section1,
        cta: 'Get Started'
    },
    {
        id: 2,
        title: 'Seamless Integration',
        subtitle: 'Connect all your favorite tools in one place without writing a single line of code.',
        image: section2,
        cta: 'Learn More'
    },
    {
        id: 3,
        title: 'Analytics That Matter',
        subtitle: 'Make data-driven decisions with our beautiful, real-time analytics dashboard.',
        image: section3,
        cta: 'View Features'
    },
    {
        id: 4,
        title: 'Enterprise Ready',
        subtitle: 'Built for scale with robust security, compliance and administration tools.',
        image: section4,
        cta: 'Contact Sales'
    }
];

const FullPageSlider = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        // Remove the class when out of view to re-trigger the animation on re-entry
                        entry.target.classList.remove('is-visible');
                    }
                });
            },
            {
                threshold: 0.4, // Trigger when 40% of the element is visible
            }
        );

        const elements = document.querySelectorAll('.slider-content');
        elements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="slider-page-wrapper">
            <div className="slider-container" ref={containerRef}>
                {sections.map((section) => (
                    <section
                        key={section.id}
                        className="slider-section"
                    >
                        <img
                            src={section.image}
                            alt={section.title}
                            className="slider-image"
                        />
                    </section>
                ))}
            </div>
        </div>
    );
};

export default FullPageSlider;
