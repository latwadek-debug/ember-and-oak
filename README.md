<div align="center">

# 🍽️ Ember & Oak

### A Premium Fine-Dining Restaurant Website

A high-fidelity, dark-luxury themed restaurant experience with custom cursor, micro-animations, parallax scrolling, and an online reservation system — built entirely with vanilla HTML, CSS, and JavaScript.

**95+ Lighthouse Performance Score · Zero Dependencies · Pixel-Perfect Responsive**

[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Animations-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-95+-4caf50?style=for-the-badge&logo=lighthouse&logoColor=white)](#)

[🔗 Live Demo](https://meek-bombolone-59a328.netlify.app) · [💼 LinkedIn](https://www.linkedin.com/in/kiran-latwade-aimpoint) · [🐙 GitHub](https://github.com/latwadek-debug)

</div>

---

## 🎯 Why This Project

Ember & Oak is not just a restaurant website — it's a **technical showcase** of what's possible with zero CSS frameworks and zero JavaScript libraries. Every animation, every interaction, every responsive breakpoint is hand-coded to demonstrate mastery over the web platform.

| Metric | Result |
|--------|--------|
| **Lighthouse Performance** | 95+ |
| **External Dependencies** | 0 |
| **CSS Framework** | None — pure CSS3 |
| **JS Libraries** | None — vanilla ES6+ |
| **Responsive Breakpoints** | 3 (1024px, 768px, 480px) |
| **Custom Animations** | 8+ distinct micro-interactions |

---

## ✨ Features

### 🖼️ Sections
- **Hero** — Full-viewport landing with parallax food imagery, restaurant tagline, and scroll indicator animation
- **Our Story** — Two-column layout with overlapping images, chef profile, and animated stat counters (15,000+ Guests, 85+ Dishes, 12+ Awards)
- **Menu** — Tabbed menu system (Starters, Main Course, Desserts, Drinks) with item descriptions, prices in ₹, and tags (vegetarian, chef's pick, signature)
- **Gallery** — CSS Grid photo gallery with hover overlays showing category and caption
- **Testimonials** — Auto-sliding carousel (5s interval) with dot navigation and customer reviews
- **Reservation** — Full booking form with guest count, date/time selection, special occasions, and simulated confirmation
- **Contact** — Operating hours, location, phone, and email

### 🎭 Interactions & Animations
- **Custom Cursor** — Dual-element (dot + trailing ring) using `requestAnimationFrame` for 60fps smoothness, hidden on mobile
- **Page Loader** — Animated brand name with line animations, fades out on load
- **Parallax Scroll** — Hero image shifts on scroll via `translateY` at `scrollY * 0.15`
- **Counter Animation** — Numbers count up with cubic easing `1 - Math.pow(1-t, 3)` triggered by IntersectionObserver
- **Menu Tab Transitions** — Opacity fade when switching food categories
- **Gallery Hover** — Image zoom + overlay reveal with captions
- **Scroll Animations** — Elements fade up and slide in as they enter the viewport
- **Glass-morphism Navbar** — Frosted-glass effect with `backdrop-filter: blur(20px)` on scroll

### 🎨 Design System
- **Color Palette** — Near-black backgrounds (`#0a0a0a`, `#111`) with warm gold accent (`#c8a97e`)
- **Typography** — Playfair Display (headings), Inter (body), Cormorant Garamond (quotes/accents)
- **Responsive** — 3 breakpoints with full-screen mobile menu overlay
- **No Dependencies** — Zero external CSS/JS libraries

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Structure | HTML5 (semantic elements) |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, Animations, `backdrop-filter`) |
| Logic | Vanilla JavaScript (ES6+, IntersectionObserver, `requestAnimationFrame`) |
| Typography | Google Fonts — Playfair Display, Inter, Cormorant Garamond |
| Icons | Hand-crafted inline SVGs |
| Images | Custom food/restaurant photography (PNG) |

---

## 🔧 Key Technical Details

```
Custom Cursor     → requestAnimationFrame + mouse-position lerp for smooth trailing
Parallax          → window.scrollY * 0.15 applied as translateY on hero image
Counter Animation → Cubic easing: 1 - Math.pow(1-t, 3) via IntersectionObserver
Testimonial Slider→ Auto-advances every 5s with prev/next + dot indicators
Form Simulation   → Submit shows "Confirming..." state, then success overlay
CSS Transitions   → Custom cubic-bezier easing on all interactive elements
No JS Libraries   → All animations and interactions are hand-coded
```

---

## 🚀 Run Locally

No build tools or dependencies — just open the HTML file.

```bash
# Clone the repository
git clone https://github.com/latwadek-debug/ember-and-oak.git

cd ember-and-oak

# Open in browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux

# Or use a local server for best results
npx serve .
```

---

## 📁 Project Structure

```
ember-and-oak/
├── index.html      # Complete restaurant website (single page)
├── script.js       # Custom cursor, parallax, counters, slider, form handling
├── style.css       # Dark luxury theme, animations, responsive layout
├── images/         # Restaurant and food photography
│   ├── hero-food.png
│   ├── restaurant-interior.png
│   ├── dish-pasta.png
│   ├── dish-steak.png
│   ├── dish-dessert.png
│   └── chef.png
└── README.md
```

---

## 👤 Author

**Kiran Latwade** — Frontend-Focused Full Stack Developer

- 🌐 [Portfolio](https://aimpoint-portfolio.netlify.app)
- 💼 [LinkedIn](https://www.linkedin.com/in/kiran-latwade-aimpoint)
- 📧 [latwadek@gmail.com](mailto:latwadek@gmail.com)
- 🐙 [GitHub](https://github.com/latwadek-debug)

---

<div align="center">
  <sub>Designed and built with ☕ by <b>Kiran Latwade</b> — 95+ Lighthouse score, zero dependencies.</sub>
</div>
