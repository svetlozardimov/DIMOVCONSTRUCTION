export interface ConstructionType {
  name: string;
  basePrice: number;
  type: 'fixed' | 'per_m2' | 'retaining_wall';
  minArea?: number;
  maxArea?: number;
  displayPrice?: string; // New field for custom table text
}

export interface CalculatorInputs {
  projectType: string;
  objectName: string;
  area: number;
  wallSections: number;
  additionalLength: number;
  hasCrane: boolean;
  hasComplexity: boolean;
  complexityPercentage: number;
  isAccelerated: boolean;
  includeSupervision: boolean;
  currencyDisplay: 'eur' | 'bgn' | 'both';
}

export interface CalculationResult {
  totalEur: number;
  log: string[];
  error?: string;
}

export const EURO_RATE = 1.95583;

export const constructionTypes: Record<string, ConstructionType> = {
  'I.1': { name: 'Становище само с текстова част', basePrice: 200, type: 'fixed', displayPrice: 'мин. 200 €' },
  'I.2': { name: 'Проектно решение по чл.147', basePrice: 0, type: 'fixed', displayPrice: 'виж. т.II.1; III.1; V.1' },
  'I.3': { name: 'Становище за фотоволтаични централи', basePrice: 1000, type: 'fixed', displayPrice: 'мин. 1000 €' },
  
  'II.1': { name: 'РЗП до 100м²', basePrice: 900, type: 'fixed', maxArea: 100, displayPrice: 'мин. 900 €' },
  'II.2': { name: 'РЗП от 100м² до 200м²', basePrice: 1200, type: 'fixed', minArea: 100, maxArea: 200, displayPrice: 'мин. 1200 €' },
  'II.3': { name: 'РЗП над 200м²', basePrice: 6, type: 'per_m2', minArea: 200, displayPrice: 'мин. 6 €/м²' },
  
  'III.1': { name: 'РЗП до 100м²', basePrice: 1200, type: 'fixed', maxArea: 100, displayPrice: 'мин. 1200 €' },
  'III.2': { name: 'РЗП от 100м² до 200м²', basePrice: 1500, type: 'fixed', minArea: 100, maxArea: 200, displayPrice: 'мин. 1500 €' },
  'III.3': { name: 'РЗП над 200м²', basePrice: 7.5, type: 'per_m2', minArea: 200, displayPrice: 'мин. 7.5 €/м²' },
  
  'IV.1': { name: 'РЗП от 500м² до 1000м²', basePrice: 6, type: 'per_m2', minArea: 500, maxArea: 1000, displayPrice: 'мин. 6 €/м²' },
  'IV.2': { name: 'РЗП от 1000м² до 3000м²', basePrice: 5, type: 'per_m2', minArea: 1000, maxArea: 3000, displayPrice: 'мин. 5 €/м²' },
  'IV.3': { name: 'РЗП от 3000м² до 5000м²', basePrice: 4, type: 'per_m2', minArea: 3000, maxArea: 5000, displayPrice: 'мин. 4 €/м²' },
  'IV.4': { name: 'РЗП над 5000м²', basePrice: 3.5, type: 'per_m2', minArea: 5000, displayPrice: 'мин. 3.5 €/м²' },
  
  'V.1': { name: 'Правоъгълно складово хале до 125м²', basePrice: 875, type: 'fixed', maxArea: 125, displayPrice: 'мин. 875 €' },
  'V.2': { name: '...от 125м² до 600м²', basePrice: 7, type: 'per_m2', minArea: 125, maxArea: 600, displayPrice: 'мин. 7 €/м²' },
  'V.3': { name: '...от 600м² до 1200м²', basePrice: 6, type: 'per_m2', minArea: 600, maxArea: 1200, displayPrice: 'мин. 6 €/м²' },
  'V.4': { name: '...над 1200м²', basePrice: 5, type: 'per_m2', minArea: 1200, displayPrice: 'мин. 5 €/м²' },
  'V.5': { name: 'За халета с кран', basePrice: 0, type: 'fixed', displayPrice: '+ 1 €/м²' },
  
  'VI.1': { name: 'Правоъгълно складово хале - РЗП до 1500м²', basePrice: 7, type: 'per_m2', maxArea: 1500, displayPrice: 'мин. 7 €/м²' },
  'VI.2': { name: 'Правоъгълно складово хале - РЗП над 1500м²', basePrice: 6, type: 'per_m2', minArea: 1500, displayPrice: 'мин. 6 €/м²' },
  'VI.3': { name: 'За халета с кран', basePrice: 0, type: 'fixed', displayPrice: '+ 1 €/м²' },
  
  'VII.1': { name: 'Еднофамилни жилищни сгради, преустройства', basePrice: 150, type: 'fixed', displayPrice: 'мин. 150 €' },
  'VII.2': { name: 'Многофамилни жилищни сгради, халета', basePrice: 250, type: 'fixed', displayPrice: 'мин. 250 €' },
  'VII.3': { name: 'Събаряне на съществуващи сгради', basePrice: 350, type: 'fixed', displayPrice: 'мин. 350 €' },
  
  'VIII.1': { name: 'Пълно обследване', basePrice: 5, type: 'per_m2', displayPrice: 'мин. 5 €/м²' },
  'VIII.2': { name: 'Частично обследване', basePrice: 0, type: 'fixed', displayPrice: 'по преценка на проектанта' },

  'IX.1': { name: 'Процент от хонорара', basePrice: 0, type: 'fixed', displayPrice: '7-10%' },

  'X.1': { name: 'До 4м височина за 1 брой сечение', basePrice: 300, type: 'retaining_wall', displayPrice: 'мин. 300 €' },
  'X.2': { name: 'Над 4м височина за 1 брой сечение', basePrice: 600, type: 'retaining_wall', displayPrice: 'мин. 600 €' },

  'XI.1': { name: 'Като процент от хонорара', basePrice: 0, type: 'fixed', displayPrice: 'мин. 15%' },
  'XI.2': { name: 'Часова ставка', basePrice: 0, type: 'fixed', displayPrice: 'мин 75 €/посещение(1ч)+ 30€ добавка за всеки следващ започнат час' }
};

export const categoryNames: Record<string, string> = {
  'I': 'Становища',
  'II': 'Еднофамилни жилищни сгради (стоманобетон)',
  'III': 'Еднофамилни жилищни сгради (дърво/стомана)',
  'IV': 'Многофамилни жилищни сгради',
  'V': 'Стоманени конструкции',
  'VI': 'Сглобяеми стоманобетонни конструкции',
  'VII': 'План за безопасност и здраве',
  'VIII': 'Обследване на съществуващи сгради',
  'IX': 'Технически контрол',
  'X': 'Подпорни стени',
  'XI': 'Авторски надзор'
};

export const calculatePrice = (inputs: CalculatorInputs): CalculationResult => {
  if (!inputs.projectType) {
    return { totalEur: 0, log: ['Моля, изберете вид проект.'] };
  }

  const type = constructionTypes[inputs.projectType];
  if (!type) return { totalEur: 0, error: 'Невалиден тип проект', log: [] };

  let currentTotal = 0;
  let log: string[] = [];

  // 1. Base Calculation
  log.push(`--- ОСНОВНА ЦЕНА ---`);
  log.push(`Проект: ${type.name}`);
  
  // Validation Logic
  if (type.type === 'per_m2' || (type.type === 'fixed' && (type.minArea || type.maxArea))) {
     if (inputs.area > 0) {
         if (type.minArea && inputs.area < type.minArea) {
             return { totalEur: 0, error: `За тази категория площта трябва да е над ${type.minArea} м².`, log: [] };
         }
         if (type.maxArea && inputs.area > type.maxArea) {
             return { totalEur: 0, error: `За тази категория площта трябва да е до ${type.maxArea} м².`, log: [] };
         }
     }
  }

  if (type.type === 'fixed') {
    currentTotal = type.basePrice;
    log.push(`Базова цена (фиксирана): ${type.basePrice.toFixed(2)} €`);
  } else if (type.type === 'per_m2') {
    if (inputs.area <= 0) {
       return { totalEur: 0, error: 'Моля въведете площ > 0', log: ['Моля въведете валидна площ.'] };
    }
    let pricePerM2 = type.basePrice;
    
    // Check for Crane logic (Category V or VI)
    const category = inputs.projectType.split('.')[0];
    if ((category === 'V' || category === 'VI') && inputs.hasCrane) {
      pricePerM2 += 1.00;
      log.push(`Добавка за кран: +1.00 €/м²`);
    }

    currentTotal = inputs.area * pricePerM2;
    log.push(`Площ: ${inputs.area} м² x ${pricePerM2.toFixed(2)} €/м² = ${currentTotal.toFixed(2)} €`);
  } else if (type.type === 'retaining_wall') {
    if (inputs.wallSections < 1) {
       return { totalEur: 0, error: 'Брой сечения трябва да е поне 1', log: ['Невалиден брой сечения.'] };
    }
    let base = type.basePrice * inputs.wallSections;
    log.push(`${inputs.wallSections} бр. сечения x ${type.basePrice} € = ${base.toFixed(2)} €`);
    
    // Additional length logic
    if (inputs.additionalLength > 0) {
        const chunks = Math.ceil(inputs.additionalLength / 10);
        const addition = base * 0.20 * chunks;
        base += addition;
        log.push(`Добавка за дължина (${inputs.additionalLength}м): +${addition.toFixed(2)} €`);
    }
    currentTotal = base;
  }

  // 2. Complexity
  if (inputs.hasComplexity && inputs.complexityPercentage > 0) {
    const added = currentTotal * (inputs.complexityPercentage / 100);
    currentTotal += added;
    log.push(`Сложност (+${inputs.complexityPercentage}%): +${added.toFixed(2)} €`);
  }

  // 3. Accelerated
  if (inputs.isAccelerated) {
    const added = currentTotal * 0.50;
    currentTotal += added;
    log.push(`Ускорено проектиране (+50%): +${added.toFixed(2)} €`);
  }

  // 4. Supervision
  if (inputs.includeSupervision) {
    const added = currentTotal * 0.15;
    currentTotal += added;
    log.push(`Авторски надзор (+15%): +${added.toFixed(2)} €`);
  }

  return { totalEur: currentTotal, log };
};