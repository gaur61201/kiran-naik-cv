# CLAUDE.md — Kiran A. Naik · Pastry Chef CV Website

## Project Overview

Build a single-page portfolio/CV website for **Kiran A. Naik**, a pastry chef and culinary development specialist with 28 years of experience in Kuwait. The site serves as a living CV — something he can share as a link with potential employers. It should feel like a high-end patisserie menu card, not a generic resume template.

A separate PDF CV will be built after the website is complete.

---

## Design Direction: "Editorial Patisserie"

A blend of **Classic Editorial** and **Artisanal Textured** — warm, handcrafted, and refined. Think: the menu card of a Parisian patisserie printed on textured cream stock with embossed gold foil. Professional but with soul.

### Color Palette

| Token              | Value       | Usage                                      |
|---------------------|-------------|---------------------------------------------|
| `--bg-primary`      | `#FDF6F0`   | Main background — warm cream/ivory          |
| `--bg-secondary`    | `#F5EDE4`   | Alternate section backgrounds               |
| `--text-primary`    | `#2C1810`   | Headings, body — deep chocolate brown       |
| `--text-secondary`  | `#6B5244`   | Subheadings, captions — lighter brown       |
| `--text-muted`      | `#9C8677`   | Dates, labels, metadata                     |
| `--accent`          | TBD by you  | Pick from gold (#C4956A), dusty rose (#B8837A), or pistachio (#7A9E7E) — whichever best complements the overall design. Use for monogram, dividers, highlights, hover states |
| `--accent-light`    | TBD by you  | A lighter tint of the accent for subtle backgrounds |
| `--border`          | `#E8DDD4`   | Subtle dividers between sections            |

### Typography

- **Display / Headings**: A distinctive serif — choose from **Playfair Display**, **Cormorant Garamond**, or **Fraunces**. Must feel editorial and elegant, not generic.
- **Body**: A clean, readable sans-serif — **DM Sans** or **Outfit**. NOT Inter, Roboto, or Arial.
- **Monospace / Labels**: **JetBrains Mono** or **IBM Plex Mono** for small labels like dates and metadata — gives a structured, professional feel.
- Load fonts from Google Fonts CDN.

### Texture & Atmosphere

- **Grain overlay**: Subtle CSS noise/grain texture on the background (opacity ~0.03–0.05). This is the "artisanal" layer. Use a CSS pseudo-element with a noise SVG filter or a tiny repeating noise PNG.
- **Paper texture feel**: Sections should feel like they exist on textured paper, not flat digital white.
- **No harsh shadows**: Use soft, warm shadows if any (rgba(44, 24, 16, 0.06)).
- **Dividers**: Use elegant horizontal rules — thin lines, or decorative dots/dashes, or a small pastry-themed SVG ornament between sections.

### Layout Principles

- **Max content width**: 1200px, centered.
- **Generous whitespace**: Let the content breathe. Padding between sections should be 120px+ on desktop.
- **Split layout pattern** (Nusr-Et style): For Experience entries and the About section, use a two-column layout — image on one side, text on the other, alternating left/right per entry. On mobile, stack vertically (image on top, text below).
- **Asymmetry is welcome**: Don't make every section a centered block. Offset headings, stagger content, let things feel composed rather than templated.

---

## Tech Stack

- **Vanilla HTML + CSS + JavaScript** (single index.html, style.css, script.js — or split into multiple CSS/JS files if needed for organization)
- **GSAP + ScrollTrigger** via CDN for all scroll-based animations (use the gsap-scrolltrigger skill for best practices)
- **Lenis** via CDN for smooth scrolling
- **Google Fonts** for typography
- No frameworks. No build tools. No React. Pure static site.

### CDN Links to Use

```html
<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Lenis Smooth Scroll -->
<script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>
```

---

## Section Hierarchy & Content

### 1. HERO (full viewport height)

**Layout**: Centered, full-screen.

**Content**:
- Monogram "KN" — large, centered, styled like a patisserie stamp/seal/embossed logo. Use the accent color. This is the visual anchor of the hero since there's no photo.
- Name: "Kiran A. Naik" in large serif display font
- Tagline: "Pâtissier & Culinary Development Specialist"
- Subline: "28 Years of Experience · Kuwait"
- Scroll indicator at bottom (animated down-arrow or "scroll" text)

**Animation**:
- On page load: monogram fades in and scales up slightly (0.9 → 1.0), then name and tagline stagger in with a blur-to-clear reveal (similar to drinksom.eu hero text)
- Grain texture visible on the hero background
- Monogram has a very subtle parallax (moves slightly slower than scroll)

---

### 2. ABOUT (split layout)

**Layout**: Two columns — decorative element on left, text on right (desktop). Stacked on mobile.

**Left side**: A decorative pastry illustration, ornamental pattern, or a large stylized quote mark. Placeholder for now — will be replaced with AI-generated pastry image later. Use a placeholder div with the accent color background and a subtle pattern.

**Right side**:
- Section label: "ABOUT" in small monospace uppercase with a thin line
- Professional narrative (write this in first person, 3-4 sentences):

> "With nearly three decades in the culinary world, I have built my career across fine dining, large-scale F&B operations, and pastry research & development. From my early years as Sous Chef at Raysone Restaurant to leading pastry production at M.H. Alshaya and pioneering recipe innovation at MMC Catering, my journey reflects a deep commitment to quality, creativity, and continuous evolution. I bring together technical precision, team leadership, and a passion for developing menus that delight diverse palates across cultures and occasions."

(This is a draft — can be refined later)

**Animation**: Text side slides in from right, decorative side fades in, triggered on scroll.

---

### 3. EXPERIENCE (the main section — split layout, alternating)

**Section label**: "EXPERIENCE" in small monospace uppercase

Each entry is a **full-width split block** (image one side, content the other), alternating sides:

#### Entry 1: MMC Catering Co. (most recent — image LEFT, text RIGHT)
- **Role**: Research & Development — Pastry
- **Company**: MMC Catering Co.
- **Period**: November 2017 — November 2024
- **Duration**: 7 Years
- **Key points**:
  - Led pastry R&D — developing innovative recipes and menus for diverse client requirements
  - Designed menus considering client demographics: age, nationality, dietary preferences
  - Maintained high standards in food quality, presentation, and hygiene
  - Trained and recruited culinary production staff
  - Maintained HACCP standards across all operations
- **Image placeholder**: Left side — will hold AI-generated image of plated desserts / R&D kitchen

#### Entry 2: M.H. Alshaya (strongest brand — text LEFT, image RIGHT)
- **Role**: Pastry Chef
- **Company**: M.H. Alshaya
- **Period**: 2006 — October 2017
- **Duration**: 11 Years
- **Key points**:
  - Managed pastry production for one of the Middle East's largest F&B operators
  - Upheld brand-standard quality across high-volume operations
  - Oversaw stock and quality control management
  - Managed food cost control and budget administration
  - Led staff training and development programs
- **Image placeholder**: Right side — will hold AI-generated image of bakery/patisserie production line
- **Design note**: This entry should have slightly more visual weight than the others (Alshaya is the biggest name). Consider a subtle background color shift or a larger type size for the company name.

#### Entry 3: Raysone Restaurant (foundation — image LEFT, text RIGHT)
- **Role**: Sous Chef
- **Company**: Raysone Restaurant
- **Period**: 1996 — 2006
- **Duration**: 10 Years
- **Key points**:
  - Built foundational culinary skills across all kitchen stations
  - Managed food preparation, presentation, and service
  - Developed expertise in customer service and guest relations
  - Supervised kitchen operations and staff coordination
- **Image placeholder**: Left side — will hold AI-generated image of restaurant kitchen

**Animation**: Each experience block scrolls into view with GSAP ScrollTrigger — the image side scales from 0.95 to 1.0 and fades in, while the text side slides in from its respective direction. Use `scrub: false` with a `toggleActions: "play none none none"` so it plays once on scroll.

---

### 4. EXPERTISE (two-column grid)

**Layout**: Full-width section with a different background (`--bg-secondary`). Two columns side by side on desktop, stacked on mobile.

**Section label**: "EXPERTISE" in small monospace uppercase

#### Column 1: Culinary Skills
- Food hygiene regulations & environmental awareness
- Food product quality & freshness assessment
- HACCP standards compliance
- Highest culinary standards execution
- Junior chef mentorship & skill development
- Food preparation, presentation & development

#### Column 2: Management & Operations
- Food cost control & budget administration
- Purchase & inventory management
- Staff recruitment, training & development
- Special events management
- Innovative menu development & planning
- Stock & quality control management
- F&B software proficiency (PMC, Opera, FMC)
- Customer service & guest relations
- Health & safety supervision

**Design**: Each skill item should be styled as a tag/pill or a clean list item with a small accent-colored bullet/dash. Not a boring bulleted list — give it visual rhythm.

**Animation**: Skills stagger in (each item appears 0.05s after the previous) when the section enters the viewport.

---

### 5. AWARDS (placeholder section)

**Layout**: Centered, minimal.

**Section label**: "AWARDS & RECOGNITION" in small monospace uppercase

**Content**: Placeholder text — "Details coming soon" styled elegantly, or leave as an empty state with a decorative element. The section should exist structurally so it can be populated later without redesigning.

**Design note**: Keep this section short. A simple centered layout with room for 2-4 award entries (each: award name, issuing body, year).

---

### 6. CERTIFICATIONS & TRAINING (placeholder section)

**Layout**: Similar to Awards — centered, clean.

**Section label**: "CERTIFICATIONS & TRAINING" in small monospace uppercase

**Content**: Placeholder — same approach as Awards. Structurally ready for entries like: certification name, institution, year.

---

### 7. LANGUAGES

**Layout**: Centered, single row on desktop.

**Content**:
- English — Fluent
- Arabic — Conversational
- Hindi — Native

**Design**: Three elegant cards or pills in a horizontal row. Each shows the language name and proficiency level. Use the accent color for borders or backgrounds.

---

### 8. CONTACT & FOOTER

**Layout**: Centered, minimal footer.

**Content**:
- Email: [to be provided]
- Phone: [to be provided]
- Location: Kuwait
- "Download CV" button — styled prominently, links to PDF (will be added later)

**Design**: Clean footer with the monogram repeated small, a horizontal rule, contact details, and the download button. The button should use the accent color as background with white text.

**Animation**: Fade in on scroll.

---

## Animation Guidelines (for GSAP ScrollTrigger)

1. **Philosophy**: Animations should feel like a page turning in a book — smooth, deliberate, unhurried. Nothing should bounce, overshoot, or feel playful. This is editorial, not a startup landing page.

2. **Easing**: Use `power2.out` or `power3.out` for most reveals. Never use `bounce` or `elastic`.

3. **Duration**: 0.8s–1.2s for section reveals. 0.4s–0.6s for individual element staggers.

4. **Scroll behavior**:
   - Use `toggleActions: "play none none none"` — animations play once when scrolled to, they don't reverse.
   - Do NOT use `scrub` for content sections (scrub is for the hero parallax only).
   - `start: "top 80%"` for most triggers (element starts animating when its top hits 80% down the viewport).

5. **Reveal patterns**:
   - **Fade up**: `opacity: 0, y: 40` → `opacity: 1, y: 0` — the default for most elements
   - **Slide in from side**: `opacity: 0, x: -60` or `x: 60` → `opacity: 1, x: 0` — for split layout text/images
   - **Scale reveal**: `opacity: 0, scale: 0.95` → `opacity: 1, scale: 1` — for images and the monogram
   - **Stagger**: `stagger: 0.08` — for skill tags, timeline entries

6. **Hero load animation**: Use a GSAP timeline (not ScrollTrigger) for the initial page load sequence:
   ```
   tl.from(monogram, { opacity: 0, scale: 0.9, duration: 1, ease: "power3.out" })
     .from(name, { opacity: 0, y: 30, filter: "blur(8px)", duration: 0.8 }, "-=0.4")
     .from(tagline, { opacity: 0, y: 20, filter: "blur(6px)", duration: 0.6 }, "-=0.3")
     .from(scrollIndicator, { opacity: 0, duration: 0.5 }, "-=0.1")
   ```

7. **Smooth scroll**: Initialize Lenis for smooth scrolling. Connect it to GSAP's ScrollTrigger via `ScrollTrigger.scrollerProxy()` or the Lenis-GSAP integration pattern.

---

## Responsive Breakpoints

- **Desktop**: > 1024px — full split layouts, generous spacing
- **Tablet**: 768px–1024px — split layouts may become 60/40, reduce spacing
- **Mobile**: < 768px — everything stacks vertically, images above text, reduce font sizes proportionally

---

## File Structure

```
cv-website/
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # GSAP animations, Lenis init, interactions
├── assets/
│   ├── images/         # Placeholder images (will be replaced with AI-generated later)
│   ├── fonts/          # If self-hosting any fonts (optional — using Google Fonts CDN is fine)
│   └── icons/          # Any SVG icons (scroll indicator, decorative elements)
├── CLAUDE.md           # This file
└── README.md           # Project readme
```

---

## Important Notes

- **No photo of Kiran**: Use the "KN" monogram as the primary visual identity throughout. Style it like a luxury brand mark / patisserie seal.
- **Image placeholders**: All image slots in split layouts should have a styled placeholder (accent-colored background with a subtle pattern or icon) that can be easily swapped for real AI-generated images later. Use a consistent aspect ratio (3:4 portrait or 4:3 landscape).
- **M.H. Alshaya is a major brand**: In the experience section, treat the Alshaya entry with extra visual prominence. This is the equivalent of having "Google" on a tech resume.
- **PDF CV comes later**: The website should have a "Download CV" button in the footer, but it can link to `#` for now. The PDF will be built as a separate task after the website is complete.
- **Awards & Certifications**: These sections are placeholders. Design them so content can be added later without restructuring. Use a clean, repeatable card or list-item pattern.
- **Accessibility**: Use semantic HTML (section, article, header, footer, nav). Ensure sufficient color contrast. Add alt text to all images. Respect `prefers-reduced-motion`.
- **Performance**: Optimize for fast load. Lazy-load images below the fold. Keep total page weight under 2MB (excluding images).
