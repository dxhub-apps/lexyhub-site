'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <p className="site-footer__brand">LexyHub</p>
          <p className="site-footer__tagline">Tools that show you what shoppers really want.</p>
        </div>
        <div>
          <p className="site-footer__title">Product</p>
          <Link href="/#how-it-helps">Search</Link>
          <Link href="/#product">Watchlist</Link>
          <Link href="/#extension">Chrome Extension</Link>
        </div>
        <div>
          <p className="site-footer__title">Resources</p>
          <Link href="/blog">Blog</Link>
          <Link href="/blog">Guides</Link>
          <Link href="/contact">Support</Link>
        </div>
        <div>
          <p className="site-footer__title">Company</p>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
      <p className="site-footer__legal">© 2025 LexyHub Technologies. LexyHub™ and LexyBrain™ are trademarks.</p>
      <style jsx>{`
        .site-footer {
          background: #1f2933;
          color: #f9fafb;
          padding: 3rem 0 2.5rem;
          margin-top: 4rem;
        }

        .site-footer__grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          margin-bottom: 2rem;
        }

        .site-footer__brand {
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .site-footer__tagline {
          margin: 0;
          max-width: 220px;
          color: rgba(249, 250, 251, 0.75);
          font-size: 0.95rem;
        }

        .site-footer__title {
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }

        :global(.site-footer a) {
          display: block;
          margin-bottom: 0.5rem;
          color: rgba(249, 250, 251, 0.8);
          font-size: 0.95rem;
        }

        :global(.site-footer a:hover),
        :global(.site-footer a:focus-visible) {
          color: #ffffff;
        }

        .site-footer__legal {
          text-align: center;
          margin: 0;
          color: rgba(249, 250, 251, 0.65);
          font-size: 0.85rem;
        }
      `}</style>
    </footer>
  );
}
