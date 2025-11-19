import { GoogleGenAI } from "@google/genai";

// System instruction to guide the AI to act as a structural engineering consultant
const SYSTEM_INSTRUCTION = `
Ти си виртуален асистент на проектантска фирма "Dimov Construction" (Димов Кънстракшън ЕООД).
Твоята задача е да отговаряш на запитвания на потенциални клиенти професионално, учтиво и компетентно.

Основна информация за фирмата:
- Име: Dimov Construction (Димов Кънстракшън)
- Дейност: Проектиране на строителната конструкция на стоманени складови и производствени халета, КМД чертежи, BIM моделиране.
- Локация: гр. Стара Загора, бул. "Цар Симеон Велики" №4, ет.5, ап.10.
- Екип: инж. Пламен Димов, инж. Светлозар Димов, инж. Димо Димов.
- Особености: Работим по европейски норми (Еврокод), предоставяме NC и DXF файлове за машини.

Правила:
1. Отговаряй кратко и ясно (до 3-4 изречения).
2. Акцентирай върху опита в стоманените конструкции и индустриалните сгради.
3. Ако те попитат за цени, кажи, че цената зависи от спецификата на проекта (площ, височина, сложност) и ги насочи към формата за контакти или телефоните.
4. Бъди винаги любезен.
`;

export const sendChatMessage = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Съжалявам, в момента не мога да генерирам отговор. Моля, опитайте по-късно.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Възникна грешка при свързването с асистента. Моля, проверете интернет връзката си.";
  }
};