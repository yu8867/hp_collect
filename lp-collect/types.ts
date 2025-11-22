import { LucideIcon } from 'lucide-react';

export type View = 'home' | 'works' | 'contact';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  size: 'large' | 'tall' | 'wide' | 'normal';
  tags: string[];
  aiPromptSuggestion?: string; // For developer reference
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
}

export interface PricePlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
  cta: string;
}