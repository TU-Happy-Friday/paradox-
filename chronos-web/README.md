# 🏛️ ChronosWeb - The History of the World

An interactive web application showcasing the complete timeline of world history from ancient civilizations to the modern era.

## 🚀 Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Data**: Local TypeScript data files
- **Deployment**: Vercel (Frontend-only)

## 📁 Project Structure

```
chronos-web/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable components
│   │   ├── lib/            # Data service and utilities
│   │   ├── data/           # Historical data files
│   │   └── types/          # TypeScript definitions
│   ├── public/             # Static assets
│   └── package.json        # Dependencies
├── README.md
├── PROJECT_STRUCTURE.md
└── DEPLOYMENT.md
```

## 🎯 Features

- Interactive timeline of world history
- Categorized historical eras (Ancient, Medieval, Modern, etc.)
- Detailed event pages with descriptions
- Search functionality across all historical content
- Responsive design
- **Frontend-only**: No backend required
- Local data storage with TypeScript interfaces

## 🌐 Live Demo

[Deployment URL] (Coming soon)

## 📚 Historical Data Coverage

- **8 Historical Eras**: From Ancient (-3000 BCE) to Contemporary (1945-2024)
- **40+ Historical Events**: Major moments that shaped world history
- **6 Major Civilizations**: Egypt, Greece, Rome, China, Maya, Islamic Golden Age
- **Event Categories**: Political, military, cultural, scientific, religious, economic

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Development Setup

```bash
# 1. Navigate to the frontend directory
cd chronos-web/frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser
# The application will be available at http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📜 License

MIT License - see LICENSE file for details