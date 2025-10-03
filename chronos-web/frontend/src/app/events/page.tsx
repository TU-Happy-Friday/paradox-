import Link from 'next/link';
import { ChevronLeft, Filter } from 'lucide-react';
import { api } from '@/lib/api';
import { EventCard } from '@/components/EventCard';

export default async function EventsPage() {
  const eventsData = await api.getEvents({ limit: 100 });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Historical Events</h1>
              <p className="text-gray-600 mt-2">Key moments that shaped our world</p>
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

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                All Events ({eventsData.total})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {eventsData.events.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600">No events found.</p>
          </div>
        )}
      </div>
    </div>
  );
}