export enum SectionId {
  HOME = 'home',
  PROJECTS = 'projects',
  ABOUT = 'about',
  CONTACT = 'contact'
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  description?: string;
  imageUrl: string;
  specs?: {
    area?: string;
    height?: string;
    year?: string;
    investor?: string;
    location?: string;
  }
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}