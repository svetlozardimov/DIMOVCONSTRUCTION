import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
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
    { id: SectionId.ABOUT, label: 'За Нас' },
    { id: SectionId.CONTACT, label: 'Контакти' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
            <div className="bg-gray-200 p-1 rounded mr-2">
               <Building2 className="h-8 w-8 text-primary" />
            </div>
            <div className="flex flex-col">
                <span className={`font-bold text-xl tracking-tight leading-none ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white'}`}>
                DIMOV
                </span>
                <span className={`font-bold text-lg tracking-tight leading-none text-secondary`}>
                CONSTRUCTION
                </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-secondary'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label.toUpperCase()}
              </button>
            ))}
            <button
              onClick={() => scrollToSection(SectionId.CONTACT)}
              className="bg-secondary hover:bg-amber-600 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Оферта
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary shadow-xl absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  activeSection === link.id
                    ? 'bg-slate-800 text-secondary'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
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