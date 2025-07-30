import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactProps {
    /** Function to open the contact assessment modal. */
    onGetAssessmentClick: () => void;
}

/**
 * The Contact section component, typically used at the bottom of the homepage.
 * It provides a final call-to-action to get a free assessment.
 * @param {ContactProps} props - The props for the component.
 * @returns {React.FC} The Contact component.
 */
const Contact: React.FC<ContactProps> = ({ onGetAssessmentClick }) => {
    // Hook to apply a fade-in-up animation when the section scrolls into view.
    const sectionRef = useScrollAnimation();

    return (
        <section 
          ref={sectionRef} 
          id="contact" 
          className="py-24 sm:py-32 text-center transition-all duration-1000 ease-out opacity-0 transform translate-y-4 relative overflow-hidden bg-primary"
        >
             {/* Decorative background blur elements */}
             <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-accent/5 rounded-full blur-3xl"></div>
             <div className="absolute -top-1/2 -right-1/4 w-3/4 h-3/4 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 relative">
                <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-text-heading">
                    Ready to build a resilient, modern business?
                </h2>
                <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-text-secondary">
                   Let's start the conversation. Your initial consultation is free, with no obligation. We'll assess your current state and provide a clear, actionable roadmap for your modernization journey.
                </p>
                <div className="mt-12">
                    <button 
                        onClick={onGetAssessmentClick}
                        className="inline-block bg-accent hover:bg-opacity-80 text-background font-bold py-4 px-12 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 hover:shadow-accent/30"
                    >
                        Get Your Free Assessment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
