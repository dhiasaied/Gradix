# Gradix — Design & Product 

## 01. Introduction

Gradix is a dark, craft-focused gradient studio for designers and developers. It combines a curated color palette, atmospheric collections, and a layered Create studio that exports CSS, Tailwind utilities, and creative prompts.

This document is the single reference for visual language, UI patterns, page structure, and interaction behavior across the site.

**Audience:** designers extending the UI, developers maintaining pages, and contributors aligning new work with Gradix Studio conventions.

---

## 02. Project Overview

### Purpose

- Explore precision colors with one-click HEX copy  
- Inspect curated gradient atmospheres (collections)  
- Build multi-layer gradients with blend modes, noise, and grain  
- Export ready-to-use CSS / Tailwind / AI prompts  

### Architecture

| Asset | Role |
|--------|------|
| `index.html` | Explore — hero, palette, featured collections |
| `Collections.html` | Collection detail (Midnight Sapphire) |
| `Prompt.html` | Create / Customization Studio |
| `Documentation.html` | In-app product docs |
| `Privacy.html` | Privacy policy |
| `Changelog.html` | Release notes |
| `Community.html` | Community / feedback |
| `shared.css` | Motion, components, glass surfaces, modals |
| `shared.js` | Palette data, search, nav, toast, copy, reveal |

### Runtime dependencies

- Tailwind CDN (`forms`, `container-queries`)  
- Google Fonts: **Sora**, **Geist**, **JetBrains Mono**  
- Material Symbols Outlined (icons)  
- WebGL (hero atmospheric shader on Explore)  

Dark mode is class-based: `<html class="dark">`.

---

## 03. Design System

Gradix uses a Material-inspired token set adapted for a near-black surface and cyan primary light.

### Principles

1. **Atmosphere over chrome** — gradients and light are the product; UI stays quiet.  
2. **Precision craft** — mono labels, tight tracking, sharp radii.  
3. **Glass + glow** — frosted panels (`glass-surface`) and cyan glow (`primary-glow`) for focus.  
4. **One accent** — cyan ice (`#7df4ff`) is the interactive highlight.  
5. **Motion with meaning** — hover lift, scroll reveal, reduced-motion respect.  

### Token layers

1. **Foundation** — colors, type, spacing, radius (Tailwind `theme.extend`)  
2. **Components** — buttons, cards, chips, toasts, modals (`shared.css`)  
3. **Patterns** — nav, hero, palette grid, studio split layout  
4. **Behaviors** — `data-action`, `data-nav`, `window.Gradix` API (`shared.js`)  

### Border radius scale

| Token | Value | Use |
|--------|--------|-----|
| `DEFAULT` | `0.125rem` | Buttons, chips, inputs |
| `lg` | `0.25rem` | Cards, color cards |
| `xl` | `0.5rem` | Search panel, preview |
| `full` | `0.75rem` | Soft rounded containers |

---

## 04. Branding

### Name & voice

- **Name:** Gradix  
- **Studio:** Gradix Studio  
- **Voice:** Precise, calm, technical — short sentences, no hype fluff  
- **Copyright line:** © 2026 Gradix Studio. Precision color for digital craft.  

### Logo lockup

- Mark: square image (`h-8 w-8`, `rounded-sm`)  
- Wordmark: **Gradix** in Sora, bold, tracking-tighter  
- Markup: `[data-logo]` → `logo-link` (hover: slight opacity + mark rotation)  

### Brand colors (signature)

| Role | Hex | Notes |
|------|-----|--------|
| Primary fixed (CTA / accent) | `#7DF4FF` | Ice cyan |
| Primary container | `#00F0FF` | Brighter hover |
| On primary fixed | `#002022` | Deep teal text on CTAs |
| Background / surface | `#131313` | Near-black canvas |
| On surface | `#E5E2E1` | Primary text |

### Hero brand test

On Explore, the first viewport centers the product idea (light-like backgrounds) with Gradix in the fixed nav. The WebGL field is the dominant visual plane; CTAs are secondary.

---

## 05. Typography

### Families

| Role | Family | Tailwind key |
|------|--------|----------------|
| Display / headline | **Sora** | `font-display-lg`, `font-headline-md` |
| Body | **Geist** | `font-body-base`, `font-body-sm` |
| Labels / code | **JetBrains Mono** | `font-label-caps`, `font-code-snippet` |

### Type scale

| Token | Size | Line height | Tracking | Weight |
|--------|------|-------------|----------|--------|
| `display-lg` | 48px | 1.1 | −0.02em | 700 |
| `display-lg-mobile` | 32px | 1.2 | −0.02em | 700 |
| `headline-md` | 24px | 1.3 | −0.01em | 600 |
| `body-base` | 16px | 1.6 | 0 | 400 |
| `body-sm` | 14px | 1.5 | 0 | 400 |
| `label-caps` | 12px | 1.0 | 0.1em | 500 |
| `code-snippet` | 13px | 1.5 | 0 | 400 |

### Usage rules

- Nav, CTAs, chips, and meta labels: **uppercase** `label-caps`  
- Page titles: `display-lg` (desktop) / `display-lg-mobile` (small screens)  
- Color names & HEX: JetBrains Mono  
- Body copy: Geist; muted text uses `text-on-surface-variant`  

---

## 06. Colors

### UI semantic tokens (core)

| Token | Hex | Role |
|--------|-----|------|
| `background` / `surface` | `#131313` | Page canvas |
| `surface-container-lowest` | `#0e0e0e` | Footer, deep panels |
| `surface-container-low` | `#1c1b1b` | Cards, glass base |
| `surface-container` | `#201f1f` | Mid elevation |
| `surface-container-high` | `#2a2a2a` | Raised chrome |
| `surface-container-highest` | `#353534` | Highest fill |
| `on-surface` | `#e5e2e1` | Primary text |
| `on-surface-variant` | `#b9cacb` | Secondary text |
| `primary` | `#dbfcff` | Soft primary |
| `primary-fixed` | `#7df4ff` | Accent / CTA fill |
| `primary-container` | `#00f0ff` | Stronger primary |
| `primary-fixed-dim` | `#00dbe9` | Dim accent |
| `on-primary-fixed` | `#002022` | Text on cyan CTA |
| `secondary` | `#b9c8de` | Cool secondary |
| `tertiary` / golds | `#fff5de`, `#fed639`, `#ffe179` | Warm accents |
| `error` | `#ffb4ab` | Error text |
| `outline` | `#849495` | Borders (when used) |

### Palette library (`shared.js`)

~120 curated colors with fields: `name`, `hex`, `category`, plus derived `rgb` and `hsl`.

**Categories:** `all` · `neutrals` · `reds` · `oranges` · `yellows` · `greens` · `blues` · `purples` · `accents`

### Surfaces & effects

```css
.glass-surface {
  background-color: rgba(28, 27, 27, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
}
.primary-glow {
  box-shadow: 0 0 20px rgba(125, 244, 255, 0.15);
}
```

Selection highlight: `selection:bg-primary-fixed selection:text-on-primary-fixed`.

---

## 07. Spacing

### Scale (Tailwind)

| Token | Value | Typical use |
|--------|--------|-------------|
| `unit` | 4px | Base unit |
| `stack-xs` | 4px | Tight stacks |
| `stack-sm` | 8px | Icon gaps, compact rows |
| `stack-md` | 16px | Default stack / nav cluster |
| `gutter` | 24px | Grid gaps, nav link gaps |
| `stack-lg` | 32px | Section inner stacks |
| `stack-xl` | 64px | Section vertical padding |
| `margin-mobile` | 16px | Page horizontal inset (sm) |
| `margin-desktop` | 64px | Page horizontal inset (md+) |

### Layout constants

- Nav height: `h-20` (80px)  
- Main offset: `pt-20` / `mt-20` under fixed nav  
- Content pages: max-width `720px` (`.content-page`)  
- Explore grids: max-width `1600px`  
- Hairline borders: `border-white/5` or `/10`  

---

## 08. Components

### Buttons

| Class | Purpose |
|--------|---------|
| `.btn-primary` | Filled CTA (cyan); shimmer on hover; lift + glow |
| `.btn-ghost` | Secondary / glass CTA |
| `.icon-btn` | Icon-only control (search, menu, zoom) |

### Navigation

| Class / attribute | Purpose |
|-------------------|---------|
| `[data-nav]` | Primary / mobile nav links |
| `.nav-link` | Underline accent + active cyan |
| `.footer-link` | Footer text links |
| `.mobile-nav` | Drawer shell |
| `.logo-link` / `[data-logo]` | Brand home link |

### Palette

| Class | Purpose |
|--------|---------|
| `.color-card` | Clickable swatch card |
| `.color-swatch` | Color preview area |
| `.color-swatch-overlay` / `.copy-hint` | Copy affordance |
| `.category-chip` | Filter chips |
| `.color-count-badge` | Palette count pill |
| `.filter-bar` | Chip row |
| `.palette-empty` | Empty filter state |

### Feedback & overlays

| Class | Purpose |
|--------|---------|
| `.toast` / `.toast-host` | Copy confirmation (`aria-live="polite"`) |
| `.search-overlay` / `.search-panel` | Ctrl/⌘K color search |
| `.search-result` | Result row |

### Studio (Create)

| Class | Purpose |
|--------|---------|
| `.preview-surface` | Live gradient canvas |
| `.tab-btn` | CSS / Tailwind / Prompt tabs |
| `.layer-item` | Layer list item |
| `.stop-row` | Gradient stop row |
| `.studio-menu` / `.studio-menu-panel` | ⋮ export menu |
| `.related-card` | Related swatch on Collections |

### Content & marketing

| Class | Purpose |
|--------|---------|
| `.glass-card` | Featured collection card |
| `.content-page` / `.content-block` | Docs-style articles |
| `.community-form` | Community feedback form |
| `.reveal` | Scroll-enter animation target |
| `.hero-content` | Hero entrance animation |

### Icons

Material Symbols Outlined (e.g. `search`, `menu`, `close`, `zoom_in`).

---

## 09. Props

Gradix is markup-driven (no React). Behavior is wired via **data attributes** and the **`window.Gradix`** API.

### Data attributes

| Attribute | Values / notes |
|-----------|----------------|
| `data-nav` | `explore` · `collections` · `create` · `documentation` · `privacy` · `changelog` · `community` |
| `data-action` | `search` · `create` · `menu` · `explore` |
| `data-logo` | Logo / home lockup |
| `data-mobile-nav` | Mobile drawer root |
| `data-mobile-close` | Closes mobile nav |
| `data-tab` | Studio output tabs: `css` · `tailwind` · `prompt` |
| `data-hex` | Search result HEX target |

### `window.Gradix` API

```js
Gradix.colors      // enriched palette array
Gradix.categories  // filter definitions
Gradix.pages       // route map (HTML filenames)
Gradix.copyText(text)
Gradix.copyColor(hex, label?)
Gradix.showToast(message, hex?)
```

### Color object shape

```js
{
  name: "Glacier",
  hex: "#7DF4FF",
  category: "blues",
  rgb: "125, 244, 255",
  hsl: "185°, 100%, 73%"
}
```

### Page map (`Gradix.pages`)

| Key | File |
|-----|------|
| `explore` | `index.html` |
| `collections` | `Collections.html` |
| `create` | `Prompt.html` |
| `documentation` | `Documentation.html` |
| `privacy` | `Privacy.html` |
| `changelog` | `Changelog.html` |
| `community` | `Community.html` |

---

## 10. Variants

### Button variants

| Variant | Classes / pattern |
|---------|-------------------|
| Primary filled | `btn-primary bg-primary-fixed text-on-primary-fixed` |
| Primary + glow | add `primary-glow` (hero CTA) |
| Ghost / glass | `btn-ghost glass-surface` |
| Icon | `icon-btn` (+ optional glass border in studio) |

### Card variants

| Variant | Use |
|---------|-----|
| Color card | Palette grid |
| Glass card | Featured collections on Explore |
| Related card | Collection detail related colors |
| Content block | Documentation-style sections |

### Gradient types (Studio)

- Linear  
- Radial  
- Conic  

Plus blend modes, noise overlay, and grain controls.

### Output variants (Studio tabs)

1. **CSS** — standard gradient CSS  
2. **Tailwind** — utility-oriented export  
3. **Prompt** — natural-language / artistic description  

### Filter variants

Category chips: All + eight families (see Colors).

---

## 11. States

### Interactive states

| Element | Default | Hover | Active / pressed | Focus |
|---------|---------|-------|------------------|-------|
| `.btn-primary` | Solid cyan | Lift −2px, glow, shimmer | Scale ~0.97 | Prefer visible focus |
| `.btn-ghost` | Glass | Lift −2px | Scale ~0.97 | — |
| `.icon-btn` | Muted | Cyan tint, lift + scale | Scale ~0.92 | — |
| `.nav-link` | Muted | Cyan + underline | — | — |
| `.nav-link.is-active` | Cyan, bold, underline full | — | — | — |
| `.color-card` | Flat | Lift + border glow | Slight settle | `:focus-visible` same as hover |
| `.color-card.is-copied` | — | — | Copy hint turns green | — |
| `.category-chip.is-active` | — | — | Cyan fill border + glow | — |
| `.search-result.is-active` | — | Highlight bg | Keyboard selection | — |
| `.tab-btn.is-active` | — | — | Cyan text + bottom border | — |
| `.layer-item.is-active` | — | — | Cyan border + soft glow | — |
| `.preview-surface.is-zoomed` | — | — | Scale ~1.08 | — |

### Overlay states

| Class | Closed | Open |
|--------|--------|------|
| `.search-overlay` | `opacity: 0`, hidden | `.is-open` visible |
| `.mobile-nav` | Off-canvas, no pointer | `.is-open` + `body.mobile-nav-open` |
| `.studio-menu-panel` | `display: none` | `.is-open` |
| `.toast` | — | Enter anim; `.is-leaving` exit |

### Scroll reveal

- `.reveal` → starts hidden  
- `.reveal.is-visible` → faded/translated in  
- Stagger: `.reveal-delay-1` … `-4`  

---

## 12. Layouts

### Shell (all pages)

```
┌─────────────────────────────────────┐
│ Fixed nav (z-50, h-20, blur)        │
├─────────────────────────────────────┤
│ Main (pt-20 / mt-20)                │
│   …page content…                    │
├─────────────────────────────────────┤
│ Footer (surface-container-lowest)   │
└─────────────────────────────────────┘
```

### Explore (`index.html`)

1. Full-bleed **hero** (WebGL + overlays + centered copy/CTAs)  
2. **Palette** section — filters + responsive grid  
3. **Featured collections** — 3-column glass cards  

### Collections

Preview stage + controls (shuffle, fullscreen, export) + stop list + related colors.

### Create / Studio (`Prompt.html`)

Split layout:

- **Left / main:** checkerboard stage + zoom controls + preview + output tabs  
- **Right / panel:** layers, stops, blend, noise/grain, library colors, ⋮ menu  

Stacks vertically on small screens (`flex-col` → `lg:flex-row`).

### Content pages

Centered article (`.content-page`): title, lead, stacked `.content-block` sections.

---

## 13. Pages

| Page | File | Job |
|------|------|-----|
| Explore | `index.html` | Discover gradients & palette |
| Collections | `Collections.html` | Inspect Midnight Sapphire |
| Create | `Prompt.html` | Build & export layered gradients |
| Documentation | `Documentation.html` | Short product how-to |
| Privacy | `Privacy.html` | Privacy policy |
| Changelog | `Changelog.html` | Release history |
| Community | `Community.html` | Feedback / community form |

This markdown file (`DOCUMENTATION.md`) is the full design-system companion to the shorter in-app Documentation page.

---

## 14. Navigation

### Primary (desktop, `md+`)

Explore · Collections · Create  

Plus: Search (`data-action="search"`) · Create Gradient CTA · (mobile) Menu.

### Mobile drawer

Explore · Collections · Create · Documentation · Community · Create Gradient CTA  

Opened by `data-action="menu"`; closed by backdrop, close button, link click, or **Escape**.

### Footer

Documentation · Privacy · Changelog · Community  

### Active route

`shared.js` compares the current filename to `data-nav` keys and toggles `.is-active`.

### Global shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` / `⌘K` | Open color search |
| `Escape` | Close search or mobile nav |

### Action routing

| `data-action` | Behavior |
|---------------|----------|
| `create` | Navigate to `Prompt.html` |
| `explore` | Smooth-scroll to `#palette` or go to Explore `#palette` |
| `search` | Open search overlay |
| `menu` | Open mobile nav |

---

## 15. User Interface

### Explore flows

1. Land on atmospheric hero → **Explore Gradients** scrolls to palette or **Create** opens studio.  
2. Filter chips narrow the grid; click a card to copy HEX and see a toast.  
3. Featured cards deep-link to Collections or Create.  

### Search

Modal search filters by name, HEX, or category; keyboard highlight + click copies color.

### Collections

Preview gradient, shuffle seeds, fullscreen, copy stops, export CSS; related swatches share copy-on-click.

### Create studio

1. Add/select layers (linear / radial / conic).  
2. Edit stops and blend modes; toggle noise/grain.  
3. Apply library colors to the active layer.  
4. Zoom preview; switch CSS / Tailwind / Prompt tabs.  
5. ⋮ menu: export CSS, copy prompt, reset layers.  

### Feedback

Toasts confirm copy success/failure with optional swatch chip.

---

## 16. Responsive Design

### Breakpoints (Tailwind defaults)

| Range | Behavior |
|-------|----------|
| `< sm` | Single-column grids; Create CTA may hide; stacked hero CTAs |
| `sm+` | 2-col palette; Create CTA visible |
| `md+` | Desktop nav; 3-col featured; desktop margins |
| `lg+` | 3-col palette; studio side-by-side |
| `xl+` | 5-col palette |

### Patterns

- Horizontal padding: `px-margin-mobile` → `md:px-margin-desktop`  
- Display type: `text-display-lg-mobile` → `md:text-display-lg`  
- Nav links: `hidden md:flex`; menu: `md:hidden`  
- Footer: column on mobile, row on desktop  
- Studio preview min-height adjusts for short viewports  

### Touch

Adequate hit targets on chips, icon buttons, and color cards; hover affordances degrade gracefully on touch (tap still copies).

---

## 17. Accessibility

### Implemented

- Semantic landmarks: `nav`, `main`, `footer`, `article`  
- Icon buttons with `aria-label` / `title`  
- Search dialog: `role="dialog"` + `aria-label`  
- Mobile nav: `role="dialog"`, `aria-hidden` toggle  
- Filter bar: `role="tablist"` where applicable  
- Toast host: `aria-live="polite"`  
- Color cards support `:focus-visible` styles  
- `prefers-reduced-motion: reduce` collapses animations/transitions in `shared.css`  
- Keyboard: Escape closes overlays; search supports arrow/active result patterns  

### Recommendations

- Keep contrast: cyan on dark and dark teal on cyan CTAs  
- Do not remove `aria-label` from icon-only controls  
- Prefer visible focus rings when extending components  
- Ensure new overlays trap focus when added  

---

## 18. Animations

### Motion tokens (`:root`)

| Token | Value |
|--------|--------|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `--duration-fast` | 150ms |
| `--duration` | 280ms |
| `--duration-slow` | 500ms |
| `--primary-glow` | `rgba(125, 244, 255, 0.35)` |

### Named motions

| Name | Where |
|------|--------|
| `hero-rise` | Hero content entrance |
| Scroll reveal | `.reveal` → `.is-visible` |
| Button shimmer | `.btn-primary::after` sweep |
| Toast in/out | `toast-in` / `toast-out` |
| Card lift | Color / glass / related cards |
| Logo tilt | `.logo-link:hover img` |
| Nav underline | `.nav-link::after` scaleX |
| Search panel | Fade + translate when `.is-open` |
| Mobile drawer | Slide from right |

### Policy

- Prefer transform/opacity over layout thrashing  
- Honor `prefers-reduced-motion`  
- Use stagger delays sparingly (max ~240ms)  

---

## 19. 3D Elements

Gradix does not use a 3D mesh engine. Depth comes from:

### WebGL hero shader (Explore)

- Full-bleed `<canvas>` with fragment shader  
- Soft moving color blobs (cyan / violet / deep navy)  
- Mouse-reactive highlight  
- Film noise + vignette  
- CSS overlay gradients + radial fade for readability  

### Depth cues (2.5D)

- Layered glass surfaces and backdrop blur  
- Cyan glow shadows on CTAs and active chips  
- Card lift / scale on hover  
- Studio preview scale zoom (`.is-zoomed`)  
- Noise SVG overlay on the Create preview for material grain  

Treat the hero canvas as the primary “dimensional” brand moment; keep UI chrome flat and sharp.

---

## 20. Content

### Tone

Short, precise, studio-like. Prefer concrete verbs: explore, copy, create, export.

### Key copy

| Location | Copy |
|----------|------|
| Site title | Gradix - Precision Gradients |
| Hero H1 | Backgrounds that feel like light. |
| Hero support | Explore layered gradients, CSS blend modes and atmospheric color compositions made for modern digital experiences. |
| Palette H2 | Explore the palette |
| Collections teaser | Featured collections / Curated gradient atmospheres ready to customize |
| Footer | © 2026 Gradix Studio. Precision color for digital craft. |

### Featured collection seeds

| Name | Category tag | Notes |
|------|--------------|--------|
| Midnight Sapphire | Aura / Abstract | Deep blues & indigos |
| Violet Nebula | Studio | Opens Create |
| Cyan Depth | Lumina | Teal atmospheric light |

### Empty / system strings

- Search placeholder: “Search colors by name or hex…”  
- No results: “No colors found”  
- Toast: `Copied {label}` / `Copy failed`  

---

## 21. Guidelines

### Do

- Use design tokens from the Tailwind config before inventing new hex values  
- Keep CTAs on `primary-fixed` with `on-primary-fixed` text  
- Wire new pages through `PAGES` / `data-nav` in `shared.js`  
- Reuse `shared.css` component classes for consistency  
- Add `.reveal` to major section blocks on marketing pages  
- Export gradients as standard CSS compatible with MDN gradient syntax  

### Don’t

- Introduce purple-on-white marketing tropes or flat single-fill pages without atmosphere  
- Overload the hero with stats, chips, or secondary cards  
- Skip `aria-label` on icon buttons  
- Bypass reduced-motion rules with inline animations  
- Duplicate palette data outside `shared.js`  

### Contribution checklist

1. Match spacing/radius tokens  
2. Use Sora / Geist / JetBrains Mono roles correctly  
3. Test mobile nav + Ctrl/⌘K search  
4. Verify copy toast and focus on new interactive surfaces  
5. Update Changelog when shipping user-facing changes  

---

## 22. FAQ

**How do I copy a color?**  
Click any palette or related swatch, or pick a result from Ctrl/⌘K search. HEX is copied to the clipboard.

**Where is the Create studio?**  
`Prompt.html`, also linked as **Create** in the nav and **Create Gradient** CTAs.

**Can I use Gradix colors in my project?**  
Yes — copy HEX values or export CSS/Tailwind from the studio. See also [MDN CSS gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient).

**Why is Favorites gone?**  
Removed in 1.1.0 in favor of curated category filters.

**Does the hero work without WebGL?**  
If WebGL is unavailable, the canvas init exits early; CSS gradient overlays still provide atmosphere.

**How do I search?**  
Ctrl+K (Windows/Linux) or ⌘K (macOS), or the search icon in the nav.

**Is there a build step?**  
No — open the HTML files (or serve the folder statically). Tailwind and fonts load from CDN.

---

## 23. Changelog

### 1.1.0 — August 2026

- Removed Favorites; palette focuses on curated categories  
- Unified responsive navbar and footer across every page  
- Added Documentation, Privacy, Changelog, and Community pages  
- Studio ⋮ menu exports CSS, copies prompts, and resets layers  
- Mobile menu for Explore, Collections, Create, and docs  

### 1.0.0 — Launch

- Explore page with 120-color palette and category filters  
- Midnight Sapphire collection with shuffle, fullscreen, and CSS export  
- Create studio with layered gradients, blend modes, noise, and grain  
- Global color search (Ctrl+K) and clipboard copy for HEX / CSS  

### What’s next

More curated collections, improved Tailwind export, and additional blend-mode presets. Ideas welcome on the Community page.

---

## 24. Conclusion

Gradix is a cohesive dark design system wrapped around a practical gradient workflow: explore precise color, study atmospheric collections, and craft layered exports without leaving the browser.

Use this document as the source of truth for tokens, components, and interaction patterns. Keep the brand quiet, the cyan light intentional, and the product feeling like light.

---

*Gradix Studio · Documentation v1.1.0 · September 2026*
