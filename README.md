# Mini-Commerce | Jewelry

An elegant, responsive e-commerce jewelry store built with **Next.js 15 App Router**, designed to showcase timeless jewelry pieces with intuitive UX, smart performance optimizations, and strong SEO foundations.

### Live Demo
https://mini-commerce-e4kd.vercel.app

---

## Project Overview

Mini-Commerce is a minimalist jewelry storefront that allows users to:
- Browse curated products (necklaces, watches, rings, earrings)
- Filter by category and price range
- Add items to cart with quantity control
- Place an order with a confirmation summary
- Experience light/dark mode and mobile-first design

---

## Design Approach

- **Layout**: Clean and modern grid layout using Tailwind CSS.
- **Color Scheme**: Soft neutrals with accent colors for luxury (white, black and lime).
- **Responsiveness**: Mobile-first design; responsive grid.
- **Typography**: Elegant serif + sans-serif pairing (`Geist`, `DM Serif`, and custom font `Milven`).
- **Visual Flair**: Motion-enhanced banners (`framer-motion`), skeleton loaders during fetch, and dynamic cart UI.

---

## Tools & Techniques

- **Framework**: [Next.js 14 App Router]
- **State Management**: [`zustand`] for cart logic with persistence and derived selectors
- **Data Fetching**: [`@tanstack/react-query`] for catalog fetch with caching and refetching
- **Styling**: [`tailwindcss`] with custom themes, animations, and responsive utilities
- **Testing**:
  - Component test: [`@testing-library/react` + `jest`]
  - Type-safe mocks; TS strict mode (`"strict": true`)
- **Code Quality**:
  - ESLint (`next/core-web-vitals`)
  - Prettier
  - No usage of `any`
- **CI/CD**: Deployed via [Vercel] with automatic preview deploys and production pipeline

---

## SEO Strategy

- **Meta Tags**: Title, description, and Open Graph data injected at layout level
- **Performance**:
  - Optimized images via `next/image`
  - Font loading strategy (`font-display: swap`)
  - Lazy-loading components and hydration control

---

##  Error-Handling Technique

- **Catalogue Fetch Errors**: Graceful fallback with retry & error state UI
- **Cart Edge Cases**:
  - Disabled order button if cart is empty
  - Validations on quantity input
- **Route Failures**: Custom 404 page with helpful redirection
- **Testing for Edge Cases**:
  - Empty cart render
  - Cart state persistence across reloads
- **Logging**:
  - Console warnings for failed fetch/debug states in dev

