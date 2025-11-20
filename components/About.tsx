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
            <div className="flex items-center gap-3 mb-4">
               <div className="h-[2px] w-12 bg-secondary"></div>
               <h2 className="text-secondary font-bold tracking-widest uppercase text-sm">За Компанията</h2>
            </div>
            <h3 className="text-4xl font-black text-primary mb-6 uppercase leading-tight">Професионализъм в<br/>детайлите</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Ние сме специализирани в проектирането на строителната конструкция на <strong>стоманени складови и производствени халета</strong> във фаза Работен проект.
              </p>
              <p>
                Нашият подход включва създаването на детайлни производствени (КМД) чертежи и <strong>3D модел с BIM-информация</strong> за стоманената конструкция. Това позволява оптимизация на процесите и елиминиране на грешки още преди началото на строежа.
              </p>
              <p className="font-medium text-primary border-l-4 border-secondary pl-4 py-1 bg-gray-50">
                Осигуряваме пълен цифров пакет: Предоставят се изходни файлове към машини за автоматизирано рязане (nc и dxf-формат).
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-black text-primary">EC3</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Еврокод Стандарт</p>
              </div>
              <div>
                <p className="text-3xl font-black text-primary">BIM</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">3D Моделиране</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-4 border-l-4 border-secondary z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-4 border-r-4 border-primary z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" 
              alt="Steel structure detail" 
              className="relative z-10 shadow-2xl w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Bottom Section: Services */}
        <div className="bg-primary text-white rounded-none p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10 text-center mb-12">
            <h3 className="text-3xl font-bold text-white uppercase tracking-tight">Нашите Предимства</h3>
            <p className="text-gray-400 mt-2">Технологии и стандарти от ново поколение</p>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 hover:border-secondary transition-colors group">
                <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                  {service.iconName === 'database' && <Database size={24} />}
                  {service.iconName === 'ruler' && <Ruler size={24} />}
                  {service.iconName === 'helmet' && <HardHat size={24} />}
                  {service.iconName === 'file' && <FileCode2 size={24} />}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;