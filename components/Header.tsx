'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-bar">
      <div className="shell header-bar__inner">
        <Link className="header-bar__brand" href="/">
          <span className="header-bar__logo" aria-hidden="true">
            <span className="header-bar__logo-dot" />
          </span>
          <span className="header-bar__name">LexyHub</span>
        </Link>
        <nav
          className="header-bar__nav"
          aria-label="Primary"
          id="primary-navigation"
          style={{ display: isOpen ? 'flex' : undefined }}
          onClick={() => setIsOpen(false)}
        >
          <Link href="/#how-it-helps">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <a href="https://app.lexyhub.com/login">Login</a>
          <a className="header-bar__nav-button" href="https://app.lexyhub.com/signup">
            Start Free
          </a>
        </nav>
        <div className="header-bar__actions">
          <a className="header-bar__link" href="https://app.lexyhub.com/login">
            Login
          </a>
          <a className="header-bar__cta" href="https://app.lexyhub.com/signup">
            Start Free
          </a>
        </div>
        <button
          className="header-bar__toggle"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <style jsx>{`
        .header-bar {
          position: sticky;
          top: 0;
          z-index: 10;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
        }

        .header-bar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem 1.5rem;
        }

        .header-bar__brand {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: #111111;
          font-weight: 700;
          font-size: 1.125rem;
        }

        .header-bar__logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 12px;
          border: 2px solid #0070f3;
        }

        .header-bar__logo-dot {
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #0070f3;
        }

        .header-bar__nav {
          display: flex;
          gap: 1.25rem;
          align-items: center;
          font-size: 0.95rem;
          color: #374151;
        }

        .header-bar__nav a {
          padding: 0.3rem 0;
          border-bottom: 2px solid transparent;
        }

        .header-bar__nav a:hover,
        .header-bar__nav a:focus-visible {
          color: #111111;
          border-bottom-color: #0070f3;
        }

        .header-bar__nav-button {
          padding: 0.6rem 1.1rem;
          border-radius: 999px;
          border: 1px solid #0070f3;
          color: #0070f3;
        }

        .header-bar__nav-button:hover,
        .header-bar__nav-button:focus-visible {
          background: rgba(0, 112, 243, 0.08);
        }

        .header-bar__actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-left: auto;
        }

        .header-bar__link {
          color: #374151;
          font-weight: 500;
        }

        .header-bar__link:hover,
        .header-bar__link:focus-visible {
          color: #0070f3;
        }

        .header-bar__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.65rem 1.3rem;
          border-radius: 999px;
          background: #0070f3;
          color: #ffffff;
          font-weight: 600;
        }

        .header-bar__cta:hover,
        .header-bar__cta:focus-visible {
          background: #005ac1;
        }

        .header-bar__toggle {
          display: none;
          flex-direction: column;
          gap: 0.35rem;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .header-bar__toggle span {
          width: 22px;
          height: 2px;
          background: #111111;
        }

        @media (max-width: 900px) {
          .header-bar__nav {
            display: none;
            position: fixed;
            inset: 0;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            background: rgba(255, 255, 255, 0.98);
            padding: 2rem;
            z-index: 20;
          }

          .header-bar__nav a {
            font-size: 1.25rem;
          }

          .header-bar__actions {
            display: none;
          }

          .header-bar__toggle {
            display: inline-flex;
          }
        }

        @media (max-width: 480px) {
          .header-bar__inner {
            padding: 0.85rem 1rem;
          }
        }
      `}</style>
    </header>
  );
}
