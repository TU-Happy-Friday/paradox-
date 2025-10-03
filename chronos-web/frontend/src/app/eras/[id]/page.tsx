import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Calendar, MapPin } from 'lucide-react';
import { api } from '@/lib/api';
import { EventCard } from '@/components/EventCard';

export default async function EraPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const era = await api.getEra(id).catch(() => null);

  if (!era) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Era Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br"
          style={{ backgroundColor: era.color }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <Link
              href="/eras"
              className="inline-flex items-center text-white/80 hover:text-white mb-4"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Eras
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{era.name}</h1>
            <p className="text-xl text-white/90 mb-4">
              {era.startYear < 0 ? `${Math.abs(era.startYear)} BC` : `${era.startYear} AD`} - {' '}
              {era.endYear < 0 ? `${Math.abs(era.endYear)} BC` : `${era.endYear} AD`}
            </p>
            <p className="text-lg text-white/80 max-w-3xl">{era.description}</p>
          </div>
        </div>
      </div>

      {/* Era Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Key Events of the {era.name}
          </h2>
          <p className="text-lg text-gray-600">
            Significant moments that shaped this historical period
          </p>
        </div>

        {era.events && era.events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {era.events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-600">No events found for this era.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse All Events
          </Link>
        </div>
      </div>
    </div>
  );
}