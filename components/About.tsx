import React from 'react';
import { SectionId, ServiceItem } from '../types';
import { Ruler, HardHat, Database, FileCode2 } from 'lucide-react';

const services: ServiceItem[] = [
  {
    title: "BIM Моделиране",
    description: "3D модел с BIM-информация за стоманената конструкция, гарантиращ прецизност и липса на колизии.",
    iconName: "database"
  },
  {
    title: "КМД Чертежи",
    description: "Изготвяне на пълни производствени (КМД) чертежи за стоманени конструкции.",
    iconName: "ruler"
  },
  {
    title: "Европейски Норми",
    description: "Проектирането се извършва строго по европейските норми (Еврокод) за строителни конструкции.",
    iconName: "helmet"
  },
  {
    title: "NC & DXF Файлове",
    description: "Предоставят се изходни файлове директно към машини за автоматизирано рязане.",
    iconName: "file"
  }
];

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-secondary font-bold tracking-wide uppercase mb-2 text-sm">За Нас</h2>
            <h3 className="text-4xl font-bold text-primary mb-6">Dimov Construction</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Ние сме специализирани в проектирането на строителната конструкция на <strong>стоманени складови и производствени халета</strong> във фаза Работен проект.
              </p>
              <p>
                Нашият подход включва създаването на детайлни производствени (КМД) чертежи и <strong>3D модел с BIM-информация</strong> за стоманената конструкция. Това позволява оптимизация на процесите и елиминиране на грешки още преди началото на строежа.
              </p>
              <p className="font-medium text-primary">
                Осигуряваме пълен цифров пакет: Предоставят се изходни файлове към машини за автоматизирано рязане (nc и dxf-формат).
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-lg font-bold text-primary">Еврокод</p>
                <p className="text-sm text-slate-500">Стандарти за качество</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-lg font-bold text-primary">BIM</p>
                <p className="text-sm text-slate-500">Информационно моделиране</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-tl-3xl z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" 
              alt="Steel structure detail" 
              className="relative z-10 rounded-lg shadow-2xl w-full object-cover h-[400px]"
            />
             <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-xl z-20 hidden md:block border-l-4 border-secondary">
              <p className="text-white font-medium text-lg">"Проектирането се извършва по европейските норми"</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Services */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary">Специализация</h3>
            <p className="text-slate-500 mt-2">Фокус върху метални конструкции и индустриални сгради</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
                  {service.iconName === 'database' && <Database size={24} />}
                  {service.iconName === 'ruler' && <Ruler size={24} />}
                  {service.iconName === 'helmet' && <HardHat size={24} />}
                  {service.iconName === 'file' && <FileCode2 size={24} />}
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">{service.title}</h4>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;