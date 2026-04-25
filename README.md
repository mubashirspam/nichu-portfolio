# Nizamudheen KC - Digital Marketing Portfolio

Personal portfolio website for Nizamudheen KC, a digital marketing expert from Kerala specializing in performance marketing, social media strategy, and brand building.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Instrument Serif (headings), Barlow (body), Geist Sans (UI)
- **Icons**: Lucide React

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with font configuration
│   ├── page.tsx         # Main page with all sections
│   └── globals.css      # Global styles
└── components/
    └── v2/              # V2 component architecture
        ├── hero.tsx              # Hero section with video scrubbing
        ├── navigation.tsx       # Navigation with scroll behavior
        ├── stats.tsx             # Stats section with scroll-reveal
        ├── about.tsx             # About section with bento grid
        ├── service.tsx           # Services with hover preview
        ├── results.tsx           # Results with counter animation
        ├── gallery.tsx           # Case studies gallery
        ├── testimonials.tsx      # Testimonials with marquee
        ├── partner-gallery.tsx   # Partner logo mosaic
        ├── contact.tsx           # Contact section
        ├── footer.tsx            # Footer
        └── use-scroll-reveal.ts  # Shared scroll-reveal hook
```

## Features

- Scroll-driven video playback in hero
- Scroll-reveal text gradients across sections
- Responsive design for mobile and desktop
- Smooth animations with Framer Motion
- Parallax effects in contact section
- Hover interactions in services and partner gallery
