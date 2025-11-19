import React from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-secondary font-bold tracking-wide uppercase mb-2 text-sm">Контакти</h2>
            <h3 className="text-4xl font-bold text-primary mb-8">Dimov Construction</h3>
            <p className="text-slate-600 mb-10 text-lg">
              Свържете се с нас за професионална консултация относно вашите строителни конструкции.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-lg text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Офис</h4>
                  <p className="text-slate-600">гр. Стара Загора,<br/>бул. "Цар Симеон Велики" №4, ет.5, ап.10</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-lg text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Телефони</h4>
                  <p className="text-slate-600 font-medium">0888 536401 <span className="text-slate-400 font-normal text-sm">- инж. Пламен Димов</span></p>
                  <p className="text-slate-600 font-medium">0883 386003 <span className="text-slate-400 font-normal text-sm">- инж. Светлозар Димов</span></p>
                  <p className="text-slate-600 font-medium">0888 574164 <span className="text-slate-400 font-normal text-sm">- инж. Димо Димов</span></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-lg text-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Email</h4>
                  <p className="text-slate-600 hover:text-secondary transition-colors"><a href="mailto:office@dconst.com">office@dconst.com</a></p>
                  <p className="text-slate-600 hover:text-secondary transition-colors"><a href="mailto:dimovconstruction.sz@gmail.com">dimovconstruction.sz@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-lg text-secondary">
                   <Clock size={24} />
                </div>
                 <div>
                  <h4 className="font-bold text-primary">Уебсайт</h4>
                  <p className="text-slate-600">www.dconst.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-primary mb-6">Изпратете запитване</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Име</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Вашето име" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Телефон</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="+359..." />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Съобщение</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Опишете накратко проекта (площ, предназначение)..."></textarea>
              </div>

              <button type="submit" className="w-full bg-secondary hover:bg-amber-600 text-white font-bold py-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Изпрати
              </button>
            </form>
          </div>

        </div>
      </div>
      
      {/* Footer inside Contact for visual flow */}
      <footer className="bg-primary text-white mt-24 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-slate-700 pb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                 Dimov Construction
              </h3>
              <p className="text-slate-400 text-sm">
                Проектиране на строителни конструкции с фокус върху стоманени халета и BIM технологии.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href={`#${SectionId.HOME}`} className="hover:text-secondary transition-colors">Начало</a></li>
                <li><a href={`#${SectionId.PROJECTS}`} className="hover:text-secondary transition-colors">Проекти</a></li>
                <li><a href={`#${SectionId.ABOUT}`} className="hover:text-secondary transition-colors">За Нас</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакти</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>гр. Стара Загора</li>
                <li>бул. "Цар Симеон Велики" №4</li>
                <li>office@dconst.com</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Dimov Construction. Всички права запазени.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;