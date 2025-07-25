import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import { services } from './data';
import { Service } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollToId, setScrollToId] = useState<string | null>(null);

  // Simple routing from query params on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    if (page && (services.some(s => s.id === page) || page === 'home')) {
      setCurrentPage(page);
    }
  }, []);

  useEffect(() => {
    if (scrollToId) {
      const timer = setTimeout(() => {
        document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' });
        setScrollToId(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [scrollToId]);


  const navigate = (page: string, anchor?: string) => {
    const isNavigatingToNewPage = page !== currentPage;
    setCurrentPage(page);
    const url = new URL(window.location.href);
    if (page === 'home') {
        url.searchParams.delete('page');
    } else {
        url.searchParams.set('page', page);
    }
    window.history.pushState({}, '', url);
    
    if (anchor) {
        if (isNavigatingToNewPage) {
            setScrollToId(anchor);
        } else {
            document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        window.scrollTo(0, 0);
    }
  };

  const currentService = services.find(s => s.id === currentPage);

  return (
    <div className="bg-background text-text-primary min-h-screen font-sans flex flex-col">
      <Header navigate={navigate} />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentService && <ServiceDetailPage service={currentService} navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;