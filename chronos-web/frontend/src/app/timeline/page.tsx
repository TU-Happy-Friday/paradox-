'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, Clock, MapPin, Filter } from 'lucide-react';
import { Event, Era } from '@/types';

export default function TimelinePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [eras, setEras] = useState<Era[]>([]);
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/events?limit=100`);
        const eventsData = await eventsResponse.json();

        const erasResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/eras`);
        const erasData = await erasResponse.json();

        setEvents(eventsData.events || []);
        setEras(erasData);
      } catch (error) {
        console.error('Failed to fetch timeline data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredEvents = selectedEra === 'all'
    ? events
    : events.filter(event => event.eraId === selectedEra);

  const sortedEvents = filteredEvents.sort((a, b) => a.year - b.year);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading timeline...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Historical Timeline</h1>
              <p className="text-gray-600 mt-2">Journey through time</p>
            </div>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Era Filter */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter by Era:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedEra('all')}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedEra === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Eras ({events.length})
              </button>
              {eras.map((era) => (
                <button
                  key={era.id}
                  onClick={() => setSelectedEra(era.id)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedEra === era.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{
                    backgroundColor: selectedEra === era.id ? undefined : era.color + '20',
                    color: selectedEra === era.id ? 'white' : era.color
                  }}
                >
                  {era.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Timeline Events */}
          <div className="space-y-8">
            {sortedEvents.map((event, index) => {
              const eventEra = eras.find(era => era.id === event.eraId);
              return (
                <div key={event.id} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-6 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10"
                    style={{ backgroundColor: eventEra?.color || '#3B82F6' }}
                  ></div>

                  {/* Event Content */}
                  <div className="ml-16 flex-1">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.date}
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            event.impact === 'high' ? 'bg-red-100 text-red-800' :
                            event.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}
                        >
                          {event.impact} impact
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {event.description}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </div>
                        {eventEra && (
                          <div className="flex items-center">
                            <span
                              className="px-2 py-1 text-xs rounded-full text-white"
                              style={{ backgroundColor: eventEra.color }}
                            >
                              {eventEra.name}
                            </span>
                          </div>
                        )}
                      </div>

                      {event.civilization && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Civilization:</span> {event.civilization.name}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {sortedEvents.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-600">No events found for the selected era.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}