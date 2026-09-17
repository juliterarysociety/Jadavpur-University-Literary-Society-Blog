# Agent Initiation & Development Guidelines

Welcome to the **Personal Blog** project. This file provides all context and operational rules for any AI agent working on this codebase.

---

## 1. Architectural Philosophy

This project is a minimalist, typography-driven personal blog and photography portfolio built with:
- **Framework**: React 19 + Vite 6 + React Router 7
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` + `@tailwindcss/typography`)
- **Animation**: `motion` (`motion/react`)
- **Icons**: `lucide-react`
- **Language**: TypeScript (strict, bundled ESM)

### Golden Rule: Decoupled Content Architecture
**Never hardcode copy, article text, author bios, or photo arrays directly inside page or component JSX.**
All user-facing content must be defined in the typed data layer (`/src/data/`) and imported into components. This ensures users can replace placeholders with their real content in minutes without touching layout code.

---

## 2. Content Data Architecture

All content schemas are strictly defined in `/src/types.ts`:

- **`src/data/siteConfig.ts`**:
  - Contains `siteConfig: SiteConfig`
  - Controls the blog name (`brandMark`), hero banner text, main navigation links, social handles, about page narrative, and footer copyright/credits.
- **`src/data/authors.ts`**:
  - Contains `primaryAuthor: Author` and `authors: Record<string, Author>`
  - Author name, avatar URL, biography, email, and social handles.
- **`src/data/articles.ts`**:
  - Contains `articles: Article[]`
  - Each article includes metadata (`id`, `slug`, `title`, `excerpt`, `coverImage`, `date`, `readTime`, `tags`, `author`) and an array of `contentBlocks: ContentBlock[]`.
- **`src/data/photography.ts`**:
  - Contains `photoGallery: PhotoItem[]`
  - Photography portfolio items with width, height, aspect ratio, captions, and locations.

---

## 3. Dynamic Post Rendering Model

Article pages (`/src/pages/Post.tsx`) dynamically render content blocks via a discriminated union:
1. `paragraph`: Standard prose paragraph.
2. `heading`: Section headings (`h2` / `h3`).
3. `quote`: Rendered using `QuoteEmbed` with author attribution.
4. `image`: Standalone photographic embed with `ImageEmbed` (wide or standard sizing and caption).
5. `gallery`: Multi-image grid with `Gallery` component.
6. `callout`: Highlight box with accent border.

When adding new articles, construct `contentBlocks` arrays to format the post.

---

## 4. Design System & Typography

- **Display Serif**: `Playfair Display` (used for all headings `h1`-`h6`, quotes, brand marks).
- **Body Sans**: `DM Sans` (used for readable body prose, metadata, labels).
- **Color Palette**:
  - Canvas / Paper: `#F9F8F6`
  - Deep Ink: `#1A1A1A`
  - Muted Ink: `#4A4A4A`
  - Editorial Accent: `#D96C4A` (warm terracotta/burnt sienna)
- **Visual Restraint**:
  - No synthetic glowing drop-shadows or purple gradients.
  - Generous negative space and calm editorial pacing.
  - High contrast readability meeting WCAG AA standards.

---

## 5. Instructions for Agents

1. **Keep `JOURNEY.md` updated**: Whenever you implement a new feature, refactor components, or adjust templates, record an entry in `/JOURNEY.md`.
2. **Preserve Type Safety**: Run `compile_applet` before finishing tasks to ensure zero TypeScript or build issues.
3. **Respect User Intent**: Execute the requested scope cleanly without adding unrequested features or invasive dependencies.
