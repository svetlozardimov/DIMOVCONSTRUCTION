import React from 'react';
import { SectionId } from '../types';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id={SectionId.HOME} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
          alt="Steel construction frame"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-800/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/50 text-sm font-semibold tracking-wide mb-6">
            BIM ПРОЕКТИРАНЕ НА СТОМАНЕНИ КОНСТРУКЦИИ
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            DIMOV <span className="text-secondary">CONSTRUCTION</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Building Information Modeling
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
             Проектиране на строителната конструкция на стоманени складови и производствени халета. 
             Работен проект с КМД чертежи и NC/DXF файлове за автоматизирано рязане.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection(SectionId.PROJECTS)}
              className="group bg-secondary hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 flex items-center justify-center"
            >
              Виж Обектите
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection(SectionId.CONTACT)}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              Контакти
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white/50">
        <ChevronDown className="h-10 w-10" />
      </div>
    </section>
  );
};

export default Hero;