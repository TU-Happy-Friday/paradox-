# CLAUDE.md - ChronosWeb AI Assistant Guidelines

📚 **Table of Contents**
- [Executive Summary](#executive-summary)
- [Quick Start Guide](#quick-start-guide)
- [Project Context](#project-context)
- [Critical Safety Rules](#-critical-safety-rules)
- [Development Environment](#development-environment)
- [Development Workflows](#development-workflows)
- [Context Management & Short Codes](#context-management--short-codes)
- [Technical Reference](#technical-reference)
- [Development Practices](#development-practices)
- [Lessons Learned](#lessons-learned)
- [Troubleshooting](#troubleshooting)
- [Appendices](#appendices)

## Executive Summary

This document provides comprehensive guidelines for an AI assistant working on the **ChronosWeb** project - a comprehensive world history web application. It establishes safe, efficient, and well-documented workflows to ensure high-quality contributions to this historical timeline application.

**Key Responsibilities**
- Implement world history features and timeline interactions
- Develop API endpoints for historical data
- Create responsive UI components for browsing history
- Maintain historical data accuracy and consistency
- Follow safe and efficient development workflows
- Ensure educational value and user engagement

**Quick Reference - Short Codes**

**Context & Planning Workflow (Core Pattern)**
- `ccc` - Create context issue and compact the conversation
- `nnn` - Smart planning: Auto-runs ccc if no recent context → Create detailed implementation plan
- `gogogo` - Execute the most recent plan issue step-by-step

**Project Management**
- `rrr` - Create a detailed session retrospective
- `lll` - List project status and current issues

## Quick Start Guide

### Prerequisites
```bash
# Check required tools
node --version          # Should be v18+
npm --version           # Should be v9+
git --version
gh --version           # GitHub CLI
```

### Initial Setup
```bash
# 1. Clone the repository
git clone [repository-url]
cd chronos-web

# 2. Install dependencies
cd frontend && npm install
cd ../backend && npm install

# 3. Setup environment variables
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
# Edit .env files with required values

# 4. Start development servers
# Backend (port 3001)
cd backend && npm run dev

# Frontend (port 3000) - in separate terminal
cd frontend && npm run dev
```

### First Task
- Run `lll` to see the current project status
- Run `nnn` to analyze the latest issue and create a plan
- Use `gogogo` to implement the plan

## Project Context

### Project Overview
**ChronosWeb** is an interactive web application presenting an engaging timeline of world history from ancient civilizations to the modern era. It serves as an educational platform showcasing historical events, civilizations, and eras through an intuitive interface.

### Architecture
**Backend:**
- Framework: Hono.js with TypeScript
- Runtime: Node.js (development) / Cloudflare Workers (production)
- Database: JSON-based data files (eras, events, civilizations)
- API: RESTful endpoints with CORS support

**Frontend:**
- Framework: Next.js 14 with TypeScript
- Styling: Tailwind CSS
- State Management: React Server Components
- Icons: Lucide React
- Deployment: Vercel

**Infrastructure:**
- Frontend Hosting: Vercel
- Backend Hosting: Cloudflare Workers
- Development: Local Node.js servers
- CI/CD: GitHub Actions (optional)

**Key Libraries:**
- Hono.js, TypeScript, CORS (backend)
- Next.js, Tailwind CSS, Lucide React (frontend)
- Date-fns for date manipulation

### Current Features
- **Interactive Timeline**: Chronological view of historical events
- **Era-Based Organization**: 8 major historical periods
- **Civilization Profiles**: Detailed information about 6 major civilizations
- **Event Categorization**: Political, military, cultural, scientific, religious, economic
- **Search Functionality**: Advanced search across all historical content
- **Responsive Design**: Mobile-first approach
- **RESTful API**: Complete backend API for all data

### Historical Data Coverage
- **8 Historical Eras**: Ancient (-3000 to 500 AD) through Contemporary (1945 to 2024)
- **40+ Historical Events**: From pyramids to moon landing
- **6 Major Civilizations**: Egypt, Greece, Rome, China, Maya, Islamic Golden Age

## 🔴 Critical Safety Rules

### Repository Usage
- NEVER create issues/PRs on upstream repositories
- Always work on feature branches
- Follow the established branch naming convention

### Command Usage
- NEVER use `-f` or `--force` flags with any commands
- Always use safe, non-destructive command options
- If a command requires confirmation, handle it appropriately without forcing

### Git Operations
- Never use `git push --force` or `git push -f`
- Never use `git checkout -f`
- Never use `git clean -f`
- Always use safe git operations that preserve history

### ⚠️ NEVER MERGE PULL REQUESTS WITHOUT EXPLICIT USER PERMISSION
- Never use `gh pr merge` unless explicitly instructed by the user
- Always wait for user review and approval before any merge
- Provide PR links for user review only

### File Operations
- Never use `rm -rf` - use `rm -i` for interactive confirmation
- Always confirm before deleting files
- Use safe file operations that can be reversed

### Historical Data Safety
- NEVER modify historical dates or facts without verification
- Always cross-reference historical accuracy
- Preserve data consistency across eras, events, and civilizations
- Test API responses after data changes

## Development Environment

### Environment Variables

**Backend (.env)**
```env
# Development
ENVIRONMENT=development

# Production (Cloudflare Workers)
ENVIRONMENT=production
```

**Frontend (.env.local)**
```env
# Development
NEXT_PUBLIC_API_URL=http://localhost:3001

# Production
NEXT_PUBLIC_API_URL=https://your-api.workers.dev
```

## Development Workflows

### Testing Discipline

**Automated Tests**
```bash
# Frontend build test
cd frontend && npm run build

# Backend TypeScript compilation
cd backend && npm run build
```

**Manual Testing Checklist**
Before pushing any changes:
- [ ] Run the build command successfully
- [ ] Verify there are no new build warnings or type errors
- [ ] Test all affected pages and features
- [ ] Check the browser console for errors
- [ ] Test for mobile responsiveness
- [ ] Verify all interactive features work as expected
- [ ] Test API endpoints with Postman or curl
- [ ] Verify historical data accuracy

**Historical Data Validation**
- [ ] Cross-check dates and historical facts
- [ ] Ensure era consistency
- [ ] Verify civilization timelines
- [ ] Test search functionality with new data

### GitHub Workflow

**Creating Issues**
When starting a new feature or bug fix:

```bash
# 1. Update main branch
git checkout main && git pull

# 2. Create a detailed issue
gh issue create --title "feat: Descriptive title" --body "$(cat <<'EOF'
## Overview
Brief description of the feature/bug.

## Current State
What exists now.

## Proposed Solution
What should be implemented.

## Technical Details
- Components affected
- Implementation approach
- Historical data considerations

## Acceptance Criteria
- [ ] Specific testable criteria
- [ ] Performance requirements
- [ ] UI/UX requirements
- [ ] Historical accuracy requirements
EOF
)"
```

**Standard Development Flow**
```bash
# 1. Create a branch from the issue
git checkout -b feat/issue-number-description

# 2. Make changes
# ... implement feature ...

# 3. Test thoroughly
# Use 'ttt' short code for the full test suite

# 4. Commit with a descriptive message
git add -A
git commit -m "feat: Brief description

- What: Specific changes made
- Why: Motivation for the changes
- Impact: What this affects

Closes #issue-number"

# 5. Push and create a Pull Request
git push -u origin branch-name
gh pr create --title "Same as commit" --body "Fixes #issue_number"

# 6. ⚠️ CRITICAL: NEVER MERGE PRs YOURSELF
# DO NOT use: gh pr merge
# ONLY provide the PR link to the user
# WAIT for explicit user instruction to merge
```

## Context Management & Short Codes

### Core Short Codes

**ccc - Create Context & Compact**
Purpose: Save the current session state and context to forward to another task.
- Gather Information: `git status --porcelain`, `git log --oneline -5`
- Create GitHub Context Issue: Use a detailed template to capture the current state, changed files, key discoveries, and next steps
- Compact Conversation: `/compact`

**nnn - Next Task Planning (Analysis & Planning Only)**
Purpose: Create a comprehensive implementation plan based on gathered context. NO CODING - only research, analysis, and planning.
- Check for Recent Context: If none exists, run ccc first
- Gather All Context: Analyze the most recent context issue or the specified issue (`nnn #123`)
- Deep Analysis: Read context, analyze the codebase, research patterns, and identify all affected components
- Create Comprehensive Plan Issue: Use a detailed template to outline the problem, research, proposed solution, implementation steps, risks, and success criteria
- Provide Summary: Briefly summarize the analysis and the issue number created

**lll - List Project Status**
When you see `lll`, execute relevant `gh` and `git` commands in parallel to get a full overview of the project's state, then provide a visual summary of open issues, recent PRs, and current focus.

**rrr - Retrospective**
Purpose: Document the session's activities, learnings, and outcomes.
- ⚠️ **CRITICAL**: The AI Diary and Honest Feedback sections are MANDATORY
- Gather Session Data: `git diff --name-only main...HEAD`, `git log --oneline main...HEAD`, and session timestamps
- Create Retrospective Document: Use the template to create a markdown file in `retrospectives/` with ALL required sections
- Validate Completeness: Use the retrospective validation checklist to ensure no sections are skipped
- Update CLAUDE.md: Copy any new lessons learned to the main guidelines
- Link to GitHub: Commit the retrospective and comment on the relevant issue/PR

**gogogo - Execute Planned Implementation**
- Find Implementation Issue: Locate the most recent plan issue
- Execute Implementation: Follow the plan step-by-step, making all necessary code changes
- Test & Verify: Run all relevant tests and verify the implementation works
- Commit & Push: Commit with a descriptive message, push to the feature branch, and create/update the PR

## Technical Reference

### Available Tools

**Version Control**
```bash
# Git operations (safe only)
git status
git add -A
git commit -m "message"
git push origin branch

# GitHub CLI
gh issue create
gh pr create
```

**Search and Analysis**
```bash
# Ripgrep (preferred over grep)
rg "pattern" --type [file-extension]

# Find files
fd "[pattern]"
```

### Project Structure

```
chronos-web/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   ├── components/      # Reusable components
│   │   ├── lib/            # API client and utilities
│   │   └── types/          # TypeScript definitions
│   └── package.json
├── backend/                  # Hono.js API
│   ├── src/
│   │   ├── data/           # Historical data
│   │   ├── routes/         # API endpoints
│   │   ├── types/          # TypeScript definitions
│   │   └── index.ts        # Server entry point
│   └── package.json
├── DEPLOYMENT.md            # Deployment instructions
└── CLAUDE.md               # This file
```

### API Endpoints Reference

```typescript
// Eras
GET /api/eras              // List all historical eras
GET /api/eras/:id          // Get specific era with events

// Events
GET /api/events            // List events (supports filtering)
GET /api/events/:id        // Get specific event details

// Civilizations
GET /api/civilizations     // List all civilizations
GET /api/civilizations/:id // Get specific civilization

// Search
GET /api/search?q=query    // Search historical content
```

## Development Practices

### Code Standards

**TypeScript Configuration**
- Enable strict mode in `tsconfig.json`
- Use proper typing for all components and API responses
- Avoid `any` types - use proper interfaces
- Use type guards for API response validation

**React/Next.js Standards**
- Use Server Components where appropriate
- Implement proper loading states and error boundaries
- Use Tailwind CSS for consistent styling
- Follow accessibility best practices

**API Development**
- Use consistent response formats
- Implement proper error handling
- Add CORS headers for frontend integration
- Validate input parameters

### Git Commit Format

```
[type]: [brief description]

- What: [specific changes]
- Why: [motivation for the changes]
- Impact: [what this affects]

Closes #[issue-number]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Error Handling Patterns

**Frontend Error Handling**
```typescript
// Use try/catch for API calls
try {
  const data = await api.getEvents();
  setEvents(data);
} catch (error) {
  console.error('Failed to fetch events:', error);
  // Show user-friendly error message
}
```

**Backend Error Handling**
```typescript
// Validate input parameters
if (!id || typeof id !== 'string') {
  return c.json({ error: 'Invalid ID parameter' }, 400);
}

// Handle not found cases
const era = eras.find(e => e.id === id);
if (!era) {
  return c.json({ error: 'Era not found' }, 404);
}
```

## Lessons Learned

### Planning & Architecture Patterns
**Pattern:** Use parallel analysis for frontend and backend components
**Anti-Pattern:** Creating monolithic features without considering API impact
**Pattern:** Always validate historical data consistency across eras, events, and civilizations
**Pattern:** 1-hour implementation chunks are optimal for maintaining focus

### Common Mistakes to Avoid
- **Historical Data Inconsistency**: Always cross-reference dates when adding new events
- **API Frontend Mismatch**: Ensure TypeScript interfaces match between frontend and backend
- **Skipping Historical Accuracy**: Verify facts before adding historical content
- **Mobile Responsiveness**: Always test timeline and card layouts on mobile devices

### Useful Tricks Discovered
- **Parallel Development**: Work on frontend components while backend API is being developed
- **Type Safety First**: Use TypeScript interfaces to catch API mismatches early
- **Incremental Timeline**: Build timeline feature by era rather than all at once
- **Search Optimization**: Use relevance scoring for better search results

### Project-Specific Patterns
- **Timeline Components**: Use consistent color coding for eras throughout the application
- **Event Cards**: Follow the established layout pattern for displaying historical events
- **API Response Format**: Maintain consistent structure across all endpoints
- **Historical Data Structure**: Follow the established schema for new historical content

### User Preferences (Observed)
- Prefers **phased approaches** - appreciates splitting large features into manageable chunks
- Values **historical accuracy** - emphasizes importance of verified historical data
- Appreciates **visual progress** - likes seeing UI improvements quickly
- Values **educational content** - focuses on making history accessible and engaging

## Troubleshooting

### Common Issues

**Build Failures**
```bash
# Check for type errors or syntax issues
npm run build 2>&1 | grep -A 5 "error"

# Clear cache and reinstall dependencies
rm -rf node_modules .cache dist build
npm install
```

**Port Conflicts**
```bash
# Find the process using port 3001 (backend)
lsof -i :3001

# Kill the process
kill -9 [PID]

# Alternative: Use different port
PORT=3002 npm run dev
```

**API Connection Issues**
```bash
# Test API endpoints directly
curl http://localhost:3001/api/eras
curl http://localhost:3001/api/events?limit=5
```

**Historical Data Issues**
```bash
# Validate TypeScript compilation
cd backend && npm run build

# Check data file syntax
node -c src/data/eras.ts
node -c src/data/events.ts
node -c src/data/civilizations.ts
```

## Appendices

### A. Glossary

**Term**: Definition
- **Era**: A major historical period (e.g., Ancient, Medieval, Renaissance)
- **Event**: A specific historical occurrence with date and impact level
- **Civilization**: A major cultural society with achievements and timeline
- **Impact Level**: High/Medium/Low classification of historical significance
- **Timeline View**: Interactive chronological display of events

### B. Quick Command Reference

**Development Commands**
```bash
# Frontend development
cd frontend && npm run dev          # Start dev server (port 3000)
cd frontend && npm run build        # Build for production
cd frontend && npm run lint         # Run linting

# Backend development
cd backend && npm run dev           # Start API server (port 3001)
cd backend && npm run build         # Compile TypeScript
cd backend && npm run deploy        # Deploy to Cloudflare Workers

# Testing
curl http://localhost:3001/api/eras      # Test eras endpoint
curl http://localhost:3001/api/events    # Test events endpoint
```

**Git & GitHub Commands**
```bash
gh issue create                        # Create issue
gh pr create                           # Create PR
git checkout -b feat/branch-name       # Create feature branch
```

### C. Environment Checklist

**Development Setup**
- [ ] Node.js v18+ installed
- [ ] npm v9+ installed
- [ ] GitHub CLI configured
- [ ] Git configured with user info
- [ ] Environment variables set in `.env.local`
- [ ] Backend server starts on port 3001
- [ ] Frontend server starts on port 3000
- [ ] API endpoints respond correctly
- [ ] Historical data loads without errors

### D. Historical Data Guidelines

**Accuracy Standards**
- Always cross-reference historical dates and facts
- Use reputable historical sources
- Maintain consistency between related events
- Include approximate dates for ancient events (use "c." prefix)

**Content Guidelines**
- Write descriptions that are educational and engaging
- Keep event descriptions concise but informative
- Use neutral, historical language
- Include geographical context where relevant

**Data Structure Standards**
- Follow established TypeScript interfaces
- Maintain consistent date formatting
- Use lowercase IDs for all entities
- Include image URLs where appropriate

---

**Last Updated**: 2025-01-03
**Version**: 1.0.0
**Project**: ChronosWeb - World History Timeline Application