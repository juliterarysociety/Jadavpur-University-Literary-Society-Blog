# DESIGN.md — JUALS Design System & Typographic Specification

This document defines the formal visual language, mathematical typeset scales, color palette tokens, and responsive layout guidelines for the **Jadavpur University Arts and Literary Society (JUALS)** digital platform, adhering to the Google Stitch / editorial design principles.

---

## 1. Editorial Archetype & Visual Philosophy

- **Archetype**: Modern Literary Quarterly & Collegiate Broadside (*The Paris Review*, *Granta*, *London Review of Books*, Kolkata Little Magazines).
- **Core Tenet**: High typographic discipline, generous negative space, purposeful contrast, and zero artificial ornamentation (no neon gradients, no synthetic heavy drop shadows, no nested rounded cards).
- **Surface Contrast**:
  - Background: Archetypal warm cream parchment (`#FBF9F5`).
  - Container / Card Layer: Elevated pure parchment (`#FFFFFF` with warm undertone) or crisp divider rules (`#1A1917` at 6% to 12% opacity).
  - Difference in luminance complies with optical readability and WCAG AAA standards.

---

## 2. Color Palette & Token System

All colors are mathematically selected to prevent pure `#000000` / `#FFFFFF` eye-strain, incorporating a warm amber/umber undertone (<4% saturation in neutrals).

| Token Name | Hex Code | RGB | Role / Usage |
| :--- | :--- | :--- | :--- |
| `--color-paper` | `#FBF9F5` | 251, 249, 245 | Primary canvas / page background (Parchment) |
| `--color-paper-elevated` | `#FFFFFF` | 255, 255, 255 | Modals, menu drawers, lightboxes |
| `--color-paper-muted` | `#F2EFEB` | 242, 239, 235 | Subtle secondary surfaces, table headers, hairline fills |
| `--color-ink` | `#1A1917` | 26, 25, 23 | Primary deep ink text, headings, dark buttons |
| `--color-ink-light` | `#4F4D49` | 79, 77, 73 | Secondary prose, author biographies, dates, excerpts |
| `--color-ink-muted` | `#8A8780` | 138, 135, 128 | Placeholders, decorative anchors, subtle metadata |
| `--color-accent` | `#C85A32` | 200, 90, 50 | Terracotta / Burnt Sienna (Callouts, active underlines, open submission pill) |
| `--color-accent-hover` | `#A84420` | 168, 68, 32 | Interactive focus / hover states |
| `--color-accent-soft` | `#FAF0EB` | 250, 240, 235 | Accent tint for tags, callout banners, blockquote tint |
| `--color-rule` | `rgba(26, 25, 23, 0.08)` | — | Hairline divider rules between sections |

---

## 3. Typographic Engine (Pairing 1: The Modern Literary Quarterly)

Adopted for contemporary editorial prestige and screen legibility:

1. **Display & Heading Serif**: **`Newsreader`** (Optical Size Variable Range: `6pt`–`72pt`)  
   - Engineered specifically for long-form literary reading on digital displays with roots in 16th–18th century punch-cut French & Dutch book faces.
   - Dynamic optical sizing provides razor-sharp display cuts for large mastheads and titles while maintaining open counters and sturdy serifs at smaller headings.
   - Weights utilized: `500` (Medium), `600` (Semi-bold), and `italic`.

2. **Body Prose & Interface Sans**: **`Plus Jakarta Sans`**  
   - Modern geometric-humanist grotesque with generous x-height, clear apertures, and crisp letter spacing.
   - Flawless readability across mobile screens, navigation ribbons, author metadata, and interactive controls.
   - Weights utilized: `400` (Regular), `500` (Medium), `600` (Semi-bold).

### Mathematical Typeset Scale (Major Second 1.125 / Perfect Fourth 1.333)

| Role | Font Family | Size (Mobile) | Size (Desktop) | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Masthead Brand** | Newsreader | 28px (`1.75rem`) | 38px (`2.375rem`) | 600 | 1.0 | `+0.22em` (caps) |
| **Masthead Subtitle**| Plus Jakarta Sans | 9px (`0.5625rem`) | 11px (`0.6875rem`) | 600 | 1.2 | `+0.16em` (caps) |
| **Hero Title (H1)** | Newsreader | 34px (`2.125rem`) | 58px (`3.625rem`) | 500 | 1.15 | `-0.02em` |
| **Section Head (H2)**| Newsreader | 24px (`1.5rem`) | 38px (`2.375rem`) | 500 | 1.25 | `-0.015em` |
| **Article Title (H3)**| Newsreader | 20px (`1.25rem`) | 25px (`1.5625rem`) | 600 | 1.3 | `-0.01em` |
| **Blockquotes** | Newsreader | 19px (`1.1875rem`) | 25px (`1.5625rem`) | 400 italic | 1.55 | `0` |
| **Body Prose** | Plus Jakarta Sans | 16px (`1.0rem`) | 17px (`1.0625rem`) | 400 | 1.65 | `+0.005em` |
| **Meta & Captions** | Plus Jakarta Sans | 12px (`0.75rem`) | 13px (`0.8125rem`) | 400 | 1.5 | `+0.01em` |
| **Tabs & Small Caps** | Plus Jakarta Sans | 11px (`0.6875rem`) | 12px (`0.75rem`) | 600 | 1.0 | `+0.14em` (caps) |

---

## 4. Editorial Voice & Messaging

- **Campus Ethos**: The platform avoids institutional and corporate jargon.
- **Canonical Hero Statement**:
  - *Lead*: "Words, ink, and"
  - *Accent*: "campus echoes"
  - *Tail*: "from Kolkata."
  - *Subtext*: "The literary journal of Jadavpur University Arts & Literary Society. Fresh verse, narrative prose, critical reviews, and visual art."
- **Tone**: Grounded in Kolkata's literary café debates, student writing, and intellectual independence.

---

## 5. Spacing, Radii & Layout Rules

1. **Anti-Nesting Rule**: Content sections must NOT feature cards nested inside cards. Groupings are distinguished using hairline rules (`border-ink/8`) and disciplined vertical rhythm (`gap-6` to `gap-12`).
2. **Corner Radii**:
   - Standard action buttons and tabs: `rounded-sm` (2px to 4px) to preserve literary print edges.
   - Status indicators / badges: `rounded-full` (capsule format with inner padding).
3. **Touch Targets**: All interactive elements (menu buttons, search toggles, links, tabs) maintain a minimum target dimension of 44x44px on mobile viewports.

---

## 6. Responsive Behavior & Screen Audits

### Mobile Viewport (< 640px)
- **Topline**: Clean single-line header with no multi-tier banner crowding.
- **Masthead Brandplate**: Balanced 3-point alignment preventing collisions on 320px–480px viewports.
- **Tab Ribbon**: Smooth horizontal touch-scroll (`no-scrollbar`) with generous click targets.
- **Hero & Article Titles**: Responsive scaling (`text-4xl sm:text-6xl md:text-7xl`) preventing title clipping.
