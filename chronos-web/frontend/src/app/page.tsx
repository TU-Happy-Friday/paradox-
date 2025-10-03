import Link from 'next/link';
import { ChevronRight, Clock, Globe, Users } from 'lucide-react';
import { api } from '@/lib/api';

export default async function Home() {
  const eras = await api.getEras();
  const featuredEvents = await api.getEvents({ limit: 6 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-image.png)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              🏛️ ChronosWeb
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Journey Through the History of the World
            </p>
            <p className="text-lg mb-12 text-blue-200 max-w-3xl mx-auto">
              Explore the complete timeline of human civilization, from ancient pyramids to modern technology.
              Discover the events, civilizations, and people that shaped our world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/timeline"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Timeline
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/eras"
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse Eras
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">8 Major Eras</h3>
              <p className="text-gray-600 mt-2">From ancient civilizations to the modern world</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">40+ Events</h3>
              <p className="text-gray-600 mt-2">Key moments that shaped history</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">6 Civilizations</h3>
              <p className="text-gray-600 mt-2">Major cultures and their contributions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Eras */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Historical Eras
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Journey through different periods of human history
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eras.slice(0, 8).map((era) => (
              <Link
                key={era.id}
                href={`/eras/${era.id}`}
                className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div
                  className="h-32 bg-gradient-to-r from-gray-400 to-gray-600"
                  style={{ backgroundColor: era.color }}
                ></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {era.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {era.description}
                  </p>
                  <div className="text-sm font-medium text-gray-500">
                    {era.startYear < 0 ? `${Math.abs(era.startYear)} BC` : `${era.startYear} AD`} -
                    {era.endYear < 0 ? ` ${Math.abs(era.endYear)} BC` : ` ${era.endYear} AD`}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Historical Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Significant moments that changed the course of history
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500">
                    {event.date}
                  </span>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-3">
                  {event.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">{event.location}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/events"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Events
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
