# Design System Alignment
## Débora Blaso – Tailwind v4 Tokens & UI Constraints

This document translates the **Brand Guidebook (O Cérebro)** into **concrete engineering rules** for Tailwind v4 and component development.
It is the **single source of truth** for styling, layout, motion, and UI decisions.

---

## 1. Tailwind v4 – Theme Tokens (1:1 Alignment)

### 1.1 Typography Tokens

```css
@theme {
  /* Typography */
  --font-display: 'Darline Serif', serif;      /* Authority / Editorial */
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; /* Calm body */
  --font-script: 'Darline Script', cursive;    /* Accent only */
}
```

#### Usage Rules
- `--font-display`: H1, H2, key editorial statements
- `--font-sans`: paragraphs, lists, UI labels
- `--font-script`: **never** for paragraphs; only short accents (1–3 words)

---

### 1.2 Colour Tokens

```css
@theme {
  /* Brand colours */
  --color-primary: #2E3628;        /* Monstera */
  --color-background: #E6E4D9;     /* Summer Sand */
  --color-accent: #A27F67;         /* Walnut */
  --color-highlight: #D1D4B0;      /* Ginkgo */
  --color-secondary: #506751;      /* Lamb's Ear */
  --color-muted: #505050;          /* Muted text */
  --color-dark: #28221E;            /* Banyan */
}
```

#### Colour Rules
- Backgrounds: `--color-background`
- Primary text: `--color-primary`
- Secondary text: `--color-muted`
- CTAs: `--color-primary` (solid) or outline
- Accents: `--color-accent` **sparingly**
- Never use pure black (`#000`) or pure white for large surfaces

---

### 1.3 Spacing & Rhythm

```css
@theme {
  --space-section-y: 6rem;   /* Section vertical spacing */
  --space-section-x: 1.5rem; /* Mobile horizontal padding */
}
```

Rules:
- Sections must breathe
- Avoid dense stacking
- White space = emotional calm

---

## 2. UI Rules → Component Constraints

These constraints **limit design freedom intentionally** to preserve brand consistency.

---

## 2.1 Layout Components

### Header / Navigation

Constraints:
- Sticky, subtle backdrop blur
- No heavy shadows
- Height stable (avoid jumps)
- CTA always visible but not dominant

Allowed:
- `backdrop-blur-md`
- `bg-background/90`

Forbidden:
- Large drop shadows
- High contrast colours
- Complex animations

---

### Section Containers

Constraints:
- Always wrapped in semantic tags: `<section>`, `<main>`, `<footer>`
- Max width for content (e.g. `max-w-6xl`)
- Vertical padding based on section importance

---

## 2.2 Typography Components

### Headings

Constraints:
- Use `font-[var(--font-display)]`
- Line-height loose (`leading-tight` to `leading-snug`)
- Never uppercase long headings

---

### Body Text

Constraints:
- `font-[var(--font-sans)]`
- Comfortable line length
- Avoid `text-sm` for paragraphs

---

### Script Text

Constraints:
- Short phrases only
- Never interactive
- Never used for accessibility-critical content

---

## 2.3 Buttons & CTAs

Constraints:
- Rounded (soft geometry)
- Calm hover (opacity or slight translate)
- One primary CTA per section

Forbidden:
- Bouncy animations
- Flashy gradients
- Excessive icons

---

## 2.4 Cards & Interactive Elements

### Cards

Constraints:
- Soft radius
- Subtle border or background contrast
- No heavy elevation

---

### Flip Cards

Constraints:
- Triggered by user action
- Smooth cubic-bezier motion
- Respect reduced-motion preferences

---

## 2.5 Motion & Animation

Rules:
- Motion should feel **organic and slow**
- Duration: 600–1000ms
- Ease: `cubic-bezier(0.34, 1.56, 0.64, 1)` or `ease-out`

Forbidden:
- Infinite attention-grabbing motion
- Fast or aggressive easing

---

## 3. Accessibility & SEO Constraints

- Semantic HTML required
- H1 only once per page
- Images must have `alt`
- Colour contrast must remain readable
- Animations must respect `prefers-reduced-motion`

---

## 4. Engineering Guardrails

- No inline styles for brand tokens
- No arbitrary colours
- No random spacing values
- No visual experimentation outside tokens

---

## 5. Mental Model for Agents

When in doubt, ask:
> Does this feel calm, editorial, and trustworthy?

If not — simplify.

---

**End of Design System Alignment**

