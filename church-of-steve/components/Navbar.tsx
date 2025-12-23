
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleHashChange = () => setHash(window.location.hash || '#/');
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Define which pages start with a dark background (Hero images)
  const darkHeroPages = ['#/', '#', '#/about', '#/beliefs', '#/rituals', '#/gallery'];
  const isDarkHeroPage = darkHeroPages.includes(hash);

  // Determine text color based on scroll and page background
  // If scrolled: always white on dark background
  // If not scrolled: white if dark hero page, dark gray if light page
  const textColorClass = scrolled 
    ? 'text-gray-300 hover:text-white' 
    : (isDarkHeroPage ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-primary');

  const logoColorClass = scrolled
    ? 'text-white'
    : (isDarkHeroPage ? 'text-white' : 'text-gray-900');

  const navBgClass = scrolled 
    ? 'bg-black/90 backdrop-blur-md shadow-lg py-2' 
    : 'bg-transparent py-4';

  const buttonClass = scrolled
    ? 'bg-primary hover:bg-orange-600 text-white'
    : (isDarkHeroPage 
        ? 'bg-primary hover:bg-orange-600 text-white shadow-glow' 
        : 'bg-gray-900 hover:bg-primary text-white');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <a href="#/" className="flex items-center gap-2 group">
              <div className={`p-1 rounded-sm flex items-center justify-center w-10 h-10 shadow-lg transition-colors duration-500 ${scrolled || isDarkHeroPage ? 'bg-white' : 'bg-primary'}`}>
                <span className={`material-icons text-2xl transition-colors duration-500 ${scrolled || isDarkHeroPage ? 'text-black' : 'text-white'}`}>tsunami</span>
              </div>
              <div className="flex flex-col">
                <span className={`font-logo text-xl tracking-widest uppercase leading-none transition-colors duration-500 group-hover:text-primary ${logoColorClass}`}>
                  Church of Steve
                </span>
                <span className={`text-[0.6rem] uppercase tracking-wider leading-none transition-colors duration-500 ${scrolled || isDarkHeroPage ? 'text-gray-400' : 'text-gray-500'}`}>
                  Not a Cult
                </span>
              </div>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${textColorClass} px-3 py-2 font-display uppercase tracking-widest text-xs transition-all duration-300`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#/donate" 
              className={`ml-4 font-display uppercase tracking-widest text-xs px-5 py-2.5 rounded transition-all duration-300 transform hover:-translate-y-0.5 ${buttonClass}`}
            >
              Donate
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors p-2 ${scrolled || isDarkHeroPage ? 'text-white' : 'text-gray-900'}`}
            >
              <span className="material-icons text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'} ${scrolled || isDarkHeroPage ? 'bg-black/95' : 'bg-white shadow-xl'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-display uppercase tracking-widest transition-colors ${
                scrolled || isDarkHeroPage 
                  ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#/donate"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-primary text-white font-display uppercase tracking-widest py-4 rounded-md mt-4 shadow-lg"
          >
            Join the Flock
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
