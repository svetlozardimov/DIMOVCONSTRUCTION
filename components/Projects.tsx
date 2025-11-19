import React from 'react';
import { SectionId, Project } from '../types';
import { Maximize, Calendar, ArrowUpFromLine, Building } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Цех за метални изделия",
    subtitle: "гр. Раднево",
    category: "Индустриални",
    // Файлът трябва да е в папка public/projects/radnevo.jpg
    imageUrl: "/projects/radnevo.jpg", 
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
    // Файлът трябва да е в папка public/projects/kazanlak.jpg
    imageUrl: "/projects/kazanlak.jpg",
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
    // Файлът трябва да е в папка public/projects/damiana.jpg
    imageUrl: "/projects/damiana.jpg",
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
    // Файлът трябва да е в папка public/projects/tennis.jpg
    imageUrl: "/projects/tennis.jpg",
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
    // Файлът трябва да е в папка public/projects/honda.jpg
    imageUrl: "/projects/honda.jpg",
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
    // Файлът трябва да е в папка public/projects/autoheat.jpg
    imageUrl: "/projects/autoheat.jpg",
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
    // Файлът трябва да е в папка public/projects/globus.jpg
    imageUrl: "/projects/globus.jpg",
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
    // Файлът трябва да е в папка public/projects/novacar.jpg
    imageUrl: "/projects/novacar.jpg",
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
    <section id={SectionId.PROJECTS} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-wide uppercase mb-2 text-sm">Портфолио</h2>
          <h3 className="text-4xl font-bold text-primary">Проектирани Обекти</h3>
          <p className="text-slate-500 mt-2 text-lg">със стоманена носеща конструкция</p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden flex-shrink-0 bg-slate-200">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    // Fallback logic in case image is missing, to prevent ugly broken icon
                    // Removes the broken image icon and shows a placeholder color
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                    const span = document.createElement('span');
                    span.innerText = 'Добавете снимка: ' + project.imageUrl.split('/').pop();
                    span.className = 'text-slate-400 text-sm font-mono p-4 text-center';
                    e.currentTarget.parentElement?.appendChild(span);
                  }}
                />
                <div className="absolute top-4 right-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-primary mb-1 leading-tight group-hover:text-secondary transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-500 text-sm font-medium mb-6">
                   {project.subtitle}
                </p>
                
                <div className="mt-auto space-y-3 border-t border-slate-100 pt-4">
                   {project.specs?.investor && (
                     <div className="flex items-start gap-3 text-sm text-slate-600">
                        <Building className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="font-semibold text-slate-800">{project.specs.investor}</span>
                     </div>
                   )}
                   <div className="grid grid-cols-3 gap-2 text-xs text-slate-500">
                      <div className="bg-slate-50 p-2 rounded text-center border border-slate-100">
                         <Maximize className="w-4 h-4 mx-auto mb-1 text-slate-400" />
                         <span className="font-bold text-slate-700 block">{project.specs?.area}</span>
                         <span className="text-[10px]">Площ</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded text-center border border-slate-100">
                         <ArrowUpFromLine className="w-4 h-4 mx-auto mb-1 text-slate-400" />
                         <span className="font-bold text-slate-700 block">{project.specs?.height}</span>
                         <span className="text-[10px]">Височина</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded text-center border border-slate-100">
                         <Calendar className="w-4 h-4 mx-auto mb-1 text-slate-400" />
                         <span className="font-bold text-slate-700 block">{project.specs?.year}</span>
                         <span className="text-[10px]">Година</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Свържете се с нас
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;