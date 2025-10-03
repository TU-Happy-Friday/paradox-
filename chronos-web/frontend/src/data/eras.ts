import { Era } from '../types/index.js';

export const eras: Era[] = [
  {
    id: 'ancient',
    name: 'Ancient History',
    description: 'The rise of early civilizations and the foundations of human society',
    startYear: -3000,
    endYear: 500,
    color: '#8B4513',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
  },
  {
    id: 'classical',
    name: 'Classical Antiquity',
    description: 'The golden age of Greek and Roman civilizations',
    startYear: 500,
    endYear: 476,
    color: '#FFD700',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800'
  },
  {
    id: 'medieval',
    name: 'Medieval Period',
    description: 'The Middle Ages, characterized by feudalism and the rise of Christianity',
    startYear: 476,
    endYear: 1453,
    color: '#4B0082',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800'
  },
  {
    id: 'renaissance',
    name: 'Renaissance',
    description: 'Cultural rebirth and the beginning of modern science',
    startYear: 1453,
    endYear: 1600,
    color: '#FF6347',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
  },
  {
    id: 'early-modern',
    name: 'Early Modern Period',
    description: 'Age of exploration, scientific revolution, and enlightenment',
    startYear: 1600,
    endYear: 1800,
    color: '#4682B4',
    image: 'https://images.unsplash.com/photo-1579532585986-9a1b6f76d14a?w=800'
  },
  {
    id: 'industrial',
    name: 'Industrial Age',
    description: 'The transformation from agricultural to industrial societies',
    startYear: 1800,
    endYear: 1914,
    color: '#696969',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800'
  },
  {
    id: 'world-wars',
    name: 'World Wars Era',
    description: 'The devastating global conflicts of the 20th century',
    startYear: 1914,
    endYear: 1945,
    color: '#8B0000',
    image: 'https://images.unsplash.com/photo-1596834134196-5473c4cc7808?w=800'
  },
  {
    id: 'contemporary',
    name: 'Contemporary Era',
    description: 'Modern world with technological advancement and globalization',
    startYear: 1945,
    endYear: 2024,
    color: '#2E8B57',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800'
  }
];