import React, { useEffect, useRef, useState } from 'react';
import { services } from '../data';
import { Service } from '../types';

interface HomePageProps {
  navigate: (page: string, anchor?: string) => void;
}

const useScrollAnimation = (options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      },
      options
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);
  return ref;
};

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <div className="overflow-x-hidden font-sans">
      <HeroSection />
      <StatsBarSection />
      <ProblemStatementSection />
      <AIShowcaseSection />
      <CoreSolutionsSection navigate={navigate} />
      <FinalCTASection />
    </div>
  );
};

const HeroSection: React.FC = () => {
    const sectionRef = useScrollAnimation();
    const handleSolutionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section ref={sectionRef} className="relative py-40 md:py-52 text-center transition-all duration-1000 ease-out opacity-0 transform translate-y-4">
            <div className="absolute inset-0 bg-background opacity-60"></div>
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1554141323-c454e3ab4764?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
            ></div>
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

const StatsBarSection: React.FC = () => {
    const sectionRef = useScrollAnimation();
    const stats = [
        { value: '43%', label: 'of cyber attacks target small businesses.', source: 'Accenture' },
        { value: '7.5', label: 'hours per week lost to manual, repetitive tasks.', source: 'Asana' },
        { value: '60%', label: 'of SMBs fail within 6 months of a data breach.', source: 'Cybersecurity Ventures' },
    ];
    return (
        <section ref={sectionRef} className="py-20 sm:py-24 bg-primary transition-all duration-1000 ease-out opacity-0 transform translate-y-4">
            <div className="container mx-auto px-4 sm:px-6">
                 <h2 className="text-center font-heading text-3xl md:text-4xl font-bold text-text-heading mb-16">Why Modernize Now? The Risks Are Real.</h2>
                <div className="grid md:grid-cols-3 gap-10 md:gap-16">
                    {stats.map(stat => (
                        <div key={stat.label} className="text-center p-6">
                            <p className="font-heading text-6xl md:text-7xl font-extrabold text-accent">{stat.value}</p>
                            <h3 className="mt-4 text-xl text-text-heading">{stat.label}</h3>
                            <p className="text-sm text-text-secondary mt-1">Source: {stat.source}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const ProblemStatementSection: React.FC = () => {
    const sectionRef = useScrollAnimation();
    const problems = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.007H12v-.007z" /></svg>,
            title: 'Security Blind Spots',
            description: "Your simple firewall and basic antivirus aren't enough. You're exposed to ransomware, phishing, and data breaches that could be catastrophic."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>,
            title: 'Scattered Data & Tools',
            description: "Information lives in email, on local drives, in 10 different apps. This kills productivity and makes finding anything a nightmare."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
            title: 'Growth Blockers',
            description: "Your aging servers can't keep up. Onboarding new employees is slow and enabling secure remote work feels impossible. Your IT is holding you back."
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 sm:py-32 transition-all duration-1000 ease-out opacity-0 transform translate-y-4">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-text-heading">Is Your Technology a Liability?</h2>
                    <p className="mt-6 text-lg md:text-xl text-text-secondary">If you recognize these symptoms, you're not just losing efficiency—you're increasing risk.</p>
                </div>
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    {problems.map(problem => (
                        <div key={problem.title} className="bg-primary border border-text-secondary/10 p-8 rounded-2xl shadow-lg">
                            <div className="bg-background text-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                {problem.icon}
                            </div>
                            <h3 className="font-heading text-2xl font-bold text-text-heading mb-4">{problem.title}</h3>
                            <p className="text-text-secondary text-lg">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const AIShowcaseSection: React.FC = () => {
    const sectionRef = useScrollAnimation();
    const [activeTab, setActiveTab] = useState('dashboard');

    const tabs = [
        { id: 'dashboard', name: 'Dashboards', description: 'Transform raw data into interactive, real-time dashboards for instant insights.', visual: <DashboardMockup /> },
        { id: 'reporting', name: 'Automated Reporting', description: 'Generate complex financial or operational reports automatically, saving hours of manual work.', visual: <ReportMockup /> },
        { id: 'rag', name: 'Intelligent Search', description: "Ask questions in plain English and get answers from your company's documents and data.", visual: <RAGMockup /> },
        { id: 'forecasting', name: 'Forecasting', description: 'Leverage AI to predict trends, forecast sales, and make data-driven decisions.', visual: <ForecastMockup /> },
    ];

    return (
        <section ref={sectionRef} className="py-24 sm:py-32 transition-all duration-1000 ease-out opacity-0 transform translate-y-4 bg-primary">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-text-heading">AI Doesn't Have to Be Complicated</h2>
                    <p className="mt-6 text-lg md:text-xl text-text-secondary">We build practical, affordable AI systems that solve real business problems. No PhD required. Here's what that looks like:</p>
                </div>
                <div className="mt-16">
                    <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-10">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`font-bold py-3 px-6 rounded-md text-base transition-all duration-300 ${activeTab === tab.id ? 'bg-accent text-background' : 'bg-background text-text-primary hover:bg-background/80'}`}>
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    <div className="bg-background p-4 md:p-8 rounded-xl border border-text-secondary/10 shadow-2xl shadow-background">
                        {tabs.map(tab => (
                            <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div className="p-4">
                                        <h3 className="font-heading text-3xl font-bold text-accent mb-4">{tab.name}</h3>
                                        <p className="text-text-secondary text-lg">{tab.description}</p>
                                    </div>
                                    <div className="h-72 bg-primary rounded-lg flex items-center justify-center p-4">
                                        {tab.visual}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const CoreSolutionsSection: React.FC<HomePageProps> = ({ navigate }) => {
    const sectionRef = useScrollAnimation();
    return (
        <section ref={sectionRef} id="solutions" className="py-24 sm:py-32 transition-all duration-1000 ease-out opacity-0 transform translate-y-4">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-text-heading">Our Core Solutions</h2>
                    <p className="mt-6 text-lg md:text-xl text-text-secondary">We deliver tangible results through four key pillars of modernization.</p>
                </div>
                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map(service => (
                        <div key={service.id} className="bg-primary border border-text-secondary/10 p-8 rounded-2xl flex flex-col group hover:-translate-y-2 transition-transform duration-300 hover:border-accent/50 shadow-lg hover:shadow-accent/10">
                            <h3 className="font-heading text-2xl font-bold text-text-heading group-hover:text-accent transition-colors duration-300 mb-4">{service.title}</h3>
                            <p className="text-text-secondary mb-8 flex-grow">{service.introduction.substring(0, 110)}...</p>
                            <button onClick={() => navigate(service.id)} className="font-sans text-base text-accent font-bold hover:opacity-80 transition-opacity duration-300 mt-auto self-start flex items-center gap-2">
                                Learn More <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FinalCTASection: React.FC = () => {
    const sectionRef = useScrollAnimation();
    return (
        <section ref={sectionRef} id="contact" className="py-24 sm:py-32 text-center transition-all duration-1000 ease-out opacity-0 transform translate-y-4 relative overflow-hidden bg-primary">
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
                    <a href="mailto:assessment@cloudpioneers.dev" className="inline-block bg-accent hover:bg-opacity-80 text-background font-bold py-4 px-12 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20 hover:shadow-accent/30">
                        Get Your Free Assessment
                    </a>
                </div>
            </div>
        </section>
    );
};

// --- Mockup Components for AI Showcase ---

const DashboardMockup = () => (
    <div className="w-full h-full border border-text-secondary/20 rounded-lg bg-background/50 p-4 flex gap-4 shadow-inner">
        <div className="w-1/3 space-y-4">
            <div className="h-10 bg-accent/30 rounded-md"></div>
            <div className="h-5 bg-text-secondary/30 rounded-md"></div>
            <div className="h-5 bg-text-secondary/30 rounded-md w-2/3"></div>
            <div className="h-16 bg-accent/20 rounded-md"></div>
             <div className="h-5 bg-text-secondary/30 rounded-md w-4/5"></div>
        </div>
        <div className="w-2/3 flex flex-col">
             <div className="h-5 bg-text-secondary/30 rounded-md w-1/2 mb-4"></div>
            <div className="flex-grow flex items-end gap-2 px-1">
                <div className="w-1/4 h-1/3 bg-accent/60 rounded-t-md"></div>
                <div className="w-1/4 h-2/3 bg-accent/60 rounded-t-md"></div>
                <div className="w-1/4 h-1/2 bg-accent/60 rounded-t-md"></div>
                <div className="w-1/4 h-3/4 bg-accent/60 rounded-t-md"></div>
            </div>
             <div className="h-px bg-text-secondary/30 mt-2"></div>
        </div>
    </div>
);

const ReportMockup = () => (
     <div className="w-full h-full border border-text-secondary/20 rounded-lg bg-background/50 p-6 space-y-4 shadow-inner">
        <div className="h-8 w-1/2 bg-accent/30 rounded-md"></div>
        <div className="h-4 bg-text-secondary/30 rounded-md"></div>
        <div className="h-4 bg-text-secondary/30 rounded-md w-5/6"></div>
        <div className="h-4 bg-text-secondary/30 rounded-md w-3/4"></div>
        <div className="h-4 bg-text-secondary/30 rounded-md w-4/6"></div>
        <div className="h-4 bg-text-secondary/30 rounded-md w-5/6"></div>
        <div className="h-4 bg-text-secondary/30 rounded-md w-1/2"></div>
     </div>
);

const RAGMockup = () => (
    <div className="w-full h-full border border-text-secondary/20 rounded-lg bg-background/50 p-4 flex flex-col gap-4 shadow-inner">
        <div className="h-12 border-2 border-accent/50 rounded-lg bg-primary flex items-center px-4">
            <p className="text-text-primary text-base">What were our Q3 profits for the retail sector?</p>
             <div className="w-5 h-5 bg-accent/80 rounded-full ml-auto"></div>
        </div>
        <div className="h-full bg-primary/50 rounded-lg p-4 space-y-3">
            <div className="h-4 bg-accent/30 rounded w-1/3"></div>
            <div className="h-3 bg-text-secondary/30 rounded w-full"></div>
            <div className="h-3 bg-text-secondary/30 rounded w-5/6"></div>
             <div className="h-3 bg-text-secondary/30 rounded w-full"></div>
        </div>
    </div>
);

const ForecastMockup = () => (
    <div className="w-full h-full border border-text-secondary/20 rounded-lg bg-background/50 p-4 flex items-end gap-3 shadow-inner">
        <div className="w-1/5 h-1/4 bg-text-secondary/40 rounded-t-md"></div>
        <div className="w-1/5 h-1/3 bg-text-secondary/40 rounded-t-md"></div>
        <div className="w-1/5 h-1/2 bg-text-secondary/40 rounded-t-md"></div>
        <div className="w-1/5 h-2/3 bg-accent/60 rounded-t-md relative flex items-end border-t-2 border-accent">
            <div className="w-full h-full bg-gradient-to-t from-accent/40 to-transparent"></div>
        </div>
        <div className="w-1/5 h-3/4 bg-accent/60 rounded-t-md relative flex items-end border-t-2 border-accent">
            <div className="w-full h-full bg-gradient-to-t from-accent/40 to-transparent"></div>
        </div>
    </div>
);


export default HomePage;