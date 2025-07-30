import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { services } from '../data';

interface HeaderProps {
    /** Function to navigate between pages. */
    navigate: (page: string, anchor?: string) => void;
    /** Function to open the contact assessment modal. */
    onGetAssessmentClick: () => void;
}

/**
 * The main header component for the website.
 * Includes the logo, navigation links, and a call-to-action button.
 * It is sticky and has a responsive mobile menu.
 * @param {HeaderProps} props - The props for the component.
 */
const Header: React.FC<HeaderProps> = ({ navigate, onGetAssessmentClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsTimeoutRef = useRef<number | null>(null);

  // --- Event Handlers for Desktop Solutions Dropdown ---
  const handleSolutionsEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setIsSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    solutionsTimeoutRef.current = window.setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 200); // A brief delay to allow moving the mouse from button to menu
  };
  
  // --- Navigation Handlers ---
  const handleSolutionClick = (serviceId: string) => {
    navigate(serviceId);
    setIsSolutionsOpen(false);
    setIsMenuOpen(false);
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('home', 'contact');
    setIsMenuOpen(false); // Close mobile menu if open
  }

  const handleGetAssessment = (e: React.MouseEvent) => {
    e.preventDefault();
    onGetAssessmentClick();
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo and Site Title */}
        <button onClick={() => navigate('home')} className="flex items-center gap-3 text-2xl font-bold text-text-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
          <Logo />
          <span className="font-heading tracking-wide text-2xl">Cloud Pioneers</span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
            <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home');}} className="text-text-secondary hover:text-accent transition-colors duration-300">Home</a>
            <div className="relative" onMouseEnter={handleSolutionsEnter} onMouseLeave={handleSolutionsLeave}>
                <button className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-1">
                    Solutions
                     <svg className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {isSolutionsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-primary rounded-md shadow-lg border border-white/10 p-2 z-10">
                        {services.map(service => (
                            <button key={service.id} onClick={() => handleSolutionClick(service.id)} className="w-full text-left px-4 py-2 text-text-secondary hover:bg-background hover:text-accent rounded-md transition-colors duration-200">
                                {service.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <a href="#contact" onClick={handleContactClick} className="text-text-secondary hover:text-accent transition-colors duration-300">Contact</a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
            <button onClick={handleGetAssessment} className="border border-accent text-accent font-bold py-2 px-6 rounded-md text-sm hover:bg-accent hover:text-background transition-all duration-300">
                Get Assessment
            </button>
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-secondary hover:text-accent focus:outline-none" aria-label="Toggle menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary">
          <nav className="flex flex-col items-center space-y-6 px-6 py-8">
            <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); setIsMenuOpen(false); }} className="text-lg text-text-secondary hover:text-accent transition-colors duration-300">Home</a>
             <div>
                <button onClick={() => setIsSolutionsOpen(!isSolutionsOpen)} className="text-lg text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-1">
                    Solutions
                     <svg className={`w-5 h-5 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {isSolutionsOpen && (
                    <div className="mt-4 w-full bg-background rounded-md p-2 flex flex-col items-center space-y-2">
                        {services.map(service => (
                            <button key={service.id} onClick={() => handleSolutionClick(service.id)} className="w-full text-center px-4 py-3 text-text-secondary hover:bg-primary hover:text-accent rounded-md transition-colors duration-200">
                                {service.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <a href="#contact" onClick={handleContactClick} className="text-lg text-text-secondary hover:text-accent transition-colors duration-300">Contact</a>
            <button onClick={handleGetAssessment} className="mt-6 border border-accent text-accent font-bold py-3 px-8 rounded-md text-base hover:bg-accent hover:text-background transition-all duration-300">
                Get Assessment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
