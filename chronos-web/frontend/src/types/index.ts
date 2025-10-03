export interface Era {
  id: string;
  name: string;
  description: string;
  startYear: number;
  endYear: number;
  color: string;
  image?: string;
  events?: Event[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  year: number;
  eraId: string;
  civilizationId?: string;
  location: string;
  impact: 'low' | 'medium' | 'high';
  category: 'political' | 'military' | 'cultural' | 'scientific' | 'religious' | 'economic';
  image?: string;
  sources?: string[];
  era?: Era;
  civilization?: Civilization;
}

export interface Civilization {
  id: string;
  name: string;
  description: string;
  foundingYear: number;
  collapseYear?: number;
  region: string;
  capital?: string;
  language?: string;
  religion?: string;
  achievements: string[];
  image?: string;
  events?: Event[];
}

export interface SearchResult {
  type: 'event' | 'era' | 'civilization';
  id: string;
  title: string;
  description: string;
  relevanceScore: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}