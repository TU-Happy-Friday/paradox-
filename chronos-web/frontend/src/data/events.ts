import { Event } from '../types/index.js';

export const events: Event[] = [
  // Ancient Events
  {
    id: 'pyramid-giza',
    title: 'Construction of Great Pyramid of Giza',
    description: 'The largest pyramid in Egypt, built as a tomb for Pharaoh Khufu.',
    date: 'c. 2580 BC',
    year: -2580,
    eraId: 'ancient',
    civilizationId: 'egypt',
    location: 'Giza, Egypt',
    impact: 'high',
    category: 'cultural',
    image: 'https://images.unsplash.com/photo-1503197653147-9f0de4f4b62d?w=800'
  },
  {
    id: 'code-hammurabi',
    title: 'Code of Hammurabi',
    description: 'One of the oldest and most complete written legal codes in history.',
    date: 'c. 1754 BC',
    year: -1754,
    eraId: 'ancient',
    location: 'Babylon',
    impact: 'high',
    category: 'political'
  },
  {
    id: 'democracy-athens',
    title: 'Birth of Athenian Democracy',
    description: 'The first known democracy in the world, established in Athens.',
    date: '508 BC',
    year: -508,
    eraId: 'classical',
    civilizationId: 'greece',
    location: 'Athens, Greece',
    impact: 'high',
    category: 'political'
  },
  {
    id: 'parthenon-built',
    title: 'Construction of the Parthenon',
    description: 'The iconic temple dedicated to Athena, symbol of Classical Greece.',
    date: '447 BC',
    year: -447,
    eraId: 'classical',
    civilizationId: 'greece',
    location: 'Athens, Greece',
    impact: 'medium',
    category: 'cultural'
  },
  {
    id: 'rome-founded',
    title: 'Founding of Rome',
    description: 'According to legend, Rome was founded by Romulus and Remus.',
    date: '753 BC',
    year: -753,
    eraId: 'classical',
    civilizationId: 'rome',
    location: 'Rome, Italy',
    impact: 'high',
    category: 'political'
  },
  {
    id: 'christianity-established',
    title: 'Establishment of Christianity',
    description: 'The crucifixion of Jesus Christ and the birth of Christianity.',
    date: '30 AD',
    year: 30,
    eraId: 'classical',
    location: 'Jerusalem',
    impact: 'high',
    category: 'religious'
  },
  // Medieval Events
  {
    id: 'rome-fall',
    title: 'Fall of Western Roman Empire',
    description: 'The collapse of the Western Roman Empire, marking the end of ancient Rome.',
    date: '476 AD',
    year: 476,
    eraId: 'medieval',
    civilizationId: 'rome',
    location: 'Rome, Italy',
    impact: 'high',
    category: 'political'
  },
  {
    id: 'islam-birth',
    title: 'Birth of Islam',
    description: 'The Prophet Muhammad receives revelations and establishes Islam.',
    date: '622 AD',
    year: 622,
    eraId: 'medieval',
    civilizationId: 'islamic',
    location: 'Mecca, Saudi Arabia',
    impact: 'high',
    category: 'religious'
  },
  {
    id: 'battle-hastings',
    title: 'Battle of Hastings',
    description: 'William the Conqueror defeats Harold II, beginning Norman rule in England.',
    date: '1066 AD',
    year: 1066,
    eraId: 'medieval',
    location: 'Hastings, England',
    impact: 'high',
    category: 'military'
  },
  {
    id: 'crusades-first',
    title: 'First Crusade',
    description: 'The First Crusade is launched to reclaim the Holy Land.',
    date: '1095 AD',
    year: 1095,
    eraId: 'medieval',
    location: 'Europe to Jerusalem',
    impact: 'medium',
    category: 'military'
  },
  {
    id: 'magna-carta',
    title: 'Magna Carta Signed',
    description: 'The charter of rights agreed to by King John of England.',
    date: '1215 AD',
    year: 1215,
    eraId: 'medieval',
    location: 'London, England',
    impact: 'high',
    category: 'political'
  },
  {
    id: 'black-death',
    title: 'The Black Death',
    description: 'The devastating pandemic that killed an estimated 75-200 million people.',
    date: '1347 AD',
    year: 1347,
    eraId: 'medieval',
    location: 'Europe',
    impact: 'high',
    category: 'economic'
  },
  // Renaissance Events
  {
    id: 'fall-constantinople',
    title: 'Fall of Constantinople',
    description: 'The Ottoman conquest of Constantinople, ending the Byzantine Empire.',
    date: '1453 AD',
    year: 1453,
    eraId: 'renaissance',
    location: 'Constantinople (Istanbul)',
    impact: 'high',
    category: 'military'
  },
  {
    id: 'printing-press',
    title: 'Invention of Printing Press',
    description: 'Gutenberg invents the printing press, revolutionizing communication.',
    date: '1440 AD',
    year: 1440,
    eraId: 'renaissance',
    location: 'Mainz, Germany',
    impact: 'high',
    category: 'scientific'
  },
  {
    id: 'columbus-voyage',
    title: 'Columbus Discovers America',
    description: 'Christopher Columbus reaches the Americas, beginning European colonization.',
    date: '1492 AD',
    year: 1492,
    eraId: 'renaissance',
    location: 'Caribbean',
    impact: 'high',
    category: 'economic'
  },
  {
    id: 'david-statue',
    title: 'David by Michelangelo',
    description: 'Michelangelo completes the iconic statue of David.',
    date: '1504 AD',
    year: 1504,
    eraId: 'renaissance',
    location: 'Florence, Italy',
    impact: 'medium',
    category: 'cultural'
  },
  // Early Modern Events
  {
    id: 'martin-luther',
    title: 'Martin Luther\'s 95 Theses',
    description: 'Martin Luther posts his 95 Theses, starting the Protestant Reformation.',
    date: '1517 AD',
    year: 1517,
    eraId: 'early-modern',
    location: 'Wittenberg, Germany',
    impact: 'high',
    category: 'religious'
  },
  {
    id: 'shakespeare',
    title: 'Shakespeare\'s First Plays',
    description: 'William Shakespeare begins his career, revolutionizing English literature.',
    date: '1590 AD',
    year: 1590,
    eraId: 'early-modern',
    location: 'London, England',
    impact: 'high',
    category: 'cultural'
  },
  {
    id: 'newton-gravity',
    title: 'Newton Discovers Gravity',
    description: 'Isaac Newton formulates the law of universal gravitation.',
    date: '1687 AD',
    year: 1687,
    eraId: 'early-modern',
    location: 'Cambridge, England',
    impact: 'high',
    category: 'scientific'
  },
  {
    id: 'american-revolution',
    title: 'American Revolution',
    description: 'The thirteen colonies declare independence from British rule.',
    date: '1776 AD',
    year: 1776,
    eraId: 'early-modern',
    location: 'North America',
    impact: 'high',
    category: 'political'
  },
  {
    id: 'french-revolution',
    title: 'French Revolution',
    description: 'The overthrow of the French monarchy, spreading democratic ideals.',
    date: '1789 AD',
    year: 1789,
    eraId: 'early-modern',
    location: 'Paris, France',
    impact: 'high',
    category: 'political'
  },
  // Industrial Age Events
  {
    id: 'steam-engine',
    title: 'Steam Engine Invented',
    description: 'James Watt improves the steam engine, powering the Industrial Revolution.',
    date: '1769 AD',
    year: 1769,
    eraId: 'industrial',
    location: 'Scotland',
    impact: 'high',
    category: 'scientific'
  },
  {
    id: 'railway-birth',
    title: 'First Railway Opens',
    description: 'The Stockton and Darlington Railway opens, beginning the railway age.',
    date: '1825 AD',
    year: 1825,
    eraId: 'industrial',
    location: 'England',
    impact: 'high',
    category: 'economic'
  },
  {
    id: 'telephone',
    title: 'Telephone Invented',
    description: 'Alexander Graham Bell invents the telephone, revolutionizing communication.',
    date: '1876 AD',
    year: 1876,
    eraId: 'industrial',
    location: 'Boston, USA',
    impact: 'high',
    category: 'scientific'
  },
  {
    id: 'electric-light',
    title: 'Electric Light Bulb',
    description: 'Thomas Edison invents the practical electric light bulb.',
    date: '1879 AD',
    year: 1879,
    eraId: 'industrial',
    location: 'New York, USA',
    impact: 'high',
    category: 'scientific'
  },
  // World Wars Era Events
  {
    id: 'wwi-starts',
    title: 'World War I Begins',
    description: 'The assassination of Archduke Franz Ferdinand triggers WWI.',
    date: '1914 AD',
    year: 1914,
    eraId: 'world-wars',
    location: 'Europe',
    impact: 'high',
    category: 'military'
  },
  {
    id: 'russian-revolution',
    title: 'Russian Revolution',
    description: 'The Bolshevik Revolution establishes the first communist state.',
    date: '1917 AD',
    year: 1917,
    eraId: 'world-wars',
    location: 'Russia',
    impact: 'high',
    category: 'political'
  },
  {
    id: 'wwii-starts',
    title: 'World War II Begins',
    description: 'Germany invades Poland, starting WWII.',
    date: '1939 AD',
    year: 1939,
    eraId: 'world-wars',
    location: 'Europe',
    impact: 'high',
    category: 'military'
  },
  {
    id: 'atomic-bomb',
    title: 'Atomic Bomb Dropped',
    description: 'The first atomic bomb is used in warfare, ending WWII.',
    date: '1945 AD',
    year: 1945,
    eraId: 'world-wars',
    location: 'Hiroshima, Japan',
    impact: 'high',
    category: 'military'
  },
  // Contemporary Events
  {
    id: 'un-formed',
    title: 'United Nations Founded',
    description: 'The UN is established to promote international cooperation.',
    date: '1945 AD',
    year: 1945,
    eraId: 'contemporary',
    location: 'New York, USA',
    impact: 'high',
    category: 'political'
  },
  {
    id: 'moon-landing',
    title: 'Moon Landing',
    description: 'Neil Armstrong becomes the first human to walk on the moon.',
    date: '1969 AD',
    year: 1969,
    eraId: 'contemporary',
    location: 'Moon',
    impact: 'high',
    category: 'scientific'
  },
  {
    id: 'internet-birth',
    title: 'Birth of the Internet',
    description: 'ARPANET, the precursor to the modern internet, is created.',
    date: '1969 AD',
    year: 1969,
    eraId: 'contemporary',
    location: 'USA',
    impact: 'high',
    category: 'scientific'
  },
  {
    id: 'berlin-wall-falls',
    title: 'Fall of Berlin Wall',
    description: 'The Berlin Wall falls, symbolizing the end of the Cold War.',
    date: '1989 AD',
    year: 1989,
    eraId: 'contemporary',
    location: 'Berlin, Germany',
    impact: 'high',
    category: 'political'
  },
  {
    id: 'sept-11',
    title: 'September 11 Attacks',
    description: 'Terrorist attacks on the United States change global politics.',
    date: '2001 AD',
    year: 2001,
    eraId: 'contemporary',
    location: 'New York, USA',
    impact: 'high',
    category: 'political'
  },
  {
    id: 'covid-pandemic',
    title: 'COVID-19 Pandemic',
    description: 'The global pandemic that reshaped modern society.',
    date: '2020 AD',
    year: 2020,
    eraId: 'contemporary',
    location: 'Global',
    impact: 'high',
    category: 'economic'
  }
];