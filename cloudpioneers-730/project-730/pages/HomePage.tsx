import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import Contact from '../components/Contact';

interface HomePageProps {
  /** Function to navigate to a service detail page. */
  navigate: (page: string, anchor?: string) => void;
  /** Function to open the contact assessment modal. */
  onGetAssessmentClick: () => void;
}

/**
 * The main container for the homepage.
 * It assembles all the sections that appear on the homepage in the correct order.
 * @param {HomePageProps} props - The props for the component.
 */
const HomePage: React.FC<HomePageProps> = ({ navigate, onGetAssessmentClick }) => {
  return (
    <div className="overflow-x-hidden font-sans">
      <Hero />
      <WhyUs />
      <Process />
      <Services navigate={navigate} />
      <Contact onGetAssessmentClick={onGetAssessmentClick} />
    </div>
  );
};

export default HomePage;
