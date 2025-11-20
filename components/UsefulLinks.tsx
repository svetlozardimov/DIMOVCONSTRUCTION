import React from 'react';
import { SectionId, UsefulLink } from '../types';
import { ExternalLink, Book, Building2, FileText } from 'lucide-react';

const links: UsefulLink[] = [
  {
    title: "КИИП",
    url: "https://kiip.bg/",
    description: "Камара на инженерите в инвестиционното проектиране"
  },
  {
    title: "МРРБ",
    url: "https://www.mrrb.bg/",
    description: "Министерство на регионалното развитие и благоустройството"
  },
  {
    title: "ДНСК",
    url: "https://dnsk.bg/",
    description: "Дирекция за национален строителен контрол"
  },
  {
    title: "Lex.bg - ЗУТ",
    url: "https://lex.bg/laws/ldoc/2135163904",
    description: "Закон за устройство на територията (ЗУТ)"
  },
  {
    title: "Eurocodes Online",
    url: "https://eurocodes.jrc.ec.europa.eu/",
    description: "Официален портал за Европейските кодове за проектиране"
  },
  {
    title: "АГКК",
    url: "https://kais.cadastre.bg/",
    description: "Агенция по геодезия, картография и кадастър"
  }
];

const UsefulLinks: React.FC = () => {
  return (
    <section id={SectionId.LINKS} className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Ресурси</h2>
          <h3 className="text-3xl font-black text-primary uppercase">Полезни Връзки</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-50 border-l-4 border-gray-300 hover:border-secondary p-6 transition-all hover:bg-white hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-gray-400 group-hover:text-secondary transition-colors">
                     {index % 3 === 0 ? <Building2 size={20} /> : index % 3 === 1 ? <FileText size={20} /> : <Book size={20} />}
                  </div>
                  <h4 className="font-bold text-primary text-lg group-hover:text-secondary transition-colors">
                    {link.title}
                  </h4>
                </div>
                <ExternalLink size={16} className="text-gray-300 group-hover:text-secondary" />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;