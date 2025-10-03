import { Civilization } from '../types/index.js';

export const civilizations: Civilization[] = [
  {
    id: 'egypt',
    name: 'Ancient Egypt',
    description: 'One of the world\'s earliest and most enduring civilizations, known for pyramids, hieroglyphics, and pharaohs.',
    foundingYear: -3100,
    collapseYear: 30,
    region: 'Northeastern Africa',
    capital: 'Thebes',
    language: 'Egyptian',
    religion: 'Polytheistic',
    achievements: [
      'Pyramid construction',
      'Hieroglyphic writing system',
      'Advanced mathematics and engineering',
      'Mummification techniques',
      'Solar calendar development'
    ],
    image: 'https://images.unsplash.com/photo-1503197653147-9f0de4f4b62d?w=800'
  },
  {
    id: 'greece',
    name: 'Ancient Greece',
    description: 'Birthplace of Western civilization, democracy, philosophy, and the Olympic Games.',
    foundingYear: -800,
    collapseYear: 146,
    region: 'Southeastern Europe',
    capital: 'Athens',
    language: 'Ancient Greek',
    religion: 'Greek Mythology',
    achievements: [
      'Development of democracy',
      'Philosophy (Socrates, Plato, Aristotle)',
      'Mathematics and geometry',
      'Theatre and literature',
      'Olympic Games'
    ],
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800'
  },
  {
    id: 'rome',
    name: 'Roman Empire',
    description: 'One of the largest empires in history, known for its legal system, engineering, and military prowess.',
    foundingYear: -753,
    collapseYear: 476,
    region: 'Mediterranean Europe',
    capital: 'Rome',
    language: 'Latin',
    religion: 'Roman Polytheism -> Christianity',
    achievements: [
      'Roman law and governance',
      'Aqueducts and engineering',
      'Roman roads and infrastructure',
      'Concrete technology',
      'Military organization'
    ],
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800'
  },
  {
    id: 'china',
    name: 'Ancient China',
    description: 'One of the world\'s oldest continuous civilizations, known for innovations like gunpowder, paper, and the compass.',
    foundingYear: -2070,
    collapseYear: 1912,
    region: 'East Asia',
    capital: 'Beijing (various)',
    language: 'Chinese',
    religion: 'Confucianism, Taoism, Buddhism',
    achievements: [
      'Four Great Inventions (paper, printing, gunpowder, compass)',
      'Great Wall construction',
      'Silk production and trade',
      'Advanced astronomy',
      'Civil service system'
    ],
    image: 'https://images.unsplash.com/photo-1548919175-b36508a0c8f4?w=800'
  },
  {
    id: 'maya',
    name: 'Maya Civilization',
    description: 'Mesoamerican civilization known for writing systems, astronomy, and impressive stone architecture.',
    foundingYear: -2000,
    collapseYear: 1697,
    region: 'Mesoamerica',
    capital: 'Multiple city-states',
    language: 'Mayan languages',
    religion: 'Polytheistic',
    achievements: [
      'Advanced writing system',
      'Mathematical zero concept',
      'Astronomical observations',
      'Complex calendar systems',
      'Pyramid and city construction'
    ],
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800'
  },
  {
    id: 'islamic',
    name: 'Islamic Golden Age',
    description: 'Period of cultural, economic, and scientific flourishing in the Islamic world.',
    foundingYear: 622,
    collapseYear: 1258,
    region: 'Middle East, North Africa, Spain',
    capital: 'Baghdad',
    language: 'Arabic',
    religion: 'Islam',
    achievements: [
      'Advances in mathematics and algebra',
      'Medical knowledge and hospitals',
      'Astronomy and navigation',
      'Philosophy and philosophy',
      'Architecture and art'
    ],
    image: 'https://images.unsplash.com/photo-1596422988801-9bce4fb9c7f6?w=800'
  }
];