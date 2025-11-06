'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  // Pricing data
  const pricing = {
    basic: {
      monthly: 6.99,
      annual: 55, // ~$4.58/month (saves ~34%)
      foundersAnnual: 39, // ~$3.25/month (saves 53% vs monthly, 29% vs annual)
    },
    pro: {
      monthly: 12.99,
      annual: 125, // ~$10.42/month (saves ~20%)
      foundersAnnual: 99, // ~$8.25/month (saves 36% vs monthly, 21% vs annual)
    }
  };

  // Add this to your landing page pricing buttons
  async function handleCheckout(planCode: 'basic' | 'pro', billingCycle: 'monthly' | 'annual') {
    try {
      const response = await fetch('https://app.lexyhub.com/api/billing/checkout/public', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planCode,      // 'basic', 'pro', or 'growth'
          billingCycle   // 'monthly' or 'annual'
        })
      });

      const data = await response.json();

      // Redirect to Stripe Checkout
      window.location.href = data.url;

    } catch (error) {
      console.error('Checkout failed:', error);
    }
  }

  const handleUpgrade = (tier: 'basic' | 'pro') => {
    handleCheckout(tier, billingPeriod);
  };

  return (
    <section className="section section--pricing" id="pricing">
      <div className="shell section__head">
        <h2>Start Free. Scale When Ready.</h2>
        <p>
          No credit card required. Cancel anytime. Plans start at just ${pricing.basic.monthly}/month.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="shell billing-toggle-wrapper">
        <div className="billing-toggle">
          <button
            className={billingPeriod === 'monthly' ? 'active' : ''}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly
          </button>
          <button
            className={billingPeriod === 'annual' ? 'active' : ''}
            onClick={() => setBillingPeriod('annual')}
          >
            Annual
            <span className="save-badge">Save up to 53%</span>
          </button>
        </div>
      </div>

      {/* Founders' Pricing Banner */}
      {billingPeriod === 'annual' && (
        <div className="shell founders-banner">
          <div className="founders-banner__content">
            <div className="founders-banner__badge">⚡ FOUNDERS&apos; PRICING</div>
            <h3 className="founders-banner__title">Limited-Time Launch Offer</h3>
            <p className="founders-banner__desc">
              Lock in special pricing for being an early adopter. <strong>First 60 days only.</strong>
            </p>
            <div className="founders-banner__pricing">
              <div className="founders-price-item">
                <span className="tier-name">Basic</span>
                <span className="price-strike">${pricing.basic.annual}/yr</span>
                <span className="price-founders">${pricing.basic.foundersAnnual}/yr</span>
              </div>
              <div className="founders-price-item">
                <span className="tier-name">Pro</span>
                <span className="price-strike">${pricing.pro.annual}/yr</span>
                <span className="price-founders">${pricing.pro.foundersAnnual}/yr</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chrome Extension Pro Trial Callout */}
      <div className="shell extension-bonus">
        <div className="extension-bonus__content">
          <span className="extension-bonus__icon">⚡</span>
          <div className="extension-bonus__text">
            <strong>Sign up via Chrome Extension and get a FREE 14-day Pro trial!</strong> Experience unlimited searches, AI opportunities, and all Pro features.
          </div>
          <a
            className="extension-bonus__cta"
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Extension →
          </a>
        </div>
      </div>

      <div className="shell pricing">
        {/* Free Tier */}
        <article className="plan">
          <p className="plan__badge">Try before you buy</p>
          <h3>Free Forever</h3>
          <p className="plan__price">$0</p>
          <p className="plan__desc">
            Perfect for validating ideas and exploring opportunities.
          </p>
          <ul className="plan__list">
            <li>10 keyword searches/month</li>
            <li>1 active niche tracking</li>
            <li>2 AI opportunities/month</li>
            <li>Basic SERP tracking</li>
            <li>Limited Market Twin simulations</li>
            <li>Seasonal calendar access</li>
            <li>Community support</li>
            <li className="plan__bonus">+ 14-day Pro trial via extension signup!</li>
          </ul>
          <a
            className="btn btn--ghost btn--full"
            href="https://app.lexyhub.com/signup"
          >
            Start Free
          </a>
          <p className="plan__note">No credit card. No commitment.</p>
        </article>

        {/* Basic Tier */}
        <article className="plan">
          <p className="plan__badge">Most popular</p>
          <h3>Basic</h3>
          <p className="plan__price">
            ${billingPeriod === 'monthly' ? pricing.basic.monthly : (pricing.basic.foundersAnnual / 12).toFixed(2)}
            <span className="plan__period">/month</span>
          </p>
          {billingPeriod === 'annual' && (
            <>
              <p className="plan__billed plan__billed--founders">
                <span className="price-strike-inline">${pricing.basic.annual}/year</span>
                {' '}
                <span className="price-founders-inline">${pricing.basic.foundersAnnual}/year</span>
              </p>
              <p className="plan__founders-badge">🎯 Founders&apos; Price</p>
            </>
          )}
          <p className="plan__desc">
            For growing sellers who need regular market intelligence.
          </p>
          <ul className="plan__list">
            <li><strong>100 keyword searches/month</strong></li>
            <li>10 active niches</li>
            <li><strong>100 AI opportunities/month</strong></li>
            <li>100 tag optimizer runs/month</li>
            <li>Standard SERP tracking</li>
            <li>Full Market Twin access</li>
            <li>All core features</li>
            <li>Email support</li>
            <li className="plan__bonus">+ 14-day Pro trial via extension signup!</li>
          </ul>
          <button
            className="btn btn--ghost btn--full"
            onClick={() => handleUpgrade('basic')}
          >
            Choose Basic Plan
          </button>
          <p className="plan__note">Less than two coffees per month</p>
        </article>

        {/* Pro Tier */}
        <article className="plan plan--highlight">
          <p className="plan__badge">Best value</p>
          <h3>Pro</h3>
          <p className="plan__price">
            ${billingPeriod === 'monthly' ? pricing.pro.monthly : (pricing.pro.foundersAnnual / 12).toFixed(2)}
            <span className="plan__period">/month</span>
          </p>
          {billingPeriod === 'annual' && (
            <>
              <p className="plan__billed plan__billed--founders">
                <span className="price-strike-inline">${pricing.pro.annual}/year</span>
                {' '}
                <span className="price-founders-inline">${pricing.pro.foundersAnnual}/year</span>
              </p>
              <p className="plan__founders-badge">🎯 Founders&apos; Price</p>
            </>
          )}
          <p className="plan__desc">
            For serious sellers and teams managing large catalogs.
          </p>
          <ul className="plan__list">
            <li><strong>UNLIMITED</strong> keyword searches</li>
            <li><strong>UNLIMITED</strong> active niches</li>
            <li><strong>UNLIMITED</strong> AI opportunities</li>
            <li><strong>UNLIMITED</strong> tag optimizer runs</li>
            <li><strong>UNLIMITED</strong> watchlists</li>
            <li><strong>UNLIMITED</strong> Market Twin scenarios</li>
            <li>Multi-user team access</li>
            <li>Priority support</li>
            <li>API access &amp; CSV exports</li>
            <li>Affiliate program access</li>
            <li className="plan__bonus">+ Try Pro free for 14 days via extension!</li>
          </ul>
          <button
            className="btn btn--primary btn--full"
            onClick={() => handleUpgrade('pro')}
          >
            Choose Pro Plan
          </button>
          <p className="plan__note">Everything unlimited. Maximum value.</p>
        </article>
      </div>

      {/* Feature Comparison Table */}
      <div className="shell pricing-comparison">
        <h3 className="pricing-comparison__title">Compare Plans</h3>
        <div className="comparison-grid">
          <div className="comparison-header">
            <div className="comparison-cell"></div>
            <div className="comparison-cell comparison-cell--plan">Free</div>
            <div className="comparison-cell comparison-cell--plan">Basic</div>
            <div className="comparison-cell comparison-cell--plan comparison-cell--highlight">Pro</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Keyword Searches</strong></div>
            <div className="comparison-cell">10/month</div>
            <div className="comparison-cell">100/month</div>
            <div className="comparison-cell comparison-cell--highlight">Unlimited</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>AI Opportunities</strong></div>
            <div className="comparison-cell">2/month</div>
            <div className="comparison-cell">100/month</div>
            <div className="comparison-cell comparison-cell--highlight">Unlimited</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Active Niches</strong></div>
            <div className="comparison-cell">1</div>
            <div className="comparison-cell">10</div>
            <div className="comparison-cell comparison-cell--highlight">Unlimited</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Market Twin Simulator</strong></div>
            <div className="comparison-cell">Limited</div>
            <div className="comparison-cell">Full access</div>
            <div className="comparison-cell comparison-cell--highlight">Unlimited</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Listing Intelligence</strong></div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">100/month</div>
            <div className="comparison-cell comparison-cell--highlight">Unlimited</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Multi-user Teams</strong></div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell comparison-cell--highlight">✓</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>API Access</strong></div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell comparison-cell--highlight">✓</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Priority Support</strong></div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">Email</div>
            <div className="comparison-cell comparison-cell--highlight">Priority</div>
          </div>

          <div className="comparison-row comparison-row--highlight">
            <div className="comparison-cell"><strong>Chrome Extension Bonus</strong></div>
            <div className="comparison-cell">14-day Pro trial</div>
            <div className="comparison-cell">14-day Pro trial</div>
            <div className="comparison-cell comparison-cell--highlight">14-day Pro trial</div>
          </div>
        </div>
      </div>

      <div className="shell pricing-footer">
        <div className="pricing-footer__value">
          <p className="pricing-footer__headline">
            <strong>Affordable pricing. Incredible value.</strong>
          </p>
          <p>
            Replace 3-4 expensive tools ($100-200/month) with one affordable platform.
            <br />
            <strong>Save over $1,000 per year</strong> while getting more features.
          </p>
        </div>
        <div className="pricing-footer__features">
          <p>
            ✓ All plans include Chrome extension access
            <br />
            ✓ Cancel anytime • Upgrade/downgrade instantly
            <br />
            ✓ 14-day money-back guarantee on paid plans
            <br />
            ✓ No hidden fees • Transparent pricing
          </p>
        </div>
      </div>

      <style jsx>{`
        .billing-toggle-wrapper {
          display: flex;
          justify-content: center;
          margin: 2rem 0 1.5rem;
        }

        .billing-toggle {
          display: inline-flex;
          gap: 0.5rem;
          padding: 0.375rem;
          background: var(--bg-soft);
          border-radius: 0.75rem;
          border: 1px solid var(--border);
        }

        .billing-toggle button {
          position: relative;
          padding: 0.625rem 1.5rem;
          border: 0;
          background: transparent;
          border-radius: 0.5rem;
          font-weight: 600;
          color: var(--ink-soft);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .billing-toggle button:hover {
          color: var(--ink);
        }

        .billing-toggle button.active {
          background: white;
          color: var(--ink);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .save-badge {
          display: inline-block;
          padding: 0.125rem 0.5rem;
          background: var(--accent);
          color: white;
          font-size: 0.75rem;
          border-radius: 0.375rem;
          font-weight: 700;
        }

        .founders-banner {
          margin: 1.5rem auto 2rem;
          max-width: 900px;
        }

        .founders-banner__content {
          padding: 2rem 2.5rem;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          border-radius: 1rem;
          box-shadow: 0 8px 24px rgba(245, 87, 108, 0.4);
          text-align: center;
        }

        .founders-banner__badge {
          display: inline-block;
          padding: 0.375rem 1rem;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border-radius: 2rem;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .founders-banner__title {
          font-size: 2rem;
          margin: 0 0 0.75rem;
          font-weight: 800;
        }

        .founders-banner__desc {
          font-size: 1.1rem;
          margin: 0 0 1.5rem;
          opacity: 0.95;
        }

        .founders-banner__pricing {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .founders-price-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.25rem 2rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border-radius: 0.75rem;
          min-width: 180px;
        }

        .tier-name {
          font-weight: 700;
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .price-strike {
          text-decoration: line-through;
          opacity: 0.7;
          font-size: 1rem;
        }

        .price-founders {
          font-size: 2rem;
          font-weight: 800;
        }

        .price-strike-inline {
          text-decoration: line-through;
          opacity: 0.6;
          font-size: 0.875rem;
        }

        .price-founders-inline {
          font-weight: 700;
          color: var(--accent);
          font-size: 1.1rem;
        }

        .plan__billed--founders {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          justify-content: center;
        }

        .plan__founders-badge {
          margin: -0.25rem 0 0.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent);
        }

        .extension-bonus {
          margin: 0 auto 2rem;
          max-width: 800px;
        }

        .extension-bonus__content {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 1rem;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .extension-bonus__cta {
          padding: 0.75rem 1.5rem;
          background: white;
          color: #667eea;
          border-radius: 0.5rem;
          font-weight: 700;
          white-space: nowrap;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .extension-bonus__cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .extension-bonus__icon {
          font-size: 2rem;
          line-height: 1;
        }

        .extension-bonus__text {
          font-size: 1rem;
          line-height: 1.5;
        }

        .extension-bonus__text strong {
          font-weight: 700;
        }

        .plan__billed {
          margin: -0.5rem 0 0.75rem;
          font-size: 0.9rem;
          color: var(--ink-soft);
        }

        .plan__bonus {
          color: var(--accent);
          font-weight: 600;
        }

        .pricing-comparison {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
        }

        .pricing-comparison__title {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1.75rem;
          color: var(--ink);
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 0;
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          overflow: hidden;
          background: white;
        }

        .comparison-header {
          display: contents;
        }

        .comparison-header .comparison-cell {
          background: var(--bg-soft);
          font-weight: 700;
          padding: 1rem;
          border-bottom: 2px solid var(--border);
        }

        .comparison-cell--plan {
          text-align: center;
          font-size: 1.1rem;
        }

        .comparison-row {
          display: contents;
        }

        .comparison-row .comparison-cell {
          padding: 1rem;
          border-bottom: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .comparison-row .comparison-cell:first-child {
          justify-content: flex-start;
          text-align: left;
        }

        .comparison-row--highlight .comparison-cell {
          background: #f0f4ff;
          font-weight: 600;
        }

        .comparison-cell--highlight {
          background: #fafbff;
        }

        .pricing-footer {
          margin-top: 3rem;
          padding-top: 2rem;
          text-align: center;
        }

        .pricing-footer__value {
          margin-bottom: 1.5rem;
        }

        .pricing-footer__headline {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--ink);
        }

        .pricing-footer__features {
          padding: 1.5rem;
          background: var(--bg-soft);
          border-radius: 0.75rem;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .comparison-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
            font-size: 0.875rem;
          }

          .comparison-cell {
            padding: 0.75rem 0.5rem;
          }

          .extension-bonus__content {
            flex-direction: column;
            text-align: center;
            padding: 1rem;
          }

          .extension-bonus__cta {
            width: 100%;
            text-align: center;
          }

          .billing-toggle button {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }

          .founders-banner__content {
            padding: 1.5rem 1.25rem;
          }

          .founders-banner__title {
            font-size: 1.5rem;
          }

          .founders-banner__desc {
            font-size: 1rem;
          }

          .founders-price-item {
            padding: 1rem 1.5rem;
            min-width: 150px;
          }
        }

        @media (max-width: 480px) {
          .comparison-grid {
            display: block;
          }

          .comparison-header,
          .comparison-row {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
          }

          .comparison-header .comparison-cell:first-child,
          .comparison-row .comparison-cell:first-child {
            grid-column: 1 / -1;
            background: var(--bg-soft);
            font-weight: 700;
          }
        }
      `}</style>
    </section>
  );
}
