# UI Unslop Implementation Plan — JUALS Periodical Interface

This plan executes a strict **UI-only unslop pass** across the Jadavpur University Arts and Literary Society (**JUALS**) digital periodical, restoring full alignment with the repository's `DESIGN.md` specification and the 9-pass editorial review rules (*Spacing → Color → Icons → Copy → Type → Layout → Details → Visuals → Motion*).

---

## 1. Masthead & Top Bar Contract (`Header.tsx`, `Footer.tsx`, `MenuOverlay.tsx`)
- **Single-Row 3-Zone Header (`Header.tsx`)**:
  - Remove the second top colophon strip above the main navigation bar so `<header>` is strictly a single-row, 3-zone bar (`h-16`) with a bottom hairline rule (`border-b border-ink/12`).
  - **Zone 1 (Left)**: `JUALS` serif wordmark with the subtle vertical hairline institutional label on wide viewports.
  - **Zone 2 (Center)**: Single-line primary periodical links (`Issues`, `Poetry`, `Prose`, `Artwork`, `Chronicle`) with a `1.5px` deep oxblood active underline.
  - **Zone 3 (Right)**: Unboxed typographic `Search` trigger (`/`), subtle Daylight/Evening reading atmosphere toggle, and `Index` drawer trigger—removing the boxed button chrome and `<kbd>` badge clutter.
- **Footer & Index Drawer Clean-Up (`Footer.tsx`, `MenuOverlay.tsx`)**:
  - Remove the boxed container (`border border-ink/12 bg-paper-muted/50`) around the reading atmosphere switch inside `MenuOverlay.tsx`, replacing it with a clean hairline ledger row.
  - Surface the current issue colophon and reading atmosphere toggle cleanly in `Footer.tsx` as part of the bottom institutional colophon.

---

## 2. Front Page & Archive De-Boxing (`Home.tsx`, `Issues.tsx`)
- **Flatten Current Issue Spotlight (`Home.tsx`)**:
  - Remove the shaded background wash (`bg-paper-muted/30`) from the Current Issue Spotlight section so it sits directly on crisp archival paper (`#F7F5F0`), separated purely by `1px` structural hairline rules.
  - Streamline the section header and table of contents rows to reduce redundant all-caps micro-kickers.
- **De-Box Campus Chronicle Preview (`Home.tsx`)**:
  - Replace the 3 bordered event cards (`border border-ink/12 p-6`) at the bottom of `Home.tsx` with an open, 3-column architectural grid divided by vertical and horizontal hairlines (`divide-y md:divide-y-0 md:divide-x divide-ink/12 border-y border-ink/12`), eliminating card-in-section boxing.
- **Unbox Past Issues Vault & Switcher (`Issues.tsx`)**:
  - Remove the shaded top ribbon wash (`bg-paper-muted/40`) in `Issues.tsx` in favor of a clean hairline bar on open paper.
  - Replace the bordered volume cards (`border p-6`) in the "Archival Volumes & Folios" vault with an unboxed, hairline-divided 3-column architectural ledger (`divide-y md:divide-y-0 md:divide-x divide-ink/12 border-y border-ink/12`).
  - Upgrade the issue plate inspection modal in `Issues.tsx` to use `PlateLightbox` for consistent curatorial presentation.

---

## 3. Directory, Chronicle & Exhibition Unslop (`Contributors.tsx`, `ContributorDetail.tsx`, `Chronicle.tsx`, `Artwork.tsx`)
- **Strip Bordered Filter Button Clutter (`Contributors.tsx`, `Chronicle.tsx`)**:
  - Replace the boxed rectangular filter buttons (`px-3 py-1.5 border border-ink/15` / `bg-accent text-paper`) on `Contributors.tsx` and `Chronicle.tsx` with clean typographic underline tabs (`border-b-2 border-accent text-accent` vs `text-ink-muted hover:text-ink`), matching the quiet editorial discipline of a literary index.
- **De-Box Dispatch Notes & Breadcrumb Bars (`Chronicle.tsx`, `ContributorDetail.tsx`)**:
  - Remove the shaded box (`bg-paper-muted/50 py-3 px-4`) around `dispatchNotes` in `Chronicle.tsx`, rendering it as a clean italic editorial note separated by a top hairline.
  - Remove the shaded background wash (`bg-paper-muted/40`) on the breadcrumb bar in `ContributorDetail.tsx`.
- **Remove Hover Badge Chrome on Plates (`Artwork.tsx`)**:
  - Remove the floating boxed `Inspect Plate` badge + `ZoomIn` icon overlay (`bg-paper/95 border border-ink/15`) from artwork plates so the visual art remains unobstructed; rely on subtle image opacity transition and caption typography.

---

## 4. Long-Form Reading Canvas & Apparatus Unslop (`Post.tsx`, `PoetryBlock.tsx`, `TranslationBlock.tsx`, `AcademicCitationBox.tsx`)
- **Open-Paper Verse & Bilingual Folios (`PoetryBlock.tsx`, `TranslationBlock.tsx`)**:
  - Remove the heavy shaded container fills (`bg-paper-muted/35 px-5 sm:px-10` in `PoetryBlock.tsx` and `bg-paper-muted/40 px-5 sm:px-8` in `TranslationBlock.tsx`) so poems and bilingual translations breathe directly on the `#F7F5F0` archival page between crisp top-and-bottom hairlines (`border-y border-ink/15 py-8`).
  - Replace the boxed segmented button group (`border border-ink/15 bg-paper p-0.5`) in `TranslationBlock.tsx` with clean typographic mode links separated by middots (`Side-by-Side · Stacked · Original · English`) and an underlined active state.
- **Unbox Scholarly Offprint & Citation Apparatus (`AcademicCitationBox.tsx`, `Post.tsx`)**:
  - Remove the shaded box (`bg-paper-muted/45 px-5 sm:px-7`) and boxed button cluster (`Copy` / `Printer` icons + bordered buttons) in `AcademicCitationBox.tsx`.
  - Render the bibliographic record as a quiet, unboxed colophon section at the foot of the essay (`border-y border-ink/15 py-6`), with typographic format switches (`MLA 9th · Chicago 17th · BibTeX`) and clean text actions (`Copy Citation` · `Print Offprint`) without decorative icon clutter.
  - Simplify the byline `Offprint` trigger in `Post.tsx` to a clean typographic link (`Print Offprint`) without a boxed button border or printer icon.
  - Reduce repetitive all-caps micro-kickers across the marginalia rail and apparatus notes so the prose and verse remain the undisputed visual focal point.

---

## 5. Verification & Documentation
- Update `/JOURNEY.md` with Stage 14 documenting the UI-only 9-pass unslop refinements.
- Run `compile_applet` and `lint_applet` to verify zero TypeScript or build errors.
