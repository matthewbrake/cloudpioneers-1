import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * A sub-component that displays key statistics about business risks.
 * Animates into view on scroll.
 */
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

/**
 * A sub-component that highlights common problems businesses face with outdated technology.
 * Animates into view on scroll.
 */
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

/**
 * A container component for the "Why Us" section of the homepage.
 * It combines the statistics bar and the problem statement sections.
 * @returns {React.FC} The WhyUs component.
 */
const WhyUs: React.FC = () => {
    return (
        <>
            <StatsBarSection />
            <ProblemStatementSection />
        </>
    )
}

export default WhyUs;
