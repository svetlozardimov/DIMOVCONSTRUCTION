import React from 'react';
import { SectionId } from '../types';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id={SectionId.HOME} className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" 
          alt="Steel construction frame"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 mb-8">
             <div className="h-[2px] w-8 bg-secondary"></div>
             <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">Проектиране на сгради и съоръжения</span>
             <div className="h-[2px] w-8 bg-secondary"></div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-none uppercase">
            Dimov <span className="text-secondary">Const</span>ruction
          </h1>
          
          <p className="text-xl text-gray-300 mb-2 max-w-3xl mx-auto font-light">
            BIM Проектиране на стоманени конструкции
          </p>
          <p className="text-base text-gray-400 mb-12 max-w-2xl mx-auto">
             Изготвяне на работен проект с КМД чертежи и NC/DXF файлове за автоматизирано производство.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection(SectionId.PROJECTS)}
              className="group bg-secondary hover:bg-red-700 text-white px-10 py-4 rounded text-lg font-bold uppercase tracking-wide transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
            >
              Разгледай Обекти
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection(SectionId.CONTACT)}
              className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white px-10 py-4 rounded text-lg font-bold uppercase tracking-wide transition-all duration-300"
            >
              Контакти
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white/30">
        <ChevronDown className="h-10 w-10" />
      </div>
    </section>
  );
};

export default Hero;