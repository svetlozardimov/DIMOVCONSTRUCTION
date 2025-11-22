export enum SectionId {
  HOME = 'home',
  PROJECTS = 'projects',
  CALCULATOR = 'calculator',
  ABOUT = 'about',
  ARTICLES = 'articles',
  LINKS = 'links',
  CONTACT = 'contact'
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  category: string;
  description?: string;
  imageUrl: string; // Thumbnail image
  images: string[]; // Gallery images
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

export interface Article {
  id: number;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
}

export interface UsefulLink {
  title: string;
  url: string;
  description: string;
}