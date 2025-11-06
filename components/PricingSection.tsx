'use client';

export default function PricingSection() {
  // Pricing data
  const pricing = {
    basic: {
      monthly: 6.99,
      annual: 69.90,
    },
    pro: {
      monthly: 12.99,
      annual: 129.90,
    }
  };

  const handleCheckout = async (planCode: 'basic' | 'pro', billingCycle: 'monthly' | 'annual') => {
    try {
      const response = await fetch('https://app.lexyhub.com/api/billing/checkout/public', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planCode, billingCycle })
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe
      } else {
        alert('Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <section className="section section--pricing" id="pricing">
      <div className="shell section__head">
        <h2>Start Free. Scale When Ready.</h2>
        <p>
          No credit card required. Cancel anytime. Plans start at just ${pricing.basic.monthly}/month.
        </p>
      </div>

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
            <li>10 AI opportunities/month</li>
            <li>50 MB storage</li>
            <li>Public visibility</li>
            <li>Basic SERP tracking</li>
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
            ${pricing.basic.monthly}
            <span className="plan__period">/month</span>
          </p>
          <p className="plan__desc">
            For growing sellers who need regular market intelligence.
          </p>
          <ul className="plan__list">
            <li><strong>100 keyword searches/month</strong></li>
            <li>10 active niches</li>
            <li><strong>100 AI opportunities/month</strong></li>
            <li>500 MB storage</li>
            <li>Public visibility</li>
            <li>Standard SERP tracking</li>
            <li>Full Market Twin access</li>
            <li>Email support</li>
            <li className="plan__bonus">+ 14-day Pro trial via extension signup!</li>
          </ul>
          <button
            className="btn btn--ghost btn--full"
            onClick={() => handleCheckout('basic', 'monthly')}
          >
            Choose Basic Plan
          </button>
          <button
            className="btn-link btn-link--annual"
            onClick={() => handleCheckout('basic', 'annual')}
          >
            Get Annual Discount (${pricing.basic.annual}/year - Save 17%)
          </button>
          <p className="plan__note">Less than two coffees per month</p>
        </article>

        {/* Pro Tier */}
        <article className="plan plan--highlight">
          <p className="plan__badge">Best value</p>
          <h3>Pro</h3>
          <p className="plan__price">
            ${pricing.pro.monthly}
            <span className="plan__period">/month</span>
          </p>
          <p className="plan__desc">
            For serious sellers and teams managing large catalogs.
          </p>
          <ul className="plan__list">
            <li><strong>500 keyword searches/month</strong></li>
            <li><strong>50 active niches</strong></li>
            <li><strong>500 AI opportunities/month</strong></li>
            <li>5,000 MB storage</li>
            <li>Public visibility</li>
            <li>Advanced SERP tracking</li>
            <li>Full Market Twin access</li>
            <li>Priority support</li>
            <li className="plan__bonus">+ Try Pro free for 14 days via extension!</li>
          </ul>
          <button
            className="btn btn--primary btn--full"
            onClick={() => handleCheckout('pro', 'monthly')}
          >
            Choose Pro Plan
          </button>
          <button
            className="btn-link btn-link--annual"
            onClick={() => handleCheckout('pro', 'annual')}
          >
            Get Annual Discount (${pricing.pro.annual}/year - Save 17%)
          </button>
          <p className="plan__note">Perfect for growing businesses</p>
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
            <div className="comparison-cell comparison-cell--plan">Pro</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Keyword Searches</strong></div>
            <div className="comparison-cell">10/month</div>
            <div className="comparison-cell">100/month</div>
            <div className="comparison-cell">500/month</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>AI Opportunities</strong></div>
            <div className="comparison-cell">10/month</div>
            <div className="comparison-cell">100/month</div>
            <div className="comparison-cell">500/month</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Active Niches</strong></div>
            <div className="comparison-cell">1</div>
            <div className="comparison-cell">10</div>
            <div className="comparison-cell">50</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Storage</strong></div>
            <div className="comparison-cell">50 MB</div>
            <div className="comparison-cell">500 MB</div>
            <div className="comparison-cell">5,000 MB</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Visibility</strong></div>
            <div className="comparison-cell">Public</div>
            <div className="comparison-cell">Public</div>
            <div className="comparison-cell">Public</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Multi-user Teams</strong></div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>API Access</strong></div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
            <div className="comparison-cell">—</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell"><strong>Priority Support</strong></div>
            <div className="comparison-cell">Community</div>
            <div className="comparison-cell">Email</div>
            <div className="comparison-cell">Priority</div>
          </div>

          <div className="comparison-row comparison-row--highlight">
            <div className="comparison-cell"><strong>Chrome Extension Bonus</strong></div>
            <div className="comparison-cell">14-day Pro trial</div>
            <div className="comparison-cell">14-day Pro trial</div>
            <div className="comparison-cell">14-day Pro trial</div>
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
        .btn-link {
          background: none;
          border: none;
          color: var(--accent);
          text-decoration: underline;
          cursor: pointer;
          font-size: 0.875rem;
          padding: 0.5rem 0;
          margin-top: 0.5rem;
          width: 100%;
          text-align: center;
          transition: color 0.2s ease;
        }

        .btn-link:hover {
          color: var(--accent-dark);
        }

        .btn-link--annual {
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
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
