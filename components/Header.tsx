'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="shell topbar__inner">
        <Link className="brand" href="/">
          <span className="brand__dot"></span>
          LexiHub
        </Link>
        <nav
          className="nav"
          id="primary-nav"
          aria-label="Primary"
          style={{ display: mobileMenuOpen ? 'flex' : undefined }}
        >
          <Link href="/#features">Features</Link>
          <Link href="/lexybrain">LexyBrain™</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="actions">
          <a className="btn btn--ghost" href="https://app.lexyhub.com/login">
            Log in
          </a>
          <a className="btn btn--primary" href="https://app.lexyhub.com/signup">
            Start free
          </a>
        </div>
        <button
          className="btn-mobile-nav"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="primary-nav"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      <style jsx>{`
        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(255, 255, 255, 0.85);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .topbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          padding: 0.85rem 1.5rem;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.01em;
        }

        .brand__dot {
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 999px;
          background: var(--ink);
        }

        .nav {
          display: flex;
          gap: 1rem;
          color: var(--ink-soft);
          font-size: 0.9rem;
        }

        .nav a {
          padding-bottom: 0.3rem;
          border-bottom: 2px solid transparent;
        }

        .nav a:hover,
        .nav a:focus-visible {
          border-bottom-color: var(--ink);
          color: var(--ink);
        }

        .actions {
          display: flex;
          gap: 0.4rem;
          margin-left: auto;
        }

        .btn-mobile-nav {
          display: none;
          background: transparent;
          border: 0;
          padding: 0.25rem;
          cursor: pointer;
          z-index: 1001;
        }

        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--ink);
          margin: 5px 0;
          transition: var(--transition);
        }

        @media (max-width: 768px) {
          .btn-mobile-nav {
            display: block;
            margin-left: 0.5rem;
          }

          .actions {
            margin-left: auto;
          }

          .nav {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            z-index: 1000;
          }

          .nav a {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--ink);
          }
        }

        @media (max-width: 480px) {
          .actions .btn--ghost {
            display: none;
          }
          .topbar__inner {
            padding: 0.85rem 1rem;
          }
        }
      `}</style>
    </header>
  );
}
