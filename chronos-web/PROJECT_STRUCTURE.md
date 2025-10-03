# 🏛️ ChronosWeb - Project Structure

## 📁 Folder Structure

```
chronos-web/
├── frontend/                 # Next.js 15 frontend application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   │   ├── page.tsx     # Home page
│   │   │   ├── eras/        # Era pages
│   │   │   ├── events/      # Event pages
│   │   │   ├── timeline/    # Timeline view
│   │   │   └── layout.tsx   # Root layout
│   │   ├── components/      # Reusable components
│   │   ├── lib/            # Data service and utilities
│   │   │   ├── api.ts      # Legacy API interface (now uses local data)
│   │   │   └── data.ts     # Local data service
│   │   ├── data/           # Historical data files
│   │   │   ├── eras.ts     # Historical eras data
│   │   │   ├── events.ts   # Historical events data
│   │   │   └── civilizations.ts # Civilizations data
│   │   └── types/          # TypeScript definitions
│   ├── public/             # Static assets
│   ├── .env.local          # Environment variables (minimal)
│   ├── .env.example        # Environment example
│   ├── package.json        # Dependencies
│   └── vercel.json         # Vercel deployment config
├── DEPLOYMENT.md           # Deployment instructions
├── PROJECT_STRUCTURE.md    # This file
└── README.md              # Project documentation
```

## 🚀 Quick Start

### Frontend Development
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

### Backend Development
\`\`\`bash
cd backend
npm install
npm run dev
\`\`\`

## 🌐 API Endpoints

- \`GET /api/eras\` - List all historical eras
- \`GET /api/eras/:id\` - Get specific era with events
- \`GET /api/events\` - List historical events (with filters)
- \`GET /api/events/:id\` - Get specific event details
- \`GET /api/civilizations\` - List all civilizations
- \`GET /api/civilizations/:id\` - Get specific civilization
- \`GET /api/search\` - Search historical content

## 🎨 Features

- Interactive timeline of world history
- Era-based organization
- Civilization profiles
- Event categorization
- Search functionality
- Responsive design
- RESTful API
- Modern tech stack

## 📱 Pages

- **Home**: Hero section with featured content
- **Timeline**: Interactive chronological view
- **Eras**: Browse and explore historical periods
- **Events**: Detailed event information
- **Civilizations**: Cultural and historical profiles

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14 with TypeScript
- Tailwind CSS for styling
- Lucide React icons
- Server-side rendering

**Backend:**
- Hono.js with TypeScript
- Cloudflare Workers deployment
- RESTful API design
- CORS enabled

**Deployment:**
- Vercel (frontend)
- Cloudflare Workers (backend)
