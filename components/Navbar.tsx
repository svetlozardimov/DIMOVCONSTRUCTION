import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
  scrollToSection: (section: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: SectionId.HOME, label: 'Начало' },
    { id: SectionId.PROJECTS, label: 'Проекти' },
    { id: SectionId.CALCULATOR, label: 'Калкулатор' },
    { id: SectionId.ARTICLES, label: 'Статии' },
    { id: SectionId.LINKS, label: 'Връзки' },
    { id: SectionId.ABOUT, label: 'За Нас' },
    { id: SectionId.CONTACT, label: 'Контакти' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg py-2' : 'bg-black/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => scrollToSection(SectionId.HOME)}>
             <div className="flex flex-col justify-center">
                <div className="flex items-baseline leading-none">
                   <span className="text-4xl font-black text-secondary tracking-tighter">D</span>
                   <span className="text-2xl font-bold text-white">imo</span>
                   <span className="ml-1 text-2xl font-black text-secondary italic transform -skew-x-12">V</span>
                </div>
                <div className="text-[10px] font-bold text-white tracking-[0.2em] uppercase leading-none mt-0.5 pl-1">
                  Construction
                </div>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-bold uppercase tracking-wide transition-all duration-200 border-b-2 ${
                  activeSection === link.id
                    ? 'text-secondary border-secondary'
                    : 'text-gray-300 border-transparent hover:text-white hover:border-gray-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-primary shadow-xl absolute w-full border-t border-gray-800 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-bold uppercase ${
                  activeSection === link.id
                    ? 'bg-gray-800 text-secondary border-l-4 border-secondary'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;