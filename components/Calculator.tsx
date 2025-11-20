import React, { useState, useEffect, useMemo } from 'react';
import { SectionId } from '../types';
import { 
  Calculator as CalcIcon, 
  Save, 
  Upload, 
  RotateCcw, 
  Printer, 
  FileText, 
  Table, 
  Settings, 
  Check,
  X,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { 
  constructionTypes, 
  categoryNames, 
  calculatePrice, 
  CalculatorInputs, 
  EURO_RATE 
} from '../services/calculatorService';

const Calculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    projectType: '',
    objectName: '',
    area: 0,
    wallSections: 1,
    additionalLength: 0,
    hasCrane: false,
    hasComplexity: false,
    complexityPercentage: 0,
    isAccelerated: false,
    includeSupervision: false,
    currencyDisplay: 'eur'
  });

  const [result, setResult] = useState<{ totalEur: number; log: string[]; error?: string }>({ totalEur: 0, log: [] });
  const [showTable, setShowTable] = useState(false);
  const [showSettings, setShowSettings] = useState(false); // Default hidden

  // Load state from local storage
  useEffect(() => {
    const saved = localStorage.getItem('skCalculatorState_v5');
    if (saved) {
      try {
        setInputs(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load calculator state', e);
      }
    }
  }, []);

  // Calculate and save on input change
  useEffect(() => {
    const res = calculatePrice(inputs);
    setResult(res);
    localStorage.setItem('skCalculatorState_v5', JSON.stringify(inputs));
  }, [inputs]);

  // Handlers
  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const resetCalculator = () => {
    setInputs({
      projectType: '',
      objectName: '',
      area: 0,
      wallSections: 1,
      additionalLength: 0,
      hasCrane: false,
      hasComplexity: false,
      complexityPercentage: 0,
      isAccelerated: false,
      includeSupervision: false,
      currencyDisplay: 'eur'
    });
    setResult({ totalEur: 0, log: [] });
  };

  const exportToTxt = () => {
    const objectName = inputs.objectName || 'Неозаглавен_обект';
    const logContent = result.log.join('\n');
    const priceText = getFormattedPrice();
    const fullText = `Минимална себестойност на проектиране – ЧАСТ КОНСТРУКЦИИ\nОбект: ${objectName}\n\nКалкулация:\n${logContent}\n\nОБЩО: ${priceText}`;
    
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Oferta_${objectName.replace(/\s+/g, '_')}.txt`;
    a.click();
  };

  const saveToJson = () => {
    const objectName = inputs.objectName || 'Project';
    const blob = new Blob([JSON.stringify(inputs, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${objectName}_calc.json`;
    a.click();
  };

  const loadFromJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const loaded = JSON.parse(ev.target?.result as string);
        setInputs(loaded);
      } catch (err) {
        alert('Невалиден файл');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  const getFormattedPrice = () => {
    const totalEur = result.totalEur;
    const totalBgn = totalEur * EURO_RATE;
    
    if (inputs.currencyDisplay === 'bgn') return `${totalBgn.toLocaleString('bg-BG', { minimumFractionDigits: 2 })} лв.`;
    if (inputs.currencyDisplay === 'both') return `${totalBgn.toLocaleString('bg-BG', { minimumFractionDigits: 2 })} лв. (${totalEur.toLocaleString('bg-BG', { minimumFractionDigits: 2 })} €)`;
    return `${totalEur.toLocaleString('bg-BG', { minimumFractionDigits: 2 })} €`;
  };

  // Helper for grouping categories efficiently
  const categoryGroups = useMemo(() => {
    const groups: Record<string, any[]> = {};
    Object.keys(constructionTypes).forEach(key => {
      const cat = key.split('.')[0];
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push({ key, ...constructionTypes[key] });
    });
    return groups;
  }, []);

  // Logic for UI visibility
  const category = inputs.projectType ? inputs.projectType.split('.')[0] : '';
  const currentType = constructionTypes[inputs.projectType];
  
  const showArea = currentType && (currentType.type === 'per_m2' || (currentType.type === 'fixed' && (currentType.minArea || currentType.maxArea)));
  const showWall = currentType && currentType.type === 'retaining_wall';
  
  // Logic for Sidebar Options
  const hasProjectSelected = !!inputs.projectType;
  const supportsCrane = ['V', 'VI'].includes(category); // Steel & Prefab only
  const supportsModifiers = ['II', 'III', 'IV', 'V', 'VI', 'VIII', 'X'].includes(category); // Most constructive projects

  return (
    <section id={SectionId.CALCULATOR} className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-secondary rounded-full mb-4 text-white shadow-lg">
            <CalcIcon size={32} />
          </div>
          <h2 className="text-secondary font-bold tracking-widest uppercase mb-2 text-sm">Калкулатор</h2>
          <h3 className="text-3xl md:text-4xl font-black text-primary uppercase">Себестойност на Проектиране</h3>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Изчислете минималната себестойност за проектиране по част "Конструктивна" (СК).
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-2 text-primary font-bold text-sm uppercase hover:text-secondary transition-colors"
            >
              <Settings size={18} />
              {showSettings ? 'Скрий Настройки' : 'Покажи Настройки'}
              {showSettings ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>

            <button 
              onClick={() => setShowTable(true)}
              className="flex items-center gap-2 text-secondary font-bold text-sm uppercase hover:text-red-800 transition-colors"
            >
              <Table size={18} /> Таблица с цени
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Sidebar: Controls & Settings (Collapsible) */}
          {showSettings && (
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit animate-fade-in">
              <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                Настройки на проекта
              </h4>
              
              <div className="space-y-4">
                {/* Global Settings */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Име на обект</label>
                  <input 
                    type="text" 
                    value={inputs.objectName}
                    onChange={(e) => handleInputChange('objectName', e.target.value)}
                    className="w-full p-3 bg-white border border-gray-300 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm"
                    placeholder="напр. Склад в Раднево..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Валута за показване</label>
                  <select 
                    value={inputs.currencyDisplay}
                    onChange={(e) => handleInputChange('currencyDisplay', e.target.value)}
                    className="w-full p-3 bg-white border border-gray-300 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-sm"
                  >
                    <option value="eur">Евро (€)</option>
                    <option value="bgn">Лева (лв.)</option>
                    <option value="both">Лева и Евро</option>
                  </select>
                </div>

                {/* Sidebar Options - Visible only after project selection */}
                {!hasProjectSelected ? (
                   <div className="pt-4 border-t border-gray-200 text-xs text-gray-400 italic text-center">
                      Моля, изберете проект от менюто вдясно, за да видите приложимите опции.
                   </div>
                ) : !supportsModifiers ? (
                   <div className="pt-4 border-t border-gray-200 text-xs text-gray-400 italic text-center">
                      За този тип проект няма допълнителни коефициенти.
                   </div>
                ) : (
                   <div className="pt-4 border-t border-gray-200 space-y-3 animate-fade-in">
                     <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Допълнителни опции</label>
                     
                     {supportsCrane && (
                       <label className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded cursor-pointer hover:border-secondary transition-colors">
                         <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${inputs.hasCrane ? 'bg-secondary border-secondary' : 'border-gray-400'}`}>
                           {inputs.hasCrane && <Check size={14} className="text-white" />}
                         </div>
                         <input type="checkbox" className="hidden" checked={inputs.hasCrane} onChange={(e) => handleInputChange('hasCrane', e.target.checked)} />
                         <span className="text-sm font-medium text-primary">Хале с кран (+1.00 €/м²)</span>
                       </label>
                     )}

                     <div className="p-3 bg-white border border-gray-200 rounded">
                          <label className="flex items-center gap-3 cursor-pointer hover:text-secondary transition-colors">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${inputs.hasComplexity ? 'bg-secondary border-secondary' : 'border-gray-400'}`}>
                              {inputs.hasComplexity && <Check size={14} className="text-white" />}
                            </div>
                            <input type="checkbox" className="hidden" checked={inputs.hasComplexity} onChange={(e) => handleInputChange('hasComplexity', e.target.checked)} />
                            <span className="text-sm font-medium text-primary">Сложна геометрия</span>
                          </label>
                          
                          {inputs.hasComplexity && (
                            <div className="mt-2 pl-8 flex items-center gap-2 animate-fade-in">
                              <span className="text-xs font-bold text-gray-600">Процент (+%):</span>
                              <input 
                                  type="number" 
                                  value={inputs.complexityPercentage}
                                  onChange={(e) => handleInputChange('complexityPercentage', parseFloat(e.target.value))}
                                  className="w-16 p-1 text-sm border border-gray-300 rounded text-center focus:border-secondary outline-none"
                              />
                            </div>
                          )}
                     </div>

                     <label className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded cursor-pointer hover:border-secondary transition-colors">
                         <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${inputs.isAccelerated ? 'bg-secondary border-secondary' : 'border-gray-400'}`}>
                           {inputs.isAccelerated && <Check size={14} className="text-white" />}
                         </div>
                         <input type="checkbox" className="hidden" checked={inputs.isAccelerated} onChange={(e) => handleInputChange('isAccelerated', e.target.checked)} />
                         <span className="text-sm font-medium text-primary">Ускорено (+50%)</span>
                     </label>

                     <label className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded cursor-pointer hover:border-secondary transition-colors">
                         <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${inputs.includeSupervision ? 'bg-secondary border-secondary' : 'border-gray-400'}`}>
                           {inputs.includeSupervision && <Check size={14} className="text-white" />}
                         </div>
                         <input type="checkbox" className="hidden" checked={inputs.includeSupervision} onChange={(e) => handleInputChange('includeSupervision', e.target.checked)} />
                         <span className="text-sm font-medium text-primary">Авторски надзор (+15%)</span>
                     </label>
                   </div>
                 )}

                <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-2">
                  <button onClick={saveToJson} className="flex items-center justify-center gap-1 bg-primary text-white py-2 px-3 rounded text-xs font-bold hover:bg-gray-800 transition-colors">
                    <Save size={14} /> Запази
                  </button>
                  <label className="flex items-center justify-center gap-1 bg-gray-200 text-primary py-2 px-3 rounded text-xs font-bold hover:bg-gray-300 transition-colors cursor-pointer">
                    <Upload size={14} /> Зареди
                    <input type="file" accept=".json" className="hidden" onChange={loadFromJson} />
                  </label>
                  <button onClick={resetCalculator} type="button" className="col-span-2 flex items-center justify-center gap-1 border border-red-200 text-red-600 py-2 px-3 rounded text-xs font-bold hover:bg-red-50 transition-colors mt-2">
                    <RotateCcw size={14} /> Изчисти всички полета
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Middle: Main Inputs */}
          <div className={`${showSettings ? 'lg:col-span-2' : 'col-span-full'} space-y-6 transition-all duration-300`}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <h4 className="text-lg font-bold text-primary mb-6 border-b border-gray-100 pb-2">Параметри на конструкцията</h4>
               
               <div className="space-y-6">
                 <div>
                   <label className="block text-sm font-bold text-primary mb-2">Вид строителен проект:</label>
                   <select 
                      value={inputs.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-base text-primary"
                   >
                     <option value="">-- Моля, изберете от списъка --</option>
                     {Object.keys(categoryNames)
                        .filter(catKey => catKey !== 'IX' && catKey !== 'XI')
                        .map(catKey => (
                        <optgroup key={catKey} label={categoryNames[catKey]}>
                          {categoryGroups[catKey]
                             ?.filter((type: any) => type.key !== 'V.5' && type.key !== 'VI.3') // Removed Crane options from dropdown
                             .map((type: any) => (
                            <option key={type.key} value={type.key}>{type.name}</option>
                          ))}
                        </optgroup>
                     ))}
                   </select>
                 </div>

                 {showArea && (
                   <div className="animate-fade-in">
                     <label className="block text-sm font-bold text-primary mb-2">Разгъната Застроена Площ (РЗП) в м²:</label>
                     <input 
                        type="number" 
                        min="0"
                        value={inputs.area || ''}
                        onChange={(e) => handleInputChange('area', parseFloat(e.target.value))}
                        placeholder="Въведете квадратура..."
                        className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-lg font-medium text-primary"
                     />
                   </div>
                 )}

                 {showWall && (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                     <div>
                       <label className="block text-sm font-bold text-primary mb-2">Брой сечения:</label>
                       <input 
                          type="number" 
                          min="1"
                          value={inputs.wallSections}
                          onChange={(e) => handleInputChange('wallSections', parseInt(e.target.value))}
                          className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:border-secondary text-primary"
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-primary mb-2">Допълнителна дължина (м):</label>
                       <input 
                          type="number" 
                          min="0"
                          value={inputs.additionalLength}
                          onChange={(e) => handleInputChange('additionalLength', parseFloat(e.target.value))}
                          className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:border-secondary text-primary"
                       />
                     </div>
                   </div>
                 )}
               </div>
            </div>

            {/* Result Section */}
            <div className="bg-primary text-white p-8 rounded-xl shadow-2xl relative overflow-hidden border border-gray-800">
               <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -mr-10 -mt-10 blur-2xl"></div>
               
               <div className="relative z-10">
                 <div className="flex justify-between items-end mb-2">
                    <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest">Обща Стойност (без ДДС)</h4>
                    {inputs.objectName && <span className="text-xs text-secondary font-bold uppercase bg-gray-900 px-2 py-1 rounded">{inputs.objectName}</span>}
                 </div>
                 <div className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                    {inputs.projectType ? getFormattedPrice() : '---'}
                 </div>
                 
                 <div className="bg-gray-900/80 rounded p-4 border border-gray-700 font-mono text-sm text-gray-300 mb-6 max-h-48 overflow-y-auto shadow-inner">
                    {result.error ? (
                      <span className="text-red-400 font-bold">{result.error}</span>
                    ) : result.log.length > 0 ? (
                      result.log.map((l, i) => <div key={i} className="mb-1 pb-1 border-b border-gray-800 last:border-0">{l}</div>)
                    ) : (
                      <div className="flex flex-col items-center justify-center h-24 text-gray-500 gap-2">
                         <CalcIcon size={24} />
                         <span>Моля, изберете вид проект за калкулация...</span>
                      </div>
                    )}
                 </div>

                 <div className="flex gap-4">
                    <button onClick={() => window.print()} className="flex-1 bg-white text-primary hover:bg-gray-200 py-3 rounded font-bold uppercase tracking-wide text-sm flex items-center justify-center gap-2 transition-colors">
                      <Printer size={16} /> Принтирай
                    </button>
                    <button onClick={exportToTxt} className="flex-1 bg-secondary text-white hover:bg-red-700 py-3 rounded font-bold uppercase tracking-wide text-sm flex items-center justify-center gap-2 transition-colors">
                      <FileText size={16} /> Експорт
                    </button>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Price Table Modal */}
      {showTable && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl border border-gray-200">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
              <div className="flex items-center gap-3">
                <div className="bg-secondary p-2 rounded text-white"><Table size={20} /></div>
                <h3 className="text-xl font-bold text-primary">Таблица с минимални цени - СК</h3>
              </div>
              <button onClick={() => setShowTable(false)} className="text-gray-500 hover:text-secondary transition-colors bg-gray-200 hover:bg-gray-300 rounded-full p-2">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <table className="w-full text-sm border-collapse shadow-sm">
                <thead>
                  <tr className="bg-primary text-white text-left sticky top-0 z-10">
                    <th className="p-4 border border-gray-600 w-24 text-center">Код</th>
                    <th className="p-4 border border-gray-600">Описание на проекта</th>
                    <th className="p-4 border border-gray-600 w-64 text-right">Минимална Цена</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-black">
                  {Object.keys(categoryNames).map(catKey => (
                    <React.Fragment key={catKey}>
                      <tr className="bg-gray-200 text-black font-bold border-t-2 border-gray-300">
                        <td colSpan={3} className="p-3 border border-gray-300 pl-4 text-lg text-black">{catKey}. {categoryNames[catKey]}</td>
                      </tr>
                      {categoryGroups[catKey]?.map((type: any, idx: number) => (
                        <tr key={type.key} className={`hover:bg-blue-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                          <td className="p-3 border border-gray-200 text-center font-bold text-gray-600">{type.key}</td>
                          <td className="p-3 border border-gray-200 font-medium text-black">{type.name}</td>
                          <td className="p-3 border border-gray-200 text-right font-bold text-black">
                            {type.displayPrice ? type.displayPrice : (
                              type.type === 'fixed' ? `${type.basePrice.toLocaleString()} €` : 
                              type.type === 'per_m2' ? `${type.basePrice.toLocaleString()} €/м²` : 'Индивидуално'
                            )}
                          </td>
                        </tr>
                      ))}
                      {(!categoryGroups[catKey] || categoryGroups[catKey].length === 0) && (
                         <tr><td colSpan={3} className="p-2 text-center text-gray-500 italic">Няма данни за тази категория</td></tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-gray-200 text-right bg-gray-50 rounded-b-xl">
              <button onClick={() => setShowTable(false)} className="px-8 py-3 bg-primary text-white rounded hover:bg-secondary transition-colors uppercase font-bold text-sm shadow-lg">
                Затвори таблицата
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Calculator;