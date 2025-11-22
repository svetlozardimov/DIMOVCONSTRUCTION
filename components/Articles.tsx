
import React, { useState } from 'react';
import { SectionId, Article } from '../types';
import { ArrowRight, X, Calendar, Clock, Share2 } from 'lucide-react';

const articles: Article[] = [
  {
    id: 1,
    title: "Какво е BIM проектиране и защо е важно?",
    date: "10 Окт 2024",
    summary: "Строителното информационно моделиране (BIM) революционизира начина, по който проектираме и строим. Научете за предимствата при металните конструкции.",
    content: [
      "Строителното информационно моделиране (Building Information Modeling - BIM) не е просто създаване на визуален 3D модел. Това е цялостен процес на създаване и управление на информация за строителен обект през целия му жизнен цикъл. В Dimov Construction ние използваме BIM технологии, за да гарантираме максимална прецизност на нашите стоманени конструкции.",
      "Защо BIM е критичен за инвеститора?",
      "1. Елиминиране на грешките (Колизии): При традиционното 2D проектиране често се случва елементи от конструкцията да се 'засекат' с ОВК тръби или електрически трасета. BIM софтуерът автоматично засича тези конфликти още на ниво проект, спестявайки хиляди левове за преправяне на строежа.",
      "2. Точни количествени сметки: Моделът съдържа точна информация за всеки болт, планка и профил. Това означава, че бюджетът, който получавате, е реален и няма да има изненади с 'допълнителни разходи' за материали.",
      "3. Оптимизация на монтажа: Чрез BIM ние планираме последователността на монтажа. КМД чертежите, генерирани от модела, са с безупречна точност, което позволява на монтажните екипи да работят бързо и без прекъсвания.",
      "В заключение, инвестицията в BIM проектиране се възвръща многократно чрез спестено време и материали по време на строителството. Ние вярваме, че това е стандартът, под който не трябва да се пада при съвременните индустриални сгради."
    ],
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Предимства на стоманените конструкции",
    date: "22 Сеп 2024",
    summary: "Стоманата предлага бърз монтаж, големи подпорни разстояния и устойчивост. Сравнение между стоманобетонни и метални халета.",
    content: [
      "При избора на конструкция за ново индустриално хале, склад или шоурум, основният въпрос винаги е: Стомана или Стоманобетон? Като експерти в металните конструкции, ние ще разгледаме обективните предимства на стоманата.",
      "Скорост на изграждане:",
      "Стоманените елементи се произвеждат в заводски условия, докато на обекта се подготвят фундаментите. Когато бетонът изсъхне, конструкцията пристига и се сглобява като лего. Това съкращава времето за строителство с 30-50% спрямо монолитното строителство.",
      "Големи подпорни разстояния (Light Weight, Long Span):",
      "Стоманата има най-доброто съотношение якост/тегло. Това позволява премостване на огромни разстояния (20, 30, дори 50 метра) без вътрешни колони. Това е безценно за логистични центрове, където всеки квадрат метър полезна площ е важен за маневриране на кари и стелажи.",
      "Устойчивост и Рециклиране:",
      "Стоманените конструкции са силно устойчиви на земетръс поради своята еластичност. За разлика от бетона, който се напуква, стоманата поема вибрациите. Освен това, стоманата е 100% рециклируем материал, което я прави екологичен избор и повишава остатъчната стойност на сградата при евентуално демонтиране.",
      "Лесни преустройства:",
      "Нуждаете се от нова врата? Или искате да удължите халето? При металните конструкции укрепването и модификациите са сравнително лесни и бързи процеси, често без да се спира експлоатацията на сградата."
    ],
    imageUrl: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Еврокод 3: Стандарти за метални конструкции",
    date: "15 Авг 2024",
    summary: "Как проектирането по европейски норми гарантира безопасност, икономичност и лесно узаконяване на вашата сграда.",
    content: [
      "Еврокодовете (Eurocodes) са десет европейски стандарта, осигуряващи единен подход при проектирането на сгради. За стоманените конструкции основният стандарт е EN 1993 (Еврокод 3). Но защо това е важно за вас като инвеститор?",
      "1. Гарантирана Безопасност:",
      "Еврокод 3 въвежда строги коефициенти за сигурност, съобразени с натоварванията от сняг, вятър и земетръс, специфични за района на България. Проектирайки по тези норми, ние гарантираме, че сградата ще издържи на екстремни условия.",
      "2. Икономичност чрез прецизност:",
      "Старите норми често презастраховаха конструкциите, което водеше до излишно тежки профили. Еврокод позволява по-фин анализ на поведението на стоманата (пластичност, устойчивост на изкълчване), което ни позволява да оптимизираме сеченията и да намалим тонажа на вложената стомана, без да правим компромис със сигурността.",
      "3. Узаконяване и Застраховане:",
      "Всички нови големи обекти в България задължително се проектират по Еврокод. Проект, изготвен по старите норми, може да срещне проблеми при техническия контрол, издаването на Разрешение за строеж или при застраховане на сградата от международни компании.",
      "В Dimov Construction всички наши инженери са сертифицирани и работят ежедневно с EN 1993, използвайки лицензиран софтуер, калибриран спрямо националните приложения на стандарта."
    ],
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600"
  }
];

const Articles: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
  };

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
            <div 
              key={article.id} 
              className="bg-white border border-gray-200 group hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
              onClick={() => openArticle(article)}
            >
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
                   <span className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1">
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

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={closeArticle}>
          <div 
            className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 flex-shrink-0">
               <img 
                  src={selectedArticle.imageUrl} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
               <button 
                  onClick={closeArticle}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-primary p-2 rounded-full transition-all backdrop-blur-md"
               >
                  <X size={24} />
               </button>
               
               <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                  <div className="flex items-center gap-4 text-white/80 text-sm mb-3 font-medium">
                     <span className="flex items-center gap-1"><Calendar size={14} /> {selectedArticle.date}</span>
                     <span className="flex items-center gap-1"><Clock size={14} /> 3 мин. четене</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight shadow-black drop-shadow-md">
                    {selectedArticle.title}
                  </h2>
               </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-10">
               <div className="prose prose-lg prose-slate max-w-none">
                  {selectedArticle.content.map((paragraph, index) => {
                     // Check if paragraph looks like a heading (short and ends with :) or is a numbered list item
                     const isHeading = paragraph.length < 60 && (paragraph.endsWith(':') || paragraph.endsWith('?'));
                     
                     if (isHeading) {
                        return <h4 key={index} className="text-xl font-bold text-primary mt-6 mb-3">{paragraph}</h4>;
                     }
                     return <p key={index} className="text-gray-600 mb-4 leading-relaxed">{paragraph}</p>;
                  })}
               </div>

               {/* Footer of Article */}
               <div className="mt-10 pt-6 border-t border-gray-200 flex justify-between items-center">
                  <div className="text-sm text-gray-500 italic">
                     Автор: Екип Dimov Construction
                  </div>
                  <button className="flex items-center gap-2 text-secondary font-bold uppercase text-sm hover:text-red-800 transition-colors">
                     <Share2 size={16} /> Сподели
                  </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Articles;
