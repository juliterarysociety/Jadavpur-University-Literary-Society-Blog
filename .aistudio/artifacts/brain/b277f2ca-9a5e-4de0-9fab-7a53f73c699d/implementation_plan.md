# Pillar 1 Implementation Plan: Visual Surface, Editorial Polish & Archival Tactility

## 1. Architectural Vision & Aesthetic Direction
Building on the institutional architecture (Pillar 2) and scholarly reading mechanics (Pillar 3), **Pillar 1** elevates the Jadavpur University Arts and Literary Society (*JUALS*) periodical to a museum-grade editorial surface inspired by *The Paris Review*, *Granta*, and *Cabinet Magazine*:

- **Dual Reading Atmosphere (Daylight Archival Paper & Evening Ink Mode)**:
  - **Daylight Archival Paper (Default)**: Warm archival rag paper (`#F7F5F0`), elevated folio surface (`#EFECE6`), deep carbon ink (`#141312`), warm graphite (`#52504C`), and Jadavpur oxblood (`#7A1C1C`), finished with a subtle tactile paper micro-grain overlay.
  - **Evening Ink Mode (Toggleable & Persisted)**: Deep nocturnal press room slate (`#121110`), elevated warm charcoal folio (`#1A1816`), warm parchment ink (`#EAE6DF`), muted stone secondary text (`#9E9A93`), and luminous vermilion-oxblood (`#C85A52`), driven by CSS custom properties (`--bg-paper`, `--bg-elevated`, `--text-ink`, `--text-muted`, `--accent-oxblood`, `--border-ink`) so every view adapts seamlessly without jarring contrast shifts.
- **Streamlined 5-Link Top Masthead & Colophon Strip**:
  - Top archival colophon strip displaying current issue volume (`VOL. XIV · NO. 1 — MONSOON–WINTER 2024`), campus dateline (`JADAVPUR UNIVERSITY · KOLKATA`), and the interactive **Daylight / Evening Ink** atmosphere switcher.
  - Uncrowded single-row primary navigation bar featuring the `JUALS` serif masthead, 5 primary links (`Issues`, `Poetry`, `Prose`, `Artwork`, `Chronicle`), live Search trigger, and `Index` drawer button (which exposes the full 8-route periodical directory, contributor roster, and masthead metadata).
- **Bespoke Jadavpur & Kolkata Editorial Cover Plates**:
  - Generate curated, high-resolution editorial plates using `generate_image` saved under `/public/images/editorial/` (e.g., Monsoon Courtyard at Aurobindo Bhavan, College Street Letterpress & Boi Para, Subarnarekha Riverbank, Nocturnal Tramlines on Rashbehari Avenue) and wire them into `issues.ts`, `articles.ts`, and `photography.ts`.
- **Museum Lightbox & Archival Plate Viewer**:
  - Clicking any visual plate on the **Artwork** folio (`/artwork`) or article `ImageEmbed` / `Gallery` opens a full-viewport museum inspection modal with high-contrast archival darkroom backing, 1x / 2x pan-and-zoom toggle, accession number, medium, camera/lens metadata, artist credit, and keyboard navigation (`Esc`, `←`, `→`).
- **Live-Filtering Archival Search & Index Folio**:
  - Upgrade `SearchOverlay.tsx` from a static form into an instant, real-time archival search folio that filters across **Articles** (title, excerpt, tags, author, bilingual text), **Seasonal Issues**, **Contributors**, and **Campus Chronicle** events, complete with instant genre facets (`All`, `Poetry`, `Prose`, `Reviews`, `Contributors`, `Chronicle`) and keyboard shortcut support (`/` or `Cmd/Ctrl + K`).

---

## 2. Planned File Changes

### A. Theme Tokens, Paper Tactility & CSS Variables
- **`/src/index.css`**:
  - Replace static color variables with dynamic CSS custom properties on `:root` and `html[data-theme="evening"]` mapped into `@theme` tokens (`--color-paper`, `--color-paper-elevated`, `--color-ink`, `--color-ink-muted`, `--color-accent`, `--color-rule`, `--color-rule-strong`).
  - Add a subtle, non-intrusive SVG noise texture class (`.paper-grain`) and refine editorial hairline transitions so switching between Daylight Paper and Evening Ink feels instantaneous and natural.
- **`/src/context/ThemeContext.tsx`** *(New)*:
  - Lightweight React context providing `theme: 'daylight' | 'evening'`, `toggleTheme()`, and `localStorage` persistence.

### B. Bespoke Editorial Plates & Decoupled Data Layer
- **`/public/images/editorial/*`** *(New Generated Assets)*:
  - Generate bespoke editorial plates evoking Jadavpur University and Kolkata's literary culture and wire their paths into `/src/data/issues.ts`, `/src/data/articles.ts`, and `/src/data/photography.ts`.
- **`/src/data/siteConfig.ts`** & **`/src/types.ts`**:
  - Add `colophonDateline`, `primaryNavLinks` (the 5 streamlined top-bar links) alongside `navLinks` (full index drawer directory), and theme toggle labels so zero UI copy is hardcoded.

### C. Masthead, Colophon Strip & Full Index Drawer
- **`/src/components/Header.tsx`**:
  - Render the top colophon hairline bar (`JADAVPUR UNIVERSITY · KOLKATA`, active Issue badge link, and the `Daylight / Evening` atmosphere toggle).
  - Render the streamlined 5-link desktop bar (`Issues`, `Poetry`, `Prose`, `Artwork`, `Chronicle`) with active underline indicator, Search button (`⌘K`), and `Index` drawer trigger.
- **`/src/components/MenuOverlay.tsx`**:
  - Upgrade into a full-width archival **Periodical Index Drawer** organized into three columns: *Primary Folios*, *Society & Apparatus* (`Contributors`, `Reviews`, `Chronicle`, `About & Masthead`), and *Current Issue Colophon*.

### D. Museum Lightbox Viewer & Artwork / Article Plate Inspection
- **`/src/components/PlateLightbox.tsx`** *(New)*:
  - Full-viewport museum inspection modal displaying the plate, accession ID, title, artist/photographer, location, year, technical specs, curatorial note, zoom toggle (`1x Fit` / `1.75x Detail`), and Previous/Next plate stepping.
- **`/src/pages/Artwork.tsx`**, **`/src/components/ImageEmbed.tsx`**, & **`/src/components/Gallery.tsx`**:
  - Connect every photographic plate and article visual embed to `PlateLightbox` with a subtle `Inspect Plate` hover caption.

### E. Live-Filtering Archival Search Folio
- **`/src/components/SearchOverlay.tsx`**:
  - Transform into an interactive live-filtering search index across `articles`, `authors`, `issues`, and `chronicleEvents`.
  - Include category filter tabs (`All`, `Poetry`, `Prose`, `Reviews`, `Contributors`, `Chronicle`), instant result counts (`tabular-nums`), and quick-select curated archival queries when the input is empty.

---

## 3. Verification & Quality Gates
1. Update `/JOURNEY.md` with Stage 13 documenting Pillar 1 architectural enhancements.
2. Run `compile_applet` and `lint_applet` to ensure zero TypeScript or build errors.
