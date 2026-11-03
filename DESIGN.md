# DESIGN.md — JUALS Design System & Typographic Specification

This document defines the formal visual language, mathematical typeset scales, color palette tokens, and responsive layout guidelines for the **Jadavpur University Arts and Literary Society (JUALS)** digital platform, following a 9-pass `unslop` editorial review (*Spacing → Color → Icons → Copy → Type → Layout → Details → Visuals → Motion*).

---

## 1. Editorial Archetype & Visual Philosophy

- **Archetype**: Modern Literary Quarterly & Archival Broadsheet (*The Paris Review*, *n+1*, *Granta*, *London Review of Books*, Kolkata Little Magazines).
- **Core Tenet**: High typographic discipline, structural hairline grids, museum-grade rectilinear plate framing, and zero synthetic UI tells (no warm-cream/terracotta SaaS defaults, no pulsing status pills, no left-border accent stripes, no mid-sentence colored italic headline spans, no nested cards).
- **Surface Contrast**:
  - Background: Crisp unbleached cotton rag archival paper (`#F7F5F0`).
  - Plate / Elevated Surface: Pure gallery white (`#FFFFFF`) and stone-tinted secondary wash (`#EFECE6`).
  - Structural Separation: Exposed `1px` hairline rules (`rgba(20, 19, 18, 0.09)`).

---

## 2. Color Palette & Token System (60-30-10 Budget)

All colors are calibrated for archival print authenticity and WCAG AAA contrast without yellow/orange cast:

| Token Name | Hex Code | RGB | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--color-paper` | `#F7F5F0` | 247, 245, 240 | Primary canvas / archival cotton rag background (60%) |
| `--color-paper-elevated` | `#FFFFFF` | 255, 255, 255 | Elevated plates, modals, search overlay |
| `--color-paper-muted` | `#EFECE6` | 239, 236, 230 | Subtle stone-tinted wash for callouts & figure mounts |
| `--color-ink` | `#141312` | 20, 19, 18 | Primary deep carbon press ink for headings & prose (30%) |
| `--color-ink-light` | `#4A4845` | 74, 72, 69 | Secondary prose, lead decks, excerpts, biographies |
| `--color-ink-muted` | `#78756F` | 120, 117, 111 | Archival slate for tabular dates, plate numbers, metadata |
| `--color-accent` | `#7A1C1C` | 122, 28, 28 | Deep Oxblood (Reserved strictly for active nav, links, and hover states — 10%) |
| `--color-accent-hover` | `#581212` | 88, 18, 18 | Deep Oxblood interactive focus / hover state |
| `--color-accent-soft` | `#F4EAE8` | 244, 234, 232 | Subtle oxblood wash |
| `--color-rule` | `rgba(20, 19, 18, 0.09)` | — | Hairline divider rules across columns and rows |

---

## 3. Typographic Engine (Pairing 1: The Modern Literary Quarterly)

Adopted for contemporary editorial prestige and long-form screen legibility:

1. **Display & Heading Serif**: **`Newsreader`** (Optical Size Variable Range: `6pt`–`72pt`)  
   - Engineered specifically for long-form literary reading on digital displays with roots in 16th–18th century punch-cut French & Dutch book faces.
   - Dynamic optical sizing provides razor-sharp display cuts for large broadsheet titles while maintaining open counters at smaller headings.
   - Enforces `text-wrap: balance` on all headings (`h1`–`h6`) and `.editorial-dropcap` on opening article paragraphs.

2. **Body Prose & Interface Sans**: **`Plus Jakarta Sans`**  
   - Modern geometric-humanist grotesque with generous x-height, clear apertures, and crisp letter spacing.
   - Enforces `tabular-nums` on all issue numbers, index rows (`01`, `02`, `03`), reading times, and publication dates.

### Mathematical Typeset Scale

| Role | Font Family | Size (Mobile) | Size (Desktop) | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Masthead Brand** | Newsreader | 20px (`1.25rem`) | 24px (`1.5rem`) | 500 | 1.0 | `+0.22em` (caps) |
| **Hero / Broadsheet H1** | Newsreader | 36px (`2.25rem`) | 56px (`3.5rem`) | 500 | 1.10 | `-0.015em` |
| **Lead Split Title (H2)**| Newsreader | 30px (`1.875rem`) | 42px (`2.6rem`) | 500 | 1.14 | `-0.015em` |
| **Feature Title (H3)**| Newsreader | 24px (`1.5rem`) | 26.4px (`1.65rem`) | 500 | 1.20 | `-0.01em` |
| **Blockquotes** | Newsreader | 24px (`1.5rem`) | 28px (`1.75rem`) | 400 italic | 1.55 | `0` |
| **Body Prose** | Plus Jakarta Sans | 16px (`1.0rem`) | 18px (`1.125rem`) | 400 | 1.75 | `+0.005em` |
| **Metadata & Index** | Plus Jakarta Sans | 11px (`0.6875rem`) | 11px (`0.6875rem`) | 500 | 1.4 | `+0.15em` (caps) |

---

## 4. Layout & Surface Discipline (9-Pass Unslop Rules)

1. **Single-Row 3-Zone Top Bar (`Header.tsx`)**:
   - Zone 1 (Left): `JUALS` wordmark + Jadavpur University institutional label.
   - Zone 2 (Center): Single-line genre & section navigation (*All Works, Poetry, Prose, Artwork, Reviews, Opinion, About*) with a `1.5px` deep oxblood active underline. No redundant category filter bar on the Home page.
   - Zone 3 (Right): Functional Search trigger, bordered `Submit` link, and `Index` drawer button.
2. **3-Tier Editorial Front Page (`Home.tsx`)**:
   - **Tier 1 (Lead Dispatch)**: 12-column asymmetric split (7-column rectilinear plate + 5-column vertical-hairline-separated deck).
   - **Tier 2 (Selected Features)**: 2-column feature grid for prose, poetry, and criticism.
   - **Tier 3 (Reading Index)**: Text-led horizontal archive rows with tabular index numbers (`01`, `02`, `03`), genre tags, titles, contributors, and dates.
3. **Daylight Broadsheet Article View (`Post.tsx`)**:
   - Opens on the crisp archival paper canvas with an unboxed metadata line (`GENRE · DATE · READ TIME`), balanced display headline, italic deck, hairline-bordered author byline bar, and framed cover plate (`Fig. 1`) above a `65ch` prose column with a 3-line literary drop-cap.
4. **Zero-Pill & Zero-Stripe Rule**:
   - No `rounded-full` status pills or `animate-pulse` dots.
   - No `border-l-2` left accent stripes on blockquotes, callouts, or submission guidelines; all quotes and callouts use top-and-bottom hairline rules (`border-y`).
   - All visual plates use sharp rectilinear corners (`rounded-none border border-ink/10`) without hover scale-zoom gimmicks.
   - All micro-interactions settle within `150ms–200ms`.
