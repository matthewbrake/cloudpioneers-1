import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactFormModal from './components/ContactFormModal';
import { services } from './data';
import { Service } from './types';

/**
 * The main application component.
 * It handles page routing, state for the contact modal, and renders the current page.
 * @returns {React.FC} The root component of the application.
 */
const App: React.FC = () => {
  // State to manage the currently displayed page ('home' or a service id).
  const [currentPage, setCurrentPage] = useState('home');
  // State to manage an element ID to scroll to after a page navigation.
  const [scrollToId, setScrollToId] = useState<string | null>(null);
  // State to control the visibility of the contact form modal.
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Effect to handle simple routing from URL query parameters on initial load.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    if (page && (services.some(s => s.id === page) || page === 'home')) {
      setCurrentPage(page);
    }
  }, []);

  // Effect to handle smooth scrolling to an anchor ID after a page transition.
  useEffect(() => {
    if (scrollToId) {
      // Use a short timeout to ensure the target element is rendered before scrolling.
      const timer = setTimeout(() => {
        document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' });
        setScrollToId(null); // Reset after scrolling.
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollToId]);

  /**
   * Navigates to a different page or an anchor on the current page.
   * Updates the URL without a full page reload.
   * @param {string} page - The ID of the page to navigate to (e.g., 'home', 'ai-automation').
   * @param {string} [anchor] - The optional ID of an element to scroll to.
   */
  const navigate = (page: string, anchor?: string) => {
    const isNavigatingToNewPage = page !== currentPage;
    setCurrentPage(page);

    // Update the URL in the browser's history.
    const url = new URL(window.location.href);
    if (page === 'home') {
        url.searchParams.delete('page');
    } else {
        url.searchParams.set('page', page);
    }
    window.history.pushState({}, '', url);
    
    // Handle scrolling behavior.
    if (anchor) {
      if (isNavigatingToNewPage) {
        // If navigating to a new page, set the scroll target to be handled by the useEffect.
        setScrollToId(anchor);
      } else {
        // If on the same page, scroll immediately.
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no anchor, scroll to the top of the new page.
      window.scrollTo(0, 0);
    }
  };

  // Find the service object corresponding to the current page.
  const currentService = services.find(s => s.id === currentPage);

  return (
    <div className="bg-background text-text-primary min-h-screen font-sans flex flex-col">
      <Header navigate={navigate} onGetAssessmentClick={() => setIsContactModalOpen(true)} />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage navigate={navigate} onGetAssessmentClick={() => setIsContactModalOpen(true)} />}
        {currentService && <ServiceDetailPage service={currentService} navigate={navigate} onGetAssessmentClick={() => setIsContactModalOpen(true)} />}
      </main>
      <Footer navigate={navigate} />
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default App;
