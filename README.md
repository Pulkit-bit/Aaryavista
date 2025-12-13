# Aaryavista Landing Page

A modern, professional landing page for Aaryavista PR Agency built with React, TypeScript, and Vite.

## Features

- ✨ Modern, professional design with animated gradient backgrounds
- 📱 Fully responsive (mobile and desktop optimized)
- ♿ Accessible with semantic HTML and ARIA labels
- 🎨 Smooth scroll animations and transitions
- ⚡ Optimized performance with Vite
- 🎯 SEO-friendly with meta tags

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **Intersection Observer API** - Scroll animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero/           # Hero section with tagline
│   ├── Services/       # Services grid and cards
│   ├── WhyUs/          # Why choose Arya Vista section
│   ├── Contact/        # Contact information
│   └── Layout/         # Navigation component
├── hooks/
│   └── useScrollAnimation.ts  # Custom hook for scroll animations
├── data/
│   ├── services.ts     # Services data
│   └── contact.ts      # Contact information
├── types/
│   └── index.ts        # TypeScript interfaces
├── App.tsx             # Main app component
├── App.css             # Global styles and CSS variables
└── main.tsx            # Entry point
```

## Sections

1. **Hero** - Eye-catching introduction with animated gradient background
2. **Services** - Showcase of all 9 PR services in a responsive grid
3. **Why Us** - Four key differentiators with icons
4. **Contact** - Contact information and working contact form with email integration

## Customization

### Colors

Edit CSS custom properties in `src/App.css`:

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #7c3aed;
  --color-accent: #f59e0b;
  /* ... more colors */
}
```

### Content

- **Services**: Edit `src/data/services.ts`
- **Contact Info**: Edit `src/data/contact.ts`
- **Hero Text**: Edit `src/components/Hero/Hero.tsx`
- **Why Us**: Edit `src/components/WhyUs/WhyUs.tsx`

### Email Configuration

The contact form uses EmailJS for sending emails. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/components/Contact/Contact.tsx`:
   - Replace `serviceId`, `templateId`, and `publicKey` with your EmailJS credentials
   - Uncomment the actual EmailJS call and remove the simulation

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Skip-to-content link for keyboard users
- Minimum 44x44px touch targets on mobile
- Respects `prefers-reduced-motion` preference
- Keyboard navigation support

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari
- Chrome Mobile

## Performance

- Code splitting for optimal bundle size
- CSS Modules for scoped styles
- Optimized animations using CSS transforms
- Lazy loading ready for images
- Minified production build

## License

All rights reserved © 2025 Aaryavista

## Contact

For questions or support, please contact Aaryavista at aaryavista@gmail.com or +91 6386615199.
