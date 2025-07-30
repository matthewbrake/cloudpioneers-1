import React from 'react';
import { services } from '../data';
import AiIcon from './icons/AiIcon';
import CloudWorkspaceIcon from './icons/CloudWorkspaceIcon';
import SecureStorageIcon from './icons/SecureStorageIcon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// A generic icon for services that don't have a specific one.
const DefaultIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-5.834A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0l-4.545 4.545m-9.17-9.17L3.25 12.5" />
    </svg>
);

// Map service IDs to their corresponding icon components for easy lookup.
const serviceIcons: { [key: string]: React.FC<{className?: string}> } = {
    'modern-workspace': CloudWorkspaceIcon,
    'ai-automation': AiIcon,
    'infrastructure-modernization': SecureStorageIcon,
    'work-from-anywhere': DefaultIcon
};

interface ServicesProps {
  /** Function to navigate to a service detail page. */
  navigate: (page: string, anchor?: string) => void;
}

/**
 * The Services section on the homepage.
 * It displays a grid of cards, each representing a core solution.
 * @param {ServicesProps} props - The props for the component.
 */
const Services: React.FC<ServicesProps> = ({ navigate }) => {
    // Hook to apply a fade-in-up animation when the section scrolls into view.
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} id="solutions" className="py-24 sm:py-32 transition-all duration-1000 ease-out opacity-0 transform translate-y-4">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-text-heading">Our Core Solutions</h2>
                    <p className="mt-6 text-lg md:text-xl text-text-secondary">We deliver tangible results through four key pillars of modernization.</p>
                </div>
                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map(service => {
                        const Icon = serviceIcons[service.id];
                        return (
                            <div key={service.id} className="bg-primary border border-text-secondary/10 rounded-2xl flex flex-col group hover:-translate-y-2 transition-transform duration-300 hover:border-accent/50 shadow-lg hover:shadow-accent/10 overflow-hidden">
                                <img src={service.cardImageUrl} alt={`${service.title} illustration`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                                <div className="p-8 flex flex-col flex-grow">
                                    {Icon && (
                                        <div className="bg-background text-accent w-16 h-16 rounded-full flex items-center justify-center mb-6 -mt-20 self-start border-4 border-primary shadow-lg">
                                            <Icon className="w-8 h-8"/>
                                        </div>
                                    )}
                                    <h3 className="font-heading text-2xl font-bold text-text-heading group-hover:text-accent transition-colors duration-300 mb-4">{service.title}</h3>
                                    <p className="text-text-secondary mb-8 flex-grow">{service.introduction.substring(0, 110)}...</p>
                                    <button onClick={() => navigate(service.id)} className="font-sans text-base text-accent font-bold hover:opacity-80 transition-opacity duration-300 mt-auto self-start flex items-center gap-2">
                                        Learn More <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
