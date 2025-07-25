import React from 'react';
import Logo from './Logo';

interface FooterProps {
    navigate: (page: string, anchor?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-background border-t border-primary">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
             <button onClick={() => navigate('home')} className="flex items-center gap-3 text-xl font-bold text-text-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
              <Logo />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-text-heading">Cloud Pioneers</span>
            </button>
            <p className="mt-4 text-text-secondary max-w-xs">Smart Solutions for Modern Business.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-text-heading uppercase tracking-wider">Solutions</h2>
              <ul className="text-text-secondary space-y-4">
                 <li><button onClick={() => navigate('modern-workspace')} className="hover:text-accent transition-colors duration-200">Modern Workspace</button></li>
                 <li><button onClick={() => navigate('ai-automation')} className="hover:text-accent transition-colors duration-200">AI & Automation</button></li>
                 <li><button onClick={() => navigate('infrastructure-modernization')} className="hover:text-accent transition-colors duration-200">Infrastructure</button></li>
                 <li><button onClick={() => navigate('work-from-anywhere')} className="hover:text-accent transition-colors duration-200">Work From Anywhere</button></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-text-heading uppercase tracking-wider">Legal</h2>
              <ul className="text-text-secondary space-y-4">
                <li>
                  <a href="#" className="hover:text-accent transition-colors duration-200">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors duration-200">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-primary/50 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-text-secondary sm:text-center">© {new Date().getFullYear()} Cloud Pioneers™. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;