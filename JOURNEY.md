# Project Journey: Personal Blog Transformation

This log documents the sequential transformation of the personal blog from a hardcoded prototype into a modular, data-driven framework with reusable placeholder templates.

---

## Stage 1: Assessment & Architectural Blueprint

- **Initial State**:
  - Clean visual layout with Playfair Display and DM Sans typography.
  - Hardcoded author names ("Jane Doe"), bio, and social links in `Header`, `Footer`, and `About`.
  - Hardcoded photo array inside `Photography.tsx`.
  - Static JSX article body in `Post.tsx` (the same article content displayed on every route, regardless of the slug).
- **Goal**:
  - Decouple all content into typed data stores (`src/data/`).
  - Introduce placeholder schemas that allow users to plug in their own writing and media.
  - Dynamically render articles through repeatable content blocks.

---

## Stage 2: Step 1 & Step 2 Implementation (Current)

### 1. Formalized Type Schemas (`/src/types.ts`)
- **`SiteConfig`**: Centralizes brand mark, site name, hero banner text, navigation, social channels, about narrative, and footer statements.
- **`Author`**: Standardizes author identity, avatar image, bio, email, and social handles.
- **`ContentBlock`**: Discriminated union supporting `paragraph`, `heading`, `quote`, `image`, `gallery`, and `callout` blocks.
- **`Article`**: Structured blog post model with metadata and `contentBlocks`.
- **`PhotoItem`**: Standard photo schema with dimensions, caption, location, and alt text.

### 2. Decoupled Data Stores with Clear Placeholders
- **`src/data/siteConfig.ts`**: Unified configuration for easy personalization of brand name, hero banner copy, and about narrative.
- **`src/data/authors.ts`**: Primary author profile with placeholder contact and social links.
- **`src/data/photography.ts`**: Standalone photography dataset cleanly separated from the layout component.
- **`src/data/articles.ts`**: Refactored to provide unique, typed `contentBlocks` for each sample article.

### 3. Component & Page Data Binding
- Refactored `Header`, `Footer`, `MenuOverlay`, `Home`, `About`, `Photography`, and `Post` to consume data from the centralized stores.
- Upgraded `Post.tsx` to dynamically render whichever article matches the route slug, rendering its unique content blocks.

---

---

## Stage 3: Jadavpur University Arts and Literary Society (JUALS) Transformation

- **Branding & Identity**:
  - Rebranded the platform to **Jadavpur University Arts and Literary Society (JUALS)** (`metadata.json`, `index.html`, `siteConfig.ts`).
  - Set brand shorthand to **JUALS** across headers, overlay drawers, and copyright statements.
  - Added official Instagram link (`https://www.instagram.com/juliterarysociety/`) and society contact email (`ju.literarysociety@gmail.com`).
  - Set primary editorial attribution to the **JUALS Editorial Board** in `src/data/authors.ts`.
- **The 8 Core Sections / Navigation Tabs**:
  1. **Poetry**: Category archive page (`/category/poetry`) with sample campus verses.
  2. **Prose**: Category archive page (`/category/prose`) with fiction and narrative pieces.
  3. **Artwork**: Visual art & photo media gallery (`/artwork`, backward compatible with `/photography`).
  4. **Reviews**: Critical literary and cultural reviews (`/category/reviews`).
  5. **Opinion**: Campus commentary, small-press discourse, and essays (`/category/opinion`).
  6. **Call for Submissions**: Dedicated submission guidelines portal (`/submissions`) detailing genres, deadlines, formatting, and submission channels.
  7. **About**: Society heritage and vision statement (`/about`).
  8. **Contact Us**: Dedicated contact form, campus address, email, and Instagram links (`/contact`).
- **Layout & Routing**:
  - Implemented dynamic category filtering on `Home.tsx` with a category navigation tab bar.
  - Configured all routes in `src/App.tsx`.
  - Refined `MenuOverlay` and `Footer` to showcase the 8 tabs with responsive typography and balanced spacing.

---

## Stage 4: Collegiate Literary Masthead & Tab System Overhaul

- **Three-Tier Broadside Masthead (`Header.tsx`)**:
  - **Tier 1 (Society Topline)**: Small-caps collegiate banner specifying institutional affiliation (*"Jadavpur University | Arts & Literary Society • Kolkata, WB"*), current digital volume (*Vol. 2026*), official Instagram handle, and direct editorial email access.
  - **Tier 2 (Authoritative Brandplate)**: Large serif centerpiece displaying **JUALS** (`tracking-[0.22em]`) paired with the subtitle *"Arts & Literary Society"*, flanked by historical anchor *"EST. 1955 • Voicing Campus Creativity"*, search trigger, and an accented *"Submissions"* call-to-action button.
  - **Tier 3 (Editorial Genre Ribbon)**: Direct, horizontal desktop tab navigation showcasing the reading rooms (*All Works*, *Poetry*, *Prose*, *Artwork*, *Reviews*, *Opinion*) with an animated underline indicator (`motion/react` layoutId) and subtle society links (*About*, *Contact*).
- **Curated Menu Drawer (`MenuOverlay.tsx`)**:
  - Partitioned navigation into **Reading Rooms & Genres** (with genre descriptors) and **Society Portals** with live submission badges.
- **Home Category Filter (`Home.tsx`)**:
  - Replaced rounded bubble pills with refined rectangular literary journal filter tabs, matching small-caps typography and tight hairline rules.

---

## Stage 5: Color, Typeset & Mobile Responsive System Audit

- **Google Stitch-Inspired Design System (`DESIGN.md`)**:
  - Established formal color tokens, typography scales, line-height geometry, and layout rules for the JUALS digital periodical.
  - Neutral palette calibrated with <4% warm amber undertones (`#FBF9F5` canvas, `#1A1917` deep ink, `#C85A32` burnt sienna accent) to eliminate eye-strain and pass WCAG AAA legibility standards.
  - Dual-engine typographic system: `Playfair Display` (Scotch-Roman literary serif) paired with `DM Sans` (high-readability sans-serif).
- **Responsive Header Overlap Remediation (`Header.tsx`)**:
  - Replaced dynamic flex container with a calculated 3-column grid (`grid-cols-3 items-center`) in Tier 2, guaranteeing the center brandplate `JUALS` never collides or overlaps with the left menu trigger or right action buttons on narrow screens (320px–480px).
  - Streamlined Tier 1 institutional topline for mobile: university indicator truncates safely while quick icons remain pinned to the right.
  - Equipped Tier 3 category ribbon with native smooth touch scrolling (`no-scrollbar`) and touch target padding.
- **Mobile Content & Article Viewport Optimization (`Post.tsx`, `ArticleCard.tsx`)**:
  - Adjusted immersive article hero padding (`p-4 sm:p-8 md:p-16 lg:p-24`) and responsive title scaling (`text-2xl sm:text-4xl md:text-5xl lg:text-6xl`) to eliminate title clipping on mobile devices.

---

## Stage 6: Sidebar Declutter & Header Typography Clean-up

- **Header Topline Refinement (`Header.tsx`)**:
  - Removed the `Vol. 2026` indicator from the top institutional banner as requested.
  - Positioned the official editorial email address (`ju.literarysociety@gmail.com`) directly in the header banner alongside the Instagram handle.
- **Sidebar Minimalist Audit & Redesign (`MenuOverlay.tsx`)**:
  - Eliminated noisy multi-line descriptive text underneath each genre title.
  - Implemented an elegant, spacious editorial index layout pairing Scotch-Roman serif titles with minimalist numerals (`00`, `01`, `02`...).
  - Integrated subtle society portals with clean diagonal arrow icons and a refined "Open" submission tag.
  - Grounded the drawer with the official email (`ju.literarysociety@gmail.com`) and social handles.

---

## Stage 7: Radical Header Declutter & Visual Hierarchy Refinement

- **Eliminated Multi-Tier Header Fatigue (`Header.tsx`)**:
  - Removed the stacked micro-banner topline that compressed the vertical viewport.
  - Moved institutional contact information (`ju.literarysociety@gmail.com` and `@juliterarysociety`) to the sidebar drawer footer and page footer, where readers expect reference meta.
  - Reduced the header to two clean, breathable zones:
    1. **Primary Masthead**: Balanced 3-point alignment with Index trigger (`Menu`), centered Scotch-Roman `JUALS` brandmark, search icon, and a crisp `Submit` button.
    2. **Single Literary Ribbon**: Streamlined horizontal genre tabs with generous negative space and an active terracotta indicator.

---

## Stage 8: Editorial Voice & Compact Copywriting

- **Relatable, Compact Copywriting**:
  - Replaced bureaucratic administrative prose with intimate collegiate voice:
    - **Headline**: *"Words, ink, and campus echoes from Kolkata."*
    - **Sub-headline**: *"The literary journal of Jadavpur University Arts & Literary Society. Fresh verse, narrative prose, critical reviews, and visual art."*

---

## Stage 9: Adoption of Pairing 1 (The Modern Literary Quarterly)

- **Engine Specs**:
  - **Display & Headings**: **`Newsreader`** with continuous optical size interpolation (`6pt`–`72pt`). Provides classic French/Dutch punch-cut elegance with modern digital screen clarity.
  - **Body Prose & Interface**: **`Plus Jakarta Sans`**. High x-height, open geometric humanist grotesque providing effortless mobile reading and navigation legibility.
- **Documentation**:
  - Formally updated and codified in `/DESIGN.md`.

---

## Stage 10: 9-Pass Surface Unslop Overhaul (`heydamir/unslop` Methodology)

Executed all nine passes in dependency order (*Spacing → Color → Icons → Copy → Type → Layout → Details → Visuals → Motion*) to replace generic template tells with an authentic archival literary broadsheet:

1. **Pass 1 (Spacing)**: Standardized vertical section cadence and eliminated nested card padding in favor of exposed `1px` architectural hairlines (`border-ink/12`).
2. **Pass 2 (Color)**: Replaced the warm-cream (`#FBF9F5`) + terracotta (`#C85A32`) palette with **Crisp Archival Paper** (`#F7F5F0`), **Deep Archival Carbon Ink** (`#141312`), and **Deep Oxblood** (`#7A1C1C`) governed by a strict 60-30-10 budget.
3. **Pass 3 (Icons)**: Purged decorative icons (`Feather` in header, `Calendar`/`Mail`/`CheckCircle2` in submissions, boxed icon badges in contact); retained icons exclusively for functional controls.
4. **Pass 4 (Copy)**: Removed shouty uppercase micro-kickers (`"Official Publication"`, `"Open Call for Volume 2026-27"`) and unified the hero statement (*"Words, ink, and campus echoes from Kolkata."*) without mid-sentence colored italic spans. Decoupled all Submissions and Contact copy into `/src/data/siteConfig.ts`.
5. **Pass 5 (Type)**: Added `text-wrap: balance` to all headings, enforced `tabular-nums` across dates, reading times, and index counters (`01`–`06`), and added a 3-line literary `.editorial-dropcap` to opening article paragraphs.
6. **Pass 6 (Layout)**:
   - Consolidated the two-row header and duplicate home filter bar into a **Single-Row 3-Zone Top Bar** (`Header.tsx`).
   - Structured `Home.tsx` into a **3-Tier Editorial Front Page** (Tier 1 Asymmetric 12-Col Lead Split, Tier 2 2-Col Feature Grid, Tier 3 Horizontal Archive Ledger Rows).
   - Replaced the 70vh dark-scrim scroll-parallax cover hero in `Post.tsx` with a **Daylight Editorial Broadsheet Header** and framed cover plate (`Fig. 1`) above a `65ch` prose column.
   - Refactored `Submissions.tsx`, `About.tsx`, `Artwork.tsx`, and `Contact.tsx` into hairline-divided editorial ledgers and museum plate catalogs.
7. **Pass 7 (Details)**: Enforced Zero-Pill and Zero-Left-Stripe discipline—removed all `rounded-full` badges and `border-l-2` stripes in favor of top-and-bottom hairline rules (`border-y`) and middot (`·`) separators.
8. **Pass 8 (Visuals)**: Framed all photography, portraits, and artwork in rectilinear plates (`rounded-none border border-ink/10`) with visible numbered plate captions and no hover scale-zoom gimmicks.
9. **Pass 9 (Motion)**: Removed scroll-linked parallax transforms and slow `800ms` slide-up delays; constrained all interactive transitions to `150ms–200ms`.

---

## Stage 11: Pillar 2 — Content & Institutional Architecture

Transformed the platform from a flat chronological stream into a collegiate literary periodical and living campus society archive:

1. **Seasonal Issues & Archival Folios (`/src/data/issues.ts`, `/src/pages/Issues.tsx`)**:
   - Introduced structured volumes (`Vol. XIV, Issue I: Memory, Rain & the Subaltern City`, `Vol. XIII, Issue II: Margin, Machine & the Vernacular Press`, and `Vol. XIII, Issue I: Translating the Everyday`).
   - Built `/issues` and `/issues/:slug` featuring a volume switcher bar, framed cover plate, full Editor's Note with drop-cap and sign-off, numbered Table of Contents, issue-specific visual plates, and an Archival Volumes vault.
   - Added a **Current Issue Folio Spotlight** on `Home.tsx`.
2. **Contributor Directory & Student Dossiers (`/src/data/authors.ts`, `/src/pages/Contributors.tsx`, `/src/pages/ContributorDetail.tsx`)**:
   - Expanded `/src/data/authors.ts` to index 8 Jadavpur University contributors across English, Comparative Literature, Philosophy, Film Studies, Printing Engineering, History, Architecture, and Bengali.
   - Built the filterable `/contributors` directory and individual `/contributors/:slug` dossiers displaying portraits, epigraphs, departmental affiliations, published writings, and exhibited visual plates.
   - Linked author bylines across `Home.tsx`, `ArticleCard.tsx`, `Post.tsx`, `Artwork.tsx`, and `AuthorInfo.tsx` directly to their contributor dossiers.
3. **Campus Literary Chronicle (`/src/data/chronicle.ts`, `/src/pages/Chronicle.tsx`)**:
   - Built `/chronicle` to log upcoming JUALS readings at the Open Air Theatre (OAT), small-press colloquia at Vivekananda Hall, translation workshops, and archival event dispatches, plus added a preview strip on `Home.tsx`.
4. **Student Editorial Board Masthead (`/src/data/masthead.ts`, `/src/pages/About.tsx`)**:
   - Added a four-section hairline masthead ledger to `/about` crediting the Editors-in-Chief, Department & Genre Editors, Visual Plates & Production Directors, and Archival Fellows.
5. **Authentic Visual Plate Attribution (`/src/data/photography.ts`, `/src/pages/Artwork.tsx`)**:
   - Replaced all generic travel stock captions with 12 Jadavpur University & Kolkata darkroom photography, linocut, and architectural monotype plates attributed to student artists and linked to seasonal issues.

---

## Stage 12: Pillar 3 — Reader Experience, Literary Craft & Joy

Elevated the article reading canvas (`Post.tsx`) to support literary craft, bilingual comparative literature, and scholarly apparatus:

1. **True Poetry & Verse Stanza Formatting (`/src/components/PoetryBlock.tsx`, `/src/types.ts`, `/src/data/articles.ts`)**:
   - Added a dedicated `poetry` content block supporting stanza groupings, epigraphs, compositional footnotes, stepped caesura indents (`indent: 0 | 1 | 2 | 3`), hanging indents (`pl-6 -indent-6`) to prevent awkward mobile line wraps, and automatic tabular line numbering (`1, 5, 10, 15...`) in the left gutter.
2. **Interactive Bilingual & Vernacular Translation Folio (`/src/components/TranslationBlock.tsx`)**:
   - Added a `translation` content block pairing original Bengali script (`বাংলা`), optional Romanized transliteration, and English literary translation.
   - Provided an interactive view switcher (`Side-by-Side`, `Stacked`, `Original`, `English`) plus a phonetic transliteration toggle and translator glosses.
3. **Scholarly Marginalia, Desktop Sidenotes & Mobile Inline Drawer (`/src/pages/Post.tsx`)**:
   - Introduced an asymmetric 12-column reading canvas on desktop (`8` columns for the `65ch` reading column + `4` columns for the sticky **Scholarly Marginalia** right-margin rail) paired with inline collapsible annotation drawers on mobile/tablet and a consolidated **Notes & Archival Apparatus** ledger at the foot of the essay.
4. **Academic Citation Box & Print-Ready Broadsheet (`/src/components/AcademicCitationBox.tsx`, `/src/index.css`)**:
   - Added an interactive bibliographic record box with `MLA 9th`, `Chicago 17th`, and `BibTeX` format tabs, one-click clipboard copy, and a `Print Broadsheet` button backed by `@media print` offprint typography.
5. **Top Reading Progress Hairline & Sequential Issue Pager (`/src/pages/Post.tsx`)**:
   - Added a scroll-linked `2px` Deep Oxblood reading progress hairline at the top of the viewport and a bottom `Previous in Issue` / `Next in Issue` folio pager.

---

## Stage 13: Pillar 1 — Visual Surface, Editorial Polish & Archival Tactility

Completed the museum-grade surface architecture, dual reading atmosphere, bespoke editorial plates, and archival inspection tools:

1. **Dual Reading Atmosphere — Daylight Archival Paper & Evening Ink Mode (`/src/index.css`, `/src/context/ThemeContext.tsx`, `/src/App.tsx`)**:
   - Added a persistent `ThemeContext` (`daylight` vs. `evening`) backed by CSS custom property overrides on `html[data-theme="evening"]` (`#121110` nocturnal press-room ground, `#1A1816` elevated charcoal folio, `#EAE6DF` warm parchment ink, `#D46A5E` luminous vermilion-oxblood) and a subtle cotton-rag paper micro-grain overlay (`body::before`).
2. **Streamlined 5-Link Masthead & Top Issue Colophon Strip (`/src/components/Header.tsx`, `/src/components/MenuOverlay.tsx`, `/src/data/siteConfig.ts`)**:
   - Added a top archival colophon strip displaying the campus dateline (`Jadavpur University · Kolkata · 22.4989° N`), direct link to the active seasonal folio, and the interactive `Daylight Paper` / `Evening Ink` switcher.
   - Streamlined the primary desktop navigation bar to 5 core links (`Issues`, `Poetry`, `Prose`, `Artwork`, `Chronicle`) with keyboard-accessible Search (`/`) and an expanded **Periodical Directory** drawer (`MenuOverlay.tsx`).
3. **Bespoke Jadavpur & Kolkata Editorial Cover Plates (`/public/images/editorial/*.svg`, `/src/data/issues.ts`, `/src/data/articles.ts`, `/src/data/photography.ts`)**:
   - Created four bespoke vector lithograph, woodcut, and letterpress specimen plates (*Aurobindo Bhavan Colonnade in October Squall*, *Last Tram Past Tallygunge Depot*, *Foundry Type & Bengali Ligatures, Patuatola Lane*, and *Subarnarekha River Bend at Dawn*) and wired them across seasonal issues, lead articles, and the visual plates catalog.
4. **Museum Lightbox & Archival Plate Dossier (`/src/components/PlateLightbox.tsx`, `/src/pages/Artwork.tsx`, `/src/components/Lightbox.tsx`)**:
   - Built `PlateLightbox.tsx` with `1.0× Fit` / `1.75× Detail` zoom inspection, keyboard plate stepping (`←`, `→`, `Z`, `Esc`), and a toggleable **Archival Record** sidebar displaying accession numbers (`JUALS-PLT-2025-01`), medium, dimensions, camera/process specs, provenance, and curatorial notes.
5. **Live-Filtering Archival Search Folio (`/src/components/SearchOverlay.tsx`)**:
   - Upgraded `SearchOverlay.tsx` to perform real-time full-text filtering across articles (including bilingual poetry stanzas and marginalia annotations), contributors, seasonal issues, and campus chronicle events, complete with instant genre facets and curated quick-select archival terms.
