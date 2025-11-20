import React from 'react';
import { SectionId, Project } from '../types';
import { Maximize, Calendar, ArrowUpFromLine, Building } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Цех за метални изделия",
    subtitle: "гр. Раднево",
    category: "Индустриални",
    // Placeholder: Голямо индустриално хале
    imageUrl: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800", 
    specs: {
      area: "10 000 m²",
      height: "13 m",
      year: "2019; 2021; 2022; 2024",
      investor: "„МЕТАЛИНВЕСТ-РЕМКО“ ЕООД"
    }
  },
  {
    id: 2,
    title: "Завод за производство на сейфове",
    subtitle: "гр. Казанлък",
    category: "Индустриални",
    // Placeholder: Метална конструкция (синя/индустриална)
    imageUrl: "https://images.unsplash.com/photo-1535732759880-c8566e3be2f5?auto=format&fit=crop&q=80&w=800",
    specs: {
      area: "5 000 m²",
      height: "10 m",
      year: "2016",
      investor: "“ПРОМЕТ СЕЙФ” ООД"
    }
  },
  {
    id: 3,
    title: "Производствено складова база",
    subtitle: "за метални изделия, гр. Стара Загора",
    category: "Складови",
    // Placeholder: Модерен склад/панели
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    specs: {
      area: "10 000 m²",
      height: "13 m",
      year: "2015",
      investor: "\"ДАМИАНА 2001\" ЕООД"
    }
  },
  {
    id: 4,
    title: "Зала за тенис на корт",
    subtitle: "гр. Стара Загора",
    category: "Спортни",
    // Placeholder: Зала с голям отвор
    imageUrl: "https://images.unsplash.com/photo-1596233123972-499d61268c95?auto=format&fit=crop&q=80&w=800",
    specs: {
      area: "2 000 m²",
      height: "10 m",
      year: "2019",
      investor: "„ДМТ 2006“ ООД"
    }
  },
  {
    id: 5,
    title: "Изложбена зала за автомобили",
    subtitle: "и автосервиз (Honda), гр. Стара Загора",
    category: "Шоурум",
    // Placeholder: Стъклена фасада/шоурум
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    specs: {
      area: "1 200 m²",
      height: "8 m",
      year: "2009",
      investor: "„АЙ ЕМ АЙ” ЕООД"
    }
  },
  {
    id: 6,
    title: "Изложбена зала за автомобили",
    subtitle: "гр. Стара Загора",
    category: "Шоурум",
    // Placeholder: Автомобилен център
    imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    specs: {
      area: "3 911 m²",
      height: "8 m",
      year: "2008",
      investor: "“АВТОХИТ2000” ООД"
    }
  },
  {
    id: 7,
    title: "Цех за метални изделия",
    subtitle: "гр. Стара Загора",
    category: "Индустриални",
    // Placeholder: Конструкция в строеж
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    specs: {
      area: "8 000 m²",
      height: "13 m",
      year: "2023",
      investor: "„ГЛОБУС“ ЕООД"
    }
  },
  {
    id: 8,
    title: "Шоурум за автомобили",
    subtitle: "и автосервиз, гр. Стара Загора",
    category: "Шоурум",
    // Placeholder: Модерен търговски обект
    imageUrl: "https://images.unsplash.com/photo-1550505095-34e386c66181?auto=format&fit=crop&q=80&w=800",
    specs: {
      area: "1 500 m²",
      height: "7 m",
      year: "2024",
      investor: "\"НОВА КАР\" ООД"
    }
  }
];

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Портфолио</h2>
          <h3 className="text-4xl font-black text-primary uppercase">Проектирани Обекти</h3>
          <p className="text-gray-500 mt-2 text-lg">Със стоманена носеща конструкция</p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-none border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden flex-shrink-0 bg-gray-200">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-4 py-1 uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-primary mb-1 leading-tight group-hover:text-secondary transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wide">
                   {project.subtitle}
                </p>
                
                <div className="mt-auto space-y-4 border-t border-gray-100 pt-4">
                   {project.specs?.investor && (
                     <div className="flex items-start gap-3 text-sm text-gray-600">
                        <Building className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="font-bold text-primary">{project.specs.investor}</span>
                     </div>
                   )}
                   <div className="grid grid-cols-3 gap-2 text-xs text-gray-500">
                      <div className="bg-gray-50 p-2 text-center border border-gray-200">
                         <Maximize className="w-4 h-4 mx-auto mb-1 text-secondary" />
                         <span className="font-bold text-primary block text-sm">{project.specs?.area}</span>
                         <span className="text-[10px] uppercase">Площ</span>
                      </div>
                      <div className="bg-gray-50 p-2 text-center border border-gray-200">
                         <ArrowUpFromLine className="w-4 h-4 mx-auto mb-1 text-secondary" />
                         <span className="font-bold text-primary block text-sm">{project.specs?.height}</span>
                         <span className="text-[10px] uppercase">Височина</span>
                      </div>
                      <div className="bg-gray-50 p-2 text-center border border-gray-200">
                         <Calendar className="w-4 h-4 mx-auto mb-1 text-secondary" />
                         <span className="font-bold text-primary block text-sm">{project.specs?.year}</span>
                         <span className="text-[10px] uppercase">Година</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded transition-colors duration-300 uppercase tracking-wide shadow-lg">
            Свържете се с нас
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;