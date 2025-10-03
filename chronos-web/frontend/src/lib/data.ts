import { Era, Event, Civilization, SearchResult } from '@/types';
import { eras } from '@/data/eras';
import { events } from '@/data/events';
import { civilizations } from '@/data/civilizations';

class DataClient {
  async getEras(): Promise<Era[]> {
    return eras.map(era => ({
      ...era,
      events: events.filter(event => event.eraId === era.id)
    }));
  }

  async getEra(id: string): Promise<Era> {
    const era = eras.find(e => e.id === id);
    if (!era) throw new Error(`Era with id ${id} not found`);

    return {
      ...era,
      events: events.filter(event => event.eraId === era.id)
    };
  }

  async getEvents(params?: {
    limit?: number;
    offset?: number;
    eraId?: string;
    civilizationId?: string;
    category?: string;
  }): Promise<{ events: Event[]; total: number; limit: number; offset: number }> {
    let filteredEvents = events;

    if (params?.eraId) {
      filteredEvents = filteredEvents.filter(event => event.eraId === params.eraId);
    }

    if (params?.civilizationId) {
      filteredEvents = filteredEvents.filter(event => event.civilizationId === params.civilizationId);
    }

    if (params?.category) {
      filteredEvents = filteredEvents.filter(event => event.category === params.category);
    }

    const total = filteredEvents.length;
    const offset = params?.offset || 0;
    const limit = params?.limit || 10;

    const paginatedEvents = filteredEvents
      .sort((a, b) => a.year - b.year)
      .slice(offset, offset + limit)
      .map(event => ({
        ...event,
        era: eras.find(e => e.id === event.eraId),
        civilization: event.civilizationId
          ? civilizations.find(c => c.id === event.civilizationId)
          : undefined
      }));

    return {
      events: paginatedEvents,
      total,
      limit,
      offset
    };
  }

  async getEvent(id: string): Promise<Event> {
    const event = events.find(e => e.id === id);
    if (!event) throw new Error(`Event with id ${id} not found`);

    return {
      ...event,
      era: eras.find(e => e.id === event.eraId),
      civilization: event.civilizationId
        ? civilizations.find(c => c.id === event.civilizationId)
        : undefined
    };
  }

  async getCivilizations(): Promise<Civilization[]> {
    return civilizations.map(civ => ({
      ...civ,
      events: events.filter(event => event.civilizationId === civ.id)
    }));
  }

  async getCivilization(id: string): Promise<Civilization> {
    const civilization = civilizations.find(c => c.id === id);
    if (!civilization) throw new Error(`Civilization with id ${id} not found`);

    return {
      ...civilization,
      events: events.filter(event => event.civilizationId === id)
    };
  }

  async search(query: string, limit?: number): Promise<{
    query: string;
    results: SearchResult[];
    total: number;
  }> {
    const searchTerm = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search eras
    eras.forEach(era => {
      const relevanceScore = this.calculateRelevanceScore(searchTerm, [era.name, era.description]);
      if (relevanceScore > 0) {
        results.push({
          type: 'era',
          id: era.id,
          title: era.name,
          description: era.description,
          relevanceScore
        });
      }
    });

    // Search events
    events.forEach(event => {
      const relevanceScore = this.calculateRelevanceScore(searchTerm, [event.title, event.description, event.location]);
      if (relevanceScore > 0) {
        results.push({
          type: 'event',
          id: event.id,
          title: event.title,
          description: event.description,
          relevanceScore
        });
      }
    });

    // Search civilizations
    civilizations.forEach(civ => {
      const relevanceScore = this.calculateRelevanceScore(searchTerm, [civ.name, civ.description, civ.region]);
      if (relevanceScore > 0) {
        results.push({
          type: 'civilization',
          id: civ.id,
          title: civ.name,
          description: civ.description,
          relevanceScore
        });
      }
    });

    // Sort by relevance score and limit results
    const sortedResults = results
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit || 20);

    return {
      query,
      results: sortedResults,
      total: sortedResults.length
    };
  }

  private calculateRelevanceScore(searchTerm: string, fields: string[]): number {
    let score = 0;

    fields.forEach(field => {
      const fieldValue = field.toLowerCase();

      // Exact match gets highest score
      if (fieldValue === searchTerm) {
        score += 100;
      }
      // Starts with term gets high score
      else if (fieldValue.startsWith(searchTerm)) {
        score += 50;
      }
      // Contains term gets medium score
      else if (fieldValue.includes(searchTerm)) {
        score += 25;
      }

      // Word-based scoring
      const searchWords = searchTerm.split(' ');
      const fieldWords = fieldValue.split(' ');

      searchWords.forEach(searchWord => {
        fieldWords.forEach(fieldWord => {
          if (fieldWord === searchWord) {
            score += 10;
          } else if (fieldWord.startsWith(searchWord)) {
            score += 5;
          } else if (fieldWord.includes(searchWord)) {
            score += 2;
          }
        });
      });
    });

    return score;
  }
}

export const data = new DataClient();