# Plan: Add Bilingual Support (Thai/English) to ChronosWeb

**Created**: 2025-10-03
**Issue Type**: Feature Enhancement
**Priority**: High
**Estimated Time**: 3-4 hours
**Target Languages**: Thai (TH) + English (EN)

## Overview

Add comprehensive bilingual support to ChronosWeb, allowing users to switch between Thai and English languages throughout the entire application. This includes UI text, historical data, navigation, and all user-facing content.

## Current State Analysis

### Current Architecture
- **Frontend**: Next.js 15 with TypeScript
- **Content**: All historical data currently in English
- **UI Components**: All hardcoded English text
- **Data Structure**: TypeScript interfaces for Era, Event, Civilization
- **Routing**: File-based routing with Next.js App Router

### What Needs Translation
1. **UI Elements**: Navigation, buttons, labels, messages
2. **Historical Content**: Era names, event titles, descriptions
3. **Categories**: Political, military, cultural, etc.
4. **Navigation**: Page titles, breadcrumbs, links
5. **Error Messages**: Loading states, error handling
6. **Search Functionality**: Search interface and results

## Technical Research & Planning

### Internationalization Options
1. **next-intl** (Recommended)
   - Next.js 15 compatible
   - TypeScript support
   - Static generation support
   - Built-in routing with locale prefixes

2. **react-i18next**
   - React ecosystem standard
   - Good documentation
   - More manual setup required

3. **Custom Solution**
   - Simple JSON-based translation files
   - More control but more work

### Recommended Approach: next-intl
- Best Next.js 15 integration
- Automatic locale routing
- TypeScript support
- Server-side rendering compatible

## Proposed Solution

### Phase 1: Setup Internationalization Infrastructure (1 hour)

#### 1.1 Install Dependencies
```bash
npm install next-intl
npm install @types/next-intl
```

#### 1.2 Create Translation File Structure
```
src/
├── messages/
│   ├── th/
│   │   ├── common.json      # UI elements, navigation
│   │   ├── eras.json        # Era names and descriptions
│   │   ├── events.json      # Event titles and descriptions
│   │   └── categories.json  # Category names
│   └── en/
│       ├── common.json
│       ├── eras.json
│       ├── events.json
│       └── categories.json
```

#### 1.3 Configure next-intl
- Update `next.config.ts` for locale routing
- Create `i18n.ts` configuration
- Set up middleware for locale detection

### Phase 2: Translate UI Components (1 hour)

#### 2.1 Common UI Elements
- Navigation menu items
- Button labels ("Explore Timeline", "View All Events")
- Form labels and placeholders
- Search interface text
- Loading and error messages

#### 2.2 Navigation and Routing
- Update page titles and metadata
- Add language switcher component
- Update breadcrumbs if any

#### 2.3 Categories Translation
Translate event categories:
- Political → การเมือง
- Military → ทหาร/สงคราม
- Cultural → วัฒนธรรม
- Scientific → วิทยาศาสตร์
- Religious → ศาสนา
- Economic → เศรษฐกิจ

### Phase 3: Translate Historical Content (1.5 hours)

#### 3.1 Era Names and Descriptions
Translate all 8 historical eras:
- Ancient Era → ยุคโบราณ
- Classical Era → ยุคคลาสสิก
- Medieval Era → ยุคกลาง
- Renaissance Era → ยุคฟื้นฟูศิลปวิทยา
- Early Modern Era → ยุคประวัติศาสตร์ตอนต้น
- Industrial Era → ยุคอุตสาหกรรม
- Modern Era → ยุคปัจจุบัน
- Contemporary Era → ยุคร่วมสมัย

#### 3.2 Event Titles and Descriptions
Translate 40+ historical events including:
- Ancient events (Pyramids, Greek Democracy)
- Medieval events (Crusades, Renaissance)
- Modern events (World Wars, Moon Landing)

#### 3.3 Civilization Information
Translate 6 major civilizations:
- Ancient Egypt → อียิปต์โบราณ
- Ancient Greece → กรีซโบราณ
- Roman Empire → จักรวรรดิโรมัน
- Ancient China → จีนโบราณ
- Maya Civilization → อารยธรรมมายา
- Islamic Golden Age → ยุคทองของอิสลาม

### Phase 4: Data Structure Updates (0.5 hour)

#### 4.1 Update TypeScript Interfaces
Add support for localized content:
```typescript
interface LocalizedContent {
  en: string;
  th: string;
}

interface Era {
  id: string;
  name: LocalizedContent;
  description: LocalizedContent;
  // ... other fields
}
```

#### 4.2 Update Data Service
Modify data service to handle localized content retrieval
Update search functionality to work with translations

### Phase 5: Language Switcher Component (0.5 hour)

#### 5.1 Create Language Switcher
- Dropdown or toggle button
- Flag icons (🇺🇸/🇹🇭 or EN/TH)
- Persist user preference in localStorage
- Update URL with locale prefix

#### 5.2 Layout Integration
- Add to navigation header
- Ensure mobile responsiveness
- Maintain current page when switching languages

## Implementation Steps

### Step 1: Setup Infrastructure
1. Install next-intl dependencies
2. Create translation file structure
3. Configure Next.js for internationalization
4. Set up middleware for locale detection

### Step 2: UI Translation
1. Create common translations file
2. Update all UI components to use `useTranslations()`
3. Replace hardcoded text with translation keys
4. Test UI translation switching

### Step 3: Content Translation
1. Translate all era names and descriptions
2. Translate all event titles and descriptions
3. Translate civilization information
4. Update data structure for bilingual support

### Step 4: Language Switcher
1. Create language switcher component
2. Add to navigation layout
3. Implement locale persistence
4. Test language switching functionality

### Step 5: Testing and Refinement
1. Test all pages in both languages
2. Verify search functionality works with translations
3. Check responsive design with Thai text
4. Test URL routing with locale prefixes

## Technical Considerations

### URL Structure
- English: `/`, `/eras`, `/events/rome-founding`
- Thai: `/th`, `/th/eras`, `/th/events/ก่อตั้งกรุงโรม`

### Font Considerations
- Thai text may need different font sizing
- Ensure Thai fonts render properly with Tailwind CSS
- Test line height and spacing for Thai characters

### SEO Implications
- Add `lang` attributes to HTML
- Implement hreflang tags for search engines
- Update meta descriptions for both languages

## Success Criteria

### Functional Requirements
- [ ] Language switcher works on all pages
- [ ] All UI text translates correctly
- [ ] All historical content available in both languages
- [ ] Search functionality works in both languages
- [ ] URL routing preserves locale
- [ ] User language preference persists

### Technical Requirements
- [ ] TypeScript compilation without errors
- [ ] Build process successful
- [ ] No performance degradation
- [ ] Mobile responsiveness maintained
- [ ] SEO best practices implemented

### User Experience Requirements
- [ ] Smooth language switching
- [ ] Intuitive language switcher placement
- [ ] Thai text displays properly
- [ ] No broken layouts with Thai content
- [ ] Consistent experience across languages

## Risk Assessment

### High Risk
- **Thai text layout issues**: Thai characters may affect UI layout
  - *Mitigation*: Test thoroughly, adjust CSS as needed
- **Translation quality**: Historical terms may be difficult to translate
  - *Mitigation*: Use established Thai historical terminology

### Medium Risk
- **Performance impact**: Additional translation files may affect bundle size
  - *Mitigation*: Use code splitting for locale-specific content
- **SEO complexity**: Managing SEO for two languages
  - *Mitigation*: Follow Google's international SEO guidelines

### Low Risk
- **Build complexity**: Additional configuration required
  - *Mitigation*: Follow next-intl documentation closely

## Testing Plan

### Manual Testing Checklist
1. **Language Switching**
   - [ ] Switcher appears on all pages
   - [ ] Language changes correctly
   - [ ] URL updates with locale prefix
   - [ ] Page content translates immediately

2. **Content Translation**
   - [ ] All era names in Thai
   - [ ] All event titles in Thai
   - [ ] All navigation elements in Thai
   - [ ] Search interface in Thai

3. **Technical Testing**
   - [ ] TypeScript compilation
   - [ ] Build process successful
   - [ ] No console errors
   - [ ] Mobile responsive in both languages

### Automated Testing
- Add unit tests for translation functions
- Add E2E tests for language switching
- Test build process with both locales

## Resources Needed

### Development Resources
- Thai language expertise for historical terminology
- Testing time for both languages
- Documentation for next-intl configuration

### External Resources
- Thai historical terminology references
- Font optimization for Thai text
- SEO guidelines for multilingual sites

## Future Enhancements

### Potential Additions
- Add more languages (Chinese, Japanese, etc.)
- Implement RTL language support
- Add content management for translations
- Implement automatic language detection

### Scaling Considerations
- Database storage for translations
- Translation management system
- Crowd-sourced translations
- Professional translation services

---
**Next Steps**: Ready to begin Phase 1 implementation upon approval.