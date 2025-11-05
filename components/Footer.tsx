'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState('2024');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div>
          <p className="footer__brand">LexyHub</p>
          <p className="footer__text">Unified marketplace signals for sellers.</p>
        </div>
        <div className="footer__col">
          <p className="footer__title">Company</p>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://lexyhub.com/docs">Docs</a>
        </div>
        <div className="footer__col">
          <p className="footer__title">Legal</p>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
        <div className="footer__col">
          <p className="footer__title">Account</p>
          <a href="https://app.lexyhub.com/login">Log in</a>
          <a href="https://app.lexyhub.com/signup">Create account</a>
        </div>
      </div>
      <p className="footer__legal">© {year} LexyHub. All rights reserved.</p>
      <style jsx>{`
        .footer {
          background: #000000;
          color: rgba(255, 255, 255, 0.7);
          padding: 2.4rem 0 2.5rem;
          margin-top: 0;
          border-top: 2px solid #000000;
        }

        .footer__grid {
          display: grid;
          gap: 1.3rem;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          margin-bottom: 1.4rem;
        }

        .footer__brand {
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.3rem;
        }

        .footer__text {
          font-size: 0.85rem;
          margin-top: 0;
          max-width: 200px;
        }

        .footer__title {
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.3rem;
          font-size: 0.9rem;
        }

        .footer__col :global(a) {
          display: block;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
        }

        .footer__col :global(a:hover) {
          color: #fff;
        }

        .footer__legal {
          font-size: 0.7rem;
          text-align: center;
          margin: 0;
          padding: 0 1.5rem;
        }

        @media (max-width: 900px) {
          .footer__grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
}
