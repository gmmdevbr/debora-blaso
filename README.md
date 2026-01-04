# Débora Blaso | Psicologia & Moda

Professional website for Débora Blaso, a clinical psychologist specializing in psychology and fashion consulting.

## 🎯 Project Overview

This website serves as both a digital presence and a conversion funnel, combining scientific authority with editorial sophistication. It's designed to convey expertise in clinical psychology while maintaining a high-end fashion aesthetic.

## 🛠 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 (CSS-First Architecture)
- **Components**: Custom components with shadcn/ui principles
- **Icons**: Lucide React
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation with mobile menu
│   ├── Hero.tsx        # Hero section with organic masks
│   ├── About.tsx       # About section with sticky layout
│   ├── Motivos.tsx     # Flip cards section
│   ├── ComoFunciona.tsx # How it works steps
│   ├── Abordagem.tsx   # Methodology section
│   ├── Agendar.tsx     # CTA section
│   ├── Services.tsx    # Additional services grid
│   ├── Instagram.tsx   # Social media showcase
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer with links
├── hooks/              # Custom React hooks
│   ├── useScrollReveal.ts
│   └── useNavbarScroll.ts
├── lib/                # Utilities
│   └── utils.ts        # Helper functions
├── index.css           # Tailwind v4 theme & custom styles
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎨 Design System

### Typography

- **Display**: Bodoni Moda (Serif, elegant)
- **Body**: Roboto Condensed (Sans, technical)
- **Script**: Pinyon Script (Cursive, signature)

### Color Palette

- **Monstera** (#2E3628): Primary text/dark backgrounds
- **Summer Sand** (#E6E4D9): Background
- **Walnut** (#A27F67): Accent color
- **Ginkgo** (#D1D4B0): Highlight color
- **Muted** (#505050): Secondary text

### Key Features

- **Noise Texture Overlay**: Subtle grain for editorial feel
- **Organic Masks**: Blob-shaped image masks
- **3D Flip Cards**: Interactive cards with backface content
- **Scroll Reveal**: Elements animate into view on scroll
- **Glassmorphism Navbar**: Blurred background when scrolled

## 🎯 SEO Optimization

- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Meta tags for social media (Open Graph)
- Alt text on all images
- Proper heading hierarchy (H1-H3)
- Portuguese language optimization

## 📱 Responsive Design

- Mobile-first approach
- Immersive mobile menu overlay
- Adaptive layouts for all screen sizes
- Touch-optimized interactions

## ⚡ Performance

- Lazy loading for images
- Preconnect to external resources
- Optimized asset loading
- CSS-based animations (no heavy libraries)

## 🔧 Tailwind v4 Configuration

This project uses Tailwind CSS v4's new architecture with `@theme` directive in the main CSS file instead of JavaScript configuration. All design tokens are defined in [src/index.css](src/index.css).

## 📄 License

© 2025 Débora Blaso. All rights reserved.

## 🤝 Development

This project follows strict principles:

1. **Tailwind v4 First**: All styling via CSS variables and Tailwind classes
2. **Semantic HTML**: Proper HTML5 structure for SEO
3. **Accessibility**: ARIA labels, keyboard navigation, screen reader support
4. **Performance**: Optimized images, minimal JavaScript, efficient rendering
5. **Mobile First**: Responsive design starting from mobile breakpoints

## 📞 Contact

For professional inquiries, please contact through:
- WhatsApp: [Link]
- Instagram: [@debora.blaso](https://instagram.com/debora.blaso)
- Website: [psicologiadamoda.club](https://psicologiadamoda.club)
