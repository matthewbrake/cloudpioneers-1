import React, { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// --- Mockup Components for AI Showcase ---
// These are simple visual representations and not functional components.
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

/**
 * The Process section on the homepage.
 * It showcases different practical AI applications using a tabbed interface.
 * @returns {React.FC} The Process component.
 */
const Process: React.FC = () => {
    // Hook to apply a fade-in-up animation when the section scrolls into view.
    const sectionRef = useScrollAnimation();
    // State to manage which tab is currently active.
    const [activeTab, setActiveTab] = useState('dashboard');

    // Data for the tabs, including their ID, name, description, and visual mockup.
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
                    {/* Tab buttons */}
                    <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-10">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`font-bold py-3 px-6 rounded-md text-base transition-all duration-300 ${activeTab === tab.id ? 'bg-accent text-background' : 'bg-background text-text-primary hover:bg-background/80'}`}>
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    {/* Tab content */}
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

export default Process;
