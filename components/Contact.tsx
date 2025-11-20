import React from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Контакти</h2>
            <h3 className="text-4xl font-black text-primary mb-8 uppercase tracking-tight">Свържете се с нас</h3>
            <p className="text-gray-600 mb-10 text-lg border-l-4 border-secondary pl-4">
              Професионално проектиране на строителни конструкции. Свържете се директно с нашия инженерен екип.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="bg-gray-100 p-3 rounded text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary uppercase text-sm tracking-wide">Офис</h4>
                  <p className="text-gray-600 mt-1">гр. Стара Загора,<br/>бул. "Цар Симеон Велики" №4, ет.5, ап.10</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gray-100 p-3 rounded text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-primary uppercase text-sm tracking-wide mb-2">Телефони</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                       <span className="font-bold text-primary">0888 536401</span>
                       <span className="text-sm text-gray-500">инж. Пламен Димов</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                       <span className="font-bold text-primary">0883 386003</span>
                       <span className="text-sm text-gray-500">инж. Светлозар Димов</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                       <span className="font-bold text-primary">0888 574164</span>
                       <span className="text-sm text-gray-500">инж. Димо Димов (Електро)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gray-100 p-3 rounded text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary uppercase text-sm tracking-wide">Email</h4>
                  <p className="text-gray-600 mt-1 hover:text-secondary transition-colors">
                    <a href="mailto:dimovconstruction.sz@gmail.com">dimovconstruction.sz@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gray-100 p-3 rounded text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                   <Globe size={24} />
                </div>
                 <div>
                  <h4 className="font-bold text-primary uppercase text-sm tracking-wide">Уебсайт</h4>
                  <p className="text-gray-600 mt-1">www.dimovconstruction.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary text-white rounded-none p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full -ml-16 -mb-16 blur-2xl"></div>
            
            <h4 className="text-2xl font-bold text-white mb-2 relative z-10">Изпратете запитване</h4>
            <p className="text-gray-400 text-sm mb-8 relative z-10">Ще се свържем с вас възможно най-скоро.</p>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase text-gray-400 mb-1">Име</label>
                  <input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase text-gray-400 mb-1">Телефон</label>
                  <input type="tel" id="phone" className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-400 mb-1">Email</label>
                <input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase text-gray-400 mb-1">Съобщение</label>
                <textarea id="message" rows={4} className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"></textarea>
              </div>

              <button type="submit" className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-4 rounded transition-colors duration-300 uppercase tracking-wide shadow-lg">
                Изпрати Съобщение
              </button>
            </form>
          </div>

        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-white mt-24 pt-12 pb-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-800">
            <div>
              <h3 className="text-2xl font-black mb-4 flex items-center uppercase tracking-tighter">
                 Dimov<span className="text-secondary">Const</span>ruction
              </h3>
              <p className="text-gray-500 text-sm max-w-xs">
                Цялостни решения в проектирането на стоманени конструкции и индустриални сгради.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4 border-l-2 border-secondary pl-2">Меню</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href={`#${SectionId.HOME}`} className="hover:text-white transition-colors">Начало</a></li>
                <li><a href={`#${SectionId.PROJECTS}`} className="hover:text-white transition-colors">Проекти</a></li>
                <li><a href={`#${SectionId.ABOUT}`} className="hover:text-white transition-colors">За Нас</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-4 border-l-2 border-secondary pl-2">Адрес</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Стара Загора, България</li>
                <li>бул. "Цар Симеон Велики" №4</li>
                <li>dimovconstruction.sz@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Dimov Construction. Всички права запазени.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;