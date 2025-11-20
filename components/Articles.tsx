import React from 'react';
import { SectionId, Article } from '../types';
import { ArrowRight, Newspaper } from 'lucide-react';

const articles: Article[] = [
  {
    id: 1,
    title: "Какво е BIM проектиране и защо е важно?",
    date: "10 Окт 2024",
    summary: "Строителното информационно моделиране (BIM) революционизира начина, по който проектираме и строим. Научете за предимствата при металните конструкции.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Предимства на стоманените конструкции",
    date: "22 Сеп 2024",
    summary: "Стоманата предлага бърз монтаж, големи подпорни разстояния и устойчивост. Сравнение между стоманобетонни и метални халета.",
    imageUrl: "https://images.unsplash.com/photo-1535732759880-c8566e3be2f5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Еврокод 3: Стандарти за метални конструкции",
    date: "15 Авг 2024",
    summary: "Как проектирането по европейски норми гарантира безопасност, икономичност и лесно узаконяване на вашата сграда.",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600"
  }
];

const Articles: React.FC = () => {
  return (
    <section id={SectionId.ARTICLES} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-gray-200 pb-6">
          <div>
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Блог</h2>
            <h3 className="text-4xl font-black text-primary uppercase">Статии и Новини</h3>
          </div>
          <button className="hidden md:flex items-center text-secondary font-bold uppercase tracking-wide hover:text-red-800 transition-colors">
            Виж всички <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white border border-gray-200 group hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 bg-primary text-white text-xs font-bold px-3 py-1 z-20">
                  {article.date}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                  {article.title}
                </h4>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">
                  {article.summary}
                </p>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                   <span className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1 cursor-pointer">
                     Прочети повече <ArrowRight size={12} />
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button className="inline-flex items-center text-secondary font-bold uppercase tracking-wide hover:text-red-800 transition-colors">
            Виж всички <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;