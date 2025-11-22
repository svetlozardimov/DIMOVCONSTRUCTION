import React, { useState } from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Mail, Globe, Send, Loader2, CheckCircle, AlertCircle, Facebook, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/dimovconstruction.sz@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          _subject: "Ново запитване от сайта (Dimov Construction)",
          _template: "table",
          _captcha: "false" // Disable captcha to prevent AJAX errors
        })
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        console.error("Submission failed", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Network error", error);
      setStatus('error');
    }
  };

  const CopyButton = ({ text, id }: { text: string, id: string }) => (
    <button 
      onClick={() => handleCopy(text, id)}
      className="ml-2 p-1 text-gray-400 hover:text-secondary hover:bg-gray-100 rounded transition-all"
      title="Копирай"
    >
      {copiedField === id ? (
        <Check size={16} className="text-green-600 animate-bounce" />
      ) : (
        <Copy size={16} />
      )}
    </button>
  );

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
              {/* Address */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gray-100 p-3 rounded text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-bold text-primary uppercase text-sm tracking-wide">Офис</h4>
                    <CopyButton text="гр. Стара Загора, бул. Цар Симеон Велики №4, ет.5, ап.10" id="address" />
                  </div>
                  <p className="text-gray-600 mt-1">гр. Стара Загора,<br/>бул. "Цар Симеон Велики" №4, ет.5, ап.10</p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gray-100 p-3 rounded text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-primary uppercase text-sm tracking-wide mb-2">Телефони</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                       <div className="flex items-center gap-2">
                         <span className="font-bold text-primary">0888 536401</span>
                         <CopyButton text="0888 536401" id="phone1" />
                       </div>
                       <span className="text-sm text-gray-500 text-right">инж. Пламен Димов</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                       <div className="flex items-center gap-2">
                         <span className="font-bold text-primary">0883 386003</span>
                         <CopyButton text="0883 386003" id="phone2" />
                       </div>
                       <span className="text-sm text-gray-500 text-right">инж. Светлозар Димов</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                       <div className="flex items-center gap-2">
                         <span className="font-bold text-primary">0888 574164</span>
                         <CopyButton text="0888 574164" id="phone3" />
                       </div>
                       <span className="text-sm text-gray-500 text-right">инж. Димо Димов (Електро)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gray-100 p-3 rounded text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-bold text-primary uppercase text-sm tracking-wide">Email</h4>
                    <CopyButton text="dimovconstruction.sz@gmail.com" id="email" />
                  </div>
                  <p className="text-gray-600 mt-1 hover:text-secondary transition-colors">
                    <a href="mailto:dimovconstruction.sz@gmail.com">dimovconstruction.sz@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gray-100 p-3 rounded text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                   <Globe size={24} />
                </div>
                 <div>
                  <div className="flex items-center">
                     <h4 className="font-bold text-primary uppercase text-sm tracking-wide">Уебсайт</h4>
                     <CopyButton text="https://www.dimovconstruction.com" id="website" />
                  </div>
                  <p className="text-gray-600 mt-1">www.dimovconstruction.com</p>
                </div>
              </div>

              {/* Facebook - NEW */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-gray-100 p-3 rounded text-secondary group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <Facebook size={24} />
                </div>
                 <div>
                  <h4 className="font-bold text-primary uppercase text-sm tracking-wide">Facebook</h4>
                  <p className="mt-1">
                    <a 
                      href="https://www.facebook.com/DimovConstructionOOD" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-2"
                    >
                      Dimov Construction OOD
                      <ExternalLinkIcon size={14} />
                    </a>
                  </p>
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
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-64 animate-fade-in text-center relative z-10">
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h5 className="text-xl font-bold text-white">Успешно изпратено!</h5>
                <p className="text-gray-400 mt-2 text-sm">Благодарим за запитването. Ще ви отговорим на посочения имейл.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm font-bold uppercase"
                >
                  Изпрати ново
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase text-gray-400 mb-1">Име</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all disabled:opacity-50" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase text-gray-400 mb-1">Телефон</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all disabled:opacity-50" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-400 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all disabled:opacity-50" 
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase text-gray-400 mb-1">Съобщение</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all disabled:opacity-50"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded flex items-start gap-3 text-sm">
                       <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                       <div>
                         <p className="font-bold">Възникна грешка!</p>
                         <p>Моля опитайте отново. Ако проблемът продължава, използвайте телефоните за връзка. (Ако тествате локално, качете сайта на хостинг).</p>
                       </div>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'sending'}
                    className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-4 rounded transition-colors duration-300 uppercase tracking-wide shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> Изпращане...
                      </>
                    ) : (
                      <>
                        <Send size={20} /> Изпрати Съобщение
                      </>
                    )}
                  </button>
                  
                  <p className="text-[10px] text-gray-500 text-center mt-2 opacity-50">
                    * При първоначално изпращане проверете папка SPAM за имейл за активация.
                  </p>
              </form>
            )}
          </div>

        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-white mt-24 pt-12 pb-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-800">
            <div>
              <div className="mb-4">
                 <svg viewBox="0 0 400 200" className="h-16 w-auto" aria-label="Dimov Construction Logo">
                    <g transform="translate(200, 85)">
                      <text transform="translate(-127, 0) skewX(-4)" fill="#DC2626" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="112" textAnchor="middle" dominantBaseline="middle">D</text>
                      <text transform="translate(5, 0) skewX(0)" fill="#FFFFFF" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="85" textAnchor="middle" dominantBaseline="middle" letterSpacing="0em">imo</text>
                      <text transform="translate(125, 0) skewX(-44)" fill="#DC2626" fontFamily="Montserrat, sans-serif" fontWeight="900" fontSize="85" textAnchor="middle" dominantBaseline="middle">V</text>
                    </g>
                    <text x="200" y="146" transform="rotate(0 200 146) skewX(0)" fill="#FFFFFF" fontFamily="Montserrat, sans-serif" fontWeight="bold" fontSize="20" letterSpacing="0.65em" textAnchor="middle" dominantBaseline="middle">CONSTRUCTION</text>
                 </svg>
              </div>
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

const ExternalLinkIcon = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default Contact;