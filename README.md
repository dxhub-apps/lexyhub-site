# LexyHub Corporate Website

A stunning corporate website for LexyHub, built with Next.js 15, TypeScript, and modern web technologies.

## Overview

LexyHub is a marketplace signal platform that unifies real-time search data from Amazon, Etsy, and Google Trends into one clean, actionable feed. This website serves as the primary marketing and information portal for the platform.

## Features

- **Modern Tech Stack**: Built with Next.js 15 App Router, TypeScript, and React 19
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Comprehensive metadata and semantic HTML structure
- **Static Generation**: All pages pre-rendered for optimal performance
- **Stunning Design**: Clean, professional, corporate design with smooth interactions
- **Complete Pages**:
  - Homepage with hero section, features, pricing, and workflow
  - About page with company story and team information
  - Contact page with multiple contact methods
  - Privacy Policy with comprehensive data protection information
  - Terms of Service with complete legal terms

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd lexyhub-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Chrome extension integration

The marketing site now exposes a typed configuration endpoint that the LexyHub Chrome
extension consumes to learn how to authenticate, where to route API calls, and which
brand assets to render. The endpoint lives at [`/api/ext/config`](./app/api/ext/config/route.ts)
and responds with JSON so the extension can display the LexyHub logo, determine where to
send users to log in, and understand which features (watchlist sync, keyword highlighting,
etc.) are available.

Because this configuration needs to work across local development, staging, and
production, it is fully driven by environment variables. Update the following variables
in your `.env.local` (or hosting provider) to customize the Chrome extension behavior:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute base URL of the marketing site that hosts the assets | `http://localhost:3000` |
| `NEXT_PUBLIC_EXTENSION_APP_URL` | Base URL of the authenticated LexyHub app | Marketing site origin |
| `NEXT_PUBLIC_EXTENSION_API_BASE_URL` | API base that the extension should call | `${NEXT_PUBLIC_EXTENSION_APP_URL}/api` |
| `NEXT_PUBLIC_EXTENSION_LOGIN_URL` | Sign-in URL surfaced in the extension | `${NEXT_PUBLIC_EXTENSION_APP_URL}/login` |
| `NEXT_PUBLIC_EXTENSION_SIGNUP_URL` | Sign-up URL for new users | `${NEXT_PUBLIC_EXTENSION_APP_URL}/signup` |
| `NEXT_PUBLIC_EXTENSION_AUTH_STATUS_URL` | Token validation endpoint | `${NEXT_PUBLIC_EXTENSION_API_BASE_URL}/auth/status` |
| `NEXT_PUBLIC_EXTENSION_LOGO_PATH` | Path or URL for the extension badge logo | `/assets/Lexyhub_logo_dark.svg` |
| `NEXT_PUBLIC_EXTENSION_WORDMARK_PATH` | Path or URL for the wordmark used on bright backgrounds | `/assets/Lexyhub_logo_white.svg` |
| `NEXT_PUBLIC_EXTENSION_AUTH_MODE` | Authentication mode label (`magic_link`, `oauth`, or `api_key`) | `magic_link` |
| `NEXT_PUBLIC_EXTENSION_MIN_VERSION` | Minimum extension version allowed to authenticate | `1.0.0` |
| `NEXT_PUBLIC_EXTENSION_REFRESH_INTERVAL` | Seconds between token refresh checks | `1800` |
| `NEXT_PUBLIC_EXTENSION_TRIAL_DAYS` | Trial duration surfaced inside the extension | `14` |
| `NEXT_PUBLIC_EXTENSION_ENABLE_AI` | Toggle for AI briefing UI | `true` |
| `NEXT_PUBLIC_EXTENSION_ACCENT_COLOR` | Accent color used in the extension shell | `#E4B306` |
| `NEXT_PUBLIC_EXTENSION_BG_COLOR` | Background color for extension fallback screens | `#050713` |
| `NEXT_PUBLIC_EXTENSION_ENFORCE_LOGIN` | Set to `false` to allow unauthenticated read-only mode | `true` |

The configuration helper that powers the endpoint lives in [`lib/ext/config.ts`](./lib/ext/config.ts).
Updating that module is the recommended way to extend the data that the extension can read.

## Project Structure

```
lexyhub-site/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy Policy page
│   ├── terms/             # Terms of Service page
│   ├── layout.tsx         # Root layout with header & footer
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Header.tsx         # Site header with navigation
│   └── Footer.tsx         # Site footer
├── styles/               # Global styles
│   └── globals.css       # Main stylesheet
├── public/               # Static assets
└── package.json          # Project dependencies
```

## Technology Stack

- **Framework**: Next.js 15.5.6
- **Language**: TypeScript 5
- **UI Library**: React 19
- **Styling**: CSS (Custom styles)
- **Deployment**: Optimized for Vercel, Netlify, or any Node.js hosting

## Key Pages

### Homepage (/)
- Friendly hero with instant keyword preview
- "How it helps" benefit cards for quick wins
- Product dashboard preview with watchlist example
- Social proof quotes and marketplace logos
- Chrome extension banner, pricing plans, and FAQ
- Final trust-focused call to action

### About (/about)
- Company origin story
- Mission and values
- Team member profiles
- Seller-first approach

### Contact (/contact)
- Multiple contact methods
- Demo requests
- Partnership inquiries
- Support information

### Legal Pages
- **Privacy Policy (/privacy)**: Comprehensive data protection and privacy practices
- **Terms of Service (/terms)**: Complete terms and conditions for service usage

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

This project follows Next.js best practices and conventions:
- TypeScript for type safety
- Server Components by default
- Client Components only when needed (marked with 'use client')
- Semantic HTML structure
- Accessible navigation and interactions

## Performance

The website is optimized for performance with:
- Static page generation for all routes
- Optimized images and assets
- Minimal JavaScript payload
- Fast page transitions
- SEO-friendly markup

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2025 LexyHub. All rights reserved.

## Contact

For questions or support regarding this website:
- Email: hello@lexyhub.com
- Address: 2100 Market Street, Suite 502, San Francisco, CA 94114
- Phone: +1 (415) 555-0123

## Deployment

This website can be easily deployed to:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Other Platforms
Build the project and deploy the `.next` folder to any Node.js hosting platform.

---

Built with ❤️ by the LexyHub team
