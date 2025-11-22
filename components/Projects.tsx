import React, { useState, useEffect, useCallback } from 'react';
import { SectionId, Project } from '../types';
import { Maximize, Calendar, ArrowUpFromLine, Building, X, ZoomIn, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Цех за метални изделия",
    subtitle: "гр. Раднево",
    category: "Индустриални",
    imageUrl: "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819466/radnevo_ioyfaz.jpg",
    images: [
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819466/radnevo_ioyfaz.jpg",
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763820253/radnevo-1_kpttq4.png"
    ],
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
    imageUrl: "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819467/kazanlak_kchvoj.jpg",
    images: [
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819467/kazanlak_kchvoj.jpg",
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763820249/kazanlak-1_ybgljq.jpg"
    ],
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
    imageUrl: "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819466/damiana_dnezbr.jpg",
    images: [
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819466/damiana_dnezbr.jpg",
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763820242/damiana-1_ayclsf.jpg"
    ],
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
    imageUrl: "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819467/tenis_jzokpq.jpg",
    images: [
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819467/tenis_jzokpq.jpg",
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763820256/tenis-1_zoyp0t.jpg"
    ],
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
    imageUrl: "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819467/honda_obmkud.jpg",
    images: [
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819467/honda_obmkud.jpg"
    ],
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
    imageUrl: "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819466/autoheat_aqdsi2.jpg",
    images: [
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819466/autoheat_aqdsi2.jpg"
    ],
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
    imageUrl: "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819466/globus_b3wbta.jpg",
    images: [
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819466/globus_b3wbta.jpg",
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763820245/globus-1_edqfpv.png"
    ],
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
    imageUrl: "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819466/novacar_wrlyun.jpg",
    images: [
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763819466/novacar_wrlyun.jpg",
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763820251/novakar-1_mu68zh.jpg",
      "https://res.cloudinary.com/ddkkzk4ov/image/upload/v1763820255/novakar-2_lxfbdh.png"
    ],
    specs: {
      area: "1 500 m²",
      height: "7 m",
      year: "2024",
      investor: "\"НОВА КАР\" ООД"
    }
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Always start from the first image
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  }, [selectedProject]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  }, [selectedProject]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, nextImage, prevImage]);

  const scrollToContact = () => {
    const contactSection = document.getElementById(SectionId.CONTACT);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Портфолио</h2>
          <h3 className="text-4xl font-black text-primary uppercase">Проектирани Обекти</h3>
          <p className="text-gray-500 mt-2 text-lg">Със стоманена носеща конструкция</p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-none border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full animate-fade-in">
              {/* Image Container - Aspect Ratio 4:3 */}
              <div 
                className="relative aspect-[4/3] overflow-hidden flex-shrink-0 bg-gray-200 cursor-pointer"
                onClick={() => openLightbox(project)}
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 w-12 h-12 drop-shadow-lg" />
                </div>
                <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-4 py-1 uppercase tracking-wider">
                  {project.category}
                </div>
                {/* Multiple images indicator */}
                {project.images.length > 1 && (
                   <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1">
                      <ZoomIn size={10} /> +{project.images.length - 1}
                   </div>
                )}
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
          <button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-secondary text-white font-bold py-4 px-10 rounded transition-colors duration-300 uppercase tracking-wide shadow-lg"
          >
            Свържете се с нас
          </button>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal - Gallery Mode */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-[110]">
              <div className="flex flex-col">
                 <h2 className="text-white font-bold text-lg hidden sm:block">{selectedProject.title}</h2>
                 <span className="text-gray-400 text-xs">{currentImageIndex + 1} / {selectedProject.images.length}</span>
              </div>
              <div className="flex gap-4">
                <a 
                  href={selectedProject.images[currentImageIndex]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white bg-white/10 hover:bg-secondary/80 rounded-full px-4 py-2 text-xs font-bold uppercase flex items-center gap-2 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                    <ExternalLink size={16} /> Виж Оригинал
                </a>
                <button 
                    onClick={closeLightbox}
                    className="text-white bg-white/10 hover:bg-red-600 rounded-full p-2 transition-all"
                >
                    <X size={24} />
                </button>
              </div>
          </div>

          {/* Main Image Area */}
          <div 
            className="w-full h-full flex flex-col overflow-hidden pt-16 pb-0 relative group/lightbox"
            onClick={(e) => e.stopPropagation()}
          >
             {/* Navigation Arrows */}
             {selectedProject.images.length > 1 && (
               <>
                 <button 
                   onClick={prevImage}
                   className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-secondary text-white p-3 rounded-full transition-all opacity-0 group-hover/lightbox:opacity-100 md:opacity-100"
                 >
                   <ChevronLeft size={32} />
                 </button>
                 <button 
                   onClick={nextImage}
                   className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-secondary text-white p-3 rounded-full transition-all opacity-0 group-hover/lightbox:opacity-100 md:opacity-100"
                 >
                   <ChevronRight size={32} />
                 </button>
               </>
             )}

             {/* Image Display */}
             <div className="flex-1 w-full relative flex items-center justify-center p-2 md:p-4 bg-black" onClick={closeLightbox}>
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`} 
                  className="h-auto w-auto max-w-full max-h-[85vh] object-contain shadow-none transition-opacity duration-300"
                />
                
                {/* Thumbnails Overlay (Bottom of Image Area) */}
                {selectedProject.images.length > 1 && (
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 rounded-full backdrop-blur-sm overflow-x-auto max-w-[90%]">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                          className={`w-12 h-12 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                             currentImageIndex === idx ? 'border-secondary scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="thumb" className="w-full h-full object-cover" />
                        </button>
                      ))}
                   </div>
                )}
             </div>
             
             {/* Details Section - Bottom Bar */}
             <div className="flex-shrink-0 w-full bg-white p-6 md:p-8 border-t border-gray-800 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] max-h-[35vh] overflow-y-auto z-20 relative">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="md:w-1/3">
                          <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">{selectedProject.category}</div>
                          <h3 className="text-2xl md:text-3xl font-black text-primary leading-tight">{selectedProject.title}</h3>
                          <p className="text-gray-500 font-medium uppercase text-sm mt-1">{selectedProject.subtitle}</p>
                      </div>
                      
                      <div className="md:w-2/3 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                          {selectedProject.specs?.investor && (
                             <div className="col-span-2 md:col-span-1 bg-gray-50 p-3 rounded border-l-2 border-secondary">
                                <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">Инвеститор</div>
                                <div className="font-bold text-primary text-sm leading-tight">{selectedProject.specs.investor}</div>
                             </div>
                          )}
                           <div className="bg-gray-50 p-3 rounded text-center">
                              <Maximize className="w-5 h-5 mx-auto mb-1 text-secondary" />
                              <div className="font-black text-primary text-lg">{selectedProject.specs?.area}</div>
                              <div className="text-[10px] uppercase text-gray-500">Площ</div>
                           </div>
                           <div className="bg-gray-50 p-3 rounded text-center">
                              <ArrowUpFromLine className="w-5 h-5 mx-auto mb-1 text-secondary" />
                              <div className="font-black text-primary text-lg">{selectedProject.specs?.height}</div>
                              <div className="text-[10px] uppercase text-gray-500">Височина</div>
                           </div>
                           <div className="bg-gray-50 p-3 rounded text-center">
                              <Calendar className="w-5 h-5 mx-auto mb-1 text-secondary" />
                              <div className="font-black text-primary text-lg">{selectedProject.specs?.year}</div>
                              <div className="text-[10px] uppercase text-gray-500">Година</div>
                           </div>
                      </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;