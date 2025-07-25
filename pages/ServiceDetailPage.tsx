import React, { useState, useEffect, useRef } from 'react';
import { Service, FaqItem, IndustryExample } from '../types';

interface ServiceDetailPageProps {
  service: Service;
  navigate: (page: string, anchor?: string) => void;
}

const useScrollAnimation = ({ threshold = 0.1, rootMargin = '0px 0px -50px 0px' }: IntersectionObserverInit = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-5');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(currentRef);
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);
  return ref;
};

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-white/10">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-6 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
            <span className="text-lg font-semibold text-text-heading">{item.question}</span>
            <svg className={`w-6 h-6 text-accent transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div className={`grid overflow-hidden transition-all duration-500 ease-in-out text-text-secondary ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
                <p className="pb-6 pr-8 text-base leading-relaxed">{item.answer}</p>
            </div>
        </div>
    </div>
);

const Section: React.FC<{title: string; children: React.ReactNode; icon: JSX.Element}> = ({title, children, icon}) => {
    const sectionRef = useScrollAnimation();
    return (
        <div ref={sectionRef} className="lg:grid lg:grid-cols-[1fr_2fr] gap-16 items-start py-16 transition-all duration-700 ease-out opacity-0 transform translate-y-5">
            <div className="lg:sticky lg:top-32 flex items-center gap-5 lg:flex-col lg:items-start lg:text-left mb-8 lg:mb-0">
                <div className="text-accent bg-primary p-4 rounded-xl border border-text-secondary/10">{icon}</div>
                <h2 className="font-heading text-3xl font-bold text-text-heading">{title}</h2>
            </div>
            <div className="text-text-secondary text-lg leading-relaxed space-y-6">
                {children}
            </div>
        </div>
    )
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, navigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const mainRef = useScrollAnimation({ threshold: 0.05 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.id]);
  
  const icons = {
    problem: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.007H12v-.007z" /></svg>,
    complication: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
    solution: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-7.5 0C4.508 19.659 2.25 16.185 2.25 12c0-4.185 2.258-7.659 6.01-8.533m7.5 15.066C21.492 19.659 23.25 16.185 23.25 12c0-4.185-2.258-7.659-6.01-8.533" /></svg>,
    transformation: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>,
  };

  return (
    <div ref={mainRef} className="container mx-auto px-4 sm:px-6 py-24 md:py-32 transition-all duration-700 ease-out opacity-0 transform translate-y-5">
      <header className="max-w-5xl mb-20 md:mb-24">
        <button onClick={() => navigate('home')} className="text-accent hover:opacity-80 font-bold transition-opacity duration-200 flex items-center gap-2 mb-10 text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Solutions
        </button>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-heading">{service.pageTitle}</h1>
      </header>

      <div className="relative">
        <div className="absolute left-0 lg:left-[calc(2rem+30px)] top-0 h-full w-px bg-primary hidden md:block"></div>
        
        <Section title="The Problem" icon={icons.problem}><p>{service.introduction}</p></Section>
        {service.complication && <Section title="The Complication" icon={icons.complication}><p>{service.complication}</p></Section>}
        <Section title="The Solution" icon={icons.solution}><p>{service.solution}</p></Section>
        {service.transformation && <Section title="The Transformation" icon={icons.transformation}><p>{service.transformation}</p></Section>}
      </div>

      <div className="mt-24 bg-primary p-8 md:p-12 rounded-2xl border border-text-secondary/10">
        <h2 className="font-heading text-4xl font-bold text-text-heading mb-12 text-center">What We Deliver</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-10">
                {service.deeperDive.keyFeatures.map((feature) => (
                    <div key={feature.title} className="bg-background p-6 rounded-xl border border-text-secondary/10 shadow-md">
                        <h4 className="font-heading font-bold text-2xl text-accent mb-4">{feature.title}</h4>
                        <div className="space-y-4">
                            <div>
                                <span className="text-text-secondary text-sm font-semibold uppercase tracking-wider">Replaces:</span>
                                <p className="text-text-secondary mt-1 line-through decoration-red-500/50">{feature.replaces}</p>
                            </div>
                            <div>
                                <span className="text-accent/90 text-sm font-semibold uppercase tracking-wider">With:</span>
                                <p className="text-text-primary mt-1">{feature.with}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="hidden lg:block sticky top-32">
                 <img src={service.imageUrl} alt={service.title} className="w-full h-[600px] object-cover rounded-xl shadow-2xl shadow-background" />
            </div>
        </div>
      </div>

      {service.industryExamples && service.industryExamples.length > 0 && (
          <div className="mt-24">
              <h2 className="font-heading text-4xl font-bold text-text-heading mb-12 text-center">Real-World Examples</h2>
              <div className="grid md:grid-cols-2 gap-8">
                  {service.industryExamples.map((example) => (
                      <div key={example.industry} className="bg-primary border border-text-secondary/10 p-8 rounded-2xl shadow-lg hover:shadow-accent/10 transition-shadow duration-300">
                          <h3 className="font-heading text-2xl font-bold text-accent mb-3">{example.industry}</h3>
                          <p className="text-text-secondary text-lg">{example.useCase}</p>
                      </div>
                  ))}
              </div>
          </div>
      )}

      {service.faqs && service.faqs.length > 0 && (
         <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-text-heading mb-12 text-center">Frequently Asked Questions</h2>
            <div className="bg-primary p-6 md:p-8 rounded-2xl border border-text-secondary/10">
              {service.faqs.map((item, index) => (
                <AccordionItem key={index} item={item} isOpen={openFaqIndex === index} onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} />
              ))}
            </div>
         </div>
      )}

       <div className="text-center mt-24">
           <a href="mailto:assessment@cloudpioneers.dev" className="inline-block bg-accent hover:bg-opacity-80 text-background font-bold py-4 px-12 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 hover:shadow-accent/30">
               {service.cta}
            </a>
       </div>
    </div>
  );
};

export default ServiceDetailPage;