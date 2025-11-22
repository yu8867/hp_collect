
export enum SystemStatus {
  BOOTING = 'BOOTING',
  ACTIVE = 'ACTIVE',
  ERROR = 'ERROR'
}

export type View = 'home' | 'units' | 'map' | 'system';

export interface NavItem {
  id: View;
  label: string;
}

export interface ArchiveData {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  encrypted: boolean;
}

export type GlitchIntensity = 'low' | 'medium' | 'high';
