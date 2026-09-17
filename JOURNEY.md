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



