import React, { useState } from 'react';
import { SectionId } from '../types';
import { Calculator as CalculatorIcon, RefreshCw, Info } from 'lucide-react';

const Calculator: React.FC = () => {
  const [area, setArea] = useState<number>(500);
  const [height, setHeight] = useState<number>(6);
  const [type, setType] = useState<string>('warehouse'); // warehouse, production, showroom

  // Base price estimation logic (Pseudo-calculation for demo purposes)
  // Prices are in BGN/m2 for the metal structure only (approximate)
  const calculatePrice = () => {
    let baseRate = 0;
    switch (type) {
      case 'warehouse': baseRate = 140; break;
      case 'production': baseRate = 160; break;
      case 'showroom': baseRate = 180; break;
      default: baseRate = 140;
    }

    // Height factor: increases cost by ~5% for every meter above 6m
    const heightFactor = 1 + Math.max(0, height - 6) * 0.05;
    
    // Volume discount: decreases slightly for larger areas
    const volumeDiscount = area > 2000 ? 0.95 : 1;

    const minPricePerSqm = Math.round(baseRate * heightFactor * volumeDiscount);
    const maxPricePerSqm = Math.round(minPricePerSqm * 1.2); // 20% margin

    const minTotal = minPricePerSqm * area;
    const maxTotal = maxPricePerSqm * area;

    return { minTotal, maxTotal, minPricePerSqm, maxPricePerSqm };
  };

  const result = calculatePrice();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('bg-BG', { style: 'currency', currency: 'BGN', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id={SectionId.CALCULATOR} className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 border border-gray-600 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 border-2 border-secondary rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-secondary/20 rounded-full mb-4 text-secondary">
            <CalculatorIcon size={32} />
          </div>
          <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Инструменти</h2>
          <h3 className="text-4xl font-black text-white uppercase">Бюджетен Калкулатор</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Изчислете ориентировъчна цена за проектиране и изработка на стоманената конструкция за вашето хале.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Inputs */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-2xl">
            <h4 className="text-xl font-bold mb-6 border-b border-gray-700 pb-4">Параметри на сградата</h4>
            
            <div className="space-y-8">
              <div>
                <label className="flex justify-between text-sm font-bold uppercase text-gray-400 mb-2">
                  <span>Тип сграда</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'warehouse', label: 'Склад' },
                    { id: 'production', label: 'Производство' },
                    { id: 'showroom', label: 'Шоурум' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setType(t.id)}
                      className={`py-3 px-2 rounded text-sm font-bold uppercase transition-colors ${
                        type === t.id 
                        ? 'bg-secondary text-white shadow-lg' 
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex justify-between text-sm font-bold uppercase text-gray-400 mb-2">
                  <span>Застроена Площ</span>
                  <span className="text-secondary">{area} m²</span>
                </label>
                <input
                  type="range"
                  min="200"
                  max="5000"
                  step="50"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>200 m²</span>
                  <span>5000 m²</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between text-sm font-bold uppercase text-gray-400 mb-2">
                  <span>Височина (корниз)</span>
                  <span className="text-secondary">{height} m</span>
                </label>
                <input
                  type="range"
                  min="4"
                  max="15"
                  step="0.5"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>4 m</span>
                  <span>15 m</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-900/20 border border-blue-900/50 rounded flex items-start gap-3">
              <Info className="flex-shrink-0 text-blue-400" size={20} />
              <p className="text-xs text-blue-200">
                * Този калкулатор предоставя само ориентировъчни стойности за стоманената конструкция (без фундаменти, панели и довършителни работи).
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white text-primary p-8 rounded-xl shadow-2xl relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-secondary triangle-top-right"></div>
            
            <h4 className="text-xl font-bold mb-8 uppercase tracking-wide">Прогнозен Бюджет</h4>

            <div className="space-y-6">
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-xs uppercase text-gray-500 font-bold mb-1">Обща инвестиция (Конструкция)</p>
                <div className="text-3xl sm:text-4xl font-black text-secondary">
                  {formatCurrency(result.minTotal)}
                </div>
                <p className="text-sm text-gray-500 mt-1">до {formatCurrency(result.maxTotal)}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="text-xs uppercase text-gray-500 font-bold mb-1">Цена на m²</p>
                  <p className="text-xl font-bold text-primary">~{result.minPricePerSqm} BGN</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="text-xs uppercase text-gray-500 font-bold mb-1">Тонаж (Прибл.)</p>
                  <p className="text-xl font-bold text-primary">~{Math.round(area * (height > 8 ? 35 : 25) / 1000)} тона</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm text-gray-600 mb-4 text-center">
                Искате точна оферта за вашия проект?
              </p>
              <a 
                href={`#${SectionId.CONTACT}`}
                className="block w-full bg-primary hover:bg-gray-900 text-white text-center font-bold py-4 rounded uppercase tracking-wide transition-all shadow-lg hover:shadow-xl"
              >
                Изпрати Запитване
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;