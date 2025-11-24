export interface CoffeeProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  roastLevel: 'Light' | 'Medium';
  imageUrl: string;
  imageAlt: string;
  imagePrompt: string;
}

export interface TestimonialData {
  id: string;
  text: string;
  author: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imagePrompt: string;
}