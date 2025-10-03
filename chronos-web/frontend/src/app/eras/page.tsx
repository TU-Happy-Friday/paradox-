import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { api } from '@/lib/api';

export default async function ErasPage() {
  const eras = await api.getEras();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Historical Eras</h1>
              <p className="text-gray-600 mt-2">Explore the major periods of human history</p>
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

      {/* Eras Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eras.map((era) => (
            <Link
              key={era.id}
              href={`/eras/${era.id}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div
                className="h-48 bg-gradient-to-br relative overflow-hidden"
                style={{ backgroundColor: era.color }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold mb-1">{era.name}</h2>
                  <p className="text-sm opacity-90">
                    {era.startYear < 0 ? `${Math.abs(era.startYear)} BC` : `${era.startYear} AD`} - {' '}
                    {era.endYear < 0 ? `${Math.abs(era.endYear)} BC` : `${era.endYear} AD`}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {era.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                  <span>Explore Era</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}