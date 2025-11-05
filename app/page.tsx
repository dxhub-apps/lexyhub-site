import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="shell hero__wrapper">
          <div className="hero__copy">
            <p className="eyebrow">FREE FOREVER • NO CREDIT CARD REQUIRED</p>
            <h1>Keyword Intelligence. Everywhere You Work.</h1>
            <p className="lead">
              Most tools lock you inside their dashboard. LexyHub comes to you.
              Get real-time keyword data from Amazon, Etsy, and Google—right in
              your browser, across every tab, every search, every platform.
            </p>
            <div className="hero__cta-row">
              <a
                className="btn btn--primary"
                href="https://app.lexyhub.com/signup"
              >
                Start free—no card needed
              </a>
              <a
                className="btn btn--secondary"
                href="#extension"
              >
                Get Chrome Extension
              </a>
            </div>
            <p className="hero__perk-note">
              💡 <strong>Sign up through our extension</strong> and unlock
              exclusive perks + priority features
            </p>
          </div>
          <div className="hero__side">
            <div className="panel panel--primary" aria-label="Live signals">
              <div className="panel__head">
                <span className="panel__title">Live Signal Feed</span>
                <span className="tag tag--live">LIVE</span>
              </div>
              <p className="panel__desc">Cross-marketplace trends (Real-time)</p>
              <ul className="signal-list">
                <li>
                  <span>&quot;personalized gift jewelry&quot;</span>
                  <span className="trend trend--up">+142%</span>
                </li>
                <li>
                  <span>&quot;custom mom necklace&quot;</span>
                  <span className="trend trend--up">+118%</span>
                </li>
                <li>
                  <span>&quot;etsy anniversary gift&quot;</span>
                  <span className="trend trend--up">+89%</span>
                </li>
                <li>
                  <span>&quot;print on demand hoodie&quot;</span>
                  <span className="trend trend--up">+64%</span>
                </li>
              </ul>
            </div>
            <div className="panel panel--neutral">
              <p className="panel__label">Available Everywhere</p>
              <p className="panel__body">
                Amazon product pages. Etsy listings. Google searches. Wherever
                you work—LexyHub is already there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--why" id="why">
        <div className="shell section__head">
          <h2>What Others Don&apos;t Give You</h2>
          <p>We built what we wish existed when we were sellers.</p>
        </div>
        <div className="shell grid grid--3col">
          <article className="card">
            <h3>✓ No Dashboard Prison</h3>
            <p>
              Others trap you in their UI. We bring intelligence to <em>your</em>
              workspace—Amazon, Etsy, Google, everywhere.
            </p>
          </article>
          <article className="card">
            <h3>✓ Free. Actually Free.</h3>
            <p>
              No credit card. No trial countdown. No bait-and-switch. Start free,
              upgrade when <em>you</em> decide.
            </p>
          </article>
          <article className="card">
            <h3>✓ Intelligence, Not Just Data</h3>
            <p>
              Others dump spreadsheets. We score opportunities, explain trends,
              and tell you what to do next.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--extension" id="extension">
        <div className="shell extension-feature">
          <div className="extension-feature__copy">
            <h2>
              Your Keyword Sidekick.
              <br />
              Install Once. Use Everywhere.
            </h2>
            <p className="lead">
              The LexyHub Chrome Extension gives you instant keyword
              intelligence without leaving your workflow. Browse Amazon? We show
              you trend data. Research on Google? We surface demand signals.
              Check Etsy? We tell you what&apos;s heating up.
            </p>
            <div className="extension-perks">
              <h3>Extension-Only Perks:</h3>
              <ul>
                <li>Instant keyword overlays on Amazon & Etsy product pages</li>
                <li>One-click trend lookups from any Google search</li>
                <li>Priority support & early access to new features</li>
                <li>
                  <strong>Bonus:</strong> Sign up through the extension to unlock
                  exclusive insights not available in the web app
                </li>
              </ul>
            </div>
            <a
              className="btn btn--primary btn--large"
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Free Extension →
            </a>
            <p className="extension-note">
              Works with Chrome, Edge, Brave, and all Chromium browsers
            </p>
          </div>
          <div className="extension-feature__visual">
            <div className="browser-mockup">
              <div className="browser-chrome">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-address">chrome://extensions</div>
              </div>
              <div className="browser-content">
                <div className="extension-card">
                  <div className="extension-icon">LH</div>
                  <div className="extension-info">
                    <h4>LexyHub Intelligence</h4>
                    <p>Keyword data. Everywhere.</p>
                  </div>
                </div>
                <div className="extension-badge">✓ Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--pricing" id="pricing">
        <div className="shell section__head">
          <h2>Start Free. Scale When Ready.</h2>
          <p>
            No credit card to start. No surprise charges. Upgrade inside the app
            when you need more.
          </p>
        </div>
        <div className="shell pricing">
          <article className="plan plan--highlight">
            <p className="plan__badge">Recommended</p>
            <h3>Free Forever</h3>
            <p className="plan__price">$0</p>
            <p className="plan__desc">
              Everything you need to validate ideas and spot trends. Forever.
            </p>
            <ul className="plan__list">
              <li>✓ 100 keyword lookups/month</li>
              <li>✓ 3 saved watchlists</li>
              <li>✓ Chrome extension access</li>
              <li>✓ Weekly trend digest</li>
              <li>✓ Amazon, Etsy & Google data</li>
            </ul>
            <a
              className="btn btn--primary btn--full"
              href="https://app.lexyhub.com/signup"
            >
              Start Free Now
            </a>
            <p className="plan__note">No credit card. No commitment.</p>
          </article>
          <article className="plan">
            <p className="plan__badge">For power users</p>
            <h3>Pro</h3>
            <p className="plan__price">$19<span className="plan__period">/month</span></p>
            <p className="plan__desc">
              More lookups, more features. Upgrade anytime from inside the app.
            </p>
            <ul className="plan__list">
              <li>✓ <strong>Unlimited</strong> keyword lookups</li>
              <li>✓ Unlimited watchlists</li>
              <li>✓ AI-powered opportunity briefs</li>
              <li>✓ Cross-marketplace comparisons</li>
              <li>✓ CSV exports & API access</li>
              <li>✓ Priority support</li>
            </ul>
            <a
              className="btn btn--ghost btn--full"
              href="https://app.lexyhub.com/signup"
            >
              Start Free, Upgrade Later
            </a>
          </article>
          <article className="plan">
            <p className="plan__badge">For teams</p>
            <h3>Enterprise</h3>
            <p className="plan__price">Custom</p>
            <p className="plan__desc">
              Unlimited seats, dedicated support, custom integrations.
            </p>
            <ul className="plan__list">
              <li>✓ Everything in Pro</li>
              <li>✓ Team workspaces & roles</li>
              <li>✓ Dedicated account manager</li>
              <li>✓ Custom data feeds</li>
              <li>✓ SLA & priority support</li>
              <li>✓ Annual billing discount</li>
            </ul>
            <Link className="btn btn--ghost btn--full" href="/contact">
              Contact Sales
            </Link>
          </article>
        </div>
        <div className="shell pricing-footer">
          <p>
            ✓ All plans include the Chrome extension
            <br />
            ✓ Cancel anytime (but you won&apos;t need to—the free plan stays free)
          </p>
        </div>
      </section>

      <section className="section section--how">
        <div className="shell section__head">
          <h2>How It Works</h2>
          <p>From installation to insights in under 60 seconds.</p>
        </div>
        <div className="shell grid grid--4col">
          <article className="step">
            <h3>1. Install</h3>
            <p>Add the free Chrome extension. No account needed yet.</p>
          </article>
          <article className="step">
            <h3>2. Browse</h3>
            <p>Visit Amazon, Etsy, or Google like you normally do.</p>
          </article>
          <article className="step">
            <h3>3. See Insights</h3>
            <p>Instant keyword intelligence overlays on every page.</p>
          </article>
          <article className="step">
            <h3>4. Sign Up Free</h3>
            <p>
              Create your free account from the extension for bonus perks.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--cta">
        <div className="shell cta-block">
          <h2>Ready to See What&apos;s Trending?</h2>
          <p>
            Join thousands of sellers who use LexyHub to spot opportunities
            before they become saturated.
          </p>
          <div className="cta-buttons">
            <a
              className="btn btn--primary btn--large"
              href="https://app.lexyhub.com/signup"
            >
              Start Free Account
            </a>
            <a
              className="btn btn--secondary btn--large"
              href="#extension"
            >
              Get Chrome Extension
            </a>
          </div>
          <p className="cta-note">
            No credit card required. Upgrade inside the app when you&apos;re ready.
          </p>
        </div>
      </section>
    </>
  );
}
