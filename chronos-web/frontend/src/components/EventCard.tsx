import Link from 'next/link';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { Event } from '@/types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1" />
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

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            {event.location}
          </div>
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-1 text-gray-400" />
            <span className="text-gray-500 capitalize">{event.category}</span>
          </div>
        </div>

        {event.civilization && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Civilization:</span> {event.civilization.name}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}