<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Project: Bella Napoli - Italian Cuisine

## Overview

This project is a modern restaurant profile website for a single restaurant:
**"Bella Napoli - Italian Cuisine"**

It is NOT a multi-restaurant platform.

This is a premium, client-style website designed to showcase the restaurant’s brand, menu, and allow users to make reservations.

---

## Primary Goal

Create a visually polished, elegant, and responsive restaurant website that emphasizes:

- Strong visual identity
- Menu clarity
- Smooth user experience
- Reservation (booking) interaction

This project prioritizes **UI/UX quality over complex backend logic**.

---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

---

## Design Direction

### Overall Theme

- Light theme across the website
- Clean, minimal, modern layout
- Premium Italian restaurant aesthetic

### Hero Contrast Strategy

- Hero section uses a **dark background image**
- Overlay applied for readability
- White text on hero
- Rest of the site uses a **light background**

### Color Palette

- Background: #FFFFFF or #FAFAFA
- Primary text: #111111
- Accent color: #C9A35C (gold tone)
- Neutral grays for secondary text

---

## Layout Strategy

- Desktop-first design
- Fully responsive for mobile
- Single-page scrolling experience

---

## UX Principles

- Smooth scrolling between sections
- Clear visual hierarchy
- Generous spacing (avoid clutter)
- Menu must be easy to scan quickly
- CTA buttons should be clear and consistent

---

## Sections (Single Page)

### 1. Hero Section

- Restaurant name: "Bella Napoli"
- Subtitle: Italian Cuisine
- Full-screen dark background image
- Overlay for readability
- CTA: "Book a Table"

---

### 2. About Section

- Short description of the restaurant
- Opening hours
- Location summary

---

### 3. Menu Section (MOST IMPORTANT)

- Categories (e.g., Pizza, Pasta, Drinks)
- Each item includes:

  - Name
  - Price
  - Optional image
  - Short description

- Grid or clean list layout
- Highly readable and well-spaced

---

### 4. Reservation Section

- Simple booking form:

  - Name
  - Date
  - Time
  - Number of guests

- CTA: "Reserve Now"
- Initially:

  - No database required
  - Can log or mock submission

---

### 5. Gallery Section

- Food and restaurant images
- Clean grid layout
- Consistent spacing and alignment

---

### 6. Contact / Location Section

- Address
- Phone number
- Opening hours
- Optional map embed

---

## Code Structure Guidelines

- Use small, reusable components

- Organize UI into sections:

  - `Hero.tsx`
  - `About.tsx`
  - `Menu.tsx`
  - `Reservation.tsx`
  - `Gallery.tsx`
  - `Contact.tsx`

- Keep main layout inside `app/page.tsx`

- Use Tailwind CSS for all styling

- Avoid inline styles unless necessary

---

## Data Handling

- Use static data initially (JSON or local file)

- Example:

  - Menu items
  - Restaurant info

- Reservation form:

  - Start with console logging
  - Optional API route later

- Do NOT introduce database unless explicitly needed

---

## Design Rules (STRICT)

- Maintain light theme throughout (except hero)
- Hero must have dark image with overlay
- Do not use random colors
- Keep spacing consistent
- Avoid visual clutter
- Prioritize readability
- Use high-quality images only
- Typography must be clean and consistent

---

## AI Behavior Rules

- Do not overengineer

- Do not add unnecessary libraries

- Follow folder structure strictly

- Keep components simple and readable

- Prefer clarity over cleverness

- When building UI:

  1. Focus on layout first
  2. Then refine styling

- Always treat this as a **real client project**, not a demo

---

## Current Focus (Update As You Build)

- Hero section with dark image and booking CTA
- Menu section layout and design
- Reservation form UI

---

## Decisions (Confirmed)

- Single-page site (`/`) with scroll-to-section navigation
- Header is always sticky
- English only
- Premium fine dining tone (copy + visual hierarchy)
- Use placeholders for all branding/images (hero + gallery) for now
- Reservations are mock-submit only (log payload; show success UI); no database
- Menu uses a starter dataset created in-repo
- Currency display: EUR (`€`)
- Typography: Cormorant Garamond for headings; clean sans for body

## Implementation Plan (Assistant)

1. Update `src/app/layout.tsx`
- Add `Cormorant_Garamond` via `next/font/google` as a CSS variable for headings.
- Keep a clean sans for body (Geist Sans) and mono as needed.
- Update `metadata` to reflect “Bella Napoli | Italian Cuisine”.

2. Update `src/app/globals.css` (light theme only)
- Remove dark-mode defaults.
- Define palette tokens: background `#FAFAFA`, text `#111111`, accent `#C9A35C`, plus neutral grays.
- Enable smooth scrolling with reduced-motion fallback.
- Map font variables so Tailwind can use `font-serif` for headings and `font-sans` for body.

3. Replace starter template in `src/app/page.tsx`
- Compose a single page with sections in order: `Hero`, `About`, `Menu`, `Reservation`, `Gallery`, `Contact`.
- Add stable section ids: `about`, `menu`, `reservation`, `gallery`, `contact`.
- Add `scroll-mt-*` so anchor jumps land correctly under the sticky header.

4. Add components under `src/components/`
- `TopNav` (sticky header, desktop links, mobile toggle, CTA -> `#reservation`)
- `Hero` (dark placeholder “image” via gradients + overlay; white text; gold accent CTA)
- `About`, `Menu`, `Reservation` (`"use client"`), `Gallery`, `Contact`

5. Add starter data under `src/data/`
- `restaurant.ts` (address/phone/hours)
- `menu.ts` (categories + items; numeric prices; format with `€` in UI)
- Optional `gallery.ts` (placeholder tiles/captions)

6. Verification
- Run `npm run lint`
- Run `npm run build`

<!-- END:nextjs-agent-rules -->
