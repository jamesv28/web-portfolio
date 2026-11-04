---
name: Luminescent Precision
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a forward-leaning, engineering-led identity calibrated for high-caliber front-end development portfolios. It marries structural precision with ambient luminescence, projecting technical mastery, pixel perfection, and creative restraint.

### Target Audience & Emotional Arc
- **Target Audience:** Engineering leaders, design systems directors, technical recruiters, and founders searching for top-tier front-end talent who bridge design fidelity and architectural rigor.
- **Emotional Response:** Inspires confidence, technological polish, immersion, and intellectual clarity. The user should feel they are interacting with software built by a craftsman who cares deeply about sub-pixel alignment and tactile feedback.

### Visual Style Synthesis
The design system operates at the intersection of **Technical Modernism** and **Subtle Glassmorphism**:
- **Structured Framing:** Razor-thin borders (1px) with controlled opacity define components, avoiding visual noise while establishing clear physical containers.
- **Translucent Depth:** Dark, multilayered surfaces with low-opacity fills and backdrop blurs (`12px` to `20px`) provide optical dimensionality without feeling gimmicky.
- **Atmospheric Accents:** Radiant primary violet and vibrant cyan/emerald accents are deployed strictly for focal anchors, interactive states, and semantic signal boosts against deep neutral slate foundations.

## Colors

The palette establishes an immersive dark environment optimized for high contrast, vibrant code snippets, and subtle atmospheric glows.

### Color Architecture
- **Primary (`#6366F1` - Electric Indigo):** The anchor for active interactive surfaces, key CTA buttons, focused states, and directional indicators.
- **Secondary (`#06B6D4` - Electric Cyan):** Dedicated to technical status indicators, metadata badges, interactive links, and interactive hover shifts.
- **Tertiary (`#10B981` - Emerald Glow):** Reserved for success states, active availability badges ("Open to Work"), and metrics.
- **Neutral (`#0F172A` - Slate Black Canvas):** The foundational base. Extended through systematic opacity tokens:
  - Canvas Base: `#0B0F19`
  - Elevated Surface: `rgba(15, 23, 42, 0.75)`
  - Surface Highlight: `rgba(30, 41, 59, 0.6)`
  - Border Subtle: `rgba(255, 255, 255, 0.08)`
  - Border Interactive: `rgba(99, 102, 241, 0.35)`
  - Text Primary: `#F8FAFC`
  - Text Secondary: `#94A3B8`
  - Text Tertiary: `#64748B`

### Usage Principles
- Avoid opaque gray cards; utilize alpha-blended slate tiers over the dark canvas to support smooth backdrop filtering.
- High-saturation colors (`#6366F1` and `#06B6D4`) must never compete for the same visual hierarchy; pair violet backgrounds with cyan typography sparingly, favoring white typography over colored buttons.

## Typography

The typography pairings contrast the sculptural, modern geometry of Plus Jakarta Sans with the rhythmic balance of Manrope for dense technical prose, accented by JetBrains Mono for metadata and developer signatures.

### Typographic Rules
- **Headline Rhythm:** Headlines feature tight, negative tracking (`-0.01em` to `-0.03em`) to enhance optical density and modern display presence.
- **Body Hierarchy:** Manrope ensures high screen legibility across dense project descriptions, with generous line heights (`1.5` to `1.6`) balancing dark-mode light emissions.
- **Code & Metadata:** JetBrains Mono is designated strictly for skill metrics, commit timestamps, file extensions, and interactive tech tags.
- **Letterform Case:** Use uppercase sparingly; only `label-caps` accepts tracking expansions for section overlines (e.g., `// FEATURED CASE STUDY`).

## Layout & Spacing

A responsive 12-column grid provides structural alignment for case studies, metrics, and side-by-side terminal mockups.

### Layout Principles
- **Grid Architecture:** 
  - **Desktop (1280px+):** 12 columns, fixed maximum canvas container of `1200px`, `gutter-desktop` (2rem), and `margin-desktop` (3rem).
  - **Tablet (768px - 1279px):** 8 columns, fluid with `gutter` (1.5rem) and `margin-tablet` (2rem).
  - **Mobile (< 768px):** 4 columns, single-column reflow for complex components, `gutter` (1rem) and `margin` (1rem).
- **Rhythm & Proportions:** Vertical flow uses an 8px base rhythm. Micro-spacing within interactive elements adheres strictly to `space-xs` through `space-md`, while section separation relies on larger multiples (`space-xl` and above) to create expansive, premium whitespace.

## Elevation & Depth

Visual hierarchy uses luminous depth, semi-translucent backdrops, and selective rim-lighting rather than traditional heavy drop shadows.

### Elevation Architecture
1. **Canvas (Base Level):** Solid deep tone (`#0B0F19`) augmented with subtle, radial gradient meshes placed behind key feature cards (`rgba(99, 102, 241, 0.08)` blur `140px`).
2. **Surface Tier 1 (Static Cards & Containers):**
   - Background: `rgba(15, 23, 42, 0.65)`
   - Border: 1px solid `rgba(255, 255, 255, 0.08)`
   - Backdrop Filter: `blur(12px)`
   - Shadow: `0 4px 20px -2px rgba(0, 0, 0, 0.5)`
3. **Surface Tier 2 (Interactive Floating Elements, Carousels, Modals):**
   - Background: `rgba(30, 41, 59, 0.75)`
   - Border: 1px solid `rgba(255, 255, 255, 0.14)`
   - Backdrop Filter: `blur(20px)`
   - Shadow: `0 12px 32px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)`
4. **Hover & Focus Glow (Interactive Accentuation):**
   - On cursor interaction, borders shift dynamically to `rgba(99, 102, 241, 0.5)` complemented by a soft edge flare: `box-shadow: 0 0 24px -4px rgba(99, 102, 241, 0.25)`.

## Shapes

The design uses a refined, modern corner radius scale that avoids harsh brutalist edges and exaggerated pill shapes on major structural components.

### Geometry Hierarchy
- **Standard (`rounded`, 0.5rem / 8px):** Applied to form inputs, code blocks, navigation menus, and tech stack chips.
- **Containers (`rounded-lg`, 1rem / 16px):** Applied to interactive portfolio cards, showcase carousels, and dialogs.
- **Display Modules (`rounded-xl`, 1.5rem / 24px):** Reserved for hero callout sections and full-bleed media framing.
- **Pill Shape (`rounded-full`):** Reserved exclusively for dynamic status tags (e.g., "Available for Q3"), round icon triggers, and pagination dots.

## Components

### Buttons
- **Primary Action:** Solid background (`#6366F1`) with white text (`#F8FAFC`), `rounded` (8px), padding `10px 20px`. Transition: `all 200ms cubic-bezier(0.16, 1, 0.3, 1)`. Hover state triggers a subtle scale transform (`1.02`) and cyan-tinted glow (`box-shadow: 0 0 20px rgba(99, 102, 241, 0.4)`).
- **Secondary (Ghost Glass):** Background `rgba(255, 255, 255, 0.03)`, 1px border `rgba(255, 255, 255, 0.12)`, text `#F8FAFC`. On hover: border transitions to `rgba(6, 182, 212, 0.5)`, background transitions to `rgba(6, 182, 212, 0.05)`.

### Interactive Carousel Card
- **Structure:** `rounded-lg` container, `12px` backdrop blur, 1px border `rgba(255, 255, 255, 0.08)`.
- **Card Header:** Project thumbnail with `16:9` ratio, wrapped in an overflow-hidden mask with subtle inner shadow.
- **Card Body:** Category overline using `label-caps` in `#06B6D4`, title in `headline-md`, concise description in `body-sm` (`#94A3B8`).
- **Interactive Controls:** Adjacent carousel navigation triggers use glass circular buttons with directional arrow icons that illuminate in `#6366F1` on hover.

### Tech Stack Chips
- **Display:** Inline-flex, alignment center, gap `space-xs`.
- **Styling:** Height `28px`, padding `0 10px`, `rounded` (6px), background `rgba(15, 23, 42, 0.8)`, border `1px solid rgba(255, 255, 255, 0.08)`.
- **Content:** Monospace typography (`label-code`), icon colored in `#06B6D4` or `#6366F1`, text in `#94A3B8`. Hover states elevate text to `#F8FAFC` with border shifting to `rgba(6, 182, 212, 0.4)`.

### Contact Form Fields
- **Input Fields & Textarea:** Background `rgba(15, 23, 42, 0.5)`, border `1px solid rgba(255, 255, 255, 0.1)`, `rounded` (8px), padding `12px 16px`, font `body-md`, text `#F8FAFC`.
- **Placeholder:** `#64748B`.
- **Focus State:** Border color shifts to `#6366F1`, background darkens to `rgba(15, 23, 42, 0.9)`, with an outer glow: `box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2)`. Outline is disabled.
- **Labels:** Set in `label-caps`, uppercase, tracked out (`0.08em`), `#94A3B8`.

### Checkboxes & Radio Controls
- **Box/Ring:** Size `18px`, `rounded` (4px for checkboxes, 50% for radios), border `1.5px solid rgba(255, 255, 255, 0.2)`.
- **Checked State:** Background `#6366F1`, border-color `#6366F1`, containing an SVG checkmark rendered in pure white `#FFFFFF`.