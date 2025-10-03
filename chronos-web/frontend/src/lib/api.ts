import { Era, Event, Civilization, SearchResult } from '@/types';
import { data } from '@/lib/data';

// Legacy API client now uses local data instead of HTTP requests
class ApiClient {
  async getEras(): Promise<Era[]> {
    return data.getEras();
  }

  async getEra(id: string): Promise<Era> {
    return data.getEra(id);
  }

  async getEvents(params?: {
    limit?: number;
    offset?: number;
    eraId?: string;
    civilizationId?: string;
    category?: string;
  }): Promise<{ events: Event[]; total: number; limit: number; offset: number }> {
    return data.getEvents(params);
  }

  async getEvent(id: string): Promise<Event> {
    return data.getEvent(id);
  }

  async getCivilizations(): Promise<Civilization[]> {
    return data.getCivilizations();
  }

  async getCivilization(id: string): Promise<Civilization> {
    return data.getCivilization(id);
  }

  async search(query: string, limit?: number): Promise<{
    query: string;
    results: SearchResult[];
    total: number;
  }> {
    return data.search(query, limit);
  }
}

export const api = new ApiClient();