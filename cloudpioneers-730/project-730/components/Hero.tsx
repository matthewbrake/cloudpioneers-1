import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * The Hero section component.
 * This is the main banner at the top of the homepage, with a headline, tagline, and primary call-to-action.
 * @returns {React.FC} The Hero component.
 */
const Hero: React.FC = () => {
    // Hook to apply a fade-in-up animation when the section scrolls into view.
    const sectionRef = useScrollAnimation();
    
    // Handler to smoothly scroll to the solutions section.
    const handleSolutionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section 
          ref={sectionRef} 
          className="relative py-40 md:py-52 text-center transition-all duration-1000 ease-out opacity-0 transform translate-y-4"
        >
            {/* Background image with an overlay for readability */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1554141323-c454e3ab4764?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
            ></div>
            <div className="absolute inset-0 bg-background opacity-60"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-text-heading">
                        Stop Fighting Your IT.
                        <br/>
                        <span className="text-accent">Make It Your Edge.</span>
                    </h1>
                    <p className="mt-8 text-lg md:text-xl max-w-3xl mx-auto text-text-primary">
                        We architect modern, secure, and intelligent IT systems that save money, reduce risk, and future-proof your business.
                    </p>
                    <div className="mt-12">
                        <a
                            href="#solutions"
                            onClick={handleSolutionsClick}
                            className="bg-accent hover:bg-opacity-80 text-background font-bold py-4 px-10 rounded-md text-lg md:text-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Explore Solutions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
